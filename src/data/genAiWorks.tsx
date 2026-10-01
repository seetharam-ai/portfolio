import type { ReactNode } from "react";
import type { GalleryEntry, GalleryTab } from "../types";

const SR_WORKFLOWS_URL =
  "https://github.com/seetharam-ai/sr_ComfyUI_workflows/tree/main/SR_Workflows";

const workflowLink = (
  <a href={SR_WORKFLOWS_URL} target="_blank">
    View ComfyUI Workflow
  </a>
);

const fireflyBoard = (boardId: string) => (
  <>
    <a
      href={`https://firefly.adobe.com/boards/id/urn:aaid:sc:AP:${boardId}?invite=true&accept=true`}
      target="_blank"
    >
      Storyboard & prompts on Adobe Firefly ↗
    </a>
    <br />
  </>
);

const snap = (file: string) => `images/comfyui-workflow-snaps/${file}`;

/** Image card helper: alt defaults to the title. */
const image = (title: string, src: string, description: ReactNode, alt = title): GalleryEntry => ({
  title,
  description,
  media: { kind: "image", src, alt },
});

const video = (title: string, src: string, description: ReactNode): GalleryEntry => ({
  title,
  description,
  media: { kind: "video", src },
});

const audio = (title: string, src: string, description: ReactNode): GalleryEntry => ({
  title,
  description,
  media: { kind: "audio", src },
});

const model = (title: string, src: string, description: ReactNode): GalleryEntry => ({
  title,
  description,
  media: { kind: "model", src },
});

