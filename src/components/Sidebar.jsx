import { useEffect, useState } from "react";
import "./Sidebar.css";
import { getPortfolioContent, sectionOrder } from "../content/portfolio";

function getTopOffset() {
  return window.innerWidth <= 860 ? 72 : 12;
}

export default function Sidebar({ language }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigation } = getPortfolioContent(language);
  const items = sectionOrder.map((id) => ({ id, label: navigation[id] }));

  useEffect(() => {
    const handleScroll = () => {
      const offset = getTopOffset();
      const current = [...sectionOrder]
        .reverse()
        .find((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          return el.getBoundingClientRect().top <= offset + 1;
        });

      setActiveSection(current || "home");
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

    const topOffset = getTopOffset();
    const startPosition = window.pageYOffset;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset - topOffset;
    const distance = targetPosition - startPosition;
    const duration = 420;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - ((-2 * progress + 2) ** 3) / 2;

      window.scrollTo(0, startPosition + distance * eased);
      if (progress < 1) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
    smoothScrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="mobile-header">
        <button
          type="button"
          className="hamburger-btn"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button
          type="button"
          className="home-btn"
          onClick={(event) => handleNavClick(event, "home")}
        >
          {navigation.home}
        </button>
      </div>

      <aside className="sidebar">
        <nav className="nav">
          {items.map((item) => (
            <a
              key={item.id}
              className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              href={`#${item.id}`}
              onClick={(event) => handleNavClick(event, item.id)}
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
                onClick={(event) => handleNavClick(event, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      </div>
    </>
  );
}
