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
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Home />
        <Education />
        <Projects />
        <Research />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
