import { useLightbox } from "../components/Lightbox";
import { Reveal, Section } from "../components/Reveal";
import { recentWorks } from "../data/recentWorks";
import type { LightboxItem } from "../types";

// Every image in the section, in order, so the lightbox can page through them.
const lightboxItems: LightboxItem[] = recentWorks.flatMap((w) =>
  (w.images ?? []).map((img): LightboxItem => ({ type: "img", src: img.src })),
);

export function RecentWorks() {
  const openLightbox = useLightbox();

  return (
    <Section id="Recent-works">
      <h2>
        <span className="heading-gradient">Recent Works</span>
      </h2>
      <div className="Recent-works-container">
        {recentWorks.map((work) => {
          const images = (work.images ?? []).map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              style={img.style}
              onClick={() => openLightbox(lightboxItems, lightboxItems.findIndex((i) => i.src === img.src))}
            />
          ));

          return (
            <Reveal key={work.title} className="Recent-works-item reveal-trigger">
              <h3>{work.title}</h3>
              {work.stacked ? (
                <div className="Recent-item-text">{work.body}</div>
              ) : (
                <div className="Recent-item-content">
                  <div className="Recent-item-text">{work.body}</div>
                  <div className="Recent-item-media">
                    {work.imageGrid ? <div className="media-grid">{images}</div> : images}
                  </div>
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
