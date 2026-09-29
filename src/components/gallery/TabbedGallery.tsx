import { useCallback, useRef, useState } from "react";
import type { GalleryTab } from "../../types";
import { toLightboxItems } from "../../types";
import { useDragScroll } from "../../hooks/useDragScroll";
import { useWindowScroll } from "../../hooks/useWindowScroll";
import { cx, scrollToElement } from "../../utils/scroll";
import { useLightbox } from "../Lightbox";
import { EntryCard } from "./EntryCard";

interface TabbedGalleryProps {
  tabs: GalleryTab[];
  /** id of the scroll container (kept from the original markup). */
  containerId: string;
  onViewAll: (tab: GalleryTab) => void;
}

/**
 * Sticky tab bar + one horizontally scrolling gallery per tab.
 * Tabs scroll to their section; scrolling updates the active tab.
 */
export function TabbedGallery({ tabs, containerId, onViewAll }: TabbedGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const scrollSpy = useCallback(() => {
    const trigger = window.innerHeight * 0.3;
    for (const tab of tabs) {
      const rect = sectionRefs.current[tab.id]?.getBoundingClientRect();
      if (rect && rect.top <= trigger && rect.bottom > trigger) {
        setActiveTab(tab.id);
        return;
      }
    }
  }, [tabs]);
  useWindowScroll(scrollSpy);

  const goToTab = (id: string) => {
    setActiveTab(id);
    const el = sectionRefs.current[id];
    if (el) scrollToElement(el, 200, 115);
  };

  return (
    <>
      <div className="gen-ai-sticky-tabs">
        <div className="tab-button-group">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={cx("tab-btn", activeTab === tab.id && "active")}
              onClick={() => goToTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="gen-ai-works-container">
        <div className="tab-content-container" id={containerId} ref={containerRef}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className="parallax-section"
              ref={(el) => {
                sectionRefs.current[tab.id] = el;
              }}
            >
              <GallerySection tab={tab} observerRoot={containerRef} onViewAll={() => onViewAll(tab)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function GallerySection({
  tab,
  observerRoot,
  onViewAll,
}: {
  tab: GalleryTab;
  observerRoot: React.RefObject<HTMLDivElement | null>;
  onViewAll: () => void;
}) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const openLightbox = useLightbox();
  useDragScroll(galleryRef);

  const lightboxItems = toLightboxItems(tab.entries);

  return (
    <>
      <h3>{tab.heading}</h3>
      <div className="works-gallery preview-view" ref={galleryRef}>
        {tab.entries.map((entry, i) => (
          <EntryCard
            key={i}
            entry={entry}
            observerRoot={observerRoot}
            onMediaClick={() =>
              openLightbox(
                lightboxItems,
                lightboxItems.findIndex((item) => "src" in entry.media && item.src === entry.media.src),
              )
            }
          />
        ))}
      </div>

      <div className="gallery-footer">
        <div className={cx("gallery-controls", tab.entries.length > 4 && "is-visible")}>
          <button className="nav-text-btn view-all-btn" onClick={onViewAll}>
            View All
          </button>
        </div>
      </div>
    </>
  );
}
