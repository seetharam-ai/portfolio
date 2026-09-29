import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Paragraph clamped by the `.description-clamp` CSS class, with a
 * "See more / See less" toggle shown only when the text is actually cut off.
 */
export function ClampedText({ children, expanded = false }: { children: ReactNode; expanded?: boolean }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [clamped, setClamped] = useState(!expanded);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    if (expanded) return;
    let timer: number;
    const measure = () => {
      window.clearTimeout(timer);
      // Re-clamp, then measure after layout settles (same as the original 100ms delay).
      setClamped(true);
      timer = window.setTimeout(() => {
        const p = ref.current;
        if (p) setOverflows(p.scrollHeight > p.clientHeight);
      }, 100);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, [expanded]);

  return (
    <>
      <p ref={ref} className={clamped ? "description-clamp" : undefined}>
        {children}
      </p>
      {overflows && !expanded && (
        <button className="see-more-btn" style={{ display: "inline-block" }} onClick={() => setClamped((c) => !c)}>
          {clamped ? "See more" : "See less"}
        </button>
      )}
    </>
  );
}