const works2d: GalleryEntry[] = [
  image(
    "Flux 1 custom-trained LoRA",
    snap("sr_workflows/07_sr_tsrs_man - Flux1_Lora workflow.png"),
    <>{workflowLink} Controlled, consistent image generation with a custom-trained LoRA for Flux 1.</>,
  ),
  image(
    "Product transfer with a prompt",
    snap("sr_workflows/06_sr_product_transfer_with prompt.png"),
    <>{workflowLink} Prompt-driven product transfer with Flux 2 KV — style, color and objects can all be transferred.</>,
  ),
  image(
    "Image outpainting with Flux 2",
    snap("sr_workflows/05_sr_outpaint_flux2_kv.png"),
    <>{workflowLink} Outpainting with Flux 2, using a custom resolution-support node.</>,
  ),
  image(
    "GLB model to 3D scene generation",
    snap("sr_workflows/04_sr_GLB_Image_to_3D_Scene_Generation.png"),
    <>{workflowLink} Generates a 3D scene from a GLB model using ComfyUI's Load 3D & Animation node.</>,
  ),
  image(
    "Image-to-prompt generator",
    snap("sr_workflows/03_sr_image_prompt_generator_qwenvl_gguf.png"),
    <>{workflowLink} Generates prompts from images with QwenVL (GGUF) and exports them as .txt or .json.</>,
  ),
  image(
    "Prompt-driven image editing",
    snap("sr_workflows/02_sr_image_edit_with_prompt.png"),
    <>{workflowLink} Custom workflow for prompt-driven edits on Flux 2 Klein KV 9B.</>,
  ),
  image(
    "Background removal & object crop",
    snap("sr_workflows/01_sr_removeBg_cropObject.png"),
    <>{workflowLink} High-fidelity image editing: background removal, add white background, crop to specific object and resize to specific size.</>,
  ),
  image(
    "Flux image edit",
    snap("Flux-image-edit.png"),
    "High-fidelity image editing using the Flux model, focusing on realistic lighting and texture preservation.",
    "Flux-image-edit",
  ),
  image(
    "Flux inpainting",
    snap("Flux1 - inpaint.png"),
    "Precision object replacement and area modification using advanced masking and inpainting techniques.",
    "Flux1 - inpaint",
  ),
  image(
    "Flux texture transfer",
    snap("flux2 klien - texture transfer.png"),
    "Sophisticated texture and material style transfer between diverse subjects using latent space manipulation.",
    "Flux 2 Klein texture transfer",
  ),
  image(
    "Flux 2 Klein renders",
    "images/comfyui-outputs/Flux_klien.png",
    "The same boy and dog kept recognisable across six scenes with Flux 2 Klein: the characters stay consistent while the setting changes.",
    "Flux_klien",
  ),
  image(
    "Qwen cloud workflow",
    snap("qwen - cloud.png"),
    "Integration of Qwen vision-language models for intelligent image understanding and automated modification.",
    "qwen - cloud",
  ),
  image(
    "Qwen image-edit workflow",
    snap("Qwen-image edit workflow.png"),
    "Custom ComfyUI workflow utilizing Qwen vision models for high-precision image manipulation and contextual edits.",
    "qwen-image-edit-workflow",
  ),
  image(
    "Qwen image edit",
    snap("Qwen-imageEdit.png"),
    "Direct image modification using multimodal AI, allowing for intuitive text-guided visual transformations.",
    "qwen-image-edit",
  ),
  image(
    "Z-Image text-to-image",
    snap("Z-image-text-to-image.png"),
    "State-of-the-art text-to-image generation focusing on high aesthetic quality and prompt adherence.",
    "Z-image-text-to-image",
  ),
  image(
    "Z-Image fashion",
    snap("Z-image-text-to-image-fashion1.png"),
    "Specialized fashion design and apparel generation with high-quality fabric simulation and garment structure.",
    "Z-image-text-to-image-fashion1",
  ),
  image(
    "Z-Image LoRA",
    snap("Z-image-Lora-only-model-text-to-image-fashion1.png"),
    "Utilizing custom LoRA models to achieve consistent fashion styles and brand-specific aesthetic signatures.",
    "Z-image-Lora-only-model-text-to-image-fashion1",
  ),
  image(
    "SD 1.5 ControlNet — Canny",
    snap("SD15-Controlnet-Canny.png"),
    "Mastering structural control with Canny edge detection in Stable Diffusion 1.5 pipelines.",
    "SD15-Controlnet-Canny",
  ),
  image(
    "SD 1.5 ControlNet — Depth",
    snap("SD15-Controlnet-Depth.png"),
    "Using depth maps for precise spatial control and 3D-aware image generation.",
    "SD15-Controlnet-Depth",
  ),
  image(
    "SD 1.5 ControlNet — Pose",
    snap("SD15-Controlnet-Pose.png"),
    "Human pose estimation and control for consistent character generation across multiple scenes.",
    "SD15-Controlnet-Pose",
  ),
  image(
    "CSV batch processing",
    snap("SD15-CSV text-input-textimg-to-img.png"),
    "Automated batch image generation using CSV datasets for large-scale content creation.",
    "SD15-CSV text-input-textimg-to-img",
  ),
  image(
    "Inpainting fundamentals",
    snap("SD15-inpainting-basic.png"),
    "Core Stable Diffusion inpainting workflows for targeted retouching and object manipulation.",
    "SD15-inpainting-basic",
  ),
  image(
    "AI background removal",
    snap("general-workflows/background-removal-basic.png"),
    "High-speed, automated background removal using specialized AI models for e-commerce and creative assets.",
    "background-removal-basic",
  ),
  image(
    "Live Portrait expression editor",
    snap("general-workflows/Live potrait - expression editor.png"),
    "Real-time facial expression manipulation and animation using the Live Portrait framework.",
    "Live Portrait expression editor",
  ),
  image(
    "Pose control workflow",
    snap("general-workflows/Pose-control-comfydoc.png"),
    "Advanced ComfyUI workflow for precise human skeletal and pose control in generative characters.",
    "pose-control",
  ),
  image(
    "Multi-angle generation",
    snap("general-workflows/subject-multiple-angles.png"),
    "Generating consistent 3D subjects from multiple camera angles using unified latent projection.",
    "subject multiple angles",
  ),
  image(
    "AI image upscaling",
    snap("general-workflows/Upscale-basic-workflow.png"),
    "High-fidelity upscaling workflows that add detail while preserving the original character of the image.",
    "Upscale-basic-workflow",
  ),
  image(
    "Object & apparel transfer",
    "images/comfyui-outputs/Apparel-transfer.png",
    "Apparel transferred onto a model with a realistic fit. The full QA-iteration case study is in Projects → Apparel & shoe transfer.",
    "Apparel-transfer",
  ),
];

