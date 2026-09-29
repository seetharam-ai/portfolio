import { Header } from "./components/Header";
import { LightboxProvider } from "./components/Lightbox";
import { hero } from "./data/site";
import { useHashRoute } from "./hooks/useHashRoute";
import { ContactView } from "./views/ContactView";
import { CredentialsView } from "./views/CredentialsView";
import { ExperienceView } from "./views/ExperienceView";
import { HomeView } from "./views/HomeView";
import { SkillsView } from "./views/SkillsView";
import { WorkView } from "./views/WorkView";

export default function App() {
  const { view, sub } = useHashRoute();

  return (
    <LightboxProvider>
      <Header current={view} />
      {/* Keyed so each view plays its entrance animation */}
      <main className={`view view--${view}`} key={view}>
        {view === "home" && <HomeView />}
        {view === "work" && <WorkView sub={sub} />}
        {view === "experience" && <ExperienceView />}
        {view === "skills" && <SkillsView />}
        {view === "credentials" && <CredentialsView />}
        {view === "contact" && <ContactView />}
      </main>
      <footer className="site-footer">
        <span>© 2026 {hero.shortName}</span>
        <span>Designed & developed by {hero.shortName}</span>
      </footer>
    </LightboxProvider>
  );
}
