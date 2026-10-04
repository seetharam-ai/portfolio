import { thumb } from "../utils/media";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLightbox } from "../components/Lightbox";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { KeyArtCard, KeyArtVariants } from "../components/KeyArtCard";
import { Storyboard } from "../components/Storyboard";
import { Thumb } from "../components/Thumb";
import { WorkCard } from "../components/WorkCard";
import { assetChecklist, corrections, figmaWork, keyArt, series, type BeforeAfter } from "../data/artwork";
import { designTabs } from "../data/designWorks";
import { genAiTabs } from "../data/genAiWorks";
import { projectMeta } from "../data/projectMeta";
import { projectId, recentWorks, type RecentWork } from "../data/recentWorks";
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

export function WorkView({ sub, focus }: { sub?: string; focus?: string }) {
  const active = categories.find((c) => c.id === sub) ?? categories[0];
  const groups = [...new Set(categories.map((c) => c.group))];
  const filtersRef = useRef<HTMLDivElement>(null);

  return (
    <div className="work">
      <CategoryJump groups={groups} active={active} filtersRef={filtersRef} />
      <div className="view-head">
        <div>
          <p className="label">Portfolio</p>
          <h1 className="view-title">
            Selected <em>work</em>
          </h1>
        </div>
      </div>

      {/* Sticks under the top bar, so categories can be switched from anywhere on the page */}
      <div className="work-filters" ref={filtersRef}>
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

      {active.kind === "projects" && <Projects focus={focus} />}
      {active.kind === "keyart" && <KeyArtList />}
      {active.kind === "corrections" && <Corrections />}
      {active.kind === "grid" && <WorkGrid key={active.id} category={active} />}
    </div>
  );
}

