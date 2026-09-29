import { useCallback, useState } from "react";
import { navLinks } from "../data/site";
import { useWindowScroll } from "../hooks/useWindowScroll";
import { cx, handleAnchorClick } from "../utils/scroll";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState("");

  // Navbar background + scroll-spy highlighting of the current section.
  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    const trigger = window.innerHeight * 0.35;
    let id = "";
    document.querySelectorAll("main > section[id]").forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= trigger && rect.bottom > trigger) id = section.id;
    });
    setCurrent(id);
  }, []);
  useWindowScroll(onScroll);

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    handleAnchorClick(e);
  };

  return (
    <>
      <a href="#introduction" className="intro-logo" onClick={handleAnchorClick}>
        <img src="images/sr-logo.png" alt="Seetha Ram Logo" fetchPriority="high" />
      </a>

      <nav className={cx("navbar", scrolled && "scrolled")}>
        <div className="navbar-container">
          <div className={cx("nav-toggle", menuOpen && "active")} id="nav-toggle" onClick={() => setMenuOpen((o) => !o)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={cx("nav-links", menuOpen && "active")}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={current && link.href === `#${current}` ? "active" : undefined}
                  onClick={onLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
