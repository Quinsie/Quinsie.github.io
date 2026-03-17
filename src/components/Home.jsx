import "./Home.css";
import profileImg from "../assets/profile.jpg";
import githubLogo from "../assets/github_logo.png";
import velogLogo from "../assets/velog_logo.png";
import instagramLogo from "../assets/instagram_logo.png";

const content = {
  kor: {
    role: "AI Engineer (Research-Oriented)",
    summary:
      "일상의 불편함을 포착해 기술로 해결하며, 문제의 본질을 파고드는 몰입을 즐깁니다. 새로운 배움을 성장의 동력으로 삼아, 막연한 기술을 우리 삶에 밀착된 유용한 가치로 바꿉니다.",
    contactLabel: "Contact",
    email: "hoyyang22@jbnu.ac.kr",
    phone: "010-2791-0501",
    birth: "2000.04.29",
  },
  eng: {
    role: "AI Engineer (Research-Oriented)",
    summary:
      "I enjoy identifying everyday problems and uncovering their core, transforming abstract technologies into practical value through continuous learning.",
    contactLabel: "Contact",
    email: "hoyyang22@jbnu.ac.kr",
    phone: "+82 10-2791-0501",
    birth: "Apr 29, 2000",
  },
};

export default function Home({ language }) {
  const t = content[language];

  return (
    <section id="home" className="home-section">
      <div className="home-head">
        <img src={profileImg} alt="Jiho Pyo" className="profile-image" />

        <div className="home-text">
          <h1>
            표지호 <span>Jiho Pyo</span>
          </h1>
          <p className="role">{t.role}</p>
          <p className="summary">{t.summary}</p>

          <p className="contact-line">
            <strong>{t.contactLabel}.</strong> Email. {t.email} | Phone. {t.phone} | Birth. {t.birth}
          </p>
          <p className="contact-line">
            Github. https://github.com/Quinsie/ | Blog. https://velog.io/@coverrrho/
          </p>
        </div>
      </div>

      <div className="social-section">
        <a className="social-button" href="https://github.com/Quinsie" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="social-logo" />
        </a>
        <a className="social-button" href="https://velog.io/@coverrrho" target="_blank" rel="noopener noreferrer">
          <img src={velogLogo} alt="Velog" className="social-logo" />
        </a>
        <a className="social-button" href="https://www.instagram.com/coverrrr.ho/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" className="social-logo" />
        </a>
      </div>
    </section>
  );
}
