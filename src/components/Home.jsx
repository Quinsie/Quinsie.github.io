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
            <p className="intro-text">안녕하세요, 공부하는 대학생 표지호입니다.</p>
            <p className="interest-text">관심분야: DL, CV, Algorithm</p>
          </div>

          <div className="description-section">
            <div className="description-block">
              <h3 className="description-title">새로운 분야의 지식에 관한 공부를 굉장히 좋아합니다.</h3>
              <p className="description-content">
                끊임없이 무언가를 알아가는 과정을 즐기며, 그 과정에서 막힘을 경험하고 이를 해결하는 과정을 좋아합니다. 이렇게 얻은 지식을 정리하는 블로그를 운영중이며, 누군가를 가르치며 스스로 완전히 습득하는 과정을 즐깁니다.
              </p>
            </div>

            <div className="description-block">
              <h3 className="description-title">일상생활 주변의 문제를 해결하는 것을 좋아합니다.</h3>
              <p className="description-content">
                사용자가 직접 와닿을 수 있는 수준의 거리감을 갖는 문제를 해결하는 것을 좋아합니다. 개발과 인공지능이 사람들의 삶에서 아주 먼 무언가가 아닌, 함께 가야 할 동반자가 되어줄 수 있는 기술임을 사람들에게 알리고 싶습니다.
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
