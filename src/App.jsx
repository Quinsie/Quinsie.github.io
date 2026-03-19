import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import LanguageSwitch from "./components/LanguageSwitch";
import PortfolioSection from "./components/PortfolioSection";
import Sidebar from "./components/Sidebar";
import { getPortfolioContent, sectionOrder } from "./content/portfolio";

export default function App() {
  const [language, setLanguage] = useState("kor");
  const content = getPortfolioContent(language);

  return (
    <div className="layout">
      <Sidebar language={language} />

      <main className="content">
        <LanguageSwitch language={language} onChange={setLanguage} />
        <Home language={language} />
        {sectionOrder
          .filter((sectionId) => sectionId !== "home")
          .map((sectionId) => (
            <PortfolioSection
              key={sectionId}
              sectionId={sectionId}
              section={content.sections[sectionId]}
            />
          ))}
        <div className="scroll-end-spacer" aria-hidden="true"></div>
      </main>
    </div>
  );
}