const worksVideo: GalleryEntry[] = [
  video(
    "The Silent Service — 30s vertical trailer",
    "videos/silent-service-en-9x16.mp4",
    "Film & TV cut: the official 16:9 trailer re-cut to 30 seconds in 9:16 for Reels and Shorts, with English subtitles and title card. Full localization package in Projects.",
  ),
  video(
    "The Last Signal — cinematic sci-fi teaser",
    "videos/the-last-signal.mp4",
    "A 21-second teaser: shot design, AI generation, edit and sound design. Case study in Projects.",
  ),
  video(
    "Kling 3.0 — emotion",
    "videos/royal-court-kling3.mp4",
    <>
      {fireflyBoard("30fd07d5-684c-4d47-ac36-dc5eefe706d7")}
      Audio & emotion test. <br />
      Concept: A king and queen in a conversation.
    </>,
  ),
  video(
    "Wan 2.2 — AI pose animation",
    "videos/SR_pose_output_1.mp4",
    "Generating realistic human motion and character animation from pose-based guidance.",
  ),
  video(
    "Beauty product influencer — Gemini 3.1 Veo",
    "videos/beauty_product_infuencer cut.mp4",
    <>
      {fireflyBoard("7e0946b2-be6a-4718-ae34-720ae03b885a")}
      An influencer-style cut for a luxury serum brand, made with Veo.
    </>,
  ),
  video(
    "Streetwear lookbook — Seedance 2.0 reference-to-video",
    "videos/seedance-streetwear-r2v.mp4",
    "Three outfits on one model in a sunlit skate park, shot with an extreme low-angle fisheye look. Generated with Seedance 2.0 reference-to-video, so the model and each outfit stay true to the references across cuts.",
  ),
  video(
    "Veo 3.0 — cinematic environment",
    "videos/Banderas flowergeneration.mp4",
    "Creating immersive floral landscapes and natural environments with high temporal consistency.",
  ),
  video(
    "Kling 3.0 — action",
    "videos/Never give up_Kling_3_multishot.mp4",
    <>
      {fireflyBoard("ab66c9cd-9b47-413c-a05c-a9cac2d89a1a")}
      Camera movement and audio realism test. <br />
      Concept: Two characters in a conversation, one threatening the other.
    </>,
  ),
  video(
    "Fragrance elegance — Nano Banana 2 + Kling 3.0",
    "videos/fragnance_kling3.0.mp4",
    <>
      {fireflyBoard("29f1ad21-e491-436b-9dee-a85805b31dd8")}
      A luxury fragrance editorial made with Kling 3.0.
    </>,
  ),
  video(
    "Watch editorial with Wan 2.2",
    "videos/watch-editorial Wan2.2.mp4",
    <>
      {fireflyBoard("76a31a71-f507-489b-9847-898510fd3c44")}
      A watch product image turned into an elegant editorial video with Wan 2.2, generated locally through ComfyUI.
    </>,
  ),
  video(
    "Kling 3.0 — realism",
    "videos/Kling3.0_Drink water stay present.mp4",
    "Showcasing the incredible realism and physics-aware generation of the Kling 3.0 model.",
  ),
  video(
    "Wan fashion (image-to-video)",
    "videos/Wan_03.mp4",
    "Exploring high-end fashion cinematography and garment physics using advanced AI video models.",
  ),
  video(
    "Wan fashion 2 (image-to-video)",
    "videos/Wan_Fashion model.mp4",
    "Exploring high-end fashion cinematography and garment physics using advanced AI video models.",
  ),
  video(
    "Wan fashion 3 (image-to-video)",
    "videos/Wan_Fashion model1.mp4",
    "Exploring high-end fashion cinematography and garment physics using advanced AI video models.",
  ),
  video(
    "Kling 3.0 (image-to-video)",
    "videos/Kling_3_image-to-video.mp4",
    "Character consistency in image-to-video generation with Kling 3.0.",
  ),
  video(
    "LTX 2.0 (image-to-video)",
    "videos/LTX_2.0_i2v_00044_.mp4",
    "Character consistency in image-to-video generation with LTX 2.0.",
  ),
  video(
    "Kling 3.0 (image-to-video)",
    "videos/Kling3_drinkingWater.mp4",
    "Camera-movement control in image-to-video generation with Kling 3.0.",
  ),
  video(
    "Kling 3.0 (image-to-video)",
    "videos/Kling3_drinkingWater2.mp4",
    "Static-camera image-to-video generation with Kling 3.0.",
  ),
];

