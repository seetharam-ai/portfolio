import { thumb } from "../utils/media";
import { useEffect, useMemo, useState } from "react";
import { useLightbox } from "../components/Lightbox";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { KeyArtCard, KeyArtVariants } from "../components/KeyArtCard";
import { Storyboard } from "../components/Storyboard";
import { WorkCard } from "../components/WorkCard";
import { corrections, figmaWork, keyArt, series, type BeforeAfter } from "../data/artwork";
import { designTabs } from "../data/designWorks";
import { genAiTabs } from "../data/genAiWorks";
import { projectId, recentWorks } from "../data/recentWorks";
import { aiCreativeWorks } from "../data/site";
import { href } from "../hooks/useHashRoute";
import { toLightboxItems, type GalleryEntry, type LightboxItem } from "../types";
import { cx } from "../utils/cx";

interface Category {
  id: string;
  label: string;
  group: "Artwork" | "Generative AI" | "Case studies" | "Foundations" | "Process";
  heading: string;
  /** How the category renders; "grid" uses `entries`. */
  kind: "grid" | "projects" | "keyart" | "corrections";
  entries: GalleryEntry[];
  count: number;
}

// Counts show the curated pieces; archived extras sit behind a toggle.
const grid = (c: Omit<Category, "kind" | "count">): Category => ({
  ...c,
  kind: "grid",
  count: c.entries.filter((e) => !e.archive).length,
});

// ComfyUI node-graph screenshots are process, not finished work: they get their
// own category so the AI creatives grid shows outputs only.
const isWorkflowShot = (e: GalleryEntry) =>
  e.media.kind === "image" && e.media.src.includes("comfyui-workflow-snaps/");
const imageTab = genAiTabs.find((t) => t.id === "works-2d-content")!;
const workflowShots = imageTab.entries.filter(isWorkflowShot);

const creatives: GalleryEntry[] = [
  ...aiCreativeWorks.map(
    (w): GalleryEntry => ({ title: w.title, description: w.description, media: { kind: "image", src: w.src, alt: w.alt } }),
  ),
  ...imageTab.entries.filter((e) => !isWorkflowShot(e)),
];

const genAiLabels: Record<string, string> = {
  "works-video-content": "Video",
  "works-3d-content": "3D",
  "works-audio-content": "Audio",
};

// Explicit ids: "works-projects" would otherwise collide with the Projects category.
const designMeta: Record<string, { id: string; label: string }> = {
  "works-adobe-design": { id: "design", label: "Graphic design" },
  "works-archive-video": { id: "film", label: "Film & editing" },
  "works-projects": { id: "motion", label: "Motion & VFX" },
};

const figmaEntries: GalleryEntry[] = figmaWork.map((f) => ({
  title: f.title,
  description: f.link ? (
    <>
      <a href={f.link} target="_blank">
        Open in Figma ↗
      </a>
      <br />
      {f.description}
    </>
  ) : (
    f.description
  ),
  media: { kind: "image", src: f.src, alt: f.title },
}));

// Artwork categories come first and only appear once they have content
// (add work in src/data/artwork.ts — see ADD-NEW-WORK.md).
const allCategories: Category[] = [
  { id: "key-art", label: "Key art", group: "Artwork", heading: "Key art — poster, cover & background", kind: "keyart", entries: [], count: keyArt.length },
  { id: "before-after", label: "Before / after", group: "Artwork", heading: "Artwork corrections — before & after", kind: "corrections", entries: [], count: corrections.length + series.reduce((n, s) => n + s.pairs.length, 0) },
  grid({ id: "figma", label: "Figma", group: "Artwork", heading: "Figma — layout & UI", entries: figmaEntries }),
  { id: "projects", label: "Projects", group: "Case studies", heading: "Recent projects", kind: "projects", entries: [], count: recentWorks.length },
  grid({ id: "creatives", label: "AI creatives", group: "Generative AI", heading: "AI-assisted creative works", entries: creatives }),
  ...genAiTabs
    .filter((t) => t !== imageTab)
    .map((t) =>
      grid({
        id: t.id.replace(/^works-|-content$/g, ""),
        label: genAiLabels[t.id],
        group: "Generative AI",
        heading: t.heading,
        entries: t.entries,
      }),
    ),
  ...designTabs.map((t) =>
    grid({
      ...designMeta[t.id],
      group: "Foundations",
      heading: t.heading,
      entries: t.entries,
    }),
  ),
  grid({
    id: "workflows",
    label: "ComfyUI workflows",
    group: "Process",
    heading: "ComfyUI workflows — node graphs behind the work",
    entries: workflowShots,
  }),
];

