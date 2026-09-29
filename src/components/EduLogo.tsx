import type { Education } from "../data/education";

/** School logo, or a text monogram when there is no logo asset. */
export function EduLogo({ edu }: { edu: Education }) {
  if (edu.logo) return <img src={edu.logo} alt={edu.alt} loading="lazy" />;
  return (
    <span className="monogram" role="img" aria-label={edu.alt}>
      {edu.monogram}
    </span>
  );
}
