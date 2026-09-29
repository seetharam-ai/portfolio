export interface Skill {
  name: string;
  icon: string;
  alt: string;
  level: number;
}

export const genAiTools = [
  { label: "ComfyUI", href: "https://cloud.comfy.org/" },
  { label: "n8n", href: "https://n8n.io/" },
  { label: "Ollama", href: "https://ollama.com/" },
  { label: "Hugging Face", href: "https://huggingface.co/models" },
  { label: "Weavy", href: "https://weavy.ai/" },
  { label: "Flow", href: "https://labs.google/flow/about" },
  { label: "Open Art", href: "https://openart.ai/home" },
  { label: "Higgsfield", href: "https://higgsfield.ai/" },
  { label: "Fal", href: "https://fal.ai/" },
  { label: "Luma", href: "https://lumalabs.ai/" },
  { label: "Runway", href: "https://runwayml.com/" },
  { label: "Midjourney", href: "https://midjourney.com/" },
];

export const aiModels =
  "Adobe Firefly - Google Nano Banana & Veo (Flow) - OpenAI Image 2 - Stable Diffusion - Flux - Qwen - Z-Image - Wan - LTXV - Kling";

export const technicalSkills: Skill[] = [
  { name: "ComfyUI - 2D, Video & 3D", icon: "icons/comfyui.png", alt: "comfyui", level: 95 },
  { name: "GitHub - Version Control", icon: "icons/github.png", alt: "github", level: 95 },
  { name: "Python - Scripting", icon: "icons/python.png", alt: "python", level: 96 },
  { name: "JavaScript - Scripting", icon: "icons/js.png", alt: "js", level: 95 },
  { name: "HTML - Scripting", icon: "icons/html.png", alt: "html", level: 100 },
  { name: "CSS - Styling", icon: "icons/css.png", alt: "css", level: 100 },
  { name: "AWS - Cloud Computing", icon: "icons/aws.png", alt: "aws", level: 85 },
  { name: "ChatGPT", icon: "icons/chatgpt.png", alt: "chatgpt", level: 98 },
  { name: "Figma", icon: "icons/figma.png", alt: "figma", level: 96 },
  { name: "Asana", icon: "icons/asana.png", alt: "asana", level: 95 },
  { name: "Tableau", icon: "icons/tableau.png", alt: "tableau", level: 97 },
  { name: "Ftrack", icon: "icons/ftrack.png", alt: "ftrack", level: 96 },
  { name: "Flameshot", icon: "icons/flameshot.png", alt: "flameshot", level: 100 },
  { name: "Creative Cloud", icon: "icons/creative-cloud.png", alt: "creative-cloud", level: 95 },
];

export const productionSkills: Skill[] = [
  { name: "Adobe Photoshop", icon: "icons/photoshop.png", alt: "photoshop", level: 100 },
  { name: "Adobe Illustrator", icon: "icons/illustrator.png", alt: "illustrator", level: 99 },
  { name: "Adobe InDesign", icon: "icons/indesign.png", alt: "indesign", level: 99 },
  { name: "Adobe Lightroom", icon: "icons/photoshop-lightroom.png", alt: "photoshop-lightroom", level: 99 },
  { name: "Adobe After Effects", icon: "icons/after-effects.png", alt: "after-effects", level: 99 },
  { name: "Adobe Premiere Pro", icon: "icons/premiere-pro.png", alt: "premiere-pro", level: 100 },
  { name: "Adobe Audition", icon: "icons/adobe-audition.png", alt: "adobe-audition", level: 99 },
  { name: "Adobe Media Encoder", icon: "icons/media-encoder.png", alt: "media-encoder", level: 99 },
  { name: "Autodesk Maya", icon: "icons/maya.png", alt: "maya", level: 98 },
  { name: "Blender", icon: "icons/Blender.png", alt: "blender", level: 92 },
  { name: "Unreal Engine", icon: "icons/unreal.png", alt: "unreal", level: 93 },
  { name: "ZBrush", icon: "icons/ZBrush_icon.svg", alt: "zbrush", level: 95 },
  { name: "Substance Painter", icon: "icons/painter.svg", alt: "painter", level: 100 },
  { name: "Adobe Express", icon: "icons/adobe-express.png", alt: "adobe-express", level: 97 },
];

/** Tools highlighted in the home page snapshot (names must match the lists above). */
export const coreToolkit = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
  "Adobe InDesign",
  "ComfyUI - 2D, Video & 3D",
  "Python - Scripting",
  "Adobe After Effects",
  "Adobe Premiere Pro",
  "Autodesk Maya",
  "Substance Painter",
  "Blender",
  "Unreal Engine",
].map((name) => {
  const skill = [...technicalSkills, ...productionSkills].find((s) => s.name === name);
  if (!skill) throw new Error(`coreToolkit: unknown skill "${name}"`);
  return skill;
});

/** Capability areas and keywords, as listed under "Core competencies" in the CV. */
export const capabilities: { area: string; items: string[] }[] = [
  {
    area: "Artwork & Image Craft",
    items: [
      "Key art & poster composition",
      "Photo manipulation & compositing",
      "High-end retouching & restoration",
      "Color correction & image matching",
      "Typography & title treatment",
      "Extension / outpainting",
      "Crop & safe-area adaptation across formats",
    ],
  },
  {
    area: "Video, Motion & 3D",
    items: [
      "Video editing & post-production (Premiere Pro, After Effects, DaVinci Resolve)",
      "Motion graphics & title design",
      "Sound, finishing & delivery",
      "AI video generation (Veo, Kling, Seedance)",
      "Editing SOPs & automation templates",
      "3D modeling, texturing, lighting & rendering",
    ],
  },
  {
    area: "Quality Standards & Judgment",
    items: [
      "Style-guide compliance",
      "Visual appeal & engagement assessment",
      "Defect taxonomy & QA checklists",
      "Calibration & benchmark setting",
      "Audit programs",
      "Root-cause analysis (Lean Six Sigma / DMAIC)",
    ],
  },
  {
    area: "Tools & Operations",
    items: [
      "UAT & production tool rollout",
      "Structured feedback for science & engineering",
      "Metrics & WBR reporting",
      "SOP authoring",
      "Mentoring & onboarding",
      "Process-gap identification",
    ],
  },
  {
    area: "Responsible AI in Production",
    items: [
      "Human-in-the-loop AI editing",
      "AI output evaluation (fidelity, artifacts, hallucinated elements)",
      "Prompt frameworks",
      "Quality & ethical guardrails for AI-assisted creative work",
    ],
  },
];
