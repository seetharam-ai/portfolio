import type { ElementType, HTMLAttributes } from "react";
import { useReveal } from "../hooks/useReveal";
import { cx } from "../utils/scroll";

type RevealProps = HTMLAttributes<HTMLElement> & { as?: ElementType; id?: string };

/**
 * Renders `as` (default div) and adds `.reveal-visible` once it scrolls
 * into view — replaces the old global reveal-on-scroll observer.
 */
export function Reveal({ as: Tag = "div", className, ...rest }: RevealProps) {
  const [ref, visible] = useReveal<HTMLElement>();
  return <Tag ref={ref} className={cx(className, visible && "reveal-visible") || undefined} {...rest} />;
}

/** A top-level page `<section>` with the reveal animation. */
export function Section(props: Omit<RevealProps, "as"> & { id: string }) {
  return <Reveal as="section" {...props} />;
}
