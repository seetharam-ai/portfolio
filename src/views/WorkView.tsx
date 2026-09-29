import { thumb } from "../utils/media";
import { useMemo, useState } from "react";
import { useLightbox } from "../components/Lightbox";
import { WorkCard } from "../components/WorkCard";
import { designTabs } from "../data/designWorks";
import { genAiTabs } from "../data/genAiWorks";
import { recentWorks } from "../data/recentWorks";
import { aiCreativeWorks } from "../data/site";
import { href } from "../hooks/useHashRoute";
import { toLightboxItems, type GalleryEntry, type LightboxItem } from "../types";
import { cx } from "../utils/cx";

interface Category {
  id: string;
  label: string;
  group: "Generative AI" | "Case studies" | "Foundations";
  heading: string;
  entries: GalleryEntry[];
}

const creatives: GalleryEntry[] = aiCreativeWorks.map((w) => ({
  title: w.title,
  description: "",
  media: { kind: "image", src: w.src, alt: w.alt },
}));

const genAiLabels: Record<string, string> = {
  "works-2d-content": "Image",
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

const categories: Category[] = [
  { id: "creatives", label: "AI creatives", group: "Generative AI", heading: "AI-assisted creative works", entries: creatives },
  ...genAiTabs.map((t) => ({
    id: t.id.replace(/^works-|-content$/g, ""),
    label: genAiLabels[t.id],
    group: "Generative AI" as const,
    heading: t.heading,
    entries: t.entries,
  })),
  { id: "projects", label: "Projects", group: "Case studies", heading: "Recent projects", entries: [] },
  ...designTabs.map((t) => ({
    ...designMeta[t.id],
    group: "Foundations" as const,
    heading: t.heading,
    entries: t.entries,
  })),
];

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
                      <span className="chip__count">{c.id === "projects" ? recentWorks.length : c.entries.length}</span>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {active.id === "projects" ? <Projects /> : <WorkGrid key={active.id} category={active} />}
    </div>
  );
}

function WorkGrid({ category }: { category: Category }) {
  const openLightbox = useLightbox();
  const [showAll, setShowAll] = useState(false);
  const items = useMemo(() => toLightboxItems(category.entries), [category]);
  const visible = showAll ? category.entries : category.entries.slice(0, PAGE);

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
      {category.entries.length > PAGE && (
        <div className="grid-more">
          <button className="btn btn--ghost" onClick={() => setShowAll((s) => !s)}>
            {showAll ? "Show less" : `Show all ${category.entries.length}`}
          </button>
        </div>
      )}
    </section>
  );
}

const projectImages: LightboxItem[] = recentWorks.flatMap((w) =>
  (w.images ?? []).map((img): LightboxItem => ({ type: "img", src: img.src })),
);

function Projects() {
  const openLightbox = useLightbox();

  return (
    <section aria-label="Recent projects" className="project-list">
      {recentWorks.map((work, i) => (
        <article key={work.title} className={cx("project", work.stacked && "project--stacked")}>
          <div className="project__index">{String(i + 1).padStart(2, "0")}</div>
          <div className="project__body">
            <h2 className="project__title">{work.title}</h2>
            <div className="prose">{work.body}</div>
          </div>
          {work.images && (
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
