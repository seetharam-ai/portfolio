import { thumb } from "../utils/media";
import { useLightbox } from "../components/Lightbox";
import { aiCreativeWorks, expertise, hero, stats } from "../data/site";
import { recentWorks } from "../data/recentWorks";
import { genAiTabs } from "../data/genAiWorks";
import { href } from "../hooks/useHashRoute";
import type { LightboxItem } from "../types";
import { HomeSnapshot } from "./HomeSnapshot";

// Hand-picked highlights for the first screen.
const featured = [aiCreativeWorks[5], aiCreativeWorks[4], aiCreativeWorks[6]];
const featuredItems: LightboxItem[] = featured.map((w) => ({ type: "img", src: w.src }));
const latestProject = recentWorks[0];
const totalWorks =
  aiCreativeWorks.length + genAiTabs.reduce((n, t) => n + t.entries.length, 0);

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
          <p className="lead">{hero.tagline}</p>

          <ul className="pill-list" aria-label="Expertise">
            {expertise.map((e) => (
              <li key={e.title} className="pill">
                {e.title}
              </li>
            ))}
          </ul>

          <div className="cta-row">
            <a href={href("work")} className="btn btn--accent">
              Explore {totalWorks}+ works <span aria-hidden>→</span>
            </a>
            <a href={hero.cv} target="_blank" className="btn btn--ghost">
              Download CV <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="quick-links">
            {hero.links
              .filter((l) => l.label !== "View CV")
              .map((l) => (
                <a key={l.label} href={l.href} target="_blank" className="text-link">
                  {l.label === "Linked in" ? "LinkedIn" : l.label} ↗
                </a>
              ))}
            <a href={href("contact")} className="text-link">
              Get in touch →
            </a>
            <button
              className="text-link scroll-cue"
              onClick={() => document.getElementById("snapshot")?.scrollIntoView({ behavior: "smooth" })}
            >
              Career snapshot ↓
            </button>
          </div>
        </section>

        <section className="home__portrait" aria-label="Profile">
          <img src={hero.photo} alt={hero.fullName} fetchPriority="high" />
          <div className="portrait-chip">
            <span className="portrait-chip__label">Currently</span>
            <strong>{hero.currentRole}</strong>
            <span className="portrait-chip__org">{hero.currentOrg}</span>
          </div>
        </section>

        <section className="home__stats" aria-label="Impact">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </section>

        <section className="home__featured" aria-label="Featured work">
          <div className="section-head">
            <h2 className="label">Featured work</h2>
            <a href={href("work")} className="text-link">
              All work →
            </a>
          </div>
          <div className="featured-grid">
            {featured.map((w, i) => (
              <button key={w.src} className="featured-tile" onClick={() => openLightbox(featuredItems, i)}>
                <img src={thumb(w.src)} alt={w.alt} />
                <span className="featured-tile__caption">{w.title}</span>
              </button>
            ))}
          </div>
        </section>

        <a href={href("work", "projects")} className="home__project">
          <span className="label">Latest project</span>
          <h2 className="home__project-title">{latestProject.title}</h2>
          {latestProject.images?.[0] && (
            <img src={thumb(latestProject.images[0].src)} alt={latestProject.images[0].alt} className="home__project-img" />
          )}
          <span className="text-link">View case study →</span>
        </a>
      </div>
      <HomeSnapshot />
    </>
  );
}
