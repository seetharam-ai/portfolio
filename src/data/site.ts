/** Top-level views, switched from the header (URL hash: #work, #skills, ...). */
export const views = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
] as const;

export type ViewId = (typeof views)[number]["id"];

const CV_URL = "https://drive.google.com/file/d/1LG2MgQAVIjdbkUgWvYfKx1WwqXj6U49D/view?usp=sharing";
const LINKEDIN_URL = "https://www.linkedin.com/in/seetha-rama-swamy-thota";
const GITHUB_URL = "https://github.com/seetharam-ai";

export const hero = {
  fullName: "Seetha Rama Swamy Thota",
  shortName: "Seetha Ram",
  role: "Creative Specialist · Artwork & Visual Quality",
  hook: "I craft production-ready visuals — retouched, composited and quality-checked to a global standard, with AI where it helps.",
  tagline:
    "I create production-ready AI-generated visual content through prompt engineering, creative automation, image retouching, and 3D workflows. Backed by 10+ years in multimedia production and creative quality assurance, I transform ideas into visually compelling, technically accurate, and commercially effective experiences.",
  photo: "images/SR_Portfolio_pic.png",
  logo: "images/sr-logo.png",
  cv: CV_URL,
  currentRole: "GenAI Content Specialist",
  currentOrg: "Freelance · 2026 – Present",
  location: "Bengaluru, India",
  email: "ramaswamy8777@gmail.com",
  phone: "+91 95421 17213",
  links: [
    { label: "GitHub", href: GITHUB_URL },
    { label: "LinkedIn", href: LINKEDIN_URL },
  ],
};

/** Headline numbers shown on the home view (taken from the career history). */
export const stats = [
  { value: "10+", label: "Years in image editing, design & multimedia" },
  { value: "35%", label: "Fewer content defects · ~$18M cost avoidance" },
  { value: "80%", label: "Assets auto-published via a QA tool I launched" },
  { value: "70+", label: "QA specialists led and mentored" },
];

/**
 * "How I work" — the review loop applied to every asset. Mirrors how an
 * artwork team works: intent → judgment → correction → feedback to tools.
 */
export const reviewLoop: { title: string; text: string; proof: string }[] = [
  {
    title: "Read the intent",
    text: "Start from the brief, metadata and references — what should this image make people feel?",
    proof: "Editorial & brand standards",
  },
  {
    title: "Make the call",
    text: "Judge compliance, composition and appeal against the standard — then decide.",
    proof: "Benchmark for 70+ reviewers",
  },
  {
    title: "Fix it myself",
    text: "Retouch, recompose or re-crop until it's compelling — not escalate it.",
    proof: "10+ years retouching & compositing",
  },
  {
    title: "Close the loop",
    text: "Turn each decision into structured feedback, so tools and teams improve.",
    proof: "QA tool: 80% auto-published",
  },
];

/** One line on AI, under the loop. */
export const aiStance = "AI assists at every step — generation, clean-up, detection. Taste and the final call stay human.";

export const expertise: { title: string; subtitle?: string; text: string }[] = [
  {
    title: "AI Content Generation",
    subtitle: "Turning latent space to pixels",
    text: "Creating high-fidelity AI-generated images and videos using diffusion models, advanced prompt engineering, multimodal AI workflows, and iterative refinement to deliver commercial-quality visual assets.",
  },
  {
    title: "Creative Automation",
    text: "Building scalable creative workflows using Python, ComfyUI, Adobe Firefly and AI tools to automate content generation, image processing, and production pipelines.",
  },
  {
    title: "3D & Visual Production",
    text: "Combining 3D workflows, digital imaging, and AI to create production-ready visual assets for e-commerce, marketing, and immersive experiences.",
  },
  {
    title: "Creative Quality Assurance",
    text: "Ensuring visual excellence through technical validation, product accuracy, retouching, and AI artifact detection while maintaining brand and editorial standards.",
  },
];

