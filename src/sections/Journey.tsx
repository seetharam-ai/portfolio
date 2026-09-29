import { useState } from "react";
import { Reveal, Section } from "../components/Reveal";
import { journey } from "../data/site";
import { cx } from "../utils/scroll";

export function Journey() {
  return (
    <Section id="journey">
      <Reveal as="h2" className="reveal-trigger">
        <span className="heading-gradient">My Journey</span>
      </Reveal>
      <div className="journey-list">
        {journey.map((job) => (
          <JourneyEntry key={job.role} {...job} />
        ))}
      </div>
    </Section>
  );
}

function JourneyEntry({ role, logo, logoAlt, details }: (typeof journey)[number]) {
  // Each entry expands/collapses independently.
  const [open, setOpen] = useState(false);

  return (
    <div className={cx("journey-entry", open && "is-active")} onClick={() => setOpen((o) => !o)}>
      <div className="journey-info">
        <div className="journey-header">
          <h3>{role}</h3>
          <div className="journey-media">
            <img src={logo} alt={logoAlt} loading="lazy" />
          </div>
        </div>
        <ul className="journey-details">
          {details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
