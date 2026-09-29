import { TabbedGallery } from "../components/gallery/TabbedGallery";
import { Section } from "../components/Reveal";
import { genAiTabs } from "../data/genAiWorks";
import type { GalleryTab } from "../types";

export function GenAIWorks({ onViewAll }: { onViewAll: (tab: GalleryTab) => void }) {
  return (
    <Section id="generative-ai-works">
      <h2>
        <span className="heading-gradient">Generative AI Content Creation</span>
      </h2>
      <TabbedGallery tabs={genAiTabs} containerId="gen-ai-parallax-scroll" onViewAll={onViewAll} />
    </Section>
  );
}
