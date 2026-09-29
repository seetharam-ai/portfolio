/** Smooth-scrolls to an element, leaving room for the fixed navbar on desktop. */
export function scrollToElement(target: Element, desktopOffset: number, mobileOffset = 0) {
  const offset = window.innerWidth > 768 ? desktopOffset : mobileOffset;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

/** Click handler for in-page `#section` links. */
export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  scrollToElement(target, 70);
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
