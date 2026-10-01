import { useEffect, useRef } from "react";
import { Thumb } from "../components/Thumb";
import { homeFeatured, type FeaturedItem } from "../data/artwork";
import { aiStance, hero, reviewLoop, stats } from "../data/site";
import { href } from "../hooks/useHashRoute";
import { thumb } from "../utils/media";
import { cx } from "../utils/cx";

/**
 * Home: a dark cinematic hero, an image-and-video bento of selected work,
 * the four-step review loop and a contact band. Career, education and
 * toolkit live on their own pages.
 */
export function HomeView() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__intro">
              <p className="hero__role mono-caps">{hero.role}</p>
              <h1 className="hero__name">
                Seetha Rama Swamy <em>Thota</em>
              </h1>
              <p className="hero__line">{hero.intro.headline}</p>
              <ul className="hero__focus">
                {hero.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="hero__cta">
                <a href={href("work")} className="btn btn--accent">
                  View work <span aria-hidden>→</span>
                </a>
                <a href={hero.cv} target="_blank" className="btn btn--on-dark">
                  Download CV <span aria-hidden>↗</span>
                </a>
              </div>
              <div className="hero__meta">
                <span>{hero.location}</span>
                <span>{hero.languages}</span>
                {hero.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="hero__photo">
              <img src={hero.photo} alt={hero.fullName} fetchPriority="high" />
              <div className="hero__chip">
                <span className="mono-caps">Currently</span>
                <strong>{hero.currentRole}</strong>
                <span>{hero.currentOrg}</span>
              </div>
            </div>
          </div>
          <dl className="hero__stats" aria-label="Impact">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="band" aria-labelledby="home-work">
        <div className="wrap">
          <div className="band__head">
            <h2 id="home-work" className="band__title">
              Selected <em>work</em>
            </h2>
            <a href={href("work")} className="text-link">
              All work →
            </a>
          </div>
          <div className="bento">
            {homeFeatured.map((item) => (
              <BentoCard key={item.src} item={item} />
            ))}
          </div>
          <div className="band__more">
            <a href={href("work", "projects")} className="btn btn--accent">
              View all case studies <span aria-hidden>→</span>
            </a>
            <a href={href("work")} className="btn btn--ghost">
              Browse all work <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="band band--dark" aria-labelledby="home-how">
        <div className="wrap">
          <div className="band__head">
            <h2 id="home-how" className="band__title">
              Every asset, the same <em>four steps</em>
            </h2>
            <p className="band__note">{aiStance}</p>
          </div>
          <ol className="steps">
            {reviewLoop.map((step, i) => (
              <li key={step.title} className="step">
                <span className="step__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.short}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band--dark band--cta" aria-labelledby="home-contact">
        <div className="wrap">
          <p className="mono-caps band__kicker">Contact</p>
          <h2 id="home-contact" className="cta-title">
            Let’s make artwork people <em>press play</em> on.
          </h2>
          <div className="hero__cta hero__cta--center">
            <a href={`mailto:${hero.email}`} className="btn btn--accent">
              {hero.email}
            </a>
            <a href={href("experience")} className="btn btn--on-dark">
              Career &amp; experience <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function BentoCard({ item }: { item: FeaturedItem }) {
  return (
    <a href={`#${item.link}`} className={cx("bento__card", `bento__card--${item.size}`, item.captionTop && "is-top")}>
      {item.kind === "video" ? (
        <BentoVideo src={item.src} poster={item.poster} />
      ) : item.size === "full" ? (
        <img src={item.src} alt="" loading="lazy" />
      ) : (
        <Thumb src={item.src} alt="" loading="lazy" />
      )}
      {item.kind === "video" && <span className="bento__badge">▶ Video</span>}
      <span className="bento__text">
        <span className="mono-caps">{item.badge}</span>
        <span className="bento__title">{item.title}</span>
      </span>
    </a>
  );
}

/** Silent, looping preview: loads and plays only while on screen, and stays still for reduced motion. */
function BentoVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      poster={poster ? thumb(poster) : undefined}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
    />
  );
}