export const aiCreativeWorks: { title: string; src: string; alt: string }[] = [
  {
    title: "Product transfer with a JSON prompt",
    src: "images/creative_works/Product_Transfer_01.png",
    alt: "Product Transfer with Prompt",
  },
  {
    title: "Editorial product — AI image-to-image and video prompting",
    src: "images/creative_works/prompt_watch_product.png",
    alt: "Product Transfer with Prompt",
  },
  {
    title: "Digital Composition with Photoshop & ComfyUI",
    src: "images/creative_works/creative output_sample_01.png",
    alt: "Digital Composition",
  },
  {
    title: "AI image upscale and color correction",
    src: "images/creative_works/Image_upscale_cc.png",
    alt: "AI image upscale and color correction",
  },
  {
    title: "AI Product and elements transfer",
    src: "images/creative_works/F1_with_CC.png",
    alt: "AI Product and elements transfer",
  },
  {
    title: "Photo manipulation and retouched composition",
    src: "images/creative_works/F2_with_CC.png",
    alt: "Photo manipulation and retouched composition",
  },
  {
    title: "AI-assisted upscale, shadow creation and composition",
    src: "images/creative_works/Image_comp_01.png",
    alt: "AI-assisted upscale, shadow creation and composition",
  },
  {
    title: "AI-assisted upscale, color correction and composition",
    src: "images/creative_works/Image_comp_02.png",
    alt: "AI-assisted upscale, color correction and composition",
  },
];

export interface Job {
  role: string;
  org: string;
  location?: string;
  period: string;
  /** One-line summary used in the home snapshot. */
  summary: string;
  /** Headline number shown beside the role in the home snapshot (from the CV). */
  highlight?: { value: string; label: string };
  logo: string;
  logoAlt: string;
  details: string[];
}

