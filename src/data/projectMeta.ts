/**
 * Short index data for each case study (Work → Projects), keyed by project id
 * (the title up to the dash, e.g. "the-silent-service"). The index shows only
 * this; the full story opens on the project's own page.
 */
export interface ProjectMeta {
  /** Category line above the title. */
  kicker: string;
  /** One sentence. */
  summary: string;
  /** Three short tags. */
  tags: string[];
  /** Index image; defaults to the project's first visual. */
  cover?: string;
}

export const projectMeta: Record<string, ProjectMeta> = {
  "the-silent-service": {
    kicker: "Localization · key art & video",
    summary: "One official Japanese key art and trailer, turned into a bilingual package: every placement, plus vertical trailers.",
    tags: ["16:9 · 2:3 · 1:1 · 9:16", "JP → EN", "Photoshop · Premiere Pro"],
    cover: "images/artwork/key-art/silent-service/en-16x9.jpg",
  },
  "ip-man-kung-fu-legend": {
    kicker: "Localization · key art & video",
    summary: "A film's title, key art and vertical shorts localized from English into Hindi, Tamil and Telugu, end to end.",
    tags: ["EN → HI · TA · TE", "16:9 · 3:4 · 9:16", "Photoshop · Premiere Pro"],
    cover: "images/artwork/key-art/ip-man/en-16x9.jpg",
  },
  "and-yet-you-are-so-sweet": {
    kicker: "Key art · title design · video",
    summary: "Cover and poster art with Japanese and English titles, an animated title reveal and vertical shorts for a Japanese romance.",
    tags: ["JA · EN titles", "16:9 · 2:3 · 9:16", "Illustrator · Veo · Premiere Pro"],
    cover: "images/artwork/key-art/and-yet-sweet/jp-16x9.jpg",
  },
  "the-last-meridian": {
    kicker: "Key art localization",
    summary: "One master key art localized for six markets, including right-to-left Arabic and vertical Japanese.",
    tags: ["6 languages", "Typography", "Safe zones"],
    cover: "images/artwork/key-art/the-last-meridian/cover-16x9.jpg",
  },
  "gladiator-ashes-of-rome": {
    kicker: "Title localization",
    summary: "A poster title lockup localized into four languages, keeping the carved-stone treatment in every market.",
    tags: ["4 languages", "Title lockup", "Adobe Firefly"],
    cover: "images/artwork/key-art/gladiator-ashes-of-rome/cover-16x9.jpg",
  },
  "control-zindagi": {
    kicker: "Film & TV artwork",
    summary: "Key art for my award-winning short film: poster, vertical and background.",
    tags: ["Amazon Bash 2019", "Writer · director · editor", "3 formats"],
    cover: "images/artwork/key-art/control-zindagi/background-16x9.jpg",
  },
  "the-queen-of-florence": {
    kicker: "Key art reframing",
    summary: "One key art adapted to 16:9, 2:3 and 1:1 placements without losing the story.",
    tags: ["16:9 · 2:3 · 1:1", "Composition", "Character consistency"],
  },
  "the-last-signal": {
    kicker: "Video · cinematic teaser",
    summary: "A 21-second sci-fi teaser: shot design, AI generation, edit and sound design.",
    tags: ["21 s · 16:9", "Edit & sound", "Art direction"],
    cover: "images/projects/the-last-signal/shot-5.jpg",
  },
  "the-queen-s-trial": {
    kicker: "Video · AI drama scene",
    summary: "A 21-second period-drama dialogue scene, testing performance and continuity in Kling 3.0.",
    tags: ["Kling 3.0", "Dialogue", "Shot continuity"],
    cover: "images/projects/royal-court/shot-2.jpg",
  },
  "nike-find-your-greatness": {
    kicker: "Video · spec ad",
    summary: "A spec ad I wrote, directed and edited, from concept to first cut in nine weeks.",
    tags: ["Writer · director · editor", "After Effects · Mocha", "VFX"],
    cover: "images/projects/nike-fyg/final-comp.jpg",
  },
  "setting-the-quality-bar-for-visual-content-at-scale": {
    kicker: "Quality leadership · Amazon",
    summary: "Owning what “correct” and “compelling” mean for visual content, and making it repeatable for people and tools.",
    tags: ["35% fewer defects", "300+ calibrated", "UAT on 2 QA tools"],
  },
  "apparel-shoe-transfer-from-a-product-reference": {
    kicker: "AI production · QA iterations",
    summary: "Off-figure products transferred onto a model, with every review issue fed into the next prompt.",
    tags: ["ComfyUI", "JSON prompts", "3 iterations"],
    cover: "images/projects/apparel-transfer/cover-16x10.jpg",
  },
  "ai-image-qa-agent-developed-using-agentic-ai-frameworks-claude": {
    kicker: "AI quality tooling",
    summary: "An agent that compares product images with their AI versions and scores fidelity across five dimensions.",
    tags: ["Claude", "5-dimension scoring", "Gradio"],
  },
  "ai-assisted-image-retouching-upscaling-workflow-photoshop-generative-ai": {
    kicker: "Retouching standard",
    summary: "An SOP for refining AI and low-res images into commercial quality in Photoshop.",
    tags: ["Generative Fill", "8-step SOP", "Upscaling"],
  },
  "balloon-fish": {
    kicker: "Asset restoration",
    summary: "A low-quality legacy asset rebuilt as a production-ready element, iteration by iteration.",
    tags: ["ComfyUI", "Flux2 Klein", "Qwen-VL"],
    cover: "images/projects/balloon-fish/cover-16x9.jpg",
  },
  "consistent-character": {
    kicker: "Character consistency",
    summary: "A custom LoRA trained on my own face, generating one consistent character in any scene.",
    tags: ["Flux 2 Klein", "fal.ai", "ComfyUI"],
    cover: "images/projects/lora-character/cover-16x9.jpg",
  },
  "built-an-ai-app-for-unlimited-ai-image-generation-using-agentic-ai-comfyui": {
    kicker: "Creative tooling",
    summary: "A web app for unlimited local AI image generation, built on ComfyUI and Streamlit.",
    tags: ["ComfyUI", "Streamlit", "Python"],
  },
  "developed-a-custom-node-for-comfyui-for-smart-json-data-handling-and-prompt-generation": {
    kicker: "Creative tooling",
    summary: "A custom ComfyUI node that loads, searches and edits JSON and turns it into prompts.",
    tags: ["ComfyUI", "Python", "JSON"],
  },
};
