import type { ImgHTMLAttributes } from "react";
import { thumb } from "../utils/media";

/**
 * Image that loads the small WebP copy, falling back to the original when
 * no copy exists yet (e.g. a new file added without running the optimizer).
 */
export function Thumb({ src, ...rest }: { src: string } & Omit<ImgHTMLAttributes<HTMLImageElement>, "src">) {
  return (
    <img
      {...rest}
      src={thumb(src)}
      onError={(e) => {
        const img = e.currentTarget;
        if (img.dataset.fallback) return;
        img.dataset.fallback = "1";
        img.src = src;
      }}
    />
  );
}
