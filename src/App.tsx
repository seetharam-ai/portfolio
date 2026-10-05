import { useRef } from "react";
import { BackToTop } from "./components/BackToTop";
import { Header } from "./components/Header";
import { LightboxProvider } from "./components/Lightbox";
import { hero } from "./data/site";
import { useHashRoute } from "./hooks/useHashRoute";
import { useReveal } from "./hooks/useReveal";
import { ContactView } from "./views/ContactView";
import { CredentialsView } from "./views/CredentialsView";
import { ExperienceView } from "./views/ExperienceView";
import { HomeView } from "./views/HomeView";
import { SkillsView } from "./views/SkillsView";
import { WorkView } from "./views/WorkView";

export default function App() {
  const { view, sub, focus } = useHashRoute();
  const mainRef = useRef<HTMLElement>(null);
  useReveal(mainRef, `${view}/${sub ?? ""}/${focus ?? ""}`);

  return (
    <LightboxProvider>
      <Header current={view} />
      {/* Keyed so each view plays its entrance animation */}
      <main ref={mainRef} className={`view view--${view}`} key={view}>
        {view === "home" && <HomeView />}
        {view === "work" && <WorkView sub={sub} focus={focus} />}
        {view === "experience" && <ExperienceView />}
        {view === "skills" && <SkillsView />}
        {view === "credentials" && <CredentialsView />}
        {view === "contact" && <ContactView />}
      </main>
      <footer className="site-footer site-footer--dark">
        <span>© 2026 {hero.shortName}</span>
        <span>Designed & developed by {hero.shortName}</span>
      </footer>
      <BackToTop />
    </LightboxProvider>
  );
}
