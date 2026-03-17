import { useEffect, useMemo, useState } from "react";
import "./Sidebar.css";

const sectionOrder = ["home", "contact", "research", "projects", "experience", "skills", "education"];

const labels = {
  kor: {
    home: "Home",
    contact: "Contact",
    research: "Publications",
    projects: "Projects",
    experience: "Experience",
    skills: "License & Certificate",
    education: "Education",
  },
  eng: {
    home: "Home",
    contact: "Contact",
    research: "Publications",
    projects: "Projects",
    experience: "Experience",
    skills: "License & Certificate",
    education: "Education",
  },
};

export default function Sidebar({ language }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items = useMemo(
    () => sectionOrder.map((id) => ({ id, label: labels[language][id] })),
    [language],
  );

  useEffect(() => {
    const handleScroll = () => {
      const current = sectionOrder.findLast((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        return el.getBoundingClientRect().top <= window.innerHeight * 0.35;
      });

      setActiveSection(current || "home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop - 76;
    const distance = targetPosition - startPosition;
    const duration = 420;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const eased = progress < 0.5 ? 4 * progress * progress * progress : 1 - ((-2 * progress + 2) ** 3) / 2;
      window.scrollTo(0, startPosition + distance * eased);
      if (progress < 1) requestAnimationFrame(animation);
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
        <button className="home-btn" onClick={(e) => handleNavClick(e, "home")}>{labels[language].home}</button>
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
