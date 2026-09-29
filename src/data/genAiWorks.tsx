import type { ReactNode } from "react";
import type { GalleryEntry, GalleryTab } from "../types";

const SR_WORKFLOWS_URL =
  "https://github.com/seetharamdesign/sr_ComfyUI_workflows/tree/main/SR_Workflows";

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
      Click for storyboard & prompts - Adobe Firefly
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
    "Flux1 Custom trained Lora",
    snap("sr_workflows/07_sr_tsrs_man - Flux1_Lora workflow.png"),
    <>{workflowLink} Generate controlled and consistent images using, Custom trained Lora for Flux1 model.</>,
  ),
  image(
    "Product Transfer with Prompt",
    snap("sr_workflows/06_sr_product_transfer_with prompt.png"),
    <>{workflowLink} Product transfer with prompt using Flux2 kv. Style, color and object can be transferred using prompt.</>,
  ),
  image(
    "Image Outpaint using Flux2",
    snap("sr_workflows/05_sr_outpaint_flux2_kv.png"),
    <>{workflowLink} Image outpaint using Flux2. Custom resolution support node.</>,
  ),
  image(
    "GLB Image to 3D Scene Generation",
    snap("sr_workflows/04_sr_GLB_Image_to_3D_Scene_Generation.png"),
    <>{workflowLink} Generate 3D scene from GLB image. Using load 3D & Animation node in ComfyUI</>,
  ),
  image(
    "Image prompt generator",
    snap("sr_workflows/03_sr_image_prompt_generator_qwenvl_gguf.png"),
    <>{workflowLink} Image prompt generator using QwenVL GGUF. Export generated prompt as .txt or .json file format.</>,
  ),
  image(
    "Image edit with prompt",
    snap("sr_workflows/02_sr_image_edit_with_prompt.png"),
    <>{workflowLink} Image editing using prompt. Flux2 klein kv 9b SR custom workflow.</>,
  ),
  image(
    "Remove BG & Crop Object",
    snap("sr_workflows/01_sr_removeBg_cropObject.png"),
    <>{workflowLink} High-fidelity image editing: background removal, add white background, crop to specific object and resize to specific size.</>,
  ),
  image(
    "Flux Image Edit",
    snap("Flux-image-edit.png"),
    "High-fidelity image editing using the Flux model, focusing on realistic lighting and texture preservation.",
    "Flux-image-edit",
  ),
  image(
    "Flux Inpaint",
    snap("Flux1 - inpaint.png"),
    "Precision object replacement and area modification using advanced masking and inpainting techniques.",
    "Flux1 - inpaint",
  ),
  image(
    "Flux Texture",
    snap("flux2 klien - texture transfer.png"),
    "Sophisticated texture and material style transfer between diverse subjects using latent space manipulation.",
    "flux2 klien - texture transfer",
  ),
  image(
    "Flux Klien Renders",
    "images/comfyui-outputs/Flux_klien.png",
    "High-end product visualization and lifestyle imagery generated using fine-tuned Flux models.",
    "Flux_klien",
  ),
  image(
    "Qwen Cloud",
    snap("qwen - cloud.png"),
    "Integration of Qwen vision-language models for intelligent image understanding and automated modification.",
    "qwen - cloud",
  ),
  image(
    "Qwen workflow",
    snap("Qwen-image edit workflow.png"),
    "Custom ComfyUI workflow utilizing Qwen vision models for high-precision image manipulation and contextual edits.",
    "qwen-image-edit-workflow",
  ),
  image(
    "Qwen Image Edit",
    snap("Qwen-imageEdit.png"),
    "Direct image modification using multimodal AI, allowing for intuitive text-guided visual transformations.",
    "qwen-image-edit",
  ),
  image(
    "Z Image T2I",
    snap("Z-image-text-to-image.png"),
    "State-of-the-art text-to-image generation focusing on high aesthetic quality and prompt adherence.",
    "Z-image-text-to-image",
  ),
  image(
    "Z Image Fashion",
    snap("Z-image-text-to-image-fashion1.png"),
    "Specialized fashion design and apparel generation with high-quality fabric simulation and garment structure.",
    "Z-image-text-to-image-fashion1",
  ),
  image(
    "Z Image Lora",
    snap("Z-image-Lora-only-model-text-to-image-fashion1.png"),
    "Utilizing custom LoRA models to achieve consistent fashion styles and brand-specific aesthetic signatures.",
    "Z-image-Lora-only-model-text-to-image-fashion1",
  ),
  image(
    "SD15 Controlnet Canny",
    snap("SD15-Controlnet-Canny.png"),
    "Mastering structural control with Canny edge detection in Stable Diffusion 1.5 pipelines.",
    "SD15-Controlnet-Canny",
  ),
  image(
    "SD15 Controlnet Depth",
    snap("SD15-Controlnet-Depth.png"),
    "Using depth maps for precise spatial control and 3D-aware image generation.",
    "SD15-Controlnet-Depth",
  ),
  image(
    "SD15 Controlnet Pose",
    snap("SD15-Controlnet-Pose.png"),
    "Human pose estimation and control for consistent character generation across multiple scenes.",
    "SD15-Controlnet-Pose",
  ),
  image(
    "CSV Batch Processing",
    snap("SD15-CSV text-input-textimg-to-img.png"),
    "Automated batch image generation using CSV datasets for large-scale content creation.",
    "SD15-CSV text-input-textimg-to-img",
  ),
  image(
    "Inpainting Fundamentals",
    snap("SD15-inpainting-basic.png"),
    "Core Stable Diffusion inpainting workflows for targeted retouching and object manipulation.",
    "SD15-inpainting-basic",
  ),
  image(
    "AI Background Removal",
    snap("general-workflows/background-removal-basic.png"),
    "High-speed, automated background removal using specialized AI models for e-commerce and creative assets.",
    "background-removal-basic",
  ),
  image(
    "Live Portrait Expression Editor",
    snap("general-workflows/Live potrait - expression editor.png"),
    "Real-time facial expression manipulation and animation using the Live Portrait framework.",
    "Live potrait - expression editor",
  ),
  image(
    "Pose Control Workflow",
    snap("general-workflows/Pose-control-comfydoc.png"),
    "Advanced ComfyUI workflow for precise human skeletal and pose control in generative characters.",
    "pose-control",
  ),
  image(
    "Multi-Angle Generation",
    snap("general-workflows/subject-multiple-angles.png"),
    "Generating consistent 3D subjects from multiple camera angles using unified latent projection.",
    "subject multiple angles",
  ),
  image(
    "AI Image Upscaling",
    snap("general-workflows/Upscale-basic-workflow.png"),
    "High-fidelity upscaling workflows that add detail while preserving the original character of the image.",
    "Upscale-basic-workflow",
  ),
  image(
    "Object/Apparel Transfer",
    "images/comfyui-outputs/Apparel-transfer.png",
    "Seamlessly transferring product objects and apparel onto AI-generated models with realistic fit.",
    "Apparel-transfer",
  ),
];

