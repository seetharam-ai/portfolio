import { useEffect, useState } from "react";
import { views, type ViewId } from "../data/site";

export interface Route {
  view: ViewId;
  /** Optional sub-section, e.g. "#work/projects" → "projects". */
  sub?: string;
}

// Section anchors from the old single-page site. The CV and older shared
// links still point at these, so map each one to its new view.
const LEGACY: Record<string, string> = {
  introduction: "home",
  myExpertise: "experience",
  "ai-creative-works": "work/creatives",
  "generative-ai-works": "work/2d",
  "Recent-works": "work/projects",
  journey: "experience",
  portfolio: "work/design",
  "edu-certificates": "credentials",
};

function parse(hash: string): Route {
  const raw = hash.replace(/^#\/?/, "");
  const [view, sub] = (LEGACY[raw] ?? raw).split("/");
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
