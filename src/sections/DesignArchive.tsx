import { TabbedGallery } from "../components/gallery/TabbedGallery";
import { Section } from "../components/Reveal";
import { designTabs } from "../data/designWorks";
import type { GalleryTab } from "../types";

export function DesignArchive({ onViewAll }: { onViewAll: (tab: GalleryTab) => void }) {
  return (
    <Section id="portfolio">
      <h2>My foundational works across design & digital media</h2>
      <TabbedGallery tabs={designTabs} containerId="portfolio-parallax-scroll" onViewAll={onViewAll} />
    </Section>
  );
}
