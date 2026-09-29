import { thumb } from "../utils/media";
import { useRef } from "react";
import type { EntryMedia, GalleryEntry } from "../types";
import { ClampedText } from "./ClampedText";

const KIND_LABEL: Record<EntryMedia["kind"], string> = {
  image: "Image",
  video: "Video",
  model: "3D · Interactive",
  audio: "Audio",
  youtube: "Film",
  behance: "Behance",
};

/** A card in the work grid. Images and videos open the lightbox. */
export function WorkCard({ entry, onOpen }: { entry: GalleryEntry; onOpen: () => void }) {
  const { media } = entry;
  return (
    <article className={`work-card work-card--${media.kind}`}>
      <div className="work-card__media">
        <Media media={media} title={entry.title} onOpen={onOpen} />
        <span className="work-card__kind">{KIND_LABEL[media.kind]}</span>
      </div>
      <div className="work-card__body">
        <h3 className="work-card__title">{entry.title}</h3>
        {entry.description && <ClampedText>{entry.description}</ClampedText>}
      </div>
    </article>
  );
}

function Media({ media, title, onOpen }: { media: EntryMedia; title: string; onOpen: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  switch (media.kind) {
    case "image":
      return (
        <button className="media-open" onClick={onOpen} aria-label={`Open ${title}`}>
          <img src={thumb(media.src)} alt={media.alt} loading="lazy" />
        </button>
      );
    case "video":
      // Silent preview on hover; click opens the full player in the lightbox.
      return (
        <button
          className="media-open"
          onClick={onOpen}
          aria-label={`Play ${title}`}
          onMouseEnter={() => videoRef.current?.play().catch(() => {})}
          onMouseLeave={() => videoRef.current?.pause()}
        >
          <video ref={videoRef} src={`${media.src}#t=0.5`} muted loop playsInline preload="metadata" />
          <span className="play-badge" aria-hidden>
            ▶
          </span>
        </button>
      );
    case "audio":
      return (
        <div className="audio-panel">
          <div className="audio-panel__wave" aria-hidden>
            {Array.from({ length: 28 }, (_, i) => (
              <span key={i} style={{ height: `${25 + ((i * 37) % 70)}%` }} />
            ))}
          </div>
          <audio controls preload="none">
            <source src={media.src} type="audio/mpeg" />
          </audio>
        </div>
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
          style={{ width: "100%", height: "100%", background: "#f6f4f0" }}
        />
      );
    case "youtube":
      return <iframe src={media.src} title={media.title} loading="lazy" allowFullScreen />;
    case "behance":
      return <iframe src={media.src} title={title} loading="lazy" allowFullScreen scrolling="no" />;
  }
}
