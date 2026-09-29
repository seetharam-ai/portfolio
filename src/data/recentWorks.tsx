import type { CSSProperties, ReactNode } from "react";

export interface RecentWork {
  title: string;
  body: ReactNode;
  /** Images shown beside the text; clicking one opens the lightbox. */
  images?: { src: string; alt: string; style?: CSSProperties }[];
  /** Show images side by side in a grid. */
  imageGrid?: boolean;
  /** Stacked layout: the body is rendered alone, without the text/media split. */
  stacked?: boolean;
}

const AUTHOR = <h4>Developed by - Seetha Rama Swamy</h4>;
const LORA_PDF = "pdfs/Building Consistent AI Characters with LoRA.pdf";

export const recentWorks: RecentWork[] = [
  {
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
        <a href="https://github.com/seetharam-ai/image-qa-agent" target="_blank" className="btn-link">
          View GitHub Repository ↗
        </a>
      </>
    ),
    images: [{ src: "images/recent works/Image_QA_Agent_UI.png", alt: "Image QA Agent Interface" }],
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
          tracking, and session-based history, while supporting with advanced models like Flux 2
          Klein—delivering unlimited, locally powered image generation without subscription limits.
        </p>
        <h4>Tools Used:</h4>
        <p>ComfyUI, Streamlit, Python</p>
        <a
          href="https://github.com/seetharamdesign/unlimited-ai-image-generator"
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
        <a href="https://github.com/seetharamdesign/ComfyUI-srnodes" target="_blank" className="btn-link">
          View GitHub Repository ↗
        </a>
      </>
    ),
    images: [
      { src: "images/recent works/Image to prompt generator.png", alt: "ComfyUI Node 1" },
      { src: "images/recent works/JSON prompt smart loader.png", alt: "ComfyUI Node 2" },
    ],
    imageGrid: true,
  },
  {
    title: "Trained custom Lora for Flux2 model",
    stacked: true,
    body: (
      <>
        <p>
          A custom LoRA trained on my face dataset using Flux2 Klein (fal.ai). Integrated into a ComfyUI
          workflow for controlled character generation.
        </p>
        <div className="pdf-embed">
          <iframe
            src={`${LORA_PDF}#toolbar=0&navpanes=0&view=FitH`}
            width="100%"
            height="600px"
            title="Building Consistent AI Characters with LoRA"
          />
        </div>
        <a href={LORA_PDF} target="_blank" className="btn-link">
          View Full PDF ↗
        </a>
      </>
    ),
  },
  {
    title: "Equipped with practical knowledge of Multimodel AI agents",
    body: (
      <>
        <p>
          Successfully completed the course and gained hands-on experience in building agents for chat,
          multimodal applications, and more.
        </p>
        <div className="cert-info">
          <h4>Full stack generative AI & Agentic AI with Python</h4>
          <p>
            Credential ID: <b>UC-150023c4-6689-4d8f-be9d-510b7aa588ce</b>
          </p>
        </div>
        <a
          href="certificates/Full stack generative AI & Agentic AI with Python_UC-150023c4-6689-4d8f-be9d-510b7aa588ce.pdf"
          target="_blank"
          className="btn-link"
        >
          View Certificate ↗
        </a>
      </>
    ),
    images: [
      {
        src: "certificates/Udemy.png",
        alt: "Udemy Certificate",
        style: { objectFit: "contain", padding: "15%" },
      },
    ],
  },
];