const worksVideo: GalleryEntry[] = [
  video(
    "Wan 2.2 - AI Pose Animation",
    "videos/SR_pose_output_1.mp4",
    "Generating realistic human motion and character animation from pose-based guidance.",
  ),
  video(
    "Watch Editorial using Wan 2.2",
    "videos/watch-editorial Wan2.2.mp4",
    <>
      {fireflyBoard("76a31a71-f507-489b-9847-898510fd3c44")}
      Watch Product image to elegant editorial video using Wan 2.2. Generated locally throiugh ComfyUI.
    </>,
  ),
  video(
    "Fragnace Elegance - Nanobanana2 + Kling 3.0",
    "videos/fragnance_kling3.0.mp4",
    <>
      {fireflyBoard("29f1ad21-e491-436b-9dee-a85805b31dd8")}
      Luxury product elegance. Fragnace Editorial using Kling 3.0.
    </>,
  ),
  video(
    "Beauty product infuencer in Gemini 3.1 Veo",
    "videos/beauty_product_infuencer cut.mp4",
    <>
      {fireflyBoard("7e0946b2-be6a-4718-ae34-720ae03b885a")}
      Beauty product infuencer cut using Veo. Serum luxury brand product.
    </>,
  ),
  video(
    "Kling 3.0 Emotion",
    "videos/Kling3_Emotion.mp4",
    <>
      {fireflyBoard("30fd07d5-684c-4d47-ac36-dc5eefe706d7")}
      Audio & emotion test. <br />
      Concept: A king and queen in a conversation.
    </>,
  ),
  video(
    "Kling 3.0 Action",
    "videos/Never give up_Kling_3_multishot.mp4",
    <>
      {fireflyBoard("ab66c9cd-9b47-413c-a05c-a9cac2d89a1a")}
      Camera movement and audio realism test. <br />
      Concept: Two characters in a conversation, one threatening the other.
    </>,
  ),
  video(
    "Veo 3.0 - Cinematic Environment",
    "videos/Banderas flowergeneration.mp4",
    "Creating immersive floral landscapes and natural environments with high temporal consistency.",
  ),
  video(
    "Kling 3.0 Realism",
    "videos/Kling3.0_Drink water stay present.mp4",
    "Showcasing the incredible realism and physics-aware generation of the Kling 3.0 model.",
  ),
  video(
    "Wan Fashion (image to video)",
    "videos/Wan_03.mp4",
    "Exploring high-end fashion cinematography and garment physics using advanced AI video models.",
  ),
  video(
    "Wan Fashion 2 (image to video)",
    "videos/Wan_Fashion model.mp4",
    "Exploring high-end fashion cinematography and garment physics using advanced AI video models.",
  ),
  video(
    "Wan Fashion 3 (image to video)",
    "videos/Wan_Fashion model1.mp4",
    "Exploring high-end fashion cinematography and garment physics using advanced AI video models.",
  ),
  video(
    "Kling 3.0 (image to video)",
    "videos/Kling_3_image-to-video.mp4",
    "Character consistency in image to video generation, using kling 3.0 model",
  ),
  video(
    "LTX 2.0 (image to video)",
    "videos/LTX_2.0_i2v_00044_.mp4",
    "Character consistency in image to video generation, using LTX 2.0 model",
  ),
  video(
    "Kling 3.0 (image to video)",
    "videos/Kling3_drinkingWater.mp4",
    "Camera movement control in image to video generation, using kling 3.0 model",
  ),
  video(
    "Kling 3.0 (image to video)",
    "videos/Kling3_drinkingWater2.mp4",
    "Camera static in image to video generation, using kling 3.0 model",
  ),
];

