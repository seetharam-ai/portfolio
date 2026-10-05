import type { ReactNode } from "react";
import type { LightboxItem } from "../types";
import { useLightbox } from "./Lightbox";
import { Thumb } from "./Thumb";

export interface StoryStep {
  label: string;
  caption: ReactNode;
  src: string;
  alt: string;
  /** Prompt used at this step (short text). */
  prompt?: ReactNode;
  /** Longer prompt material (e.g. product JSON), shown collapsed. */
  details?: { summary: string; code: string };
  /** Neutral notes (e.g. options or tips). */
  notes?: ReactNode[];
  /** Issues found in review; omitted for input steps. */
  issues?: string[];
  /** Marks the approved final step. */
  pass?: string;
}

/** A process shown step by step: full image in a uniform frame + the context behind it. */
export function Storyboard({
  steps,
  frame = "9 / 16",
  compare = false,
}: {
  steps: StoryStep[];
  frame?: string;
  /** Side-by-side comparison: no step is marked as the final one. */
  compare?: boolean;
}) {
  const openLightbox = useLightbox();
  const items: LightboxItem[] = steps.map((s) => ({ type: "img", src: s.src }));

  return (
    <ol className={compare ? "storyboard storyboard--compare" : "storyboard"} style={{ gridTemplateColumns: `repeat(${columnsFor(steps.length)}, minmax(0, 1fr))` }}>
      {steps.map((step, i) => (
        <li key={step.src} className="story">
          <button className="story__frame media-open" style={{ aspectRatio: frame }} onClick={() => openLightbox(items, i)}>
            <Thumb src={step.src} alt={step.alt} loading="lazy" />
            <span className="story__num">{i + 1}</span>
          </button>
          <div className="story__text">
            <h3 className="story__label">{step.label}</h3>
            <p className="story__caption">{step.caption}</p>
            {step.prompt && (
              <p className="story__prompt">
                <span>Prompt</span>
                {step.prompt}
              </p>
            )}
            {step.details && (
              <details className="story__details">
                <summary>{step.details.summary}</summary>
                <pre>{step.details.code}</pre>
              </details>
            )}
            {step.notes && (
              <ul className="story__notes">
                {step.notes.map((note, n) => (
                  <li key={n}>{note}</li>
                ))}
              </ul>
            )}
            {step.issues && (
              <ul className="story__issues">
                {step.issues.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
            )}
            {step.pass && <p className="story__pass">✓ {step.pass}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Columns that divide the steps evenly, so every row is complete. */
function columnsFor(n: number) {
  return [5, 4, 3].find((c) => n % c === 0) ?? Math.min(n, 4);
}
