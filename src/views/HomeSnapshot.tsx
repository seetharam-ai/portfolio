import { eduCertItems } from "../data/education";
import { hero, journey } from "../data/site";
import { aiModels, coreToolkit } from "../data/skills";
import { href } from "../hooks/useHashRoute";

const education = eduCertItems.filter((i) => i.kind === "education");
const certs = eduCertItems.filter((i) => i.kind === "cert");

/**
 * Recruiter-friendly summary below the first screen: the whole profile
 * readable by scrolling Home, with links into the detailed views.
 */
export function HomeSnapshot() {
  return (
    <div className="snapshot" id="snapshot">
      <section className="snapshot__career" aria-labelledby="snap-career">
        <div className="section-head">
          <h2 id="snap-career" className="label">
            Career snapshot
          </h2>
          <a href={href("experience")} className="text-link">
            Full timeline →
          </a>
        </div>
        <ol className="career-list">
          {journey.map((job) => (
            <li key={job.role} className="career-row">
              <img src={job.logo} alt="" className="career-row__logo" loading="lazy" />
              <div className="career-row__text">
                <h3>
                  {job.role} <span className="career-row__org">· {job.org}</span>
                </h3>
                <p>{job.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <aside className="snapshot__side">
        <section aria-labelledby="snap-edu">
          <h2 id="snap-edu" className="label">
            Education
          </h2>
          <ul className="mini-list">
            {education.map((e) => (
              <li key={e.school} className="mini-row">
                <img src={e.logo} alt="" loading="lazy" />
                <div>
                  <h3>{e.degree}</h3>
                  <p>
                    {e.school} · {e.years}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="cv-card">
          <p className="label">Résumé</p>
          <p className="cv-card__text">The full CV with detailed responsibilities, tools and dates.</p>
          <a href={hero.cv} target="_blank" className="btn btn--light">
            Download CV <span aria-hidden>↗</span>
          </a>
        </div>
      </aside>

      <section className="snapshot__toolkit panel" aria-labelledby="snap-tools">
        <div className="section-head">
          <h2 id="snap-tools" className="label">
            Core toolkit
          </h2>
          <a href={href("skills")} className="text-link">
            All skills →
          </a>
        </div>
        <ul className="toolkit-grid">
          {coreToolkit.map((s) => (
            <li key={s.name} className="tool">
              <img src={s.icon} alt="" loading="lazy" />
              <span>{s.name.split(" - ")[0]}</span>
            </li>
          ))}
        </ul>
        <h3 className="label snapshot__sublabel">Gen AI models — hands-on</h3>
        <div className="chip-cloud">
          {aiModels.split(" - ").map((m) => (
            <span key={m} className="chip chip--sm">
              {m}
            </span>
          ))}
        </div>
      </section>

      <section className="snapshot__certs panel" aria-labelledby="snap-certs">
        <div className="section-head">
          <h2 id="snap-certs" className="label">
            Certifications · {certs.length}
          </h2>
          <a href={href("credentials")} className="text-link">
            Details →
          </a>
        </div>
        <ul className="mini-list">
          {certs.map((c) => (
            <li key={c.href}>
              <a href={c.href} target="_blank" className="mini-row mini-row--link">
                <img src={c.image} alt="" loading="lazy" />
                <h3>{c.title}</h3>
                <span className="mini-row__arrow" aria-hidden>
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
