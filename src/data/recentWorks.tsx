import type { CSSProperties, ReactNode } from "react";
import type { StoryStep } from "../components/Storyboard";

export interface RecentWork {
  title: string;
  body: ReactNode;
  /** Images shown beside the text; clicking one opens the lightbox. */
  images?: { src: string; alt: string; style?: CSSProperties }[];
  /** Show images side by side in a grid. */
  imageGrid?: boolean;
  /** Shown as the "Latest project" tile on the home page. */
  latest?: boolean;
  /** Stacked layout: the body is rendered alone, without the text/media split. */
  stacked?: boolean;
  /** Show `images` as a full-width masonry gallery under the text (use with `stacked`). */
  gallery?: boolean;
  /** Step-by-step storyboard (image + context per step), shown under the text. */
  steps?: StoryStep[];
  /** Storyboard frame aspect ratio, e.g. "1 / 1" for screenshots (default portrait 9 / 16). */
  storyFrame?: string;
  /** Heading shown above the image gallery. */
  galleryTitle?: string;
}

const AUTHOR = <h4>Developed by Seetha Rama Swamy</h4>;
const TLM = "images/artwork/key-art/the-last-meridian";
const GLAD = "images/artwork/key-art/gladiator-ashes-of-rome";
const LORA = "images/projects/lora-character";
const SOP_PDF = "pdfs/AI-Image-Edit-SOP-Seetha-Ram.pdf";
const SOP_PSD = "https://drive.google.com/file/d/1q36mPlPjtBWZLu23-oBn60MtWqHRiGs4/view?usp=drive_link";
const SOP_IMG = "images/projects/retouch-sop";
const APPAREL = "images/projects/apparel-transfer";
const FISH = "images/projects/balloon-fish";
const PRODUCT_JSON = `{
  "items": [
    {
      "name": "Khaki button-up shirt",
      "category": "shirt",
      "color": "khaki",
      "material": "cotton canvas",
      "texture": "slightly wrinkled, durable weave",
      "detailed description": "Classic long-sleeved button-up shirt with a collar, chest pocket, and dark brown buttons. Worn open over a white tee. Fabric has a matte finish with subtle creases."
    },
    {
      "name": "Olive cargo pants",
      "category": "pants",
      "color": "olive green",
      "material": "canvas",
      "texture": "heavy-duty weave, visible stitching",
      "detailed description": "Cargo pants with large side pockets and a relaxed fit. Cuffed hems. Fabric is thick canvas with reinforced seams."
    },
    {
      "name": "Beige and white sneakers",
      "category": "shoes",
      "color": "beige and white",
      "material": "leather and synthetic",
      "texture": "smooth leather upper, rubber sole",
      "detailed description": "Low-top sneakers with a beige base, white midsole, and beige swoosh logo. Laced with white laces. Slightly worn look on toe cap."
    }
  ]
}`;
const SOP_DOC = "https://docs.google.com/presentation/d/1qMyX-A2n5SopCU_rMpzwdhn--JJfMTRc/edit";

