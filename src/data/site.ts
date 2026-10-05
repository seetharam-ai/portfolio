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

const CV_URL = "https://drive.google.com/file/d/1kGvXn2G3ezUDVLRpYphCGDkVA69Lj3zo/view?usp=sharing";
const LINKEDIN_URL = "https://www.linkedin.com/in/seetha-rama-swamy-thota";
const GITHUB_URL = "https://github.com/seetharam-ai";

export const hero = {
  fullName: "Seetha Rama Swamy Thota",
  shortName: "Seetha Ram",
  role: "Creative Specialist · Artwork, Video & Visual Quality",
  /** Short tags under the home headline. */
  focus: ["Key art & localization", "Video & storytelling", "Creative tech & AI", "Project management"],
  /** Home intro: a bold opening line, short paragraphs, then a bold sign-off. */
  intro: {
    headline: "I produce and refine artwork and video to a global quality bar — and help define the standards reviewers work to.",
    paragraphs: [
      "I’ve produced and corrected customer-facing content for global audiences, built quality standards used by 300+ creators and reviewers, and translated creative judgment into SOPs, UAT, and actionable tool feedback.",
      "Today, I bring that experience to key art, posters and localized title artwork — using AI to accelerate exploration and production while keeping the final judgment human.",
    ],
    signoff: "Award-winning filmmaker. Visual storytelling for streaming.",
  },
  tagline:
    "I create production-ready AI-generated visual content through prompt engineering, creative automation, image retouching, and 3D workflows. Backed by 10+ years in multimedia production and creative quality assurance, I transform ideas into visually compelling, technically accurate, and commercially effective experiences.",
  photo: "images/SR_Portfolio_pic.png",
  logo: "images/sr-logo.png",
  cv: CV_URL,
  currentRole: "Generative AI Creative Specialist",
  currentOrg: "Freelance · 2026 – Present",
  location: "Bengaluru, India",
  email: "ramaswamy8777@gmail.com",
  phone: "+91 95421 17213",
  /** From the CV; shown under the intro — relevant to localized artwork. */
  languages: "English · Telugu · Hindi · Tamil",
  links: [
    { label: "Behance", href: "https://www.behance.net/seetharamaswamy" },
    { label: "GitHub", href: GITHUB_URL },
    { label: "LinkedIn", href: LINKEDIN_URL },
  ],
};

/** Headline numbers shown on the home view (taken from the career history). */
export const stats = [
  { value: "10+", label: "Years in image editing, design & multimedia" },
  { value: "35%", label: "Fewer content defects through a program I led" },
  { value: "80%", label: "Assets auto-published via a QA tool I launched" },
  { value: "300+", label: "Creators & reviewers calibrated to my standards" },
];

/**
 * "How I work" — the review loop applied to every asset. Mirrors how an
 * artwork team works: intent → judgment → correction → feedback to tools.
 */
export const reviewLoop: { title: string; short: string; text: string; proof: string }[] = [
  {
    title: "Read the intent",
    short: "Brief, metadata, references.",
    text: "Start from the brief, metadata and references — what should this image or video make people feel?",
    proof: "Editorial & brand standards",
  },
  {
    title: "Make the call",
    short: "Compliance, composition, appeal.",
    text: "Judge compliance, composition and appeal against the standard — then decide.",
    proof: "Standard for 300+ creators & reviewers",
  },
  {
    title: "Fix it myself",
    short: "Retouch, recompose, re-edit.",
    text: "Retouch, recompose, re-crop or re-edit until it's compelling — not escalate it.",
    proof: "10+ years in imaging, video & 3D",
  },
  {
    title: "Close the loop",
    short: "Feedback that improves tools.",
    text: "Turn each decision into structured feedback, so tools and teams improve.",
    proof: "UAT on 2 QA tools · +10% productivity YoY",
  },
];

/** One line on AI, under the loop. */
export const aiStance = "AI assists at every step — generation, clean-up, detection. Taste and the final call stay human.";

/** A link to the work that proves a claim ("See: …"). */
export interface Proof {
  label: string;
  /** "work/<category>" or "work/projects/<project-id>". */
  link: string;
}

