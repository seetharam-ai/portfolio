import type { KeyArtSet } from "../data/artwork";
import { Thumb } from "./Thumb";

/** One title's artwork variants side by side, each in its true aspect ratio. */
export function KeyArtCard({ set, onOpen }: { set: KeyArtSet; onOpen: (index: number) => void }) {
  return (
    <article className="keyart">
      <div className="keyart__head">
        <div>
          <h3 className="project__title">{set.title}</h3>
          <p className="keyart__desc">{set.description}</p>
        </div>
        {set.tag && <span className="cert__date">{set.tag}</span>}
      </div>
      <div className="keyart__variants">
        {set.variants.map((v, i) => (
          <figure key={v.src} className="keyart__variant" style={{ flexGrow: ratioValue(v.ratio) }}>
            <button className="media-open" style={{ aspectRatio: v.ratio }} onClick={() => onOpen(i)}>
              <Thumb src={v.src} alt={`${set.title} — ${v.label}`} loading="lazy" />
            </button>
            <figcaption className="label">
              {v.label} · {v.ratio.replace(/\s/g, "")}
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}

/** Width share for a variant so all frames in the row end up the same height. */
function ratioValue(ratio: string) {
  const [w, h] = ratio.split("/").map(Number);
  return w && h ? w / h : 1;
}
