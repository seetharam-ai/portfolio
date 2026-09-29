import { EduLogo } from "../components/EduLogo";
import { certs, education } from "../data/education";
import { CareerTimeline } from "../components/CareerTimeline";
import { aiStance, hero, reviewLoop } from "../data/site";
import { aiModels, coreToolkit } from "../data/skills";
import { href } from "../hooks/useHashRoute";


/**
 * Recruiter-friendly summary below the first screen: the whole profile
 * readable by scrolling Home, with links into the detailed views.
 */
export function HomeSnapshot() {
  return (
    <div className="snapshot" id="snapshot">
      <section className="snapshot__loop" aria-labelledby="snap-how">
        <div className="loop-head">
          <h2 id="snap-how" className="label">
            How I work
          </h2>
          <p className="loop-head__title">
            Every asset gets the same <em>four-step</em> review.
          </p>
        </div>
        <ol className="loop">
          {reviewLoop.map((step, i) => (
            <li key={step.title} className="loop__step">
              <span className="loop__marker" aria-hidden>
                {i + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className="loop__proof">{step.proof}</span>
            </li>
          ))}
        </ol>
        <p className="loop__ai">
          <span className="dot" aria-hidden /> {aiStance}
        </p>
      </section>

      <section className="snapshot__career" aria-labelledby="snap-career">
        <div className="section-head">
          <h2 id="snap-career" className="label">
            Career snapshot
          </h2>
          <a href={href("experience")} className="text-link">
            Full timeline →
          </a>
        </div>
        <CareerTimeline />
      </section>

      <aside className="snapshot__side">
        <section aria-labelledby="snap-edu">
          <h2 id="snap-edu" className="label">
            Education
          </h2>
          <ul className="mini-list">
            {education.map((e) => (
              <li key={e.school} className="mini-row">
                <EduLogo edu={e} />
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
          <a href={`mailto:${hero.email}`} className="cv-card__email">
            {hero.email}
          </a>
          <a href={hero.cv} target="_blank" className="btn btn--accent btn--sm">
            Download CV <span aria-hidden>↗</span>
          </a>
        </div>
      </aside>

      <section className="snapshot__toolkit" aria-labelledby="snap-tools">
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
        <ul className="keywords">
          {aiModels.split(" - ").map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      <section className="snapshot__certs" aria-labelledby="snap-certs">
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
