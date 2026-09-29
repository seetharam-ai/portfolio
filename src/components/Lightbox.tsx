import { full } from "../utils/media";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { LightboxItem } from "../types";

type OpenLightbox = (items: LightboxItem[], index: number) => void;

const LightboxContext = createContext<OpenLightbox>(() => {});

/** Opens the shared lightbox with a gallery and the index to start at. */
export const useLightbox = () => useContext(LightboxContext);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const openLightbox = useCallback<OpenLightbox>((newItems, startIndex) => {
    if (newItems.length === 0) return;
    setItems(newItems);
    setIndex(Math.max(0, startIndex));
    setOpen(true);
  }, []);

  return (
    <LightboxContext.Provider value={openLightbox}>
      {children}
      <Lightbox
        items={items}
        index={index}
        open={open}
        onIndexChange={setIndex}
        onClose={() => setOpen(false)}
      />
    </LightboxContext.Provider>
  );
}

interface LightboxProps {
  items: LightboxItem[];
  index: number;
  open: boolean;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

function Lightbox({ items, index, open, onIndexChange, onClose }: LightboxProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [zoom, setZoom] = useState({ scale: 1, x: 0, y: 0 });
  const drag = useRef<{ startX: number; startY: number } | null>(null);

  const item = open ? items[index] : undefined;
  const count = items.length;

  const next = useCallback(() => onIndexChange((index + 1) % count), [index, count, onIndexChange]);
  const prev = useCallback(() => onIndexChange((index - 1 + count) % count), [index, count, onIndexChange]);

  // Reset zoom/pan whenever the shown media changes.
  useEffect(() => setZoom({ scale: 1, x: 0, y: 0 }), [item?.src, open]);

  // Keyboard navigation.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev, onClose]);

  // Wheel-to-zoom needs a non-passive listener so it can preventDefault.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setZoom((z) => ({ ...z, scale: Math.min(Math.max(1, z.scale - e.deltaY * 0.001), 4) }));
    };
    img.addEventListener("wheel", onWheel, { passive: false });
    return () => img.removeEventListener("wheel", onWheel);
  }, [item?.type]);

  // Drag-to-pan on the zoomed image.
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!drag.current) return;
      const { startX, startY } = drag.current;
      setZoom((z) => ({ ...z, x: e.clientX - startX, y: e.clientY - startY }));
    };
    const onUp = () => (drag.current = null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const stop = (fn: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    fn();
  };

  return (
    <div id="lightbox" className={open ? "show" : undefined} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <span className="close" aria-label="Close" onClick={onClose}>
        &times;
      </span>
      <div className="lightbox-container">
        <div className="media-wrapper">
          {item?.type === "img" && (
            <img
              ref={imgRef}
              src={full(item.src)}
              alt=""
              draggable={false}
              style={{
                transform: `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.scale})`,
                cursor: drag.current ? "grabbing" : "grab",
              }}
              onMouseDown={(e) => {
                drag.current = { startX: e.clientX - zoom.x, startY: e.clientY - zoom.y };
              }}
            />
          )}
          {item?.type === "video" && <video key={item.src} src={full(item.src)} controls playsInline loop autoPlay />}
        </div>
        <div className="lightbox-nav">
          <span className="l-arrow prev" aria-label="Previous" onClick={stop(prev)}>
            &#8592;
          </span>
          <span className="l-arrow next" aria-label="Next" onClick={stop(next)}>
            &#8594;
          </span>
        </div>
      </div>
    </div>
  );
}
