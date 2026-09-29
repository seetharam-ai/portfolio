import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Paragraph clamped by the `.clamp` CSS class, with a "More / Less" toggle
 * shown only when the text is actually cut off.
 */
export function ClampedText({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [clamped, setClamped] = useState(true);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    let timer: number;
    const measure = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const p = ref.current;
        if (p && p.classList.contains("clamp")) setOverflows(p.scrollHeight > p.clientHeight + 1);
      }, 100);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      <p ref={ref} className={clamped ? "clamp" : undefined}>
        {children}
      </p>
      {overflows && (
        <button className="more-btn" onClick={() => setClamped((c) => !c)}>
          {clamped ? "More" : "Less"}
        </button>
      )}
    </>
  );
}
