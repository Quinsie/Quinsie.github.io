import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const [language, setLanguage] = useState("kor");

  return (
    <div className="layout">
      <Sidebar language={language} />

      <main className="content">
        <div className="lang-switch" aria-label="language switcher">
          <button
            type="button"
            className={language === "kor" ? "active" : ""}
            onClick={() => setLanguage("kor")}
          >
            KOR
          </button>
          <button
            type="button"
            className={language === "eng" ? "active" : ""}
            onClick={() => setLanguage("eng")}
          >
            ENG
          </button>
        </div>

        <Home language={language} />
        <Education language={language} />
        <Projects language={language} />
        <Research language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}
