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
  /** Image width ÷ height (e.g. 2 / 3). Portraits and landscapes each share one row height. */
  ratio?: number;
  /** Shown first, full width, above the other pairs. */
  lead?: boolean;
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
    title: "The Silent Service — Japanese key art localized to English (16:9)",
    description:
      "The official Japanese 16:9 key art for the Prime Original's second film, localized to English: the title translated with Gemini Nano Banana in Photoshop, then the lockup, subtitle and billing refined to the same position and visual weight, with the cast, submarine and ice untouched. Self-initiated spec exercise — not an official release. Source key art and trailer © Amazon and the rights holders.",
    before: "images/artwork/key-art/silent-service/jp-16x9.jpg",
    after: "images/artwork/key-art/silent-service/en-16x9.jpg",
    fixes: ["Title localization", "Billing & date", "Layout and weight kept", "Art untouched"],
    ratio: 1320 / 743,
    lead: true,
  },
  {
    title: "The Last Meridian — Japanese title localization",
    description:
      "A direct text swap dropped the vertical title onto the centre axis, covering the face and the star. Moved into the negative space of the hood and set in Mincho: focal-zone overlap cut from 53,310 px to 0 px.",
    before: "images/artwork/before-after/last-meridian-ja-before.jpg",
    after: "images/artwork/before-after/last-meridian-ja-after.jpg",
    ratio: 2 / 3,
    fixes: ["Title placement", "Focal zones clear", "Vertical (tategaki) type", "Visual weight 100%"],
  },
  {
    title: "Gladiator: Ashes of Rome — title replacement",
    description:
      "The original AI generation, titled “Colosseum: The Legend of Spartacus”, re-titled as a new English master — keeping the carved-stone treatment, scale and position of the original lockup.",
    before: "images/artwork/before-after/gladiator-title-before.jpg",
    after: "images/artwork/before-after/gladiator-title-after.jpg",
    ratio: 747 / 1000,
    fixes: ["Title replacement", "Treatment matched", "Lockup position kept"],
  },
  {
    title: "Neon Ghost — key art cleanup",
    description:
      "A floating hologram screen cut across the character’s shoulder and arm, cluttering the focal area of the poster. Removed with Firefly Generative Fill, then the jacket, arm and background monitor rebuilt to match the neon lighting. Title and billing untouched.",
    before: "images/artwork/before-after/neon-ghost-before.png",
    after: "images/artwork/before-after/neon-ghost-after.png",
    ratio: 768 / 1376,
    fixes: ["Overlap removed", "Character silhouette clear", "Lighting matched", "Title untouched"],
  },
  {
    title: "Couple & bottle campaign — low-res to production composite",
    description:
      "A 1024 px low-resolution image rebuilt as a 2048 px production composite, preserving product identity, texture and composition — Gemini Nano Banana Pro, then Photoshop Generative Fill with Flux 2 Pro and Flux Kontext Pro.",
    before: "images/artwork/before-after/couple-bottle-before.jpg",
    after: "images/artwork/before-after/couple-bottle-after.jpg",
    ratio: 1,
    fixes: ["2× resolution", "People & apparel detail", "Product texture", "Composition kept"],
  },
  {
    title: "Sneaker campaign — AI composition to production-ready",
    description:
      "An AI-assisted composition refined in Photoshop to commercial quality: product detail restored, upscaled, color corrected and relit.",
    before: "images/artwork/before-after/sneaker-campaign-before.png",
    after: "images/artwork/before-after/sneaker-campaign-after.png",
    ratio: 953 / 539,
    fixes: ["Product detail", "Upscale", "Color correction", "Lighting"],
  },
];

/** A set of before/after pairs that share one brief, shown together under one caption. */
export interface BeforeAfterSeries {
  title: string;
  description: string;
  pairs: BeforeAfter[];
}

const SHOE = "images/artwork/before-after/shoe-campaign";
const shoePair = (id: string, title: string): BeforeAfter => ({
  title,
  description: "",
  before: `${SHOE}/${id}-before.jpg`,
  after: `${SHOE}/${id}-after.jpg`,
});

