import type { GalleryEntry, GalleryTab } from "../types";

const indesign = "images/previous-works/indesign-works/";
const photoshop = "images/previous-works/photoshop-works/";
const illustrator = "images/previous-works/illustrator-works/";
const web = "images/previous-works/web-works/";

const image = (title: string, src: string, alt: string, description: GalleryEntry["description"]): GalleryEntry => ({
  title,
  description,
  media: { kind: "image", src, alt },
});

const youtube = (title: string, src: string, iframeTitle: string, description: GalleryEntry["description"]): GalleryEntry => ({
  title,
  description,
  media: { kind: "youtube", src, title: iframeTitle },
});

const behance = (title: string, projectId: string, description: GalleryEntry["description"]): GalleryEntry => ({
  title,
  description,
  media: { kind: "behance", src: `https://www.behance.net/embed/project/${projectId}?ilo0=1` },
});

const adobeDesign: GalleryEntry[] = [
  // ── InDesign ──
  image("Omega — Made for men who lead", indesign + "Omega_brand_watch.png", "Omega Brand Watch",
    "Editorial design for print magazines. Designed in Adobe InDesign"),
  image("South Scope — editorial design", indesign + "id-magazine.png", "Magazine",
    "Editorial design for print magazines. Designed in Adobe InDesign"),
  image("Gym — print poster", indesign + "gym.jpg", "GYM Print Poster",
    "“Get off social media and get in the gym” campaign — large-format print poster."),
  image("Nandini Palace — Add spice to your life", indesign + "nandini.jpg", "Nandini Palace",
    "Marketing flyer and leaflet design. Designed in Adobe InDesign"),
  image("Med Plus — healthcare", indesign + "med plus design.jpg", "Med Plus",
    "Medical brochure design. Designed in Adobe InDesign"),
  image("Maxebiz — business marketing", indesign + "maxebiz.jpg", "Maxebiz",
    "Marketing flyer and leaflet design. Designed in Adobe InDesign"),
  image("New business — Build your brand", indesign + "brocher design.jpg", "Build your brand",
    "New business brochure design. Designed in Adobe InDesign"),

  // ── Photoshop ──
  image("Banner Design", photoshop + "ps-bannerdesign.png", "Banner Design",
    "Creative banner composition and layout design."),
  image("Color Transformation", photoshop + "ps-colortransformation.png", "Color Transformation",
    "Advanced color grading and tonal adjustment work."),
  image("Digital Painting", photoshop + "ps-digitalpainting.png", "Digital Painting",
    "Digital artistry and brushwork illustration."),
  image("Character Art", photoshop + "ps-digitalpainting2.png", "Digital Painting 2",
    "Detailed character digital painting."),
  image("Color Match", photoshop + "ps-imagecolormatch.png", "Color Match",
    "Precise color matching and correction."),
  image("Displacement Maps", photoshop + "ps-imagedisplacement.png", "Displacement",
    "Texture displacement and surface mapping."),
  image("Image Manipulation", photoshop + "ps-imagemanipulation.png", "Image Manipulation",
    "Creative composite and photo manipulation."),
  image("Poster Design", photoshop + "ps-posterdesign.png", "Poster Design",
    "Graphic design for event promotional posters."),
  image("Typography Art", photoshop + "ps-typography.png", "Typography",
    "Expressive typography and text layout."),

  // ── Illustrator ──
  image("Ad Poster", illustrator + "ai-adposter.png", "Ad Poster",
    "Vector-based advertising poster design."),
  image("Brochure Design", illustrator + "ai-broucher-design.png", "Brochure",
    "Corporate brochure and layout design."),
  image("Logo Design", illustrator + "ai-logo-design.png", "Logo Design",
    "Brand identity and logo creation."),
  image("Mesh Tool Art", illustrator + "ai-meshtool.png", "Mesh Tool",
    "Photorealistic vector art using mesh tool."),
  image("Minimal Art", illustrator + "ai-minimal.png", "Minimal Art",
    "Minimalist vector illustration."),
  image("Vector Conversion", illustrator + "ai-tri-vector-coversion.png", "Vector Conversion",
    "Raster to vector conversion and clean-up."),

  // ── Web Design ──
  image("App UI Design", web + "app-ui-design.png", "App UI",
    "Mobile application user interface design."),
  image("Coded Web UI", web + "web-ui-coded.png", "Web UI Coded",
    "Front-end development and UI implementation."),
  image("Web UI Design", web + "web-ui-design.png", "Web UI",
    "Website visual design and wireframing."),
];

// Early Photoshop / Illustrator / web pieces are portfolio sheets with explanatory
// text on them; they sit behind a toggle so the finished InDesign work leads.
const adobeDesignCurated = adobeDesign.map((e) =>
  e.media.kind === "image" && !e.media.src.startsWith(indesign) ? { ...e, archive: true } : e,
);

const videoProduction: GalleryEntry[] = [
  youtube(
    "Amazon Prime Advertisement",
    "https://www.youtube.com/embed/ZawZqqkNBlE?si=U3Fdn0qT-u5sxpYA",
    "YouTube video player",
    "Concept, direction and editing by Seetha Ram. Produced for an Amazon internal event, 2016.",
  ),
  youtube(
    "Control Zindagi — short film",
    "https://www.youtube.com/embed/18ofs9Gq0sY?si=AmuyG6MSCc3h93Y3",
    "Control Zindagi — short film",
    <>
      Written, directed and edited by Seetha Ram <br />
      Produced for an Amazon internal event, 2019.
    </>,
  ),
  youtube(
    "Mashup video — DJ mix",
    "https://www.youtube.com/embed/LaTPGf0PrhY?si=ecdIMpPqi-4_el0k",
    "Mashup video, 2014",
    "Advanced video editing and visual effects mixing in Adobe Premiere and After Effects.",
  ),
  youtube(
    "In My Dreams — short film",
    "https://www.youtube.com/embed/-9tS2CNrR6g?si=1NfHdmJytsfaxTgK",
    "YouTube video player",
    <>
      Written, directed and edited by Seetha Ram <br />
      Produced as an ICAT college project, 2014–2015.
    </>,
  ),
  youtube(
    "In My Dreams — trailer cut",
    "https://www.youtube.com/embed/FjVPsLxO1NI?si=lhxij4S0A1s9jr0u",
    "In My Dreams — trailer cut",
    "Trailer editing and post-production by Seetha Ram.",
  ),
];

const behanceProjects: GalleryEntry[] = [
  behance("Nike - Find Your Greatness", "57088535", <>
    Advertising campaign for Nike. <br />
    Concept: Dedication and hard work of an athlete.
  </>),
  behance("2D character animation edits", "243864495",
    "Animation and Editing practice using Adobe After Effects."),
  behance("Motion design & graphics", "243863859",
    "Motion design and graphics practice using Adobe After Effects."),
  behance("Visual effects & roto", "243865571",
    "Visual effects and roto practice using Mocha Pro, Premiere Pro and After Effects."),
];

export const designTabs: GalleryTab[] = [
  {
    id: "works-adobe-design",
    label: "Adobe Design",
    heading: "Graphic design — print & editorial",
    viewAllTitle: "Adobe Design Works",
    entries: adobeDesignCurated,
  },
  {
    id: "works-archive-video",
    label: "Video Production",
    heading: "Film & editing — direction and post-production",
    viewAllTitle: "Video Editing and Production",
    entries: videoProduction,
  },
  {
    id: "works-projects",
    label: "Behance Projects",
    heading: "Motion & VFX — pre-AI era work",
    viewAllTitle: "Behance Featured Projects",
    entries: behanceProjects,
  },
];
