import { useEffect } from "react";
import type { GalleryTab } from "../../types";
import { toLightboxItems } from "../../types";
import { cx } from "../../utils/scroll";
import { useLightbox } from "../Lightbox";
import { EntryCard } from "./EntryCard";

/** Full-screen grid of every card in a tab. `tab` null = closed. */
export function ViewAllModal({ tab, onClose }: { tab: GalleryTab | null; onClose: () => void }) {
  const openLightbox = useLightbox();

  // Lock background scrolling while open.
  useEffect(() => {
    if (!tab) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [tab]);

  const lightboxItems = tab ? toLightboxItems(tab.entries) : [];

  return (
    <div
      id="view-all-modal"
      className={cx("modal", tab && "show")}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Keyed so the scale-in animation replays and videos stop on close */}
      {tab && (
        <div className="view-all-modal-content" key={tab.id}>
          <span className="close-modal" onClick={onClose}>
            &times;
          </span>
          <h3 id="view-all-title">{tab.viewAllTitle}</h3>
          <div id="view-all-grid" className="view-all-grid">
            {tab.entries.map((entry, i) => (
              <EntryCard
                key={i}
                entry={entry}
                expanded
                onMediaClick={() =>
                  openLightbox(
                    lightboxItems,
                    lightboxItems.findIndex((item) => "src" in entry.media && item.src === entry.media.src),
                  )
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
