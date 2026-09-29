import { useState } from "react";
import { ViewAllModal } from "./components/gallery/ViewAllModal";
import { LightboxProvider } from "./components/Lightbox";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { AiCreativeWorks } from "./sections/AiCreativeWorks";
import { Contact } from "./sections/Contact";
import { DesignArchive } from "./sections/DesignArchive";
import { Education } from "./sections/Education";
import { Expertise } from "./sections/Expertise";
import { GenAIWorks } from "./sections/GenAIWorks";
import { Hero } from "./sections/Hero";
import { Journey } from "./sections/Journey";
import { RecentWorks } from "./sections/RecentWorks";
import { Skills } from "./sections/Skills";
import type { GalleryTab } from "./types";

export default function App() {
  const [viewAllTab, setViewAllTab] = useState<GalleryTab | null>(null);

  return (
    <LightboxProvider>
      <Navbar />

      <div className="main-wrapper" id="main-wrapper">
        <main>
          <Hero />
          <Expertise />
          <AiCreativeWorks />
          <GenAIWorks onViewAll={setViewAllTab} />
          <RecentWorks />
          <Journey />
          <Skills />
          <DesignArchive onViewAll={setViewAllTab} />
          <Education />
          <Contact />
        </main>

        <footer className="footer">
          <p>© 2026 Seetha Ram · All rights reserved. Designed & Developed by Seetha Ram.</p>
        </footer>

        <ScrollToTop />
        <ViewAllModal tab={viewAllTab} onClose={() => setViewAllTab(null)} />
      </div>
    </LightboxProvider>
  );
}
