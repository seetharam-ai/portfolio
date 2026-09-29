import { useLightbox } from "../components/Lightbox";
import { Thumb } from "../components/Thumb";
import { corrections, featuredDefaults, keyArt } from "../data/artwork";
import { recentWorks } from "../data/recentWorks";
import { hero, stats } from "../data/site";
import { href } from "../hooks/useHashRoute";
import type { LightboxItem } from "../types";
import { HomeSnapshot } from "./HomeSnapshot";

// First screen highlights: new artwork (key art, then corrections) leads,
// topped up with hand-picked craft pieces from src/data/artwork.ts.
const featured = [
  ...keyArt.map((k) => ({ src: k.variants[0].src, title: k.title })),
  ...corrections.map((c) => ({ src: c.after, title: c.title })),
  ...featuredDefaults,
].slice(0, 3);
const featuredItems: LightboxItem[] = featured.map((w) => ({ type: "img", src: w.src }));
const latestProject = recentWorks[0];

export function HomeView() {
  const openLightbox = useLightbox();

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
          <p className="lead">{hero.hook}</p>

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
            {featured.map((w, i) => (
              <button key={w.src} className="tile" onClick={() => openLightbox(featuredItems, i)}>
                <span className="tile__media">
                  <Thumb src={w.src} alt="" />
                </span>
                <span className="tile__title">{w.title}</span>
              </button>
            ))}
            <a href={href("work", "projects")} className="tile tile--project">
              <span className="tile__media">
                {latestProject.images?.[0] && <Thumb src={latestProject.images[0].src} alt="" />}
                <span className="tile__badge">Latest project</span>
              </span>
              <span className="tile__title">{latestProject.title}</span>
            </a>
          </div>
        </section>
      </div>
      <HomeSnapshot />
    </>
  );
}
