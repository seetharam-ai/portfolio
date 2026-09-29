export const navLinks = [
  { href: "#introduction", label: "Home" },
  { href: "#ai-creative-works", label: "Creatives" },
  { href: "#generative-ai-works", label: "GenAI" },
  { href: "#Recent-works", label: "Recent Works" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Design" },
  { href: "#edu-certificates", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  name: "Seetha rama swamy",
  role: "Gen AI Multimedia Specialist (Creative Tech)",
  tagline:
    "I create production-ready AI-generated visual content through prompt engineering, creative automation, image retouching, and 3D workflows. Backed by 10+ years in multimedia production and creative quality assurance, I transform ideas into visually compelling, technically accurate, and commercially effective experiences.",
  photo: "images/SR_Portfolio_pic.png",
  links: [
    { label: "Github", href: "https://github.com/seetharam-ai" },
    {
      label: "View CV",
      href: "https://drive.google.com/file/d/1LG2MgQAVIjdbkUgWvYfKx1WwqXj6U49D/view?usp=sharing",
    },
    {
      label: "Linked in",
      href: "https://www.linkedin.com/in/seetha-rama-swamy-thota-3bbbb385/",
    },
  ],
};

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
    title: "Product Transfer with JSON prompt",
    src: "images/creative_works/Product_Transfer_01.png",
    alt: "Product Transfer with Prompt",
  },
  {
    title: "Editorial product - AI Image to Image and Video Prompting",
    src: "images/creative_works/prompt_watch_product.png",
    alt: "Product Transfer with Prompt",
  },
  {
    title: "Digital Composition with Photoshop & ComfyUI",
    src: "images/creative_works/creative output_sample_01.png",
    alt: "Digital Composition",
  },
  {
    title: "AI Image upscale and color correction",
    src: "images/creative_works/Image_upscale_cc.png",
    alt: "AI Image upscale and color correction",
  },
  {
    title: "AI Product and elements transfer",
    src: "images/creative_works/F1_with_CC.png",
    alt: "AI Product and elements transfer",
  },
  {
    title: "Photo manipulation and Retouched Composition",
    src: "images/creative_works/F2_with_CC.png",
    alt: "Photo manipulation and Retouched Composition",
  },
  {
    title: "AI-assisted Image upscale, shadow creation and creative Composition",
    src: "images/creative_works/Image_comp_01.png",
    alt: "AI-assisted Image upscale, shadow creation and creative Composition",
  },
  {
    title: "AI-assisted Image upscale, color corrections and creative Composition",
    src: "images/creative_works/Image_comp_02.png",
    alt: "AI-assisted Image upscale, color corrections and creative Composition",
  },
];

export const journey: { role: string; logo: string; logoAlt: string; details: string[] }[] = [
  {
    role: "Subject Matter Expert | Global Quality & Automation",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Responsible for maintaining high-quality standards and providing technical support for large-scale Amazon 3D operations.",
      "Developed scalable creative standards for 3D assets, and collaborated with SDEs to resolve latency and visual quality issues, achieving a 35% defect reduction and $18M in annual cost avoidance.",
      "Managed end-to-end content quality assurance for high-profile global brand launches, including Nike, Saks, and Michael Kors.",
    ],
  },
  {
    role: "Quality Assurance Lead | Global Operations",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Responsible for global QA operations and the performance of 70+ members across multiple Indian hubs, including Chennai, Bengaluru, and Hyderabad.",
      "Initiated and directed the UI/UX redesign of internal QA applications, partnering with engineers to integrate workflow automation and smarter data capture, which successfully delivered a 30% reduction in manual review time and a 10% increase in overall QA productivity.",
    ],
  },
  {
    role: "3D Content Creator",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Responsible for delivering high-quality, production-ready 3D assets for footwear, furniture, electronics, and home appliance categories. This included expert modeling, texturing, and lighting across complex pipelines for real-time and interactive experiences using Maya, Substance Painter, ZBrush, and Photoshop.",
      "I drove pipeline automation and tooling improvements by integrating Maya, Substance Painter, and Photoshop using PyMEL, which increased workflow efficiency by 10% and significantly reduced manual errors.",
    ],
  },
  {
    role: "Video Editor",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Responsible for post production of product videos for Amazon Fashion (apparel, shoes, jewelry, toys) using Premiere Pro, After Effects, and DaVinci Resolve.",
      "I established global production video editing SOP across international studios to ensure scalability and efficiency.",
      "By designing automation templates and scripts, I improved editing speed by 2x and significantly reduced manual effort for shoe video production.",
    ],
  },
  {
    role: "2D Content Creator",
    logo: "images/amazon-logo-black.png",
    logoAlt: "Amazon Logo",
    details: [
      "Responsible for high-volume image post-production and quality assurance for Amazon’s 3P projects and global platforms, including Junglee and Quidsi.",
      "I managed complex retouching and specialized style guide adherence for major brands like Mango, Senco, and Cotopaxi, ensuring 100% client satisfaction under tight deadlines.",
      "I provided high-end retouching for the CVFF 2015 winners, supporting emerging fashion talent through the JFK13 Studio. I also pioneered workflow improvements for 3P projects, utilizing URL-based batch processing to enhance team delivery speed.",
    ],
  },
  {
    role: "Independent Designer",
    logo: "images/sr-logo.png",
    logoAlt: "SR Logo",
    details: [
      "Created branding, UI/UX systems, and motion design campaigns for diverse clients in e-commerce and gaming.",
      "Produced and directed visually compelling advertisements and short-films, focusing on digital storytelling and user engagement.",
    ],
  },
];

export const socialLinks = [
  { href: "https://www.behance.net/seetharamaswamy", icon: "icons/social/behance.png", alt: "Behance" },
  { href: "https://github.com/seetharamdesign", icon: "icons/social/github.png", alt: "GitHub" },
  {
    href: "https://www.linkedin.com/in/seetha-rama-swamy-thota-3bbbb385",
    icon: "icons/social/linkedin.png",
    alt: "LinkedIn",
  },
  { href: "https://x.com/tsrs8777", icon: "icons/social/twitter.png", alt: "Twitter" },
  { href: "https://www.instagram.com/sr_complicated/", icon: "icons/social/instagram.png", alt: "Instagram" },
  { href: "https://www.facebook.com/seetharam8777/", icon: "icons/social/facebook.png", alt: "Facebook" },
  { href: "https://www.youtube.com/@SeethaRamaSwamyThota", icon: "icons/social/youtube.png", alt: "Youtube" },
  { href: "https://discord.com/users/698506764110528555", icon: "icons/social/discord.png", alt: "discord" },
];

export const whatsappLink = "https://wa.me/9542117213";
