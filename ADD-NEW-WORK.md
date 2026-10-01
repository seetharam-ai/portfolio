# Adding new work to the portfolio

All artwork for creative / artwork roles (key art, before–after corrections, Figma) lives in **one file** and **one folder**:

| What | Where |
|---|---|
| Image files | `public/images/artwork/key-art/`, `public/images/artwork/before-after/`, `public/images/artwork/figma/` |
| Titles, descriptions, which files to show | `src/data/artwork.ts` |

A category appears on the site (Work → **Artwork**) as soon as it has at least one entry. The home page tiles are picked by hand (see the end of this guide).

---

## 1. Key art set (Poster / Cover / Background)

1. Export each variant as JPG or PNG, e.g.
   - Poster **2:3** (e.g. 2000×3000)
   - Cover **16:9** (e.g. 3840×2160)
   - Background **16:9**, with clear space for UI and title overlays
2. Copy them into `public/images/artwork/key-art/` (lowercase names, no spaces: `in-my-dreams-poster.jpg`).
3. In `src/data/artwork.ts`, add an entry to `keyArt` (there is a commented example to copy):

```ts
{
  title: "In My Dreams — key art set",
  description: "What the set shows: creative intent, placements, localisation.",
  tag: "English + Telugu title",            // optional
  variants: [
    { label: "Poster",     ratio: "2 / 3",  src: "images/artwork/key-art/in-my-dreams-poster.jpg" },
    { label: "Cover",      ratio: "16 / 9", src: "images/artwork/key-art/in-my-dreams-cover.jpg" },
    { label: "Background", ratio: "16 / 9", src: "images/artwork/key-art/in-my-dreams-background.jpg" },
  ],
},
```

> Use your own titles (your short films, personal projects). Don't publish real studio or Prime Video artwork you don't own.

## 2. Before / after correction

1. Export the **same framing** twice — the original and your corrected version — at the same size.
2. Copy both into `public/images/artwork/before-after/` (`title-before.jpg`, `title-after.jpg`).
3. Add an entry to `corrections`:

```ts
{
  title: "Title — what was fixed",
  description: "One or two sentences on the problem and your call.",
  before: "images/artwork/before-after/title-before.jpg",
  after: "images/artwork/before-after/title-after.jpg",
  fixes: ["Color", "Skin retouch", "Title legibility", "Safe area"],   // optional
},
```

## 3. Figma work

Export a PNG of the frame into `public/images/artwork/figma/`, then add to `figmaWork`:

```ts
{
  title: "Layout study",
  description: "What it demonstrates.",
  src: "images/artwork/figma/layout-study.png",
  link: "https://www.figma.com/...",   // optional, only if shareable
},
```

---

## Preview and publish

```bash
npm run dev                          # preview at http://localhost:5503/#work
python scripts/optimize-images.py    # optional: makes fast-loading copies (needs Pillow)
git add -A && git commit -m "Add new artwork"
git push
```

Merging to `main` publishes the site automatically (see the Actions tab on GitHub).

**No time to run anything locally?** You can do it all on github.com: open the folder, choose *Add file → Upload files*, then edit `src/data/artwork.ts` with the pencil icon and commit. The site falls back to the original images if the optimizer hasn't been run — it just loads a little slower.

## Changing the home page picks

`homeFeatured` at the bottom of `src/data/artwork.ts` sets the "Selected work" bento on Home. Each item is an image or a silent looping video (`kind`, `src`, and a `poster` for videos), with a short `badge`, a `title`, a `size` (`xl` 2×2, `tall` 1×2, `wide` 2×1 or `std`) and a `link`: `work/<category>` (e.g. `work/before-after`) or `work/projects/<project-id>`. The id is the project title up to the dash, lowercased with hyphens ("The Last Meridian — …" → `the-last-meridian`). Keep the sizes adding up to full rows of four.

## Adding a case study

Add the project to `src/data/recentWorks.tsx`, then give it an index entry in `src/data/projectMeta.ts` under its id: a `kicker` (category), a one-sentence `summary`, three short `tags` and, optionally, a `cover` image. The Projects page shows only this; the full story opens on the project's own page.
