import { useEffect, useRef } from "react";
import { Thumb } from "../components/Thumb";
import { homeFeatured, type FeaturedItem } from "../data/artwork";
import { aiStance, hero, reviewLoop, stats } from "../data/site";
import { href } from "../hooks/useHashRoute";
import { thumb } from "../utils/media";
import { cx } from "../utils/cx";

/** Posters in the hero fan: one master idea, many markets. */
const FAN = [
  { src: "images/artwork/key-art/the-last-meridian/poster-ar.jpg", lang: "AR", link: "work/projects/the-last-meridian" },
  { src: "images/artwork/key-art/gladiator-ashes-of-rome/poster-es.jpg", lang: "ES", link: "work/projects/gladiator-ashes-of-rome" },
  { src: "images/artwork/key-art/silent-service/en-2x3.jpg", lang: "EN", link: "work/projects/the-silent-service" },
  { src: "images/artwork/key-art/and-yet-sweet/jp-2x3.jpg", lang: "JA", link: "work/projects/and-yet-you-are-so-sweet" },
  { src: "images/artwork/key-art/ip-man/hi-3x4.jpg", lang: "HI", link: "work/projects/ip-man-kung-fu-legend" },
];

/** How I work today: the one line that lights up on scroll (the full intro lives on the Experience page). */
const TODAY =
  "My work spans key art, posters, and localized title artwork, combining AI-assisted production with a strong focus on visual quality, storytelling, and creative intent.";

/** Languages the portfolio's artwork is localized into, in their own scripts. */
const LANGS = [
  { name: "English", project: "The Silent Service", link: "work/projects/the-silent-service" },
  { name: "日本語", project: "And Yet, You Are So Sweet", link: "work/projects/and-yet-you-are-so-sweet" },
  { name: "العربية", project: "The Last Meridian", link: "work/projects/the-last-meridian" },
  { name: "हिन्दी", project: "Ip Man: Kung Fu Legend", link: "work/projects/ip-man-kung-fu-legend" },
  { name: "Español", project: "The Last Meridian", link: "work/projects/the-last-meridian" },
  { name: "한국어", project: "The Last Meridian", link: "work/projects/the-last-meridian" },
  { name: "தமிழ்", project: "Ip Man: Kung Fu Legend", link: "work/projects/ip-man-kung-fu-legend" },
  { name: "తెలుగు", project: "Ip Man: Kung Fu Legend", link: "work/projects/ip-man-kung-fu-legend" },
];

/**
 * Home: a centred hero with a fan of localized posters that opens on scroll,
 * the impact numbers, a manifesto that lights up as it
 * scrolls past, the selected-work bento, the four-step loop and contact.
 */
