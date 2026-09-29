import { Thumb } from "../components/Thumb";
import { homeFeatured } from "../data/artwork";
import { hero, stats } from "../data/site";
import { href } from "../hooks/useHashRoute";
import { HomeSnapshot } from "./HomeSnapshot";

export function HomeView() {
  return (
    <>
      <div className="home">
        <section className="home__intro">
          <p className="eyebrow">
            <span className="dot" aria-hidden /> {hero.role}
          </p>
          <h1 className="display">
            Seetha Rama Swamy <em>Thota</em>
          </h1>
          <div className="lead">
            <p className="lead__headline">{hero.intro.headline}</p>
            {hero.intro.paragraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <p className="lead__signoff">{hero.intro.signoff}</p>
          </div>

          <div className="cta-row">
            <a href={href("work")} className="btn btn--accent">
              View work <span aria-hidden>→</span>
            </a>
            <a href={hero.cv} target="_blank" className="btn btn--ghost">
              Download CV <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>{hero.location}</span>
            <span>{hero.languages}</span>
            <a href={`mailto:${hero.email}`}>Email</a>
            {hero.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank">
                {l.label}
              </a>
            ))}
          </div>

          <dl className="home__stats" aria-label="Impact">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <dt className="stat__value">{s.value}</dt>
                <dd className="stat__label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="home__portrait" aria-label="Profile">
          <img src={hero.photo} alt={hero.fullName} fetchPriority="high" />
          <div className="portrait-chip">
            <span className="portrait-chip__label">Currently</span>
            <strong>{hero.currentRole}</strong>
            <span className="portrait-chip__org">{hero.currentOrg}</span>
          </div>
        </section>

        <section className="home__work" aria-labelledby="home-work">
          <div className="section-head">
            <h2 id="home-work" className="label">
              Selected work
            </h2>
            <a href={href("work")} className="text-link">
              All work →
            </a>
          </div>
          <div className="home-work-grid">
            {homeFeatured.map((w) => (
              <a key={w.src} href={`#${w.link}`} className="tile">
                <span className="tile__media">
                  <Thumb src={w.src} alt="" />
                  <span className="tile__badge">{w.badge}</span>
                </span>
                <span className="tile__title">{w.title}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
      <HomeSnapshot />
    </>
  );
}