function WorkGrid({ category }: { category: Category }) {
  const openLightbox = useLightbox();
  const [count, setCount] = useState(PAGE);
  const [showArchive, setShowArchive] = useState(false);
  const main = category.entries.filter((e) => !e.archive);
  const archived = category.entries.filter((e) => e.archive);
  const shown = showArchive ? [...main, ...archived] : main;
  const items = useMemo(() => toLightboxItems(shown), [shown]);
  const visible = shown.slice(0, count);
  const hasMore = count < shown.length;

  // Load the next batch automatically as the end of the gallery comes into view.
  const sentinel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = sentinel.current;
    if (!el || !hasMore) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setCount((c) => c + PAGE),
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasMore, count]);

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
      {hasMore && <div ref={sentinel} className="grid-sentinel" aria-hidden />}
      {archived.length > 0 && !hasMore && (
        <div className="grid-more">
          <button
            className="btn btn--ghost"
            onClick={() => {
              setShowArchive((s) => !s);
              setCount((c) => Math.max(c, main.length + PAGE));
            }}
          >
            {showArchive ? "Hide early portfolio sheets" : `Show early portfolio sheets (${archived.length})`}
          </button>
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

/** Index of image-led rows; "#work/projects/<id>" opens that case study on its own. */
function Projects({ focus }: { focus?: string }) {
  const selected = focus ? recentWorks.find((w) => projectId(w) === focus) : undefined;
  if (selected) return <CaseStudy work={selected} index={recentWorks.indexOf(selected)} />;

  return (
    <section aria-label="Case studies" className="case-list">
      {recentWorks.map((work, i) => {
        const id = projectId(work);
        const meta = projectMeta[id];
        const cover = coverOf(work, meta?.cover);
        const [name] = work.title.split(" — ");
        return (
          <a key={work.title} href={href("work", `projects/${id}`)} className="case-row">
            <span className={cx("case-row__media", !cover && "is-empty")}>
              {cover ? (
                <>
                  <Thumb src={cover} alt="" loading="lazy" className="case-row__blur" aria-hidden />
                  <Thumb src={cover} alt="" loading="lazy" className="case-row__img" />
                </>
              ) : (
                <span className="case-row__mark">{name}</span>
              )}
            </span>
            <span className="case-row__text">
              <span className="mono-caps case-row__kicker">
                {String(i + 1).padStart(2, "0")} · {meta?.kicker ?? "Case study"}
              </span>
              <span className="case-row__title">{name}</span>
              {meta && <span className="case-row__summary">{meta.summary}</span>}
              {meta && (
                <span className="case-row__tags">
                  {meta.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </span>
              )}
              <span className="text-link case-row__link">View case study →</span>
            </span>
          </a>
        );
      })}
    </section>
  );
}

/** First visual of a project, for its index row. */
function coverOf(work: RecentWork, override?: string) {
  return (
    override ??
    work.variantSets?.[0]?.variants[0]?.src ??
    work.variants?.[0]?.src ??
    work.video?.poster ??
    work.images?.[0]?.src ??
    work.steps?.[0]?.src
  );
}

/** One case study: headline and facts, the visuals, then the full story. */
function CaseStudy({ work, index }: { work: RecentWork; index: number }) {
  const openLightbox = useLightbox();
  const meta = projectMeta[projectId(work)];
  const [name, rest] = work.title.split(" — ");
  const prev = recentWorks[index - 1];
  const next = recentWorks[index + 1];

  return (
    <article className="case-detail">
      <a href={href("work", "projects")} className="text-link case-detail__back">
        ← All case studies
      </a>
      <header className="case-detail__head">
        <div>
          <p className="mono-caps case-row__kicker">
            Case study {String(index + 1).padStart(2, "0")}
            {meta && ` · ${meta.kicker}`}
          </p>
          <h2 className="case-detail__title">{name}</h2>
          {rest && <p className="case-detail__sub">{rest}</p>}
        </div>
        {meta && (
          <div>
            <p className="case-detail__summary">{meta.summary}</p>
            <ul className="case-detail__facts">
              {meta.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <div className="case-detail__media">
        {work.variants && (
          <div className="project__variants">
            <KeyArtVariants
              title={work.title}
              variants={work.variants}
              onOpen={(i) => openLightbox(work.variants!.map((v): LightboxItem => ({ type: "img", src: v.src })), i)}
            />
          </div>
        )}
        {work.variantSets?.map((set) => (
          <div key={set.label} className="project__variants">
            <h4 className="gallery-title label">{set.label}</h4>
            <KeyArtVariants
              title={`${work.title} — ${set.label}`}
              variants={set.variants}
              onOpen={(i) => openLightbox(set.variants.map((v): LightboxItem => ({ type: "img", src: v.src })), i)}
            />
          </div>
        ))}
        {work.verticalVideos && (
          <div className="project__verticals">
            {work.verticalVideos.map((v) => (
              <figure key={v.src}>
                <video src={v.src} poster={thumb(v.poster)} controls playsInline preload="none" />
                <figcaption className="label">{v.label}</figcaption>
              </figure>
            ))}
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
        {work.images && !work.gallery && (
          <div
            className={cx("case-detail__images", work.images.length === 1 && "is-single")}
            style={{ "--cols": Math.min(work.images.length, 6), "--cols-sm": Math.min(work.images.length, 3) } as React.CSSProperties}
          >
            {work.images.map((img) => (
              <button
                key={img.src}
                className="media-open"
                onClick={() => openLightbox(projectImages, projectImages.findIndex((p) => p.src === img.src))}
              >
                <img src={thumb(img.src)} alt={img.alt} style={img.style} loading="lazy" />
                {img.label && (
                  <span className="case-detail__tag" title={img.alt}>
                    {img.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {work.body && (
        <section className="case-detail__story" aria-label="The story">
          <h3 className="mono-caps">The story</h3>
          <div className="prose">{work.body}</div>
        </section>
      )}

      {work.steps && (
        <section className="case-detail__process" aria-label="Process">
          <h3 className="mono-caps">Process</h3>
          <Storyboard steps={work.steps} frame={work.storyFrame} />
        </section>
      )}

      {work.gallery && work.images && (
        <section className="case-detail__process" aria-label="Gallery">
          <h3 className="mono-caps">{work.galleryTitle ?? "Gallery"}</h3>
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
        </section>
      )}

      <nav className="case-detail__pager" aria-label="More case studies">
        {prev ? (
          <a href={href("work", `projects/${projectId(prev)}`)}>
            <span className="mono-caps">← Previous</span>
            <span>{prev.title.split(" — ")[0]}</span>
          </a>
        ) : (
          <span />
        )}
        {next && (
          <a href={href("work", `projects/${projectId(next)}`)} className="is-next">
            <span className="mono-caps">Next →</span>
            <span>{next.title.split(" — ")[0]}</span>
          </a>
        )}
      </nav>
    </article>
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
      <div className="checklist">
        <h3 className="mono-caps checklist__title">Checked on every asset</h3>
        <ol className="checklist__list">
          {assetChecklist.map((c) => (
            <li key={c.title}>
              <strong>{c.title}</strong>
              <span>{c.text}</span>
            </li>
          ))}
        </ol>
      </div>
      {corrections
        .filter((c) => c.lead)
        .map((c) => (
          <div key={c.title} className="ba-lead">
            <BeforeAfterSlider item={c} onOpen={() => open(c)} />
          </div>
        ))}
      {/* Every pair in the same square card, so the grid reads evenly; images sit whole inside the frame. */}
      <div className="ba-grid ba-grid--uniform">
        {corrections
          .filter((c) => !c.lead)
          .map((c) => (
            <BeforeAfterSlider key={c.title} item={c} onOpen={() => open(c)} />
          ))}
      </div>
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

/**
 * Phones and tablets: once the category bar scrolls away, a floating button
 * opens the categories in a sheet, so switching never needs a scroll to the top.
 */
function CategoryJump({
  groups,
  active,
  filtersRef,
}: {
  groups: Category["group"][];
  active: Category;
  filtersRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = filtersRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, [filtersRef]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        className={cx("jump-btn", visible && "is-visible")}
        onClick={() => setOpen(true)}
        aria-label="Show work categories"
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
          <rect x="3" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="3" width="7" height="7" rx="2" />
          <rect x="3" y="14" width="7" height="7" rx="2" />
          <rect x="14" y="14" width="7" height="7" rx="2" />
        </svg>
        <span>{active.label}</span>
      </button>
      {open && (
        <div className="jump-sheet" role="dialog" aria-label="Work categories" onClick={() => setOpen(false)}>
          <div className="jump-sheet__panel" onClick={(e) => e.stopPropagation()}>
            <div className="jump-sheet__head">
              <span className="mono-caps">Categories</span>
              <button className="jump-sheet__close" onClick={() => setOpen(false)} aria-label="Close">
                ×
              </button>
            </div>
            {groups.map((g) => (
              <div key={g} className="jump-sheet__group">
                <span className="filter-group__name">{g}</span>
                <div className="jump-sheet__chips">
                  {categories
                    .filter((c) => c.group === g)
                    .map((c) => (
                      <a
                        key={c.id}
                        href={href("work", c.id)}
                        className={cx("chip", active.id === c.id && "is-active")}
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                        <span className="chip__count">{c.count}</span>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
