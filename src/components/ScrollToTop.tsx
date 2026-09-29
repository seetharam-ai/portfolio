import { useCallback, useState } from "react";
import { useWindowScroll } from "../hooks/useWindowScroll";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useWindowScroll(useCallback(() => setShow(window.scrollY > 300), []));

  return (
    <button
      id="scrollToTopBtn"
      className={show ? "show" : undefined}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