export function HomeView() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollMotion(rootRef);
  const words = TODAY.split(" ");

  return (
    <div ref={rootRef} className="sv-home">
      <header className="hero hero--center">
        <div className="hero__glow" aria-hidden />
        <div className="wrap hero__center">
          <img className="hero__portrait" src="images/sr-avatar.jpg" alt={hero.fullName} fetchPriority="high" data-reveal />
          <h1 className="hero__name" data-reveal>
            Seetha Rama Swamy <em>Thota</em>
          </h1>
          <p className="hero__role" data-reveal>
            {hero.role}
          </p>
          <p className="hero__line" data-reveal>
            {hero.intro.headline}
          </p>
          <div className="hero__cta" data-reveal>
            <a href={href("work")} className="btn btn--light">
              View work <span aria-hidden>→</span>
            </a>
            <a href={hero.cv} target="_blank" className="btn btn--on-dark">
              Download CV <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="hero__meta" data-reveal>
            <span>{hero.location}</span>
            <span>{hero.languages}</span>
            {hero.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank">
                {l.label}
              </a>
            ))}
          </div>
          <p className="hero__me" data-reveal>
            <span>
              Currently <strong>{hero.currentRole}</strong> · {hero.currentOrg}
            </span>
          </p>
        </div>
        <div className="fan" data-fan aria-label="Localized key art">
          {FAN.map((f, i) => (
            <a
              key={f.src}
              href={`#${f.link}`}
              className="fan__card"
              style={{ "--i": i - (FAN.length - 1) / 2 } as React.CSSProperties}
            >
              <Thumb src={f.src} alt={`Key art — ${f.lang}`} loading={i === 2 ? "eager" : "lazy"} />
              <span className="fan__lang">{f.lang}</span>
            </a>
          ))}
        </div>
        <div className="wrap">
          <dl className="hero__stats" aria-label="Impact" data-reveal>
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="band band--dark manifesto" aria-label="About">
        <div className="wrap">
          <p className="manifesto__text" data-words style={{ "--n": words.length } as React.CSSProperties}>
            {words.map((w, i) => (
              <span key={i} style={{ "--w": i } as React.CSSProperties}>
                {w}{" "}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="band band--dark" aria-labelledby="home-work">
        <div className="wrap">
          <div className="band__head" data-reveal>
            <h2 id="home-work" className="band__title">
              Selected <em>work</em>
            </h2>
            <a href={href("work")} className="text-link">
              All work →
            </a>
          </div>
          <div className="bento-rows" data-reveal>
            {[...new Set(homeFeatured.map((i) => i.row))].map((row) => (
              <div key={row} className="bento-row">
                {homeFeatured
                  .filter((i) => i.row === row)
                  .map((item) => (
                    <BentoCard key={item.src} item={item} />
                  ))}
              </div>
            ))}
          </div>
          <div className="band__more" data-reveal>
            <a href={href("work", "projects")} className="btn btn--light">
              View all case studies <span aria-hidden>→</span>
            </a>
            <a href={href("work")} className="btn btn--on-dark">
              Browse all work <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <nav className="marquee" aria-label="Artwork by language">
        <div className="marquee__track">
          {[...LANGS, ...LANGS].map((l, i) => {
            const copy = i >= LANGS.length;
            return (
              <a
                key={i}
                href={`#${l.link}`}
                title={`${l.name} — ${l.project}`}
                aria-hidden={copy || undefined}
                tabIndex={copy ? -1 : undefined}
              >
                {l.name}
                <span className="marquee__to">{l.project} →</span>
              </a>
            );
          })}
        </div>
      </nav>

      <section className="band band--dark" aria-labelledby="home-how">
        <div className="wrap">
          <div className="band__head" data-reveal>
            <h2 id="home-how" className="band__title">
              Every asset, the same <em>four steps</em>
            </h2>
            <p className="band__note">{aiStance}</p>
          </div>
          <ol className="steps">
            {reviewLoop.map((step, i) => (
              <li key={step.title} className="step" data-reveal style={{ "--d": i } as React.CSSProperties}>
                <span className="step__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.short}</p>
                <p className="step__proof">{step.proof}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band--dark band--cta" aria-labelledby="home-contact">
        <div className="hero__glow hero__glow--cta" aria-hidden />
        <div className="wrap" data-reveal>
          <p className="mono-caps band__kicker">Contact</p>
          <h2 id="home-contact" className="cta-title">
            Let’s make artwork people <em>press play</em> on.
          </h2>
          <div className="hero__cta hero__cta--center">
            <a href={`mailto:${hero.email}`} className="btn btn--light">
              {hero.email}
            </a>
            <a href={href("experience")} className="btn btn--on-dark">
              Career &amp; experience <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Scroll motion for the home page: fade-up reveals, the poster fan opening,
 * and the manifesto lighting up word by word. Off for reduced motion.
 */
function useScrollMotion(rootRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reveals = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveals.forEach((el) => el.classList.add("is-in"));
      root.classList.add("is-still");
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    reveals.forEach((el) => io.observe(el));

    const fan = root.querySelector<HTMLElement>("[data-fan]");
    const text = root.querySelector<HTMLElement>("[data-words]");
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      if (fan) {
        const r = fan.getBoundingClientRect();
        fan.style.setProperty("--p", Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.9))).toFixed(3));
      }
      if (text) {
        const r = text.getBoundingClientRect();
        text.style.setProperty("--q", Math.min(1, Math.max(0, (vh * 0.82 - r.top) / (r.height + vh * 0.25))).toFixed(3));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [rootRef]);
}

function BentoCard({ item }: { item: FeaturedItem }) {
  return (
    <a
      href={`#${item.link}`}
      className={cx("bento__card", `bento__card--${item.size}`, item.captionTop && "is-top")}
      style={{ flexGrow: item.ratio, aspectRatio: String(item.ratio) }}
    >
      {item.kind === "video" ? (
        <BentoVideo src={item.src} poster={item.poster} />
      ) : item.size === "full" ? (
        <img src={item.src} alt="" loading="lazy" />
      ) : (
        <Thumb src={item.src} alt="" loading="lazy" style={item.focus ? { objectPosition: item.focus } : undefined} />
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
