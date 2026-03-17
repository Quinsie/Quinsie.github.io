import "./Home.css";
import profileImg from "../assets/profile.jpg";
import githubLogo from "../assets/github_logo.png";
import velogLogo from "../assets/velog_logo.png";
import instagramLogo from "../assets/instagram_logo.png";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img src={profileImg} alt="Jiho Pyo" className="profile-image" />
            <div className="profile-overlay"></div>
          </div>
        </div>

        <div className="content-section">
          <div className="name-section">
            <h1 className="main-name">표지호</h1>
            <h2 className="sub-name">Jiho Pyo</h2>
            <p className="intro-text">AI Engineer (Research-Oriented)</p>
            <p className="interest-text">관심분야: Deep Learning, Computer Vision, Applied AI Systems</p>
          </div>

          <div className="description-section">
            <div className="description-block">
              <h3 className="description-title">한 줄 소개</h3>
              <p className="description-content">
                일상의 불편함을 포착해 기술로 해결하는 과정을 즐깁니다. 문제의 본질을 파고들어,
                추상적인 AI 기술을 실제 사용자가 체감하는 가치로 연결하는 데 집중하고 있습니다.
              </p>
            </div>

            <div className="description-block">
              <h3 className="description-title">현재 상태</h3>
              <p className="description-content">
                전북대학교 IT정보공학과 재학 중이며(3.95/4.5), Vision Intelligence Lab 학부연구생으로
                연구와 프로젝트를 병행하고 있습니다.
              </p>
            </div>

            <div className="description-block">
              <h3 className="description-title">최근 성과</h3>
              <p className="description-content">
                Purdue 국제 공동연구를 기반으로 IEEE RoboticCC 2025 논문을 공동 저술 및 발표했고,
                버스 도착 예측 개선/문서기반 로컬 RAG 시스템 등 실전형 프로젝트를 수행했습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="social-section">
          <a
            className="social-button github-button"
            href="https://github.com/Quinsie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" className="social-logo" />
          </a>

          <a
            className="social-button velog-button"
            href="https://velog.io/@coverrrho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={velogLogo} alt="Velog" className="social-logo" />
          </a>

          <a
            className="social-button instagram-button"
            href="https://www.instagram.com/coverrrr.ho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="Instagram" className="social-logo" />
          </a>
        </div>
      </div>
    </section>
  );
}
