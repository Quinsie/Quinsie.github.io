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
    const getTopOffset = () => (window.innerWidth <= 860 ? 72 : 12);

    const handleScroll = () => {
      const offset = getTopOffset();
      let bestId = "home";
      let bestDistance = Number.POSITIVE_INFINITY;

      sectionOrder.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.bottom <= offset) return;

        const distance = Math.abs(rect.top - offset);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      });

      setActiveSection(bestId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const topOffset = window.innerWidth <= 860 ? 72 : 12;
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - topOffset;
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
    setActiveSection(sectionId);
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
