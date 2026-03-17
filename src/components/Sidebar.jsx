import { useState, useEffect } from "react";
import "./Sidebar.css";

const sectionIds = ["home", "education", "projects", "research", "experience", "skills", "contact"];

const labels = {
  kor: {
    home: "홈",
    education: "학력",
    projects: "프로젝트",
    research: "연구",
    experience: "경험",
    skills: "기술",
    contact: "연락처",
  },
  eng: {
    home: "Home",
    education: "Education",
    projects: "Projects",
    research: "Research",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
  },
};

export default function Sidebar({ language }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items = sectionIds.map((id) => ({ id, label: labels[language][id] }));

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map((id) => document.getElementById(id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop - 80;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - ((-2 * progress + 2) ** 3) / 2;

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="mobile-header">
        <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className="home-btn" onClick={(e) => handleNavClick(e, "home")}>
          {labels[language].home}
        </button>
      </div>

      <aside className="sidebar">
        <nav className="nav">
          {items.map((item) => (
            <a
              key={item.id}
              className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <div className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-sidebar-content">
          <nav className="mobile-nav">
            {items.map((item) => (
              <a
                key={item.id}
                className={`mobile-nav-item ${activeSection === item.id ? "active" : ""}`}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      </div>
    </>
  );
}