export const expertise: { title: string; subtitle?: string; text: string; proof: Proof[] }[] = [
  {
    title: "Artwork & Image Craft",
    proof: [{ label: "The Silent Service", link: "work/projects/the-silent-service" }, { label: "Before / after", link: "work/before-after" }],
    subtitle: "Key art, retouching, compositing",
    text: "Key art and poster composition, photo manipulation and compositing, high-end retouching, color matching, typography and title treatment — adapted across formats with crop and safe-area control.",
  },
  {
    title: "Video & Motion",
    proof: [{ label: "The Last Signal", link: "work/projects/the-last-signal" }, { label: "Video work", link: "work/video" }],
    text: "Post-production for Amazon Fashion product videos in Premiere Pro, After Effects and DaVinci Resolve; set the global video-editing SOP with studios in India, Romania and China; practised Prime Video motion banners to the banner aspect-ratio SOP; AI video generation with Veo, Kling and Seedance.",
  },
  {
    title: "Quality Standards & Judgment",
    proof: [{ label: "Quality bar at Amazon", link: "work/projects/setting-the-quality-bar-for-visual-content-at-scale" }, { label: "The Last Meridian", link: "work/projects/the-last-meridian" }],
    text: "Setting the benchmark others calibrate to: style-guide compliance, visual appeal and engagement calls, defect taxonomies, QA checklists and SOPs adopted by 300+ creators and reviewers.",
  },
  {
    title: "Tools, UAT & Operations",
    proof: [{ label: "Quality bar at Amazon", link: "work/projects/setting-the-quality-bar-for-visual-content-at-scale" }, { label: "AI Image QA Agent", link: "work/projects/ai-image-qa-agent-developed-using-agentic-ai-frameworks-claude" }],
    text: "Owning UAT and rollout for production QA tools, and turning hands-on craft judgment into structured feedback for science and engineering teams.",
  },
  {
    title: "Responsible AI in Production",
    proof: [{ label: "Apparel transfer", link: "work/projects/apparel-shoe-transfer-from-a-product-reference" }, { label: "Retouching SOP", link: "work/projects/ai-assisted-image-retouching-upscaling-workflow-photoshop-generative-ai" }],
    text: "Human-in-the-loop AI editing and evaluation — fidelity, artifacts, hallucinated elements — with quality and ethical guardrails, so AI augments the craft and the final call stays human.",
  },
  {
    title: "Filmmaking & Storytelling",
    proof: [{ label: "Control Zindagi", link: "work/projects/control-zindagi" }, { label: "Nike spec ad", link: "work/projects/nike-find-your-greatness" }],
    text: "Wrote, directed and edited short films and ad films end to end — two Amazon Bash winners — turning creative intent into visuals, pacing, tone and title-led key art.",
  },
];

/** AI creatives grid (Work → AI creatives). Pairs already shown in Before / after are not repeated here. */
export const aiCreativeWorks: { title: string; src: string; alt: string; description: string }[] = [
  {
    title: "Product transfer with a JSON prompt",
    src: "images/creative_works/Product_Transfer_01.png",
    alt: "Product transfer with a structured JSON prompt",
    description:
      "A product reference placed into the input scene with a structured JSON prompt, so the shoe's color, material and details carry over.",
  },
  {
    title: "Watch editorial — still to motion",
    src: "images/creative_works/prompt_watch_product.png",
    alt: "Watch editorial pipeline from reference image to video",
    description:
      "Reference image → background-change prompt (Nano Banana) → Photoshop Generative Expand → Wan 2.2 image-to-video in ComfyUI. The finished video is in Work → Video.",
  },
  {
    title: "Campaign composite from product and AI elements",
    src: "images/creative_works/creative output_sample_01.png",
    alt: "Product reference and AI-generated elements composited into one campaign image",
    description:
      "A product reference and AI-generated elements (balloons, butterflies, sandals) composited in Photoshop into one campaign image.",
  },
  {
    title: "Photo manipulation and retouched composition",
    src: "images/creative_works/F2_with_CC.png",
    alt: "Fisheye streetwear composition in a skate park",
    description: "A fisheye streetwear composition in a skate park, retouched and color-corrected in Photoshop.",
  },
  {
    title: "AI-assisted upscale, shadow creation and composition",
    src: "images/creative_works/Image_comp_01.png",
    alt: "Low-angle carnival composition with footwear",
    description: "A low-angle carnival composition, upscaled, with shadows built so the product sits naturally in the scene.",
  },
  {
    title: "AI-assisted upscale, color correction and composition",
    src: "images/creative_works/Image_comp_02.png",
    alt: "Skate-park composition with sneakers",
    description: "A skate-park composition, upscaled and color-corrected to keep the sneakers the hero.",
  },
];

