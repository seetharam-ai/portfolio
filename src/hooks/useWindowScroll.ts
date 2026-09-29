import { useEffect } from "react";

/** Runs `onScroll` on every (passive) window scroll and once on mount. */
export function useWindowScroll(onScroll: () => void) {
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
}