export const recentWorks: RecentWork[] = [
  {
    title: "The Last Meridian — localized key art for a streaming title (6 markets)",
    body: (
      <>
        <p>
          A personal key-art project for a fictional prestige-drama original. I art-directed one master artwork and
          localized it for six markets — English, Spanish, Arabic (RTL), Hindi, Japanese (vertical) and Korean —
          across Poster 2:3, Cover 1:1 and Background 16:9.
        </p>
        <h4>My role:</h4>
        <p>
          Concept, art direction, localization rules and every final call. Imagery and variants were rendered with an
          AI-assisted pipeline (Python, Pillow, Playwright) that I directed.
        </p>
        <h4>Key decisions:</h4>
        <ul>
          <li>
            Japanese: title set vertically (tategaki) in the negative space of the hood — focal-zone overlap cut from
            53,310 px to 0 px.
          </li>
          <li>
            Arabic: right-to-left layout, noun–adjective order corrected, kashida instead of tracking; the brand
            wordmark kept Latin and unmirrored.
          </li>
          <li>Hindi: transliterated title (Indian streaming convention); tracking removed so conjuncts stay intact.</li>
          <li>
            Every title scaled to match the master’s visual weight (±1%); backgrounds checked against UI safe zones
            for left-to-right and right-to-left layouts.
          </li>
        </ul>
        <h4>Tools Used:</h4>
        <p>Art direction, typography, Python, Pillow, Playwright</p>
        <a href={`${TLM}/breakdown-ja.jpg`} target="_blank" className="btn-link">
          View Japanese localization breakdown ↗
        </a>
        <a href={`${TLM}/breakdown-ar.jpg`} target="_blank" className="btn-link">
          View Arabic localization breakdown ↗
        </a>
      </>
    ),
    images: [
      { src: `${TLM}/poster-en.jpg`, alt: "The Last Meridian poster — English master" },
      { src: `${TLM}/poster-ar.jpg`, alt: "The Last Meridian poster — Arabic" },
      { src: `${TLM}/poster-ja.jpg`, alt: "The Last Meridian poster — Japanese" },
      { src: `${TLM}/poster-ko.jpg`, alt: "The Last Meridian poster — Korean" },
    ],
    imageGrid: true,
  },
  {
    title: "Gladiator: Ashes of Rome — poster title localization (4 languages)",
    body: (
      <>
        <p>
          Key art for a fictional historical epic. Starting from an AI-generated poster, I renamed the title for a new
          English master and localized the title lockup into Spanish, Arabic and Japanese — keeping the carved-stone
          treatment, scale and position consistent in every market.
        </p>
        <h4>Scope:</h4>
        <p>Title lockup only — the billing line (“In cinemas this year”) was outside this exercise and stays in English.</p>
        <h4>My role:</h4>
        <p>
          Title naming, localization, art direction of the title treatment and the final quality check. Artwork and
          text replacement generated with Adobe Firefly (Gemini Flash).
        </p>
        <h4>Localization choices:</h4>
        <ul>
          <li>Spanish: GLADIADOR — CENIZAS DE ROMA, keeping the master’s two-line hierarchy.</li>
          <li>Arabic: المصارع — رماد روما, read right-to-left with the main title above the subtitle.</li>
          <li>Japanese: グラディエーター：ローマの灰, katakana title with the subtitle on its own line.</li>
          <li>Same texture, color and lockup position as the English master across all four posters.</li>
        </ul>
        <h4>Tools Used:</h4>
        <p>Adobe Firefly (Gemini Flash), prompt-based text replacement</p>
        <a href={`${GLAD}/source-colosseum.jpg`} target="_blank" className="btn-link">
          View the original generation, before the title change ↗
        </a>
      </>
    ),
    images: [
      { src: `${GLAD}/poster-en.jpg`, alt: "Gladiator: Ashes of Rome poster — English master" },
      { src: `${GLAD}/poster-es.jpg`, alt: "Gladiator: Ashes of Rome poster — Spanish" },
      { src: `${GLAD}/poster-ar.jpg`, alt: "Gladiator: Ashes of Rome poster — Arabic" },
      { src: `${GLAD}/poster-ja.jpg`, alt: "Gladiator: Ashes of Rome poster — Japanese" },
    ],
    imageGrid: true,
  },
  {
    title: "Setting the quality bar for visual content at scale — Amazon",
    stacked: true,
    body: (
      <>
        <p>
          As Subject Matter Expert and QA Team Lead, I owned what “correct” and “compelling” meant for visual
          content across global marketplaces — then made that judgment repeatable for people and tools.
        </p>
        <h4>Standards others calibrate to</h4>
        <ul>
          <li>Developed scalable creative standards for 3D assets and established global video production SOPs used across international studios.</li>
          <li>Led global quality improvement initiatives that reduced content defects by 35%, contributing to ~$18M in annual cost avoidance.</li>
          <li>Managed and mentored 70+ QA specialists across locations — training reviewers to a shared bar.</li>
        </ul>
        <h4>Judgment turned into tool improvements</h4>
        <ul>
          <li>Designed and launched the Self-Service QA Tool: 80% of assets published without manual intervention, ~$1M in annual savings.</li>
          <li>Partnered with engineering and UX to redesign internal QA applications — 30% less manual review effort, 10% higher QA productivity.</li>
          <li>Collaborated with SDEs to resolve latency and visual-quality issues in the 3D pipeline.</li>
        </ul>
        <h4>Sample standard</h4>
        <p>My AI-assisted retouching &amp; upscaling SOP shows how I document a quality bar for others to follow.</p>
        <a href={SOP_DOC} target="_blank" className="btn-link">
          View SOP document ↗
        </a>
      </>
    ),
  },
  {
    title: "Apparel & shoe transfer from a product reference — with QA iterations",
    stacked: true,
    body: (
      <>
        <p>
          A reusable ComfyUI workflow that transfers off-figure products — shirt, tee, trousers and shoes — onto a model
          with an approved pose, while preserving identity, lighting, perspective and scene realism. Each output was
          reviewed against the product reference, and every issue fed the next prompt.
        </p>
        <p className="fact-chips">
          <span>
            <b>Pipeline</b> ComfyUI
          </span>
          <span>
            <b>Model</b> Flux2 Klein 9B (FP8)
          </span>
          <span>
            <b>Text encoder</b> Qwen3 8B
          </span>
          <span>
            <b>Prompts</b> Structured product JSON
          </span>
        </p>
        <h4>Tools Used:</h4>
        <p>ComfyUI, Flux2 Klein 9B, Qwen3 8B text encoder, Flux2 VAE, structured JSON prompts</p>
      </>
    ),
    steps: [
      {
        label: "Input image",
        caption: "Model with the approved pose and style.",
        src: `${APPAREL}/input-model.jpg`,
        alt: "Input — model with the approved pose and style",
      },
      {
        label: "Product reference",
        caption: "Off-figure products to be styled on the input model.",
        src: `${APPAREL}/product-reference.jpg`,
        alt: "Product reference — khaki shirt, white tee, olive cargo pants and sneakers",
      },
      {
        label: "Iteration 1 · Initial prompt",
        caption: "Output without the Product JSON generator.",
        prompt: "“replace the dress and shoe in image 1 with image 2.”",
        issues: [
          "Single-shot prompt is too generic",
          "White tee collar is V-shaped — should be round",
          "Second button on the khaki shirt not generated accurately",
        ],
        src: `${APPAREL}/iteration-1.jpg`,
        alt: "Iteration 1 — red arrows mark the collar shape and the missing second button",
      },
      {
        label: "Iteration 2 · Extended prompt",
        caption: "Product details added from my Image / Product JSON generator.",
        prompt: "“replace the dress and shoe in image 1 with image 2.” + product JSON",
        details: { summary: "Product JSON (3 items, abridged)", code: PRODUCT_JSON },
        issues: ["Second button on the khaki shirt still not generated accurately"],
        src: `${APPAREL}/iteration-2.jpg`,
        alt: "Iteration 2 — red arrow marks the second button",
      },
      {
        label: "Final · Weighted prompt",
        caption: "Raised the weight of the target button detail, so the model gives it high priority.",
        prompt: (
          <>
            …dark brown <code>((buttons):1.1)</code>…
          </>
        ),
        pass: "Collar and buttons match the product reference",
        src: `${APPAREL}/final.jpg`,
        alt: "Final output — matches the product reference",
      },
    ],
  },
  {
    latest: true,
    title: "AI Image QA Agent developed using agentic AI frameworks & Claude",
    body: (
      <>
        {AUTHOR}
        <p>
          A professional product image quality assessment tool that uses Claude AI to compare raw product
          images against AI-generated versions and provide detailed fidelity analysis.{" "}
          <a
            href="https://drive.google.com/file/d/164dKVIdJmO3pDiJArObP417zgcnWtGHM/view"
            target="_blank"
            className="btn-link"
          >
            Watch Image QA agent Demo here ↗
          </a>
        </p>
        <h4>Features:</h4>
        <p>
          - Visual Fidelity Analysis: Compare raw product images with AI-generated versions <br />
          - Comprehensive Scoring: Evaluate images across 5 key dimensions: Color Accuracy, Shape & Form,
          Texture & Material, Branding & Details, Overall Realism <br />
          - Issue Detection: Automatically identify and locate problems with bounding boxes
          <br />
          - Visual Annotations: Generate annotated images highlighting identified issues
          <br />
          - Improvement Suggestions: Get actionable recommendations for better AI image generation
          <br />- Web Interface: Easy-to-use Gradio web application
        </p>
        <h4>Outcome:</h4>
        <p>Demonstrated a scalable AI-driven creative QA workflow for consistent evaluation of AI-generated imagery.</p>
        <a href="https://github.com/seetharam-ai/image-qa-agent" target="_blank" className="btn-link">
          View GitHub Repository ↗
        </a>
      </>
    ),
    images: [{ src: "images/recent works/Image_QA_Agent_UI.png", alt: "Image QA Agent Interface" }],
  },
  {
    title: "AI-assisted image retouching & upscaling workflow (Photoshop + Generative AI)",
    stacked: true,
    storyFrame: "1 / 1",
    body: (
      <>
        <p>
          A standard operating procedure for refining AI-generated and low-resolution images into commercial-quality
          output inside Photoshop — generative upscaling first, then model-specific Generative Fill, one selection at a
          time.
        </p>
        <h4>Tools Used:</h4>
        <p>Adobe Photoshop, Generative Upscale (Topaz Gigapixel), Generative Fill (Firefly, Gemini, Flux 2 Pro, Flux Kontext Pro)</p>
        <h4>Outcome:</h4>
        <p>Improved asset consistency and reduced manual editing effort across high-volume creative workflows.</p>
        <a href={SOP_PDF} target="_blank" className="btn-link">
          View the SOP (PDF) ↗
        </a>
        <a href={SOP_PSD} target="_blank" className="btn-link">
          Sample PSD with layers (Google Drive) ↗
        </a>
      </>
    ),
    steps: [
      {
        label: "Load the image",
        caption: "Open Photoshop and load the raw or low-resolution image.",
        src: `${SOP_IMG}/step-1.jpg`,
        alt: "Low-resolution image loaded in Photoshop",
      },
      {
        label: "Generative Upscale 2×",
        caption: "Image → Generative Upscale → Model: Topaz Gigapixel → Scale: 2×.",
        src: `${SOP_IMG}/step-2.jpg`,
        alt: "Photoshop Image menu with Generative Upscale",
      },
      {
        label: "Select each element",
        caption: "To improve people, elements and objects, select each item individually to generate with AI.",
        src: `${SOP_IMG}/step-3.jpg`,
        alt: "An element selected in Photoshop",
      },
      {
        label: "Generative Fill — choose the model",
        caption: "Click Generative Fill and pick the AI model for the job:",
        notes: [
          "Firefly Fill & Expand — fill or correct artifact areas",
          "Gemini 3 (Nano Banana Pro) — people and apparel detail",
          "Flux 2 Pro — quality of people and objects",
          "Flux Kontext Pro — edit object and person characteristics",
        ],
        src: `${SOP_IMG}/step-4.jpg`,
        alt: "Generative Fill model drop-down in Photoshop",
      },
      {
        label: "Selection — before",
        caption: "The bottle selected, before generation.",
        src: `${SOP_IMG}/selection-before.jpg`,
        alt: "Bottle before generative fill",
      },
      {
        label: "Prompt with context",
        caption: "Describe the change for the selected area only.",
        prompt: "“improve quality, without changing the colors, shapes, camera angle, sizes and positions” — Flux 2 Pro",
        pass: "Bottle detail sharpened; color, shape and position unchanged",
        src: `${SOP_IMG}/selection-after.jpg`,
        alt: "Bottle after generative fill with Flux 2 Pro",
      },
      {
        label: "Repeat per selection",
        caption: "Repeat steps 3–6 for each selection area in the image.",
        notes: ["Tip: select and generate small areas with similar characteristics to avoid artifacts and hallucinated elements."],
        src: `${SOP_IMG}/step-5.jpg`,
        alt: "The woman selected for the next generative pass",
      },
      {
        label: "One layer per selection",
        caption: "Every generation sits on its own layer — non-destructive and easy to review.",
        src: `${SOP_IMG}/step-6.jpg`,
        alt: "Photoshop layers panel with one generative layer per selection",
      },
    ],
  },
  {
    title: "Balloon fish — legacy asset upscaled for production reuse",
    stacked: true,
    storyFrame: "4 / 3",
    body: (
      <>
        <p>
          Turning a low-quality legacy asset into a high-quality, production-ready element — preserving product
          identity, texture and visual consistency so it can be reused in new compositions. Each output was reviewed
          against the input, and the callout shaped the next prompt.
        </p>
        <p className="fact-chips">
          <span>
            <b>Pipeline</b> ComfyUI
          </span>
          <span>
            <b>Model</b> Flux2 Klein
          </span>
          <span>
            <b>Analysis</b> Qwen-VL
          </span>
          <span>
            <b>Prompts</b> JSON product description
          </span>
        </p>
        <h4>Pipeline:</h4>
        <p>
          Low-quality input → image analysis → JSON product description → reference-image conditioning → Flux2 Klein
          enhancement → detail refinement → production asset.
        </p>
        <h4>Tools Used:</h4>
        <p>ComfyUI, Flux2 Klein, Qwen-VL</p>
      </>
    ),
    steps: [
      {
        label: "Source image",
        caption: "The low-quality legacy asset to rebuild.",
        src: `${FISH}/source.jpg`,
        alt: "Source — low-quality balloon fish legacy asset",
      },
      {
        label: "Iteration 1",
        caption: "Output from a style-only prompt.",
        prompt: "“Balloon fish” + style JSON (cartoonish toy, plastic material, studio lighting)",
        issues: ["Color and shape don’t represent the input", "1:1 aspect ratio squeezes the fish horizontally"],
        src: `${FISH}/iteration-1.jpg`,
        alt: "Iteration 1 — yellow fish, squeezed in a 1:1 frame",
      },
      {
        label: "Iteration 2",
        caption: "Added a quality instruction and the product JSON.",
        prompt: "“make the image sharper and clear. realistic” + product JSON",
        issues: ["Color tone and shape still don’t represent the input", "Still 1:1 — the fish stays squeezed"],
        src: `${FISH}/iteration-2.jpg`,
        alt: "Iteration 2 — cream fish, still 1:1",
      },
      {
        label: "Cut-out input",
        caption: "The fish on a plain black background, used as the input from iteration 3.",
        src: `${FISH}/cutout.jpg`,
        alt: "Cut-out of the balloon fish on black",
      },
      {
        label: "Iteration 3",
        caption: "Output dimensions matched to the input; the input-image prompt removed.",
        prompt: "“change background to white and retain color of fish as it is” + product JSON",
        issues: ["Still not accurately matching the input"],
        src: `${FISH}/iteration-3.jpg`,
        alt: "Iteration 3 — correct proportions, color still off",
      },
      {
        label: "Final",
        caption: "“…looks photorealistic” added detail; tightening the wording finished it.",
        prompt: "“Make the balloon fish photorealistic” + product JSON",
        pass: "Removing the word “looks” guided the model to represent the details accurately",
        src: `${FISH}/final.jpg`,
        alt: "Final — photorealistic balloon fish matching the input",
      },
    ],
  },
  {
    title: "Consistent character — a custom LoRA trained on my own face",
    stacked: true,
    gallery: true,
    body: (
      <>
        <p>
          I trained a custom LoRA on a dataset of my own face, so an image model can generate the same person
          consistently — one identity held across poses, outfits, lighting and environments.
        </p>
        <h4>What I did:</h4>
        <p>
          Trained a character LoRA on Flux 2 Klein and built it into a ComfyUI workflow for controlled, repeatable
          character generation.
        </p>
        <h4>How I did it:</h4>
        <ol>
          <li>Trained the LoRA on my face dataset in fal.ai (Flux 2 Klein).</li>
          <li>Generated detailed scene prompts with a QwenVL-4B-Instruct node in ComfyUI.</li>
          <li>Rendered with Flux 2 Klein in ComfyUI, calling the character with the trigger word “tsrs2”.</li>
          <li>Reviewed every output for character consistency across poses, lighting and environments.</li>
        </ol>
        <h4>Tools Used:</h4>
        <p>fal.ai, Flux 2 Klein, ComfyUI, QwenVL-4B-Instruct</p>
      </>
    ),
    images: [
      { src: `${LORA}/lora-01.jpg`, alt: "LoRA output — jumping pose in a blazer and hat" },
      { src: `${LORA}/lora-02.jpg`, alt: "LoRA output — three poses in a denim jacket" },
      { src: `${LORA}/lora-03.jpg`, alt: "LoRA output — silver hair and headphones" },
      { src: `${LORA}/lora-04.jpg`, alt: "LoRA output — standing on a yellow backdrop in a SEE THAT AI tee" },
      { src: `${LORA}/lora-05.jpg`, alt: "LoRA output — seated on a yellow cube in a shearling jacket" },
      { src: `${LORA}/lora-06.jpg`, alt: "LoRA output — outdoors on stone steps" },
      { src: `${LORA}/lora-07.jpg`, alt: "LoRA output — brown jacket against a white wall" },
      { src: `${LORA}/lora-08.jpg`, alt: "LoRA output — red sweater, studio portrait" },
      { src: `${LORA}/lora-09.jpg`, alt: "LoRA output — superhero suit on a city rooftop" },
      { src: `${LORA}/lora-10.jpg`, alt: "LoRA output — fantasy armour at sunset" },
      { src: `${LORA}/lora-11.jpg`, alt: "LoRA output — climbing a rock face" },
      { src: `${LORA}/lora-12.jpg`, alt: "LoRA output — Paris street in a camel coat" },
      { src: `${LORA}/lora-13.jpg`, alt: "LoRA output — casual outfit on a beige backdrop" },
    ],
  },
  {
    title: "Built an AI app for unlimited AI image generation using agentic AI & ComfyUI",
    body: (
      <>
        {AUTHOR}
        <p>
          Unlimited AI Image Generator is a premium web interface for local AI image creation, built using
          ComfyUI and Streamlit. It enables seamless, distraction-free generation of high-quality images
          using open-source models. The tool offers full control over parameters, real-time generation
          tracking, and session-based history, and supports advanced models such as Flux 2
          Klein — delivering unlimited, locally powered image generation without subscription limits.
        </p>
        <h4>Tools Used:</h4>
        <p>ComfyUI, Streamlit, Python</p>
        <a
          href="https://github.com/seetharam-ai/unlimited-ai-image-generator"
          target="_blank"
          className="btn-link"
        >
          View GitHub Repository ↗
        </a>
      </>
    ),
    images: [{ src: "images/recent works/Image_generator_app.png", alt: "AI Agent Interface" }],
  },
  {
    title: "Developed a custom node for ComfyUI for smart JSON data handling and prompt generation",
    body: (
      <>
        <p>
          I developed this node to streamline the process of working with JSON data in ComfyUI. It
          eliminates the need for manual data manipulation and ensures that your data is always in the
          correct format for your workflows.
        </p>
        <h4>Tools Used:</h4>
        <p>ComfyUI, Python, JSON</p>
        <h4>Key Features:</h4>
        <ul>
          <li>
            Live JSON Loading: Pick any .json file from your computer and upload it directly to the
            ComfyUI input directory.
          </li>
          <li>Real-time Preview & Edit: View and tweak JSON content inside the node.</li>
          <li>Smart Search: Filter large datasets using comma-separated keywords.</li>
          <li>
            Prompt Extraction: Automatically extracts relative text fields to feed directly into CLIP Text
            Encoders.
          </li>
        </ul>
        <a href="https://github.com/seetharam-ai/ComfyUI-srnodes" target="_blank" className="btn-link">
          View GitHub Repository ↗
        </a>
      </>
    ),
    images: [
      { src: "images/recent works/Image to prompt generator.png", alt: "ComfyUI Node 1" },
      { src: "images/recent works/JSON prompt smart loader.png", alt: "ComfyUI Node 2" },
    ],
  },
];
