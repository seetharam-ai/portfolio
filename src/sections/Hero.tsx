import { useEffect, useRef, useState } from "react";
import { Section } from "../components/Reveal";
import { hero } from "../data/site";
import { cx } from "../utils/scroll";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  // Number of headline lines revealed so far (staggered entrance).
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const timers = [0, 1].map((i) => window.setTimeout(() => setRevealed(i + 1), 200 + i * 150));
    return () => timers.forEach(window.clearTimeout);
  }, []);

  // Background parallax (desktop only — CSS disables it on mobile).
  useEffect(() => {
    if (window.innerWidth <= 768) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const bg = bgRef.current;
        const section = sectionRef.current?.closest("section");
        if (bg && section && window.scrollY <= section.offsetHeight + 100) {
          bg.style.transform = `translateY(${window.scrollY * 0.4}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Section id="introduction">
      <div className="hero-bg-image" ref={bgRef}>
        <div className="hero-img-wrap">
          <img src={hero.photo} alt="Profile photo" className="hero-main-img" fetchPriority="high" />
        </div>
      </div>

      <div className="hero-section" ref={sectionRef}>
        <div className="hero-section-left">
          <h1>
            <span className="reveal-text-mask">
              <span className={cx("reveal-text-item", revealed >= 1 && "is-visible")}>
                Hello I'm <br />
                {hero.name}
              </span>
            </span>
          </h1>
          <h2 className={revealed >= 2 ? "reveal-visible" : undefined}>
            <span className="reveal-text-mask">
              <span className={cx("reveal-text-item", revealed >= 2 && "is-visible")}>{hero.role}</span>
            </span>
          </h2>

          <span className="hero-tag">
            <p>{hero.tagline}</p>
          </span>
          <div className="hero-links">
            {hero.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
