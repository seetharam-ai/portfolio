import { useEffect, useState } from "react";
import { views, type ViewId } from "../data/site";

export interface Route {
  view: ViewId;
  /** Optional sub-section, e.g. "#work/projects" → "projects". */
  sub?: string;
}

function parse(hash: string): Route {
  const [view, sub] = hash.replace(/^#\/?/, "").split("/");
  const known = views.some((v) => v.id === view);
  return { view: known ? (view as ViewId) : "home", sub: known ? sub : undefined };
}

/** Current view from the URL hash; back/forward and shared links work. */
export function useHashRoute(): Route {
  const [route, setRoute] = useState(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => {
      setRoute(parse(window.location.hash));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export const href = (view: ViewId, sub?: string) => `#${view}${sub ? `/${sub}` : ""}`;
