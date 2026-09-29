import { useState } from "react";
import { eduCertItems } from "../data/education";
import { expertise, journey } from "../data/site";
import { cx } from "../utils/cx";

const education = eduCertItems.filter((i) => i.kind === "education");

export function ExperienceView() {
  // First role open by default; others expand on click.
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="experience">
      <div className="view-head">
        <div>
          <p className="label">Career</p>
          <h1 className="view-title">
            A decade of <em>visual craft</em>
          </h1>
        </div>
      </div>

      <div className="experience__grid">
        <ol className="timeline">
          {journey.map((job, i) => (
            <li key={job.role} className={cx("timeline__item", open.has(i) && "is-open")}>
              <button className="timeline__head" onClick={() => toggle(i)} aria-expanded={open.has(i)}>
                <span className="timeline__marker" aria-hidden />
                <span className="timeline__role">{job.role}</span>
                <span className="timeline__org">{job.org}</span>
                <span className="timeline__toggle" aria-hidden>
                  +
                </span>
              </button>
              <ul className="timeline__details">
                {job.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <aside className="experience__side">
          <h2 className="label">What I do</h2>
          <div className="expertise-grid">
            {expertise.map((e, i) => (
              <div key={e.title} className="expertise-card">
                <span className="expertise-card__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            ))}
          </div>

          <h2 className="label">Education</h2>
          <div className="edu-list">
            {education.map((e) => (
              <div key={e.school} className="edu-card">
                <img src={e.logo} alt={e.alt} loading="lazy" />
                <div>
                  <h3>{e.school}</h3>
                  <p>{e.degree}</p>
                  <p className="meta">
                    {e.years} · {e.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