// Most recent first. Roles, dates and bullets follow the CV.
export const journey: Job[] = [
  {
    role: "GenAI Content Specialist",
    org: "Freelance",
    location: "Bengaluru",
    period: "2026 – Present",
    highlight: { value: "50%", label: "faster prompt iteration" },
    summary:
      "AI product imagery and marketing visuals; 10+ reusable ComfyUI workflows and prompt frameworks that cut iteration time by 50%.",
    logo: "images/sr-logo.png",
    logoAlt: "SR Logo",
    details: [
      "Create AI-generated product imagery and marketing visuals using advanced prompt engineering, diffusion models, and multimodal AI workflows.",
      "Design ComfyUI workflows for image generation, editing, upscaling, and visual enhancement to produce commercially ready content.",
      "Built reusable prompt frameworks that reduced prompt iteration time by 50% while improving output consistency across projects.",
      "Evaluate AI-generated imagery for product accuracy, visual fidelity, composition, lighting, and common artifacts, including distorted geometry, unrealistic shadows, and spatial inconsistencies.",
      "Developed 10+ reusable ComfyUI workflows for AI image generation and editing, improving workflow consistency and reducing manual effort.",
    ],
  },
  {
    role: "Subject Matter Expert",
    org: "Amazon",
    location: "Hyderabad",
    period: "2024 – 2025",
    highlight: { value: "$18M", label: "annual cost avoidance" },
    summary:
      "Launched a Self-Service QA Tool (80% of assets published without manual review, ~$1M/yr savings); cut defects 35% for ~$18M cost avoidance.",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Led large-scale visual content initiatives, partnering with engineering, product, and design teams to improve content quality, scalability, and customer experience.",
      "Managed end-to-end digital asset pipelines, including intake, evaluation, workflow optimization, quality validation, and publication readiness across global marketplaces.",
      "Designed and launched the Self-Service QA Tool, enabling 80% of assets to be published without manual intervention and delivering approximately $1M in annual operational savings.",
      "Led global quality improvement initiatives that reduced content defects by 35%, contributing to approximately $18M in annual cost avoidance.",
      "Managed end-to-end content quality assurance for high-profile global brand launches, including Nike, Saks, and Michael Kors.",
    ],
  },
  {
    role: "Quality Assurance Team Lead",
    org: "Amazon",
    location: "Hyderabad",
    period: "2021 – 2024",
    highlight: { value: "70+", label: "specialists led" },
    summary:
      "Led 70+ QA specialists across locations; redesigned QA tools with engineering and UX, cutting manual review effort by 30%.",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Led global quality operations supporting Amazon's visual content production across multiple marketplaces.",
      "Partnered with engineering and UX teams to redesign internal QA applications, introducing automation and smarter workflow tracking.",
      "Reduced manual review effort by 30% and increased QA productivity by 10% through process optimization.",
      "Managed and mentored a team of 70+ QA specialists across multiple locations, driving performance, training, and operational excellence.",
    ],
  },
  {
    role: "3D Artist",
    org: "Amazon",
    location: "Hyderabad",
    period: "2018 – 2021",
    highlight: { value: "+10%", label: "production efficiency" },
    summary:
      "3D assets for footwear, furniture, electronics and home in Maya, Substance Painter and ZBrush; PyMEL tools lifted efficiency 10%.",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Produced high-quality 3D assets for footwear, furniture, electronics, and home categories, supporting Amazon's e-commerce experiences.",
      "Specialized in 3D modelling, texturing, lighting, rendering, and product visualization using Autodesk Maya, Substance Painter, ZBrush, and Photoshop.",
      "Developed Python (PyMEL) automation tools that improved production efficiency by 10% and reduced repetitive manual tasks.",
    ],
  },
  {
    role: "Video Editor",
    org: "Amazon",
    location: "Chennai",
    period: "2016 – 2017",
    highlight: { value: "2×", label: "video production speed" },
    summary:
      "Customer-facing product videos for Amazon Fashion; Premiere Pro and After Effects templates doubled production efficiency.",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Produced customer-facing product videos for Amazon Fashion, managing end-to-end post-production workflows.",
      "Developed Adobe Premiere Pro and After Effects automation templates that doubled video production efficiency.",
      "Established global video production standards and SOPs to improve consistency across international studios.",
    ],
  },
  {
    role: "Digital Imaging Associate",
    org: "Amazon",
    location: "Chennai",
    period: "2015 – 2016",
    summary:
      "High-volume product imagery, retouching and color correction for Amazon marketplaces and brands including Mango, Senco and Cotopaxi.",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Produced high-volume product imagery for Amazon marketplaces while maintaining global visual quality standards.",
      "Performed advanced image retouching, color correction, lighting adjustments, background removal, and editorial enhancements for retail and premium brands, including Mango, Senco, and Cotopaxi.",
      "Improved image production efficiency through workflow automation and batch-processing techniques.",
      "Provided high-end retouching for the CVFF 2015 winners, supporting emerging fashion talent through the JFK13 Studio.",
    ],
  },
  {
    role: "Independent Designer",
    org: "Freelance",
    period: "Earlier",
    summary: "Branding, UI/UX systems and motion campaigns for e-commerce and gaming clients.",
    logo: "images/sr-logo.png",
    logoAlt: "SR Logo",
    details: [
      "Created branding, UI/UX systems, and motion design campaigns for diverse clients in e-commerce and gaming.",
      "Produced and directed visually compelling advertisements and short-films, focusing on digital storytelling and user engagement.",
    ],
  },
];

export const socialLinks: { href: string; icon: string; alt: string }[] = [
  { href: "https://www.behance.net/seetharamaswamy", icon: "icons/social/behance.png", alt: "Behance" },
  { href: GITHUB_URL, icon: "icons/social/github.png", alt: "GitHub" },
  { href: LINKEDIN_URL, icon: "icons/social/linkedin.png", alt: "LinkedIn" },
  { href: "https://x.com/tsrs8777", icon: "icons/social/twitter.png", alt: "Twitter" },
  { href: "https://www.instagram.com/sr_complicated/", icon: "icons/social/instagram.png", alt: "Instagram" },
  { href: "https://www.facebook.com/seetharam8777/", icon: "icons/social/facebook.png", alt: "Facebook" },
  { href: "https://www.youtube.com/@SeethaRamaSwamyThota", icon: "icons/social/youtube.png", alt: "Youtube" },
  { href: "https://discord.com/users/698506764110528555", icon: "icons/social/discord.png", alt: "discord" },
];

// wa.me needs the country code (91) to resolve the number.
export const whatsappLink = "https://wa.me/919542117213";
