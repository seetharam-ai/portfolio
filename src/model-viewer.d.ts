import type { DetailedHTMLProps, HTMLAttributes } from "react";

// <model-viewer> is loaded as a web component from the CDN script in index.html.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        alt?: string;
        "auto-rotate"?: boolean | string;
        "camera-controls"?: boolean | string;
        ar?: boolean | string;
        "shadow-intensity"?: string;
      };
    }
  }
}
