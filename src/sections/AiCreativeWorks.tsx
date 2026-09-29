import { useLightbox } from "../components/Lightbox";
import { Reveal, Section } from "../components/Reveal";
import { aiCreativeWorks } from "../data/site";
import type { LightboxItem } from "../types";

const lightboxItems: LightboxItem[] = aiCreativeWorks.map((w) => ({ type: "img", src: w.src }));

export function AiCreativeWorks() {
  const openLightbox = useLightbox();

  return (
    <Section id="ai-creative-works">
      <h2>
        <span className="heading-gradient">AI-assisted creative works</span>
      </h2>
      <div className="myExpertise-container">
        {aiCreativeWorks.map((work, i) => (
          <Reveal key={work.src} className="myExpertise-item reveal-trigger">
            <h4>{work.title}</h4>
            <img
              className="ai-creative-lightbox-media"
              src={work.src}
              alt={work.alt}
              tabIndex={0}
              role="button"
              onClick={() => openLightbox(lightboxItems, i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(lightboxItems, i);
                }
              }}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
