import { useEffect, type RefObject } from "react";

/**
 * Click-and-drag horizontal scrolling for a gallery. Clicks that end a drag
 * are swallowed so dragging over an image doesn't open the lightbox.
 */
export function useDragScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const gallery = ref.current;
    if (!gallery) return;

    let isDragging = false;
    let hasDragged = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("button, a, .view-all-card")) return;
      isDragging = true;
      hasDragged = false;
      startX = e.pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
      gallery.style.cursor = "grabbing";
      // Let media receive the click (lightbox); block text selection elsewhere.
      if (!target.closest("img, video, audio")) e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      if ((e.target as Element).closest("img, video")) e.preventDefault();
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      gallery.classList.remove("is-dragging");
      gallery.style.cursor = "grab";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const walk = (e.pageX - gallery.offsetLeft - startX) * 1.5;
      if (Math.abs(walk) > 5) {
        hasDragged = true;
        gallery.classList.add("is-dragging");
      }
      gallery.scrollLeft = scrollLeft - walk;
    };

    const onClickCapture = (e: MouseEvent) => {
      if (hasDragged) {
        e.stopPropagation();
        e.preventDefault();
        hasDragged = false;
      }
    };

    gallery.addEventListener("mousedown", onMouseDown);
    gallery.addEventListener("dragstart", onDragStart);
    gallery.addEventListener("click", onClickCapture, true);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      gallery.removeEventListener("mousedown", onMouseDown);
      gallery.removeEventListener("dragstart", onDragStart);
      gallery.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [ref]);
}
