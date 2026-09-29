import { useEffect, useRef, useState, type RefObject } from "react";
import type { EntryMedia, GalleryEntry } from "../../types";
import { cx } from "../../utils/scroll";
import { ClampedText } from "./ClampedText";

interface EntryCardProps {
  entry: GalleryEntry;
  /** Called when the image/video is clicked (opens the lightbox). */
  onMediaClick: () => void;
  /** Scroll container used to highlight the card when it is in view. */
  observerRoot?: RefObject<HTMLElement | null>;
  /** Render with the full description (used in the View All modal). */
  expanded?: boolean;
}

export function EntryCard({ entry, onMediaClick, observerRoot, expanded }: EntryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!observerRoot || !ref.current) return;
    const observer = new IntersectionObserver(([e]) => setActive(e.isIntersecting), {
      root: observerRoot.current,
      threshold: 0.5,
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observerRoot]);

  const isAudio = entry.media.kind === "audio";

  return (
    <div ref={ref} className={cx("gen-ai-entry", active && "is-active")}>
      <div className="entry-info">
        <h4>{entry.title}</h4>
        <ClampedText expanded={expanded}>{entry.description}</ClampedText>
      </div>
      <div
        className="entry-media"
        style={isAudio ? { display: "flex", alignItems: "center", padding: 20 } : undefined}
      >
        <Media media={entry.media} alt={entry.title} onClick={onMediaClick} />
      </div>
    </div>
  );
}

function Media({ media, alt, onClick }: { media: EntryMedia; alt: string; onClick: () => void }) {
  switch (media.kind) {
    case "image":
      return <img src={media.src} alt={media.alt || alt} loading="lazy" onClick={onClick} />;
    case "video":
      return (
        <video preload="metadata" controls muted playsInline loop onClick={onClick}>
          <source src={media.src} type="video/mp4" />
        </video>
      );
    case "audio":
      return (
        <audio controls style={{ width: "100%" }}>
          <source src={media.src} type="audio/mpeg" />
        </audio>
      );
    case "model":
      return (
        <model-viewer
          src={media.src}
          alt="A 3D model"
          auto-rotate=""
          camera-controls=""
          ar=""
          shadow-intensity="1"
          style={{ width: "100%", height: "100%", background: "#ffffff" }}
        />
      );
    case "youtube":
      return <iframe src={media.src} title={media.title} frameBorder="0" allowFullScreen />;
    case "behance":
      return (
        <iframe
          src={media.src}
          title={alt}
          allowFullScreen
          scrolling="no"
          frameBorder="0"
          style={{ overflow: "hidden" }}
        />
      );
  }
}
