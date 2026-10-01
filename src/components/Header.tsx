import { useEffect, useRef } from "react";
import { hero, views, type ViewId } from "../data/site";
import { href } from "../hooks/useHashRoute";
import { cx } from "../utils/cx";

export function Header({ current }: { current: ViewId }) {
  // Share the bar's real height (it wraps to two rows on phones) so sticky bars can sit right under it.
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sync = () => document.documentElement.style.setProperty("--header-real", `${el.offsetHeight}px`);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header ref={ref} className="site-header site-header--dark">
      <div className="site-header__inner">
        <a href={href("home")} className="brand" aria-label="Home">
          <img src={hero.logo} alt="" className="brand__logo" />
          <span className="brand__text">
            <span className="brand__name">{hero.shortName}</span>
            <span className="brand__role">{hero.role}</span>
          </span>
        </a>

        <nav className="view-nav" aria-label="Sections">
          {views.map((v) => (
            <a
              key={v.id}
              href={href(v.id)}
              className={cx("view-nav__link", current === v.id && "is-active")}
              aria-current={current === v.id ? "page" : undefined}
            >
              {v.label}
            </a>
          ))}
        </nav>

        <a href={hero.cv} target="_blank" className="btn btn--ink header-cv">
          View CV <span aria-hidden>↗</span>
        </a>
      </div>
    </header>
  );
}
