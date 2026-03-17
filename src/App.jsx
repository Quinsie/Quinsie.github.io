import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  const [language, setLanguage] = useState("kor");

  return (
    <div className="layout">
      <Sidebar language={language} />

      <main className="content">
        <div className="lang-switch" aria-label="language switcher">
          <button type="button" className={language === "kor" ? "active" : ""} onClick={() => setLanguage("kor")}>KOR</button>
          <button type="button" className={language === "eng" ? "active" : ""} onClick={() => setLanguage("eng")}>ENG</button>
        </div>

        <Home language={language} />
        <Contact language={language} />
        <Research language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <Education language={language} />
        <div className="scroll-end-spacer" aria-hidden="true"></div>
      </main>
    </div>
  );
}
