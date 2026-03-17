import "./Contact.css";

const content = {
  kor: {
    title: "연락처",
    intro: "협업, 연구, 프로젝트 관련 연락은 아래로 부탁드립니다.",
    phone: "010-2791-0501",
    birth: "2000.04.29",
  },
  eng: {
    title: "Contact",
    intro: "For collaboration, research, or project inquiries, please contact me below.",
    phone: "+82 10-2791-0501",
    birth: "Apr 29, 2000",
  },
};

export default function Contact({ language }) {
  const t = content[language];

  return (
    <section id="contact" className="section cv-section">
      <h2>{t.title}</h2>
      <p className="cv-intro">{t.intro}</p>

      <div className="cv-grid">
        <article className="cv-card">
          <div className="cv-contact">
            <p><strong>Email</strong>: <a href="mailto:hoyyang22@jbnu.ac.kr">hoyyang22@jbnu.ac.kr</a></p>
            <p><strong>Phone</strong>: {t.phone}</p>
            <p><strong>Birth</strong>: {t.birth}</p>
            <p><strong>Github</strong>: <a href="https://github.com/Quinsie" target="_blank" rel="noopener noreferrer">github.com/Quinsie</a></p>
            <p><strong>Blog</strong>: <a href="https://velog.io/@coverrrho" target="_blank" rel="noopener noreferrer">velog.io/@coverrrho</a></p>
          </div>
        </article>
      </div>
    </section>
  );
}
