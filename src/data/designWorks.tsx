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
  image("Omega - Made for men who lead", indesign + "Omega_brand_watch.png", "Omega Brand Watch",
    "Editorial design for print magazines. Designed in Adobe Indesign"),
  image("South scope - Editorial design", indesign + "id-magazine.png", "Magazine",
    "Editorial design for print magazines. Designed in Adobe Indesign"),
  image("GYM - Print Poster", indesign + "gym.jpg", "GYM Print Poster",
    "Get off social media and get in gym campaignLarge format print poster design."),
  image("Nandini Palace - add spice to your life", indesign + "nandini.jpg", "Nandini Palace",
    "Marketing flyer and leaflet design. Designed in Adobe Indesign"),
  image("Med Plus - Health Care", indesign + "med plus design.jpg", "Med Plus",
    "Medical brochure design. Designed in Adobe Indesign"),
  image("Maxebiz - Business marketing", indesign + "maxebiz.jpg", "Maxebiz",
    "Marketing flyer and leaflet design. Designed in Adobe Indesign"),
  image("New Business - Build your brand", indesign + "brocher design.jpg", "Build your brand",
    "New business brochure design. Designed in Adobe Indesign"),

  // ── Photoshop ──
  image("Banner Design", photoshop + "ps-bannerdesign.png", "Banner Design",
    "Creative banner composition and layout design."),
  image("Color Transformation", photoshop + "ps-colortranformation.png", "Color Transformation",
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

const videoProduction: GalleryEntry[] = [
  youtube(
    "Amazon Prime Advertisement",
    "https://www.youtube.com/embed/ZawZqqkNBlE?si=U3Fdn0qT-u5sxpYA",
    "YouTube video player",
    "Concept, direction and video editing by Seetha ram. Produced for Amazon internal bash 2016.",
  ),
  youtube(
    "Control Zindhagi - Shortflim",
    "https://www.youtube.com/embed/18ofs9Gq0sY?si=AmuyG6MSCc3h93Y3",
    "Control Zindhagi - Shortflim - YouTube video player",
    <>
      Written, directed and edited by Seetha ram <br />
      Produced for Amazon internal bash 2019.
    </>,
  ),
  youtube(
    "Mashup Video - DJ mixing",
    "https://www.youtube.com/embed/LaTPGf0PrhY?si=ecdIMpPqi-4_el0k",
    "Mashup Video 2014 - YouTube video player",
    "Advanced video editing and visual effects mixing in Adobe Premiere and After Effects.",
  ),
  youtube(
    "In My Dreams - Shortflim",
    "https://www.youtube.com/embed/-9tS2CNrR6g?si=1NfHdmJytsfaxTgK",
    "YouTube video player",
    <>
      Written, directed and edited by Seetha ram <br />
      Produced for ICAT college project 2014 - 2015.
    </>,
  ),
  youtube(
    "In My Dreams - Shortflim Trailer cut",
    "https://www.youtube.com/embed/FjVPsLxO1NI?si=lhxij4S0A1s9jr0u",
    "In My Dreams - Shortflim Trailer cut - YouTube video player",
    "Trailer editing and post-production work by Seetha ram",
  ),
];

const behanceProjects: GalleryEntry[] = [
  behance("Nike - Find Your Greatness", "57088535", <>
    Advertising campaign for Nike. <br />
    Concept: Dedication and hard work of an athlete.
  </>),
  behance("Animation 2D charecter Edits", "243864495",
    "Animation and Editing practice using Adobe After Effects."),
  behance("Motion design & graphics", "243863859",
    "Motion design and graphics practice using Adobe After Effects."),
  behance("Visual effects & Roto", "243865571",
    "Visual effects and roto practice using Mocha pro, premier pro and Adobe After Effects."),
];

export const designTabs: GalleryTab[] = [
  {
    id: "works-adobe-design",
    label: "Adobe Design",
    heading: "Adobe Creative suite - Design Works",
    viewAllTitle: "Adobe Design Works",
    entries: adobeDesign,
  },
  {
    id: "works-archive-video",
    label: "Video Production",
    heading: "Video Editing and Production Works",
    viewAllTitle: "Video Editing and Production",
    entries: videoProduction,
  },
  {
    id: "works-projects",
    label: "Behance Projects",
    heading: "Pre-AI Era Works",
    viewAllTitle: "Behance Featured Projects",
    entries: behanceProjects,
  },
];
