/* =====================================================================
   ARTWORK — add your role-relevant work here.
   Step-by-step guide: ADD-NEW-WORK.md (repo root).

   Put image files in:
     public/images/artwork/key-art/        poster / cover / background sets
     public/images/artwork/before-after/   correction pairs
     public/images/artwork/figma/          Figma screens and layouts
   Then reference them below as "images/artwork/<folder>/<file>".

   Empty lists are hidden on the site, so nothing half-finished shows.
   ===================================================================== */

/** One title's artwork set, e.g. Poster (2:3), Cover (16:9), Background (16:9). */
export interface KeyArtSet {
  title: string;
  /** Creative intent / what the set demonstrates (1–2 sentences). */
  description: string;
  /** e.g. "Telugu localized title treatment" — shown as a tag. Optional. */
  tag?: string;
  variants: {
    label: string;
    /** Aspect ratio used for the frame, e.g. "2 / 3" or "16 / 9". */
    ratio: string;
    src: string;
  }[];
}

/** A correction you made: the same image before and after your work. */
export interface BeforeAfter {
  title: string;
  description: string;
  before: string;
  after: string;
  /** Short list of what you corrected. Optional. */
  fixes?: string[];
}

/** Figma (or other UI/layout) work. */
export interface FigmaWork {
  title: string;
  description: string;
  src: string;
  /** Link to the Figma file/prototype, if shareable. Optional. */
  link?: string;
}

export const keyArt: KeyArtSet[] = [
  // Example — copy, uncomment and replace with your files:
  // {
  //   title: "In My Dreams — key art set",
  //   description: "Title artwork for my short film, finished for three placements with safe areas for UI and localized titles.",
  //   tag: "English + Telugu title",
  //   variants: [
  //     { label: "Poster", ratio: "2 / 3", src: "images/artwork/key-art/in-my-dreams-poster.jpg" },
  //     { label: "Cover", ratio: "16 / 9", src: "images/artwork/key-art/in-my-dreams-cover.jpg" },
  //     { label: "Background", ratio: "16 / 9", src: "images/artwork/key-art/in-my-dreams-background.jpg" },
  //   ],
  // },
];

export const corrections: BeforeAfter[] = [
  {
    title: "Sneaker campaign — AI composition to production-ready",
    description:
      "An AI-assisted composition refined in Photoshop to commercial quality: product detail restored, upscaled, color corrected and relit.",
    before: "images/artwork/before-after/sneaker-campaign-before.png",
    after: "images/artwork/before-after/sneaker-campaign-after.png",
    fixes: ["Product detail", "Upscale", "Color correction", "Lighting"],
  },
];

export const figmaWork: FigmaWork[] = [
  // {
  //   title: "Streaming title page — layout study",
  //   description: "Artwork placement and safe areas across Poster, Cover and Background.",
  //   src: "images/artwork/figma/title-page-layout.png",
  //   link: "https://www.figma.com/...",
  // },
];

/**
 * Home page "Featured work" tiles (3). The first key-art posters and
 * corrections you add are featured automatically ahead of these defaults.
 */
export const featuredDefaults = [
  { src: "images/previous-works/indesign-works/Omega_brand_watch.png", title: "Omega — editorial key visual" },
  { src: "images/creative_works/F2_with_CC.png", title: "Photo manipulation and retouched composition" },
  { src: "images/creative_works/Image_comp_02.png", title: "Upscale, color correction and composition" },
];