const categories = allCategories.filter((c) => c.count > 0);

const PAGE = 12;

export function WorkView({ sub }: { sub?: string }) {
  const active = categories.find((c) => c.id === sub) ?? categories[0];
  const groups = [...new Set(categories.map((c) => c.group))];

  return (
    <div className="work">
      <div className="view-head">
        <div>
          <p className="label">Portfolio</p>
          <h1 className="view-title">
            Selected <em>work</em>
          </h1>
        </div>
        <nav className="filter-bar" aria-label="Work categories">
          {groups.map((g) => (
            <div key={g} className="filter-group">
              <span className="filter-group__name">{g}</span>
              <div className="filter-group__items">
                {categories
                  .filter((c) => c.group === g)
                  .map((c) => (
                    <a
                      key={c.id}
                      href={href("work", c.id)}
                      className={cx("chip", active.id === c.id && "is-active")}
                      aria-current={active.id === c.id ? "true" : undefined}
                    >
                      {c.label}
                      <span className="chip__count">{c.count}</span>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {active.kind === "projects" && <Projects />}
      {active.kind === "keyart" && <KeyArtList />}
      {active.kind === "corrections" && <Corrections />}
      {active.kind === "grid" && <WorkGrid key={active.id} category={active} />}
    </div>
  );
}

function WorkGrid({ category }: { category: Category }) {
  const openLightbox = useLightbox();
  const [showAll, setShowAll] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const main = category.entries.filter((e) => !e.archive);
  const archived = category.entries.filter((e) => e.archive);
  const shown = showArchive ? [...main, ...archived] : main;
  const items = useMemo(() => toLightboxItems(shown), [shown]);
  const visible = showAll || showArchive ? shown : shown.slice(0, PAGE);

  return (
    <section aria-label={category.heading}>
      <h2 className="grid-heading">{category.heading}</h2>
      <div className="work-grid">
        {visible.map((entry, i) => (
          <WorkCard
            key={i}
            entry={entry}
            onOpen={() =>
              openLightbox(
                items,
                items.findIndex((it) => "src" in entry.media && it.src === entry.media.src),
              )
            }
          />
        ))}
      </div>
      {(main.length > PAGE || archived.length > 0) && (
        <div className="grid-more">
          {main.length > PAGE && !showArchive && (
            <button className="btn btn--ghost" onClick={() => setShowAll((s) => !s)}>
              {showAll ? "Show less" : `Show all ${main.length}`}
            </button>
          )}
          {archived.length > 0 && (
            <button className="btn btn--ghost" onClick={() => setShowArchive((s) => !s)}>
              {showArchive ? "Hide early portfolio sheets" : `Show early portfolio sheets (${archived.length})`}
            </button>
          )}
        </div>
      )}
    </section>
  );
}

/**
 * Gallery tiles are squares. Prefer a 2×2 hero first tile (n images fill n + 3
 * cells); otherwise plain tiles. Pick columns so every row is complete.
 */
function galleryLayout(n: number) {
  const withHero = [4, 3, 5].find((c) => (n + 3) % c === 0);
  if (withHero) return { cols: withHero, hero: true };
  return { cols: [4, 3, 5].find((c) => n % c === 0) ?? 4, hero: false };
}

const projectImages: LightboxItem[] = recentWorks.flatMap((w) =>
  (w.images ?? []).map((img): LightboxItem => ({ type: "img", src: img.src })),
);

function Projects() {
  const openLightbox = useLightbox();

  // "#work/projects/<id>" (e.g. from a home tile) opens straight at that project.
  useEffect(() => {
    const id = window.location.hash.split("/")[2];
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <section aria-label="Recent projects" className="project-list">
      {recentWorks.map((work, i) => (
        <article key={work.title} id={projectId(work)} className={cx("project", work.stacked && "project--stacked")}>
          <div className="project__index">{String(i + 1).padStart(2, "0")}</div>
          <div className="project__body">
            <h2 className="project__title">{work.title}</h2>
            {work.body && <div className="prose">{work.body}</div>}
            {work.variants && (
              <div className="project__variants">
                <KeyArtVariants
                  title={work.title}
                  variants={work.variants}
                  onOpen={(i) => openLightbox(work.variants!.map((v): LightboxItem => ({ type: "img", src: v.src })), i)}
                />
              </div>
            )}
            {work.video && (
              <video
                className="project__video"
                src={work.video.src}
                poster={thumb(work.video.poster)}
                controls
                playsInline
                preload="none"
              />
            )}
            {work.steps && <Storyboard steps={work.steps} frame={work.storyFrame} />}
            {work.gallery && work.images && work.galleryTitle && (
              <h4 className="gallery-title label">{work.galleryTitle}</h4>
            )}
            {work.gallery && work.images && (
              <div
                className="project__gallery"
                style={{ gridTemplateColumns: `repeat(${galleryLayout(work.images.length).cols}, minmax(0, 1fr))` }}
              >
                {work.images.map((img, i) => (
                  <button
                    key={img.src}
                    className={cx("media-open", i === 0 && galleryLayout(work.images!.length).hero && "is-hero")}
                    onClick={() => openLightbox(projectImages, projectImages.findIndex((p) => p.src === img.src))}
                  >
                    <img src={thumb(img.src)} alt={img.alt} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
          {work.images && !work.gallery && (
            <div className={cx("project__media", work.imageGrid && "project__media--grid")}>
              {work.images.map((img) => (
                <button
                  key={img.src}
                  className="media-open"
                  onClick={() => openLightbox(projectImages, projectImages.findIndex((p) => p.src === img.src))}
                >
                  <img src={thumb(img.src)} alt={img.alt} style={img.style} loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </article>
      ))}
    </section>
  );
}

function KeyArtList() {
  const openLightbox = useLightbox();
  return (
    <section aria-label="Key art" className="keyart-list">
      {keyArt.map((set) => {
        const items: LightboxItem[] = set.variants.map((v) => ({ type: "img", src: v.src }));
        return <KeyArtCard key={set.title} set={set} onOpen={(i) => openLightbox(items, i)} />;
      })}
    </section>
  );
}

function Corrections() {
  const openLightbox = useLightbox();
  const open = (c: BeforeAfter) =>
    openLightbox(
      [
        { type: "img", src: c.before },
        { type: "img", src: c.after },
      ],
      1,
    );
  return (
    <section aria-label="Artwork corrections">
      <h2 className="grid-heading">Artwork corrections — before & after</h2>
      {/* Portraits share one row height, landscapes another: widths follow each image's ratio. */}
      {[corrections.filter((c) => (c.ratio ?? 1) < 1), corrections.filter((c) => (c.ratio ?? 1) >= 1)].map(
        (row, r) =>
          row.length > 0 && (
            <div key={r} className="ba-row">
              {row.map((c) => (
                <BeforeAfterSlider key={c.title} item={c} onOpen={() => open(c)} style={{ flexGrow: c.ratio ?? 1 }} />
              ))}
            </div>
          ),
      )}
      {series.map((s) => (
        <div key={s.title} className="ba-series">
          <h3 className="project__title">{s.title}</h3>
          <p className="ba-series__desc">{s.description}</p>
          <div className="ba-grid ba-grid--wide">
            {s.pairs.map((c) => (
              <BeforeAfterSlider key={c.before} item={c} onOpen={() => open(c)} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
