import { useState } from "react";
import { EduLogo } from "../components/EduLogo";
import { ProofLinks } from "../components/ProofLinks";
import { education } from "../data/education";
import { expertise, hero, journey } from "../data/site";
import { cx } from "../utils/cx";

/** Intro, then a scannable career timeline (one line per role, details on demand), what I do and education. */
export function ExperienceView() {
  const [open, setOpen] = useState<Set<number>>(() => new Set());
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

      <div className="xp-top">
        <div className="xp-top__main">
          <div className="experience__intro">
            <p className="experience__headline">{hero.intro.headline}</p>
            {hero.intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="experience__signoff">{hero.intro.signoff}</p>
          </div>

          <section className="xp-section" aria-labelledby="xp-roles">
            <div className="xp-section__head">
              <h2 id="xp-roles" className="xp-section__title">
                Roles
              </h2>
              <p className="xp-section__note">Open a role for the detail.</p>
            </div>
            <ol className="timeline">
              {journey.map((job, i) => (
                <li key={job.role} className={cx("timeline__item", open.has(i) && "is-open")}>
                  <button className="timeline__head" onClick={() => toggle(i)} aria-expanded={open.has(i)}>
                    <span className="timeline__marker" aria-hidden />
                    <span className="timeline__role">
                      <span className="timeline__title">
                        {job.role}
                        {job.scope && <span className="timeline__scope">{job.scope}</span>}
                      </span>
                      <span className="timeline__meta">
                        {job.org}
                        {job.location && ` · ${job.location}`} · {job.period}
                      </span>
                      <span className="timeline__summary">{job.summary}</span>
                    </span>
                    {job.highlight ? (
                      <span className="timeline__highlight">
                        <b>{job.highlight.value}</b>
                        <span>{job.highlight.label}</span>
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="timeline__toggle" aria-hidden>
                      +
                    </span>
                  </button>
                  <ul className="timeline__details">
                    {job.details.map((d) => (
                      <li key={d}>
                        <LeadIn text={d} />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="xp-top__side" aria-labelledby="xp-edu">
          <div className="xp-section__head">
            <h2 id="xp-edu" className="xp-section__title">
              Education
            </h2>
          </div>
          <div className="edu-list">
            {education.map((e) => (
              <div key={e.school} className="edu-card">
                <EduLogo edu={e} />
                <div>
                  <h3>{e.degree}</h3>
                  <p>{e.school}</p>
                  <p className="meta">{[e.years, e.score, e.location].filter(Boolean).join(" · ")}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <section className="xp-section" aria-labelledby="xp-do">
        <div className="xp-section__head">
          <h2 id="xp-do" className="xp-section__title">
            What I do
          </h2>
        </div>
        <div className="expertise-grid">
          {expertise.map((e, i) => (
            <div key={e.title} className="expertise-card">
              <span className="expertise-card__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              <ProofLinks proof={e.proof} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/** "Label: rest" → the label in bold, so each bullet can be scanned by its lead-in. */
function LeadIn({ text }: { text: string }) {
  const i = text.indexOf(": ");
  if (i < 1 || i > 60) return <>{text}</>;
  return (
    <>
      <strong>{text.slice(0, i + 1)}</strong>
      {text.slice(i + 1)}
    </>
  );
}