const works3d: GalleryEntry[] = [
  video(
    "Tripo 3D generation",
    "3d/Shoe_image_3D.mp4",
    "High-fidelity 3D mesh and texture generation from multi-view 2D images using Tripo 3D.",
  ),
  model(
    "Tripo 3D — interactive GLB",
    "3d/Shoe_image_3D.glb",
    "High-fidelity 3D asset visualization with real-time lighting and interactive inspection capabilities.",
  ),
  video(
    "Meshy 3D generation",
    "3d/Meshy-multiple-images-input.mp4",
    "High-fidelity 3D mesh and texture generation from multi-view 2D images using Meshy.",
  ),
  model(
    "Meshy 3D — interactive GLB",
    "3d/Meshy_3D.glb",
    "High-fidelity 3D asset visualization with real-time lighting and interactive inspection capabilities.",
  ),
  video(
    "Hunyuan3D generation",
    "3d/hunyuan3d.mp4",
    "High-fidelity 3D mesh and texture generation from single-view 2D images using Hunyuan3D.",
  ),
];

const worksAudio: GalleryEntry[] = [
  audio(
    "AI voice assistant — ElevenLabs",
    "audio/elevanlabs_audio.mp3",
    <>
      <b>TTS:</b> Hi! I’m Seetha Ram’s upgraded voice assistant. My voice is powered by ElevenLabs and
      generated using ComfyUI. Excited to work with you!
    </>,
  ),
  audio(
    "Gemini Lyria 3 — music",
    "audio/Gemini_Lyria_Electric_Nightfall.mp3",
    <>
      <b>Music prompt:</b> Upbeat synth-pop track featuring shimmering pads and driving electronic drums.
    </>,
  ),
  audio(
    "AI music & lyrics — ACE in ComfyUI",
    "audio/Dont let the day find you_local_ACE.mp3",
    <>
      <b>Lyrics:</b> Don’t let the day find you, you find your day Wake up the fire, don’t drift away
      Every second’s calling your name Take that step, don’t stay the same You find your day, rise and
      move Heart in rhythm, nothing to prove From still to strong, from calm to brave You find your day,
      you make your way No waiting for tomorrow’s say Don’t let the day find you — you find your day.
    </>,
  ),
  audio(
    "AI voice assistant — Kokoro",
    "audio/Voice_assistant.mp3",
    "Natural speech synthesis and intelligent response generation for interactive AI agents.",
  ),
  audio(
    "ACE audio test — ComfyUI Cloud",
    "audio/cloud ace_test_find your day_.mp3",
    "Experimenting with high-fidelity audio generation for cloud integration and ambient soundscapes.",
  ),
  audio(
    "Whistle electric mix — ACE in ComfyUI",
    "audio/Whistle electric mix.mp3",
    "Music generated with ACE in ComfyUI.",
  ),
  audio(
    "Indian music beats — ACE in ComfyUI",
    "audio/Indian Music Beats.mp3",
    "Music generated with ACE in ComfyUI.",
  ),
  audio(
    "Upbeat electric — ACE in ComfyUI",
    "audio/upbeat electric fast.mp3",
    "Music generated with ACE in ComfyUI.",
  ),
];

export const genAiTabs: GalleryTab[] = [
  {
    id: "works-2d-content",
    label: "2D",
    heading: "2D Image Generation and Editing",
    viewAllTitle: "2D Content Generation",
    entries: works2d,
  },
  {
    id: "works-video-content",
    label: "Video",
    heading: "AI video — generation and editing",
    viewAllTitle: "Video Generation and Editing",
    entries: worksVideo,
  },
  {
    id: "works-3d-content",
    label: "3D",
    heading: "AI 3D — asset generation",
    viewAllTitle: "3D Assets Generation",
    entries: works3d,
  },
  {
    id: "works-audio-content",
    label: "Audio",
    heading: "AI audio — voice and music",
    viewAllTitle: "AI Audio Generation",
    entries: worksAudio,
  },
];
