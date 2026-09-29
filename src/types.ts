import type { ReactNode } from "react";

/** Something the lightbox can display. */
export interface LightboxItem {
  type: "img" | "video";
  src: string;
}

/** The media shown inside a gallery card. */
export type EntryMedia =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string }
  | { kind: "model"; src: string }
  | { kind: "audio"; src: string }
  | { kind: "youtube"; src: string; title: string }
  | { kind: "behance"; src: string };

/** A card in a horizontal tabbed gallery (GenAI works, Design archive). */
export interface GalleryEntry {
  title: string;
  description: ReactNode;
  media: EntryMedia;
  /** Older supporting pieces, shown behind a "show more" toggle. */
  archive?: boolean;
}

/** One tab (and its scroll section) inside a tabbed gallery. */
export interface GalleryTab {
  id: string;
  label: string;
  heading: string;
  viewAllTitle: string;
  entries: GalleryEntry[];
}

/** Converts gallery entries into the list the lightbox can page through. */
export function toLightboxItems(entries: GalleryEntry[]): LightboxItem[] {
  return entries.flatMap(({ media }): LightboxItem[] => {
    if (media.kind === "image") return [{ type: "img", src: media.src }];
    if (media.kind === "video") return [{ type: "video", src: media.src }];
    return [];
  });
}