export interface Job {
  role: string;
  org: string;
  location?: string;
  period: string;
  /** One-line summary used in the home snapshot. */
  summary: string;
  /** Scope label shown as a pill beside the title (the title itself stays official). */
  scope?: string;
  /** Headline number shown beside the role in the home snapshot (from the CV). */
  highlight?: { value: string; label: string };
  logo: string;
  logoAlt: string;
  details: string[];
}

// Most recent first. Roles, dates and bullets follow the CV.
export const journey: Job[] = [
  {
    role: "Generative AI Creative Specialist",
    org: "Freelance",
    location: "Bengaluru",
    period: "2026 – Present",
    highlight: { value: "8", label: "campaign looks to final" },
    summary:
      "AI-assisted artwork finishing with a human craft call on every output; 8 footwear-campaign looks taken from art direction to final with a studio and ad agency.",
    logo: "images/sr-logo.png",
    logoAlt: "SR Logo",
    details: [
      "AI-assisted artwork finishing: produce and refine commercial-grade imagery with Photoshop Generative Fill/Expand, Firefly and diffusion models, keeping a human craft decision on every output. Authored an AI retouch-and-upscale SOP that sets when and how AI is applied without altering colors, shapes, framing or subject identity.",
      "Studio & agency collaboration: partnered with a creative studio and ad agency on a footwear brand campaign, taking 8 looks from art direction to final approved artwork — Gemini Nano Banana 2 and Nano Banana Pro for base imagery, composited and finished in Photoshop, detail refined with Flux 2 Pro — validating every look against the art direction and brand intent.",
      "Quality evaluation: evaluate AI-generated imagery for fidelity, composition, lighting and artifacts (distorted geometry, false shadows, spatial inconsistencies, hallucinated elements); built an AI Image QA Agent prototype that turns reviewer criteria into consistent, structured evaluation signal.",
      "Workflows & prompt frameworks: built 10+ reusable ComfyUI workflows and prompt frameworks that cut prompt iteration time by 50% and improved output consistency across projects.",
    ],
  },
  {
    role: "Subject Matter Expert – Visual Content Quality",
    scope: "Program & project management",
    org: "Amazon",
    location: "Hyderabad",
    period: "2024 – 2025",
    highlight: { value: "35%", label: "fewer content defects" },
    summary:
      "Owned the quality benchmark for customer-facing visuals and ran its programs end to end: 35% fewer defects and a self-service QA tool taken from framework through UAT to 80% self-service publication.",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Project & program management: ran the Defect Elimination Program and the Self-Service QA Tool launch end to end — from framework and cross-functional partners (SDE, product, CX) to UAT, production rollout and adoption — tracked through weekly quality reviews and WBR reporting, with Lean Six Sigma (DMAIC) root-cause analysis.",
      "Quality benchmark owner: set the working quality standard for customer-facing visual assets across global marketplaces; authored SOPs, quality benchmarks and QA checklists adopted by international production and review teams as the calibration reference.",
      "Defect Elimination Program: led skill-gap analysis, weekly quality deep-dives and targeted training to raise first-time approval rates — 35% defect reduction and 18+ hours of weekly rework removed.",
      "Self-Service QA Tool (SQT) – UAT & rollout: designed the end-to-end review framework, partnered with SDEs on features, owned UAT and production rollout, and drove adoption — 80% self-service publication and QA costs cut by 75%.",
      "Cross-functional craft feedback: owned pre- and post-publication visual QA for immersive experiences (View in 3D, Virtual Try-On, View in Your Room) on Web, iOS and Android; turned visual defects into structured, reproducible feedback for SDE and CX teams to fix compression, latency and fidelity issues upstream.",
      "Premium brand launches: owned creative quality and publishing for high-profile launches including Nike, Saks, Michael Kors and Amazon Private Labels, balancing brand guidelines with marketplace standards under tight timelines.",
    ],
  },
  {
    role: "Quality Assurance Team Lead",
    org: "Amazon",
    location: "Hyderabad",
    period: "2021 – 2024",
    highlight: { value: "70+", label: "specialists led" },
    summary:
      "Led and mentored 70+ QA specialists across three cities; led UAT on the redesigned QA tool — 30% less manual review, 10% higher productivity.",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Team leadership: led global QA operations and mentored 70+ QA specialists across Chennai, Bengaluru and Hyderabad; delivered quality performance insights for 300+ content professionals across India and international sites.",
      "QA tool redesign: identified review inefficiencies, directed the UI/UX redesign of the browser-based QA application, secured senior SDE leadership buy-in and led UAT for workflow automation and smarter data capture (scale and color utilities) — manual review time down 30%, QA productivity up 10% year over year.",
      "Training & onboarding: onboarded and certified 50+ new associates through structured training plans and standardized SOPs, reaching 100% production readiness; owned global defect-reporting queues with consistent SLA adherence.",
    ],
  },
  {
    role: "3D Artist",
    org: "Amazon",
    location: "Hyderabad",
    period: "2018 – 2021",
    highlight: { value: "+10%", label: "production efficiency" },
    summary:
      "Production-ready 3D assets for footwear, furniture, electronics and home in Maya, Substance Painter and ZBrush; PyMEL automation lifted efficiency 10%.",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "3D production: produced production-ready 3D assets (modeling, texturing, lighting, rendering) for footwear, furniture, electronics and home categories using Maya, Substance Painter, ZBrush and Photoshop.",
      "Pipeline automation: built PyMEL automation linking Maya, Substance Painter and Photoshop, improving efficiency and consistency by 10%.",
      "Standards: co-authored asset guidelines and quality benchmarks with engineering and CX teams.",
    ],
  },
  {
    role: "Video Editor",
    org: "Amazon",
    location: "Chennai",
    period: "2016 – 2018",
    highlight: { value: "2×", label: "editing throughput" },
    summary:
      "Post-production for Amazon Fashion product videos; set a global video-editing SOP with studios in India, Romania and China.",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Post-production: delivered post-production for Amazon Fashion product videos in Premiere Pro, After Effects and DaVinci Resolve.",
      "Global SOP: set a global video-editing SOP with studios in India, Romania and China.",
      "Automation: built automation templates that doubled editing throughput.",
      "Practised Prime Video motion banners: re-edited a feature trailer in After Effects and adapted it to the Prime Video banner aspect-ratio SOP.",
    ],
  },
  {
    role: "Digital Imaging Associate",
    org: "Amazon",
    location: "Chennai",
    period: "2015 – 2016",
    summary:
      "High-volume retouching, color correction and compositing for global platforms and brands including Woot, Mango, Senco and Cotopaxi.",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "High-volume retouching: delivered high-volume retouching, color correction, compositing and background work for global platforms (Junglee, Quidsi) and brands including Woot, Mango, Senco and Cotopaxi.",
      "Brand standards: worked to strict style guides, with 100% client satisfaction.",
      "Fashion retouching: provided high-end retouching for the CVFF 2015 winners, supporting emerging fashion talent through the JFK13 Studio.",
    ],
  },
  {
    role: "Independent Filmmaker – Writer, Director & Editor",
    org: "Part-time",
    period: "2012 – 2019",
    highlight: { value: "2", label: "Amazon Bash awards" },
    summary: "Wrote, directed and edited short films and ad films end to end; two won at Amazon Bash (2016, 2019).",
    logo: "images/sr-logo.png",
    logoAlt: "SR Logo",
    details: [
      "Concept to final cut: wrote, directed and edited short films and ad films end to end, owning pre-production (concept, script, casting, planning), production and post-production (editing, sound, finishing and delivery).",
      "Storytelling craft: shaped each film’s creative intent into visuals, pacing and tone for its audience. Award winner at Amazon Bash for the “Amazon Prime” ad film (2016) and the “Control Zindagi” awareness short film (2019).",
      "Title-led artwork: for “Control Zindagi”, compiled the title overview (synopsis, themes, credits, audience and references) and designed the poster artwork from that brief, so the key art matched the film’s story, tone and message. Also designed branding and motion graphics for films and digital campaigns.",
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
