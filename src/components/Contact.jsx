import "./Contact.css";

const content = {
  kor: {
    title: "Contact",
    phone: "010-2791-0501",
    birth: "2000.04.29",
  },
  eng: {
    title: "Contact",
    phone: "+82 10-2791-0501",
    birth: "Apr 29, 2000",
  },
};

export default function Contact({ language }) {
  const t = content[language];

  return (
    <section id="contact" className="section cv-section">
      <h2>{t.title}</h2>
      <div className="cv-grid">
        <article className="cv-card">
          <div className="cv-contact">
            <p><strong>Email</strong>: <a href="mailto:hoyyang22@jbnu.ac.kr">hoyyang22@jbnu.ac.kr</a></p>
            <p><strong>Phone</strong>: {t.phone}</p>
            <p><strong>Birth</strong>: {t.birth}</p>
            <p><strong>Github</strong>: <a href="https://github.com/Quinsie" target="_blank" rel="noopener noreferrer">https://github.com/Quinsie/</a></p>
            <p><strong>Blog</strong>: <a href="https://velog.io/@coverrrho" target="_blank" rel="noopener noreferrer">https://velog.io/@coverrrho/</a></p>
          </div>
        </article>
      </div>
    </section>
  );
}
