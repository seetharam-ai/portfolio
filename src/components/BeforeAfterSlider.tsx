import { useRef, useState, type CSSProperties } from "react";
import type { BeforeAfter } from "../data/artwork";
import { Thumb } from "./Thumb";

/** Drag (or use the keyboard on the slider) to compare before and after. */
export function BeforeAfterSlider({
  item,
  onOpen,
  style,
}: {
  item: BeforeAfter;
  onOpen: () => void;
  style?: CSSProperties;
}) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);

  const setFromPointer = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <article className="ba-card" style={style}>
      <div
        ref={frameRef}
        className="ba-frame"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromPointer(e.clientX);
        }}
        onPointerMove={(e) => e.buttons === 1 && setFromPointer(e.clientX)}
      >
        <Thumb src={item.after} alt={`${item.title} — after`} draggable={false} />
        <div className="ba-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Thumb src={item.before} alt={`${item.title} — before`} draggable={false} />
        </div>
        <div className="ba-handle" style={{ left: `${pos}%` }} aria-hidden>
          <span />
        </div>
        <span className="ba-tag ba-tag--before">Before</span>
        <span className="ba-tag ba-tag--after">After</span>
        <input
          className="ba-range"
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Compare before and after: ${item.title}`}
        />
      </div>
      <div className="work-card__body">
        <h3 className="work-card__title">{item.title}</h3>
        {item.description && <p>{item.description}</p>}
        {item.fixes && (
          <ul className="keywords keywords--sm">
            {item.fixes.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}
        <button className="more-btn" onClick={onOpen}>
          View full size
        </button>
      </div>
    </article>
  );
}
