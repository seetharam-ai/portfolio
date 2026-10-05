import type { CSSProperties, ReactNode } from "react";
import type { StoryStep } from "../components/Storyboard";
import type { KeyArtSet } from "./artwork";

export interface RecentWork {
  title: string;
  body: ReactNode;
  /** Images shown beside the text; clicking one opens the lightbox. */
  /** label: a short tag shown on the image, e.g. the poster's language. */
  images?: { src: string; alt: string; style?: CSSProperties; label?: string }[];
  /** Show images side by side in a grid. */
  imageGrid?: boolean;
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
  /** Placements of one artwork in a row, each in its true aspect ratio (shown under the text). */
  variants?: KeyArtSet["variants"];
  /** Several labelled rows of placements (e.g. one per language). */
  variantSets?: { label: string; variants: KeyArtSet["variants"] }[];
  /** Vertical (9:16) videos shown side by side. */
  verticalVideos?: { src: string; poster: string; label: string }[];
  /** Full-width video player shown under the text. */
  video?: { src: string; poster: string };
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
const SIGNAL = "images/projects/the-last-signal";
const QUEEN = "images/artwork/key-art/queen-of-florence";
const CZ = "images/artwork/key-art/control-zindagi";
const ROYAL = "images/projects/royal-court";
const NIKE = "images/projects/nike-fyg";
const SS = "images/artwork/key-art/silent-service";
const IPM = "images/artwork/key-art/ip-man";
const SWEET = "images/artwork/key-art/and-yet-sweet";
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
    title: "The Silent Service — JP → EN localization package: key art, posters and vertical trailers",
    stacked: true,
    variantSets: [
      {
        label: "English",
        variants: [
          { label: "Cover", ratio: "16 / 9", src: `${SS}/en-16x9.jpg` },
          { label: "Poster", ratio: "2 / 3", src: `${SS}/en-2x3.jpg` },
          { label: "Square", ratio: "1 / 1", src: `${SS}/en-1x1.jpg` },
          { label: "Vertical 30s", ratio: "9 / 16", src: `${SS}/en-vertical-poster.jpg`, video: "videos/silent-service-en-9x16.mp4" },
        ],
      },
      {
        label: "Japanese",
        variants: [
          { label: "Cover (source)", ratio: "16 / 9", src: `${SS}/jp-16x9.jpg` },
          { label: "Poster", ratio: "2 / 3", src: `${SS}/jp-2x3.jpg` },
          { label: "Square", ratio: "1 / 1", src: `${SS}/jp-1x1.jpg` },
          { label: "Vertical 30s", ratio: "9 / 16", src: `${SS}/jp-vertical-poster-v2.jpg`, video: "videos/silent-service-jp-9x16-v2.mp4" },
        ],
      },
    ],
    body: (
      <>
        <p>
          A full localization package for <i>The Silent Service: The Battle of the Arctic Ocean</i>, the second film in
          the Prime Original series. Starting from the official Japanese 16:9 key art and trailer, I produced every
          placement a title needs, in English and Japanese: Cover 16:9, Poster 2:3, Square 1:1 and 30-second 9:16
          vertical trailers.
        </p>
        <p className="fact-chips">
          <span>
            <b>Formats</b> 16:9 · 2:3 · 1:1 · 9:16 video
          </span>
          <span>
            <b>Languages</b> Japanese → English
          </span>
          <span>
            <b>Tools</b> Photoshop with Gemini Nano Banana · Premiere Pro · Claude (research)
          </span>
        </p>
        <h4>Reading the intent first:</h4>
        <p>
          I researched the film with Claude, and took the official Japanese key art from Prime Video’s press release
          for the second film as the master, so every format carries the same story and tone as the source.
        </p>
        <h4>What I did:</h4>
        <ul>
          <li>
            <b>English localization (16:9):</b> translated the title from Japanese to English with Gemini Nano Banana
            in Photoshop, then refined the lockup, subtitle and billing to match the Japanese master’s position and
            visual weight; the cast, submarine and ice stay untouched.
          </li>
          <li>
            <b>Poster 2:3 and Square 1:1:</b> recomposed the wide art for tall and square frames: the cast grouped at
            the top, the submarine as the center of action, and the title lockup moved to the lower third, finished
            in Photoshop.
          </li>
          <li>
            <b>Japanese versions:</b> the same compositions with the Japanese calligraphic title and subtitle, so both
            markets get matching placements.
          </li>
          <li>
            <b>Vertical trailers (Premiere Pro):</b> the 16:9 trailer re-cut to 30 seconds in 9:16 for mobile, with
            English subtitles and an English or Japanese title card and release-date end card.
          </li>
        </ul>
        <p className="project__note">
          Self-initiated spec exercise — not an official release. Source key art and trailer © Amazon and the rights
          holders.
        </p>
      </>
    ),
  },
  {
    title: "Ip Man: Kung Fu Legend — 4-language localization: key art, title lockups and vertical shorts",
    stacked: true,
    storyFrame: "16 / 9",
    variantSets: [
      {
        label: "English",
        variants: [
          { label: "Key art", ratio: "16 / 9", src: `${IPM}/en-16x9.jpg` },
          { label: "Key art", ratio: "3 / 4", src: `${IPM}/en-3x4.jpg` },
          { label: "Short 30s", ratio: "9 / 16", src: `${IPM}/en-vertical-poster-v2.jpg`, video: "videos/ip-man-v2-en-9x16.mp4" },
        ],
      },
      {
        label: "Hindi",
        variants: [
          { label: "Key art", ratio: "16 / 9", src: `${IPM}/hi-16x9.jpg` },
          { label: "Key art", ratio: "3 / 4", src: `${IPM}/hi-3x4.jpg` },
          { label: "Short 30s", ratio: "9 / 16", src: `${IPM}/hi-vertical-poster-v2.jpg`, video: "videos/ip-man-v2-hi-9x16.mp4" },
        ],
      },
      {
        label: "Tamil",
        variants: [
          { label: "Key art", ratio: "16 / 9", src: `${IPM}/ta-16x9.jpg` },
          { label: "Key art", ratio: "3 / 4", src: `${IPM}/ta-3x4.jpg` },
          { label: "Short 30s", ratio: "9 / 16", src: `${IPM}/ta-vertical-poster-v2.jpg`, video: "videos/ip-man-v2-ta-9x16.mp4" },
        ],
      },
      {
        label: "Telugu",
        variants: [
          { label: "Key art", ratio: "16 / 9", src: `${IPM}/te-16x9.jpg` },
          { label: "Key art", ratio: "3 / 4", src: `${IPM}/te-3x4.jpg` },
          { label: "Short 30s", ratio: "9 / 16", src: `${IPM}/te-vertical-poster-v2.jpg`, video: "videos/ip-man-v2-te-9x16.mp4" },
        ],
      },
      {
        label: "Textless",
        variants: [
          { label: "Background", ratio: "16 / 9", src: `${IPM}/textless-16x9.jpg` },
          { label: "Background", ratio: "3 / 4", src: `${IPM}/textless-3x4.jpg` },
        ],
      },
    ],
    body: (
      <>
        <p>
          An end-to-end localization package for the martial-arts film <i>Ip Man: Kung Fu Legend</i>, for four
          markets: English, Hindi, Tamil and Telugu. I planned the core concept and delivered it from the source film
          to final renders: the title translated and lettered in each language, key art in 16:9 and 3:4 with a
          textless background, and a 30-second vertical short per language.
        </p>
        <p className="fact-chips">
          <span>
            <b>Languages</b> English → Hindi · Tamil · Telugu
          </span>
          <span>
            <b>Formats</b> 16:9 · 3:4 · textless · 9:16 video
          </span>
          <span>
            <b>Tools</b> Photoshop · Premiere Pro · Adobe Firefly (Gemini) · Gemini Nano Banana 2
          </span>
        </p>
        <h4>What I did:</h4>
        <ul>
          <li>
            <b>Translation:</b> translated the title and the dialogue from English into Telugu, Hindi and Tamil.
          </li>
          <li>
            <b>Title lockups:</b> extracted the original title card from the film; a first pass was translated with
            Gemini Nano Banana 2, and I typeset the final white-and-red lockups by hand in Photoshop, keeping the
            brush calligraphy and seal of the source.
          </li>
          <li>
            <b>Key art (Photoshop):</b> built the teal, mist-and-mountains key art over several background and
            composition passes, then delivered 16:9 and 3:4 in every language plus a textless background, with the
            same imagery in every size.
          </li>
          <li>
            <b>Vertical shorts (Premiere Pro):</b> a 9:16 jump-cut edit rendered separately for each language, with
            that language’s dialogue, English subtitles, a sound mix, and the localized title card at the end.
          </li>
          <li>
            <b>Audit:</b> checked every version for audio, sync and language accuracy before the final render.
          </li>
        </ul>
        <h4>Following the platform guidelines:</h4>
        <p>
          Sizes follow the Prime Video Direct graphic assets guide for standalone titles (Key Art 16:9 at
          1920×1080, Key Art 3:4 at 1200×1600, and a 16:9 background). I also checked the design rules: consistent
          imagery across sizes, one cohesive image with no borders or stretching, a title that stays legible with
          enough contrast when scaled down, and no title over the main cast’s faces.
        </p>
        <p className="project__note">
          Self-initiated spec exercise — not an official release. Film footage and source artwork © the rights
          holders.
        </p>
      </>
    ),
    steps: [
      {
        label: "Source title card",
        caption: "The original title card, extracted from the film.",
        src: `${IPM}/title-original.jpg`,
        alt: "Ip Man: Kung Fu Legend — original title card from the film",
      },
      {
        label: "Round 1 · first concept",
        caption: "A light ink-wash key art, with the title translated by Gemini Nano Banana 2.",
        src: `${IPM}/round1-16x9.jpg`,
        alt: "Round 1 — cream ink-wash key art concept",
      },
      {
        label: "Round 2 · teal background pass",
        caption: "A new teal, mist-and-mountains background generated in Adobe Firefly (Gemini), keeping the cast.",
        src: `${IPM}/teal-pass-1.jpg`,
        alt: "Round 2 — teal background pass",
      },
      {
        label: "Round 3 · title and tagline test",
        caption: "The background refined in Photoshop, with the title and a tagline placed to test balance and contrast.",
        src: `${IPM}/teal-pass-2.jpg`,
        alt: "Round 3 — teal key art with title and tagline test",
      },
      {
        label: "Final title lockups",
        caption: "English, Hindi, Tamil and Telugu, typeset by hand in Photoshop over the source calligraphy.",
        src: `${IPM}/titles-final.jpg`,
        alt: "Final title lockups in English, Hindi, Tamil and Telugu",
      },
      {
        label: "Premiere Pro timeline",
        caption: "One jump-cut edit for all four shorts: English subtitles on top, a title card per language, and a separate audio track per language for the mix.",
        src: `${IPM}/premiere-timeline.jpg`,
        alt: "Premiere Pro timeline for the vertical shorts",
      },
    ],
  },
  {
    title: "And Yet, You Are So Sweet — Japanese & English key art, title animation and vertical shorts",
    stacked: true,
    storyFrame: "16 / 9",
    variantSets: [
      {
        label: "Japanese title",
        variants: [
          { label: "Cover art", ratio: "16 / 9", src: `${SWEET}/jp-16x9.jpg` },
          { label: "Poster art", ratio: "2 / 3", src: `${SWEET}/jp-2x3.jpg` },
          { label: "Short 44s", ratio: "9 / 16", src: `${SWEET}/jp-short-poster.jpg`, video: "videos/and-yet-sweet-jp-short-9x16.mp4" },
          { label: "Title animation", ratio: "9 / 16", src: `${SWEET}/jp-title-anim-poster.jpg`, video: "videos/and-yet-sweet-jp-title-anim.mp4" },
        ],
      },
      {
        label: "English title",
        variants: [
          { label: "Cover art", ratio: "16 / 9", src: `${SWEET}/en-16x9.jpg` },
          { label: "Poster art", ratio: "2 / 3", src: `${SWEET}/en-2x3.jpg` },
          { label: "Short 44s", ratio: "9 / 16", src: `${SWEET}/en-short-poster.jpg`, video: "videos/and-yet-sweet-en-short-9x16.mp4" },
          { label: "Title animation", ratio: "9 / 16", src: `${SWEET}/en-title-anim-poster.jpg`, video: "videos/and-yet-sweet-en-title-anim.mp4" },
        ],
      },
      {
        label: "Box art — movies 3:4 · seasons 4:3",
        variants: [
          { label: "Box art JA", ratio: "3 / 4", src: `${SWEET}/jp-3x4.jpg` },
          { label: "Box art EN", ratio: "3 / 4", src: `${SWEET}/en-3x4.jpg` },
          { label: "Box art JA", ratio: "4 / 3", src: `${SWEET}/jp-4x3.jpg` },
          { label: "Box art EN", ratio: "4 / 3", src: `${SWEET}/en-4x3.jpg` },
        ],
      },
      {
        label: "Background — textless, left side clear for the UI",
        variants: [
          { label: "Background", ratio: "16 / 9", src: `${SWEET}/background-16x9.jpg` },
          { label: "Background · UI-side guide", ratio: "16 / 9", src: `${SWEET}/background-16x9-guide.jpg` },
        ],
      },
      {
        label: "Spec check — safe-zone guide overlays on",
        variants: [
          { label: "Cover JA · safe zone", ratio: "16 / 9", src: `${SWEET}/jp-16x9-guide.jpg` },
          { label: "Poster JA · safe zone", ratio: "2 / 3", src: `${SWEET}/jp-2x3-guide.jpg` },
          { label: "Poster EN · safe zone", ratio: "2 / 3", src: `${SWEET}/en-2x3-guide.jpg` },
        ],
      },
    ],
    body: (
      <>
        <p>
          A key-art and short-form package for the Japanese live-action romance <i>And Yet, You Are So Sweet</i>{" "}
          (<span lang="ja">なのに、千輝くんが甘すぎる。</span>). I watched the entire film first to understand its concept,
          theme and tone, then designed cover and poster art with two title versions, Japanese and English, an
          animated title reveal, and a vertical short in each version.
        </p>
        <p className="fact-chips">
          <span>
            <b>Versions</b> Japanese title · English title
          </span>
          <span>
            <b>Formats</b> Cover 16:9 · Background 16:9 · Poster 2:3 · Box art 3:4 &amp; 4:3 · 9:16 video
          </span>
          <span>
            <b>Tools</b> Photoshop · Illustrator · Topaz Gigapixel · Google Flow (Veo) · Premiere Pro
          </span>
        </p>
        <h4>What I did:</h4>
        <ul>
          <li>
            <b>Reading the film:</b> watched the whole film to find the concept and theme before designing anything,
            so the artwork carries the film’s light, sweet tone.
          </li>
          <li>
            <b>Key art (Photoshop):</b> built two scenes — the couple on an old boat by the harbor at dusk, and the
            shared-drink close-up — from a mix of film stills and AI-assisted background work, upscaled with Topaz
            Gigapixel and finished in Photoshop.
          </li>
          <li>
            <b>Title design (Illustrator):</b> designed both lockups myself: the Japanese title set vertically, and
            an English brush-script version with a heart flourish, each placed clear of the cast’s faces.
          </li>
          <li>
            <b>Title animation (Google Flow, Veo):</b> animated title reveals for the poster, with butterflies and
            sparkles drawing in the title.
          </li>
          <li>
            <b>Vertical shorts (Premiere Pro):</b> picked the clips from the film by hand, cut a 44-second 9:16 short,
            mixed the sound, and ended each version on its animated title card, with English subtitles.
          </li>
        </ul>
        <h4>Following the platform guidelines:</h4>
        <p>
          Built to Prime Video’s artwork specifications (Japan): Cover 16:9 at 3840×2160 and Poster 2:3 at
          2000×3000 with the title displayed, a textless Background 16:9 with the left side kept clear for the UI,
          and Box art at 1920×2560 (movies) and 2560×1920 (seasons) — every file under the 10 MB limit. I checked
          each asset with transparent guide overlays at delivery size (rows above): title margins measured 242 px
          from the top of the Japanese cover (minimum 160 px) and 240–243 px on the posters (minimum 240 px).
        </p>
        <p className="project__note">
          Self-initiated spec exercise — not an official release. Film footage and stills © the rights holders.
        </p>
      </>
    ),
    steps: [
      {
        label: "Scene pass 1",
        caption: "Exploring the harbor setting for the poster.",
        src: `${SWEET}/scene-pass-1.jpg`,
        alt: "Scene pass — beach with boats",
      },
      {
        label: "Scene pass 2",
        caption: "The couple on the boat, before the dusk grade and recomposition.",
        src: `${SWEET}/scene-pass-2.jpg`,
        alt: "Scene pass — couple on a boat",
      },
      {
        label: "Title vectors (Illustrator)",
        caption: "Both lockups designed as vectors: the English brush script and the vertical Japanese title.",
        src: `${SWEET}/title-vectors.jpg`,
        alt: "English and Japanese title vectors",
      },
      {
        label: "Placement test",
        caption: "Testing the Japanese title’s size and position against the sky before the final color.",
        src: `${SWEET}/title-placement-test.jpg`,
        alt: "Poster with the Japanese title in a test color",
      },
    ],
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
          <li>
            Designed and launched the Self-Service QA Tool, building it with engineering and leading its UAT: 80% of
            assets published without manual intervention, ~$1M in annual savings.
          </li>
          <li>
            Led UAT for the redesigned QA applications, feeding structured feedback to engineering and UX before
            rollout — QA productivity up 10% year over year.
          </li>
          <li>Partnered with engineering and UX to redesign internal QA applications — 30% less manual review effort.</li>
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
    title: "The Last Meridian — localized key art for a streaming title (6 markets)",
    body: (
      <>
        <p>
          A personal key-art project for a fictional prestige-drama original. I art-directed one master artwork and
          localized it for six markets — English, Spanish, Arabic (RTL), Hindi, Japanese (vertical) and Korean —
          across Poster 2:3, Square 1:1 and Background 16:9.
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
        <h4>Review record — Japanese poster:</h4>
        <p>The same correction, logged as structured feedback a tool or team can learn from:</p>
        <table className="review-record">
          <tbody>
            <tr>
              <th>Asset</th>
              <td>Poster 2:3 · Japanese</td>
            </tr>
            <tr>
              <th>Issue</th>
              <td>A direct text swap put the vertical title on the center axis, over the face and the star</td>
            </tr>
            <tr>
              <th>Rule</th>
              <td>The title must not cover the main character’s face or the focal point</td>
            </tr>
            <tr>
              <th>Measure</th>
              <td>Focal-zone overlap 53,310 px</td>
            </tr>
            <tr>
              <th>Fix</th>
              <td>Title set vertically (tategaki) in Mincho, in the negative space of the hood, at the master’s visual weight</td>
            </tr>
            <tr>
              <th>Result</th>
              <td>Focal-zone overlap 0 px · compliant</td>
            </tr>
          </tbody>
        </table>
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
      { src: `${TLM}/poster-en.jpg`, alt: "The Last Meridian poster — English master", label: "EN · Master" },
      { src: `${TLM}/poster-es.jpg`, alt: "The Last Meridian poster — Spanish", label: "ES" },
      { src: `${TLM}/poster-ar.jpg`, alt: "The Last Meridian poster — Arabic", label: "AR" },
      { src: `${TLM}/poster-hi.jpg`, alt: "The Last Meridian poster — Hindi", label: "HI" },
      { src: `${TLM}/poster-ja.jpg`, alt: "The Last Meridian poster — Japanese", label: "JA" },
      { src: `${TLM}/poster-ko.jpg`, alt: "The Last Meridian poster — Korean", label: "KO" },
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
      { src: `${GLAD}/poster-en.jpg`, alt: "Gladiator: Ashes of Rome poster — English master", label: "EN · Master" },
      { src: `${GLAD}/poster-es.jpg`, alt: "Gladiator: Ashes of Rome poster — Spanish", label: "ES" },
      { src: `${GLAD}/poster-ar.jpg`, alt: "Gladiator: Ashes of Rome poster — Arabic", label: "AR" },
      { src: `${GLAD}/poster-ja.jpg`, alt: "Gladiator: Ashes of Rome poster — Japanese", label: "JA" },
    ],
    imageGrid: true,
  },
  {
    title: "Control Zindagi — key art for my short film (poster, vertical, background)",
    stacked: true,
    storyFrame: "16 / 9",
    variants: [
      { label: "Poster", ratio: "2 / 3", src: `${CZ}/poster-2x3.jpg` },
      { label: "Vertical", ratio: "9 / 16", src: `${CZ}/vertical-9x16.jpg` },
      { label: "Background", ratio: "16 / 9", src: `${CZ}/background-16x9.jpg` },
    ],
    body: (
      <>
        <p>
          Film and TV artwork for <i>Control Zindagi</i> (“Control Life”), a road-safety short film I wrote, directed
          and edited. It won at Amazon Bash 2019, Amazon’s internal film competition. A group of friends set off on a road trip from
          Warangal to Hyderabad for a wedding, until a crash on the highway ends the journey. I then designed a key-art
          package for the film across three placements, pitched as a neo-noir mystery.
        </p>
        <p className="fact-chips">
          <span>
            <b>Award</b> Amazon Bash 2019
          </span>
          <span>
            <b>My role</b> Writer, director, editor (cuts, sound &amp; AV mix) · key art
          </span>
          <span>
            <b>Formats</b> 2:3 · 9:16 · 16:9
          </span>
          <span>
            <b>Artwork</b> Adobe Firefly (Gemini Flash)
          </span>
        </p>
        <h4>Starting from the title’s intent:</h4>
        <p>
          Before designing, I compiled a title overview (synopsis, themes, credits, audience and references) and
          designed the artwork from that brief, so the key art matches the film’s story, tone and message.
        </p>
        <h4>Art direction:</h4>
        <ul>
          <li>
            <b>Mood:</b> the carefree trip turned ominous: a midnight-blue forest under a full moon, the friends’ bright
            clothes against the night, and the tagline “Every trip has a darker destination”.
          </li>
          <li>
            <b>Poster:</b> the five friends as an ensemble line-up, centered, with the neon-red title lockup in the lower
            third and the moon balancing the top.
          </li>
          <li>
            <b>Vertical:</b> reframed for a tall mobile frame. The group sits smaller with more sky and forest, so the
            tagline and title keep clear margins.
          </li>
          <li>
            <b>Background:</b> the group brought close together, with a car speeding through the night behind them to
            hint at the ending, and the title held low across the center.
          </li>
        </ul>
        <h4>The narrative plan (pre-production):</h4>
        <p>
          Before the shoot I wrote a scene-by-scene plan, working title <i>CTRL Z</i>, listing the cast, props (a red
          car, a box of beer bottles) and a shot list for every scene. The story is built to turn from fun to
          consequence, then rewind:
        </p>
        <ol>
          <li>
            <b>The invite:</b> a WhatsApp group chat (“Today is Sneha’s marriage, we need to reach Hyderabad by
            evening”), with each friend replying in character.
          </li>
          <li>
            <b>Five introductions:</b> each friend is introduced in their own space, mid-routine (yoga, work on a
            laptop, a workout, still asleep), and the car picks them up one by one; the late sleeper is the running gag.
          </li>
          <li>
            <b>The highway song:</b> wide road shots and in-car moments cut to the song: cheering, a shared dance step,
            waving out of the windows, a stop at a mountain view.
          </li>
          <li>
            <b>Engine trouble:</b> the song ends and the tone shifts to suspense and comedy. Sent for the tool kit, one
            friend opens the trunk and finds the beer.
          </li>
          <li>
            <b>The choice:</b> each friend takes a bottle, the party song plays and the car speeds towards Hyderabad,
            past the city board and onto a flyover, until the car flips.
          </li>
          <li>
            <b>Breaking news:</b> a news reader on green screen reports that drunk passengers met with an accident.
          </li>
          <li>
            <b>Rewind:</b> the film rewinds to the moment the trunk opened, and closes on “There is no Ctrl Z in life”.
          </li>
        </ol>
        <p>
          <b>Credits:</b> Written, directed &amp; edited by Seetha Rama Swamy · Cinematography: Namish Kashyap · Story:
          Dheeraj Jha
        </p>
        <a href="https://www.youtube.com/watch?v=18ofs9Gq0sY" target="_blank" className="btn-link">
          Watch the film on YouTube ↗
        </a>
      </>
    ),
    steps: [
      {
        label: "Film title sequence",
        caption: "“Don’t drink and drive”: the film’s closing message, in red stencil type on asphalt.",
        src: `${CZ}/film-title-1.jpg`,
        alt: "Film title card — Don't drink and drive",
      },
      {
        label: "Film title sequence",
        caption: "“There is no Ctrl Z in life”: the line the title plays on.",
        src: `${CZ}/film-title-2.jpg`,
        alt: "Film title card — There is no Ctrl Z in life",
      },
      {
        label: "Film title card",
        caption: "“Control Zindagi”, subtitled “Control Life”, the film’s own title treatment.",
        src: `${CZ}/film-title-3.jpg`,
        alt: "Film title card — Control Zindagi",
      },
    ],
  },
  {
    title: "The Queen of Florence — one key art, three Prime Video placements",
    stacked: true,
    variants: [
      { label: "Hero banner", ratio: "16 / 9", src: `${QUEEN}/background-16x9.jpg` },
      { label: "Browse poster", ratio: "2 / 3", src: `${QUEEN}/poster-2x3.jpg` },
      { label: "Featured tile", ratio: "1 / 1", src: `${QUEEN}/tile-1x1.jpg` },
    ],
    body: (
      <>
        <p>
          A multi-aspect-ratio reframing study for a fictional period drama. One key art adapted to three contrasting
          placements without losing narrative impact or clipping the subject. A single character reference keeps the
          queen’s identity the same in every frame.
        </p>
        <p className="fact-chips">
          <span>
            <b>Formats</b> 16:9 · 2:3 · 1:1
          </span>
          <span>
            <b>Identity</b> One character reference
          </span>
          <span>
            <b>Reframing</b> Adobe Firefly
          </span>
        </p>
        <h4>Composition choices:</h4>
        <ul>
          <li>
            <b>16:9 hero banner:</b> The queen sits on the right third, and the balustrade leads the eye to her. The left
            half is open sky and city, with safe room for the title, synopsis and UI overlays. Her eye-line points back
            into that space.
          </li>
          <li>
            <b>2:3 browse poster:</b> Recomposed for a tall frame. The queen moves to the center line, the title sits in
            open sky at the top, and the tagline and date sit on the marble at the bottom. The subject stays clear of
            both text bands, so it still reads at thumbnail size in the grid.
          </li>
          <li>
            <b>1:1 featured tile:</b> A tight crop on the upper torso. Her eyes sit on the upper-third line with a direct
            gaze to camera, and the crown keeps full headroom. The scepter adds a diagonal. The frame is about emotion at
            carousel size.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "The Last Signal — cinematic sci-fi teaser",
    stacked: true,
    storyFrame: "16 / 9",
    video: { src: "videos/the-last-signal.mp4", poster: `${SIGNAL}/shot-5.jpg` },
    body: (
      <>
        <p>
          A short trailer-style teaser for a fictional sci-fi thriller. I wrote the shot structure, art-directed every
          shot with AI video generation, then edited the cut and built the sound design around it.
        </p>
        <p className="fact-chips">
          <span>
            <b>Length</b> 21 s
          </span>
          <span>
            <b>Format</b> 16:9 · 1080p
          </span>
          <span>
            <b>Style</b> Photorealistic sci-fi thriller
          </span>
          <span>
            <b>Rhythm</b> Mystery → discovery → acceleration → silence → title
          </span>
        </p>
        <h4>What I did:</h4>
        <ul>
          <li>Planned a shot list with timing, visual, audio and purpose for each shot.</li>
          <li>Set one master visual direction: deep blacks, cool blue cockpit light, realistic Earth from orbit.</li>
          <li>Created one astronaut reference and used it for every shot to keep the character consistent.</li>
          <li>Edited the cut and layered radio static, signal pulses, a whoosh and a title hit.</li>
          <li>Built the title card as clean typography in the edit, not as generated footage.</li>
        </ul>
        <h4>Key creative decision:</h4>
        <p>
          No literal alien, ship or monster. The mystery comes only from the astronaut’s reaction, an unexplained
          waveform, a distant signal and Earth’s isolation, so it reads like a real film trailer, not an AI clip.
        </p>
      </>
    ),
    steps: [
      {
        label: "Emerge from darkness",
        caption: "The astronaut slowly appears in the dark cockpit under faint instrument light.",
        notes: ["Audio: radio static, low ambience"],
        src: `${SIGNAL}/shot-1.jpg`,
        alt: "Astronaut emerging from darkness inside the spacecraft",
      },
      {
        label: "The signal",
        caption: "Earth from deep space; an unexplained ring of light pulses beside it.",
        notes: ["Audio: signal pulse"],
        src: `${SIGNAL}/shot-2.jpg`,
        alt: "Earth with a glowing signal ring beside it",
      },
      {
        label: "Telemetry",
        caption: "The monitor shows a waveform with a strange, repeating pattern.",
        notes: ["Audio: electronic pulse"],
        src: `${SIGNAL}/shot-3.jpg`,
        alt: "Spacecraft monitor with an unusual waveform",
      },
      {
        label: "Realization",
        caption: "Fast close-ups: the signal reflects across her visor as the fear builds.",
        notes: ["Fast, deliberate cuts accelerate the rhythm"],
        src: `${SIGNAL}/shot-4.jpg`,
        alt: "Close-up of the astronaut reacting, waveform reflected on her visor",
      },
      {
        label: "The window",
        caption: "She turns to the window as Earth slowly fills the frame.",
        notes: ["Audio: everything drops to silence"],
        src: `${SIGNAL}/shot-5.jpg`,
        alt: "Astronaut facing the window as Earth fills it",
      },
      {
        label: "Title card",
        caption: "THE LAST SIGNAL / COMING SOON on black: restrained type with a slow fade-in.",
        notes: ["Audio: title hit"],
        src: `${SIGNAL}/shot-6.jpg`,
        alt: "Title card — The Last Signal",
      },
    ],
  },
  {
    title: "The Queen’s Trial — AI period-drama dialogue scene (Kling 3.0)",
    stacked: true,
    storyFrame: "16 / 9",
    video: { src: "videos/royal-court-kling3.mp4", poster: `${ROYAL}/shot-2.jpg` },
    body: (
      <>
        <p>
          A 21-second period-drama scene: a king confronts a chained queen in a candlelit hall. Built as an audio and
          emotion test for Kling 3.0: can an AI scene hold performance, dialogue and continuity across shots, the way
          a streaming drama would?
        </p>
        <p className="fact-chips">
          <span>
            <b>Model</b> Kling 3.0
          </span>
          <span>
            <b>Length</b> 21 s · 16:9
          </span>
          <span>
            <b>Focus</b> Emotion · dialogue audio · shot continuity
          </span>
        </p>
        <h4>What I directed:</h4>
        <ul>
          <li>Coverage like a drama edit: close-up, over-the-shoulder, reaction close-up, then a wide to close.</li>
          <li>Restrained performance: the queen’s tension is played in the eyes, not in big gestures.</li>
          <li>Consistent characters, costume, chains and candlelight in every shot.</li>
        </ul>
        <a
          href="https://firefly.adobe.com/boards/id/urn:aaid:sc:AP:30fd07d5-684c-4d47-ac36-dc5eefe706d7?invite=true&accept=true"
          target="_blank"
          className="btn-link"
        >
          Storyboard &amp; prompts on Adobe Firefly ↗
        </a>
      </>
    ),
    steps: [
      {
        label: "Close-up",
        caption: "The queen, chained, holds the frame before a word is spoken.",
        src: `${ROYAL}/shot-1.jpg`,
        alt: "Close-up of the chained queen",
      },
      {
        label: "Over the shoulder",
        caption: "The king confronts her; the eyeline carries the tension.",
        src: `${ROYAL}/shot-2.jpg`,
        alt: "Over-the-shoulder shot of the king facing the queen",
      },
      {
        label: "Reaction",
        caption: "A tight reaction shot: emotion played with restraint.",
        src: `${ROYAL}/shot-3.jpg`,
        alt: "Tight reaction close-up of the queen",
      },
      {
        label: "Wide",
        caption: "The hall opens up to close the scene.",
        src: `${ROYAL}/shot-4.jpg`,
        alt: "Wide shot of the king and queen in the candlelit hall",
      },
    ],
  },
  {
    title: "Nike “Find Your Greatness” — spec ad, concept to final cut",
    stacked: true,
    storyFrame: "16 / 9",
    body: (
      <>
        <p>
          A spec ad for Nike’s <i>Find Your Greatness</i> campaign that I wrote, directed and edited, from concept to
          first cut in nine weeks (June–August 2017). A man trains in a gym, on the road and on the beach; on the
          basketball court he scores with one hand, revealing a physical challenge. The line: greatness has no peak.
        </p>
        <p className="fact-chips">
          <span>
            <b>My role</b> Writer, director, editor
          </span>
          <span>
            <b>Timeline</b> 9 weeks · concept to first cut
          </span>
          <span>
            <b>Post</b> After Effects · Mocha
          </span>
          <span>
            <b>Locations</b> 4 · gym, road, beach, court
          </span>
        </p>
        <h4>How I built it:</h4>
        <ul>
          <li>
            <b>Concept:</b> four concept boards (football, “Just do it”, skipping, one-arm basketball); chose the
            one-arm story for its emotion.
          </li>
          <li>
            <b>Pre-production:</b> screenplay with camera views, pre-visualization sketches, mood photos, location
            scouting, costumes, references and a test shoot for the hand effect.
          </li>
          <li>
            <b>Production:</b> a shot list for four locations, from wide establishing shots to slow-motion close-ups
            of the one-handed goal.
          </li>
          <li>
            <b>Post-production:</b> Roto Brush and Mocha tracking, hand rotoscoping and replacement, a sky matte and
            the final composite in After Effects.
          </li>
        </ul>
        <p>
          <b>Voice-over:</b> “Greatness is not predefined or measured by proof. Greatness is what someone is capable
          of.”
        </p>
        <p>
          <b>Credits:</b> Written, directed &amp; edited by Seetha Rama Swamy · Mentor: K Chandra Sekhar ·
          Cinematography: Partha Saradhi · Camera: Jagadeesh Challa · Model: David Ravi
        </p>
        <a href="https://www.behance.net/gallery/57088535/NIKE-Find-Your-Greatness-Campaign" target="_blank" className="btn-link">
          Watch the ad on Behance ↗
        </a>
      </>
    ),
    steps: [
      {
        label: "Concept",
        caption: "Voice-over lines drafted in my notebook: “Greatness has no peak.”",
        src: `${NIKE}/concept.jpg`,
        alt: "Handwritten concept notes for the Find Your Greatness voice-over",
      },
      {
        label: "Pre-visualization",
        caption: "Screenplay sketched shot by shot with camera views.",
        src: `${NIKE}/previs.jpg`,
        alt: "Hand-drawn pre-visualization storyboard",
      },
      {
        label: "Test shoot",
        caption: "A green glove to test the hand replacement before the shoot.",
        src: `${NIKE}/test-shoot.jpg`,
        alt: "Test shoot with a green glove for the hand effect",
      },
      {
        label: "Production",
        caption: "On the basketball court, the fourth of four locations.",
        src: `${NIKE}/making.jpg`,
        alt: "Behind the scenes on the basketball court",
      },
      {
        label: "Roto & tracking",
        caption: "Hand rotoscoping and tracking in Mocha.",
        src: `${NIKE}/roto-track.jpg`,
        alt: "Mocha tracking of the hand in post-production",
      },
      {
        label: "Final composite",
        caption: "Sky matte and hand replacement combined in After Effects.",
        src: `${NIKE}/final-comp.jpg`,
        alt: "Final After Effects composite against the sky",
      },
    ],
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
      { src: `${LORA}/lora-10.jpg`, alt: "LoRA output — fantasy armour at sunset" },
      { src: `${LORA}/lora-11.jpg`, alt: "LoRA output — climbing a rock face" },
      { src: `${LORA}/lora-12.jpg`, alt: "LoRA output — Paris street in a camel coat" },
      { src: `${LORA}/lora-03.jpg`, alt: "LoRA output — silver hair and headphones" },
      { src: `${LORA}/lora-02.jpg`, alt: "LoRA output — three poses in a denim jacket" },
      { src: `${LORA}/lora-01.jpg`, alt: "LoRA output — jumping pose in a blazer and hat" },
      { src: `${LORA}/lora-07.jpg`, alt: "LoRA output — brown jacket against a white wall" },
      { src: `${LORA}/lora-06.jpg`, alt: "LoRA output — outdoors on stone steps" },
      { src: `${LORA}/lora-05.jpg`, alt: "LoRA output — seated on a yellow cube in a shearling jacket" },
      { src: `${LORA}/lora-04.jpg`, alt: "LoRA output — standing on a yellow backdrop in a SEE THAT AI tee" },
      { src: `${LORA}/lora-08.jpg`, alt: "LoRA output — red sweater, studio portrait" },
      { src: `${LORA}/lora-13.jpg`, alt: "LoRA output — casual outfit on a beige backdrop" },
      { src: `${LORA}/lora-09.jpg`, alt: "LoRA output — superhero suit on a city rooftop" },
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
];

/** Anchor id for a project: its title up to the dash, e.g. "the-last-meridian". */
export const projectId = (work: RecentWork) =>
  work.title
    .split(" — ")[0]
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
