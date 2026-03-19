import "./Home.css";
import githubLogo from "../assets/github_logo.png";
import instagramLogo from "../assets/instagram_logo.png";
import profileImg from "../assets/profile.jpg";
import velogLogo from "../assets/velog_logo.png";
import {
  getPortfolioContent,
  socialLinks,
} from "../content/portfolio";

const socialIcons = {
  github: githubLogo,
  velog: velogLogo,
  instagram: instagramLogo,
};

export default function Home({ language }) {
  const { home } = getPortfolioContent(language);

  return (
    <section id="home" className="home-section">
      <div className="home-head">
        <img src={profileImg} alt="Jiho Pyo" className="profile-image" />

        <div className="home-text">
          <h1>
            {home.name} <span>{home.englishName}</span>
          </h1>
          <p className="role">{home.role}</p>
          <div className="summary">
            {home.summaryLines.map((line) => (
              <p className="summary-line" key={line}>
                {line}
              </p>
            ))}
          </div>

          <p className="contact-line">
            <strong>{home.contactLabel}.</strong> Email. {home.email} | Birth. {home.birth}
          </p>
          <p className="contact-line">
            Github. {home.githubText} | Blog. {home.blogText}
          </p>
        </div>
      </div>

      <div className="social-section">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            className="social-button"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={socialIcons[link.icon]}
              alt={link.label}
              className="social-logo"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