const works3d: GalleryEntry[] = [
  video(
    "Tripo 3D Generation",
    "3d/Shoe_image_3D.mp4",
    "High-fidelity 3D mesh and texture generation from Multiple-view 2D images using Tripo 3D.",
  ),
  model(
    "Tripo 3D GLB",
    "3d/Shoe_image_3D.glb",
    "High-fidelity 3D asset visualization with real-time lighting and interactive inspection capabilities.",
  ),
  video(
    "Meshy 3D Generation",
    "3d/Meshy-multiple-images-input.mp4",
    "High-fidelity 3D mesh and texture generation from multiple-view 2D images using Meshy.",
  ),
  model(
    "Interactive 3D Model",
    "3d/Meshy_3D.glb",
    "High-fidelity 3D asset visualization with real-time lighting and interactive inspection capabilities.",
  ),
  video(
    "Hunyuan3D Generation",
    "3d/hunyuan3d.mp4",
    "High-fidelity 3D mesh and texture generation from single-view 2D images using Hunyuan3D.",
  ),
];

const worksAudio: GalleryEntry[] = [
  audio(
    "AI Voice Assistant - ElevenLabs",
    "audio/elevanlabs_audio.mp3",
    <>
      <b>TTS : </b>Hi! I’m Seetha Ram’s upgraded voice assistant. My voice is powered by ElevenLabs and
      generated using ComfyUI. Excited to work with you!
    </>,
  ),
  audio(
    "Gemini Lyria 3 - Music",
    "audio/Gemini_Lyria_Electric_Nightfall.mp3",
    <>
      <b>Music Prompt:</b>Upbeat synth-pop track featuring shimmering pads and driving electronic drums.
    </>,
  ),
  audio(
    "AI Music & Lyrics - ACE ComfyUI",
    "audio/Dont let the day find you_local_ACE.mp3",
    <>
      <b>Lyrics : </b> Dont let the day find you, you find your day Wake up the fire, don’t drift away
      Every second’s calling your name Take that step, don’t stay the same You find your day, rise and
      move Heart in rhythm, nothing to prove From still to strong, from calm to brave You find your day,
      you make your way No waiting for tomorrow’s say Don’t let the day find you — you find your day.
    </>,
  ),
  audio(
    "AI Voice Assistant - Kokoro",
    "audio/Voice_assistant.mp3",
    "Natural speech synthesis and intelligent response generation for interactive AI agents.",
  ),
  audio(
    "ComfyUI Cloud Ace Audio Test",
    "audio/cloud ace_test_find your day_.mp3",
    "Experimenting with high-fidelity audio generation for cloud integration and ambient soundscapes.",
  ),
  audio(
    "Whistle electric mix - ACE ComfyUI",
    "audio/Whistle electric mix.mp3",
    "Music beats generated using AI ACE ComfyUI.",
  ),
  audio(
    "Indian Music Beats - ACE ComfyUI",
    "audio/Indian Music Beats.mp3",
    "Music beats generated using AI ACE ComfyUI.",
  ),
  audio(
    "Upbeat electric fast - ACE ComfyUI",
    "audio/upbeat electric fast.mp3",
    "Music beats generated using AI ACE ComfyUI.",
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
    heading: "Video Generation and Editing",
    viewAllTitle: "Video Generation and Editing",
    entries: worksVideo,
  },
  {
    id: "works-3d-content",
    label: "3D",
    heading: "3D Assets Generation",
    viewAllTitle: "3D Assets Generation",
    entries: works3d,
  },
  {
    id: "works-audio-content",
    label: "Audio",
    heading: "AI Audio Generation",
    viewAllTitle: "AI Audio Generation",
    entries: worksAudio,
  },
];