export const series: BeforeAfterSeries[] = [
  {
    title: "Footwear brand campaign — art direction to final (8 looks)",
    description:
      "With a creative studio and ad agency: 8 looks for a footwear brand, taken from art direction to final approved artwork. Gemini Nano Banana 2 and Nano Banana Pro for generation, composited in Photoshop, and Flux 2 Pro for quality and detail enhancements — every look validated against the art direction and brand intent.",
    pairs: [
      shoePair("a", "Auto-rickshaw street"),
      shoePair("b", "Meadow armchair"),
      shoePair("c", "Festival night"),
      shoePair("d", "Retro lounge"),
      shoePair("e", "Street-food cart"),
      shoePair("f", "Yellow taxi"),
      shoePair("g", "Marigold archway"),
      shoePair("h", "Coffee bar"),
    ],
  },
];

export const figmaWork: FigmaWork[] = [
  {
    title: "Sentier — agency website concept: hero (practice piece)",
    description:
      "A split-screen hero for a research and design agency: “Research” and “Design” as two bold halves, light and dark, joined by one line about working across disciplines.",
    src: "images/artwork/figma/sentier-hero.jpg",
    link: "https://www.figma.com/design/GSuKS7B1Sc6F47ty1nsu3C/WS?node-id=0-1",
  },
  {
    title: "Sentier — agency website concept: about (practice piece)",
    description:
      "The about section: team photography masked into the four brand shapes (circle, triangle, square, circle) from the logo, each with its own colour outline.",
    src: "images/artwork/figma/sentier-about.jpg",
    link: "https://www.figma.com/design/GSuKS7B1Sc6F47ty1nsu3C/WS?node-id=0-1",
  },
];

/**
 * Home page "Selected work" bento: images and silent looping videos.
 * size: "xl" (2×2), "tall" (1×2), "wide" (2×1), "std" (1×1) or "full" (a full-width strip) on desktop.
 * link: "work/<category>" or "work/projects/<project-id>".
 */
export interface FeaturedItem {
  kind: "image" | "video";
  src: string;
  /** Video poster frame. */
  poster?: string;
  title: string;
  badge: string;
  link: string;
  size: "xl" | "tall" | "wide" | "std" | "full";
  /** Caption at the top (when the image has its own title at the bottom). */
  captionTop?: boolean;
}

export const homeFeatured: FeaturedItem[] = [
  {
    kind: "image",
    src: "images/artwork/key-art/silent-service/en-1x1.jpg",
    title: "The Silent Service",
    badge: "Localization package · JP → EN",
    link: "work/projects/the-silent-service",
    size: "xl",
    captionTop: true,
  },
  {
    kind: "video",
    src: "videos/silent-service-en-9x16.mp4",
    poster: "images/artwork/key-art/silent-service/en-vertical-poster.jpg",
    title: "Silent Service — 30s vertical cut",
    badge: "9:16 · Reels & Shorts",
    link: "work/projects/the-silent-service",
    size: "tall",
  },
  {
    kind: "image",
    src: "images/artwork/key-art/gladiator-ashes-of-rome/poster-ja.jpg",
    title: "Gladiator: Ashes of Rome",
    badge: "Title localization · 4 languages",
    link: "work/projects/gladiator-ashes-of-rome",
    size: "std",
  },
  {
    kind: "image",
    src: "images/artwork/key-art/control-zindagi/poster-2x3.jpg",
    title: "Control Zindagi",
    badge: "Film & TV artwork",
    link: "work/projects/control-zindagi",
    size: "std",
  },
  {
    kind: "video",
    src: "videos/the-last-signal.mp4",
    poster: "images/projects/the-last-signal/shot-5.jpg",
    title: "The Last Signal",
    badge: "Cinematic teaser · edit & sound",
    link: "work/projects/the-last-signal",
    size: "wide",
  },
  {
    kind: "image",
    src: "images/artwork/before-after/shoe-campaign/a-after.jpg",
    title: "Footwear campaign",
    badge: "Studio & agency · 8 looks",
    link: "work/before-after",
    size: "wide",
  },
  {
    kind: "image",
    src: "images/home/last-meridian-strip.jpg",
    title: "The Last Meridian — one master, six markets",
    badge: "Key art localization · EN · ES · AR · HI · JA · KO",
    link: "work/projects/the-last-meridian",
    size: "full",
  },
];
