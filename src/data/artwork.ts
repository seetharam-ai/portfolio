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
  /** Show this pair as a tile on the home page. */
  featured?: boolean;
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
    title: "The Last Meridian — Japanese title localization",
    description:
      "A direct text swap dropped the vertical title onto the centre axis, covering the face and the star. Moved into the negative space of the hood and set in Mincho: focal-zone overlap cut from 53,310 px to 0 px.",
    before: "images/artwork/before-after/last-meridian-ja-before.jpg",
    after: "images/artwork/before-after/last-meridian-ja-after.jpg",
    fixes: ["Title placement", "Focal zones clear", "Vertical (tategaki) type", "Visual weight 100%"],
  },
  {
    title: "Gladiator: Ashes of Rome — title replacement",
    description:
      "The original AI generation, titled “Colosseum: The Legend of Spartacus”, re-titled as a new English master — keeping the carved-stone treatment, scale and position of the original lockup.",
    before: "images/artwork/before-after/gladiator-title-before.jpg",
    after: "images/artwork/before-after/gladiator-title-after.jpg",
    fixes: ["Title replacement", "Treatment matched", "Lockup position kept"],
  },
  {
    title: "Couple & bottle campaign — low-res to production composite",
    description:
      "A 1024 px low-resolution image rebuilt as a 2048 px production composite, preserving product identity, texture and composition — Gemini Nano Banana Pro, then Photoshop Generative Fill with Flux 2 Pro and Flux Kontext Pro.",
    before: "images/artwork/before-after/couple-bottle-before.jpg",
    after: "images/artwork/before-after/couple-bottle-after.jpg",
    fixes: ["2× resolution", "People & apparel detail", "Product texture", "Composition kept"],
  },
  {
    title: "Sneaker campaign — AI composition to production-ready",
    description:
      "An AI-assisted composition refined in Photoshop to commercial quality: product detail restored, upscaled, color corrected and relit.",
    before: "images/artwork/before-after/sneaker-campaign-before.png",
    after: "images/artwork/before-after/sneaker-campaign-after.png",
    fixes: ["Product detail", "Upscale", "Color correction", "Lighting"],
    featured: true,
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
