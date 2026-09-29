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
  "Adobe Firefly - Google nano banana & Veo (flow), Openai Image 2 - Stable diffusion - Flux - Qwen - Zimage - Wan - Ltxv - Kling";

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
  "ComfyUI - 2D, Video & 3D",
  "Python - Scripting",
  "Adobe Photoshop",
  "Adobe After Effects",
  "Adobe Premiere Pro",
  "Autodesk Maya",
  "Substance Painter",
  "Blender",
  "Unreal Engine",
  "Figma",
  "AWS - Cloud Computing",
  "GitHub - Version Control",
].map((name) => {
  const skill = [...technicalSkills, ...productionSkills].find((s) => s.name === name);
  if (!skill) throw new Error(`coreToolkit: unknown skill "${name}"`);
  return skill;
});
