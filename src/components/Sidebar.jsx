import { useState, useEffect } from "react";
import "./Sidebar.css";

const items = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 스크롤에 따른 활성 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(items[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 커스텀 부드러운 스크롤 이동
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop - 80; // 헤더 높이 고려
    const distance = targetPosition - startPosition;
    const duration = 800; // 0.8초
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // easeInOutCubic 함수 (가속도 + 감속도)
      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };
      
      const easedProgress = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // 부드러운 스크롤 이동
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
    setIsMobileMenuOpen(false); // 모바일 메뉴 닫기
  };

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* 모바일 헤더 */}
      <div className="mobile-header">
        <button className="hamburger-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button 
          className="home-btn"
          onClick={(e) => handleNavClick(e, "home")}
        >
          Home
        </button>
      </div>

      {/* 데스크톱 사이드바 */}
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

      {/* 모바일 오버레이 사이드바 */}
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
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      </div>
    </>
  );
}
