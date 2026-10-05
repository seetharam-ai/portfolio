import { useEffect, type RefObject } from "react";

/** Blocks that fade up as they enter the screen, on every page except Home (which runs its own). */
const SELECTOR = [
  ".case-row",
  ".work-card",
  ".ba-card",
  ".ba-lead",
  ".cert",
  ".story",
  ".project__variants",
  ".case-detail__story",
  ".timeline__item",
  ".expertise-card",
  ".cap",
  ".edu-card",
  ".contact > *",
].join(",");

/**
 * The same reveal as the home page: each block fades and rises once, the first
 * time it scrolls into view, with a short stagger between neighbours. Blocks
 * added later (e.g. "show more" in a gallery) are picked up too. Nothing moves
 * when the visitor prefers reduced motion.
 */
export function useReveal(rootRef: RefObject<HTMLElement | null>, key: string) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || root.querySelector(".sv-home")) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -6% 0px" },
    );

    const tag = () => {
      root.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.classList.contains("is-in")) return;
        if (!el.classList.contains("reveal")) {
          el.classList.add("reveal");
          const siblings = el.parentElement ? [...el.parentElement.children] : [el];
          el.style.setProperty("--d", String(Math.min(siblings.indexOf(el), 3)));
        }
        if (still) {
          el.classList.add("is-in");
          return;
        }
        // (Re)observe: a re-run of this effect must pick up blocks an earlier run tagged.
        io.observe(el);
      });
    };

    // Safety net: a fast scroll or a jump can skip past a block without it ever
    // "intersecting", so anything already above the bottom of the screen is shown.
    let raf = 0;
    const sweep = () => {
      raf = 0;
      const limit = window.innerHeight;
      root.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add("is-in");
          io.unobserve(el);
        }
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sweep);
    };

    tag();
    const mo = new MutationObserver(tag);
    mo.observe(root, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      mo.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [rootRef, key]);
}
