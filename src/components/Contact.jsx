import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section cv-section">
      <h2>Contact</h2>
      <p className="cv-intro">협업, 연구, 프로젝트 관련 연락은 아래로 부탁드립니다.</p>

      <div className="cv-grid">
        <article className="cv-card">
          <div className="cv-contact">
            <p><strong>Email</strong>: <a href="mailto:hoyyang22@jbnu.ac.kr">hoyyang22@jbnu.ac.kr</a></p>
            <p><strong>Phone</strong>: 010-2791-0501</p>
            <p><strong>Birth</strong>: 2000.04.29</p>
            <p><strong>Github</strong>: <a href="https://github.com/Quinsie" target="_blank" rel="noopener noreferrer">github.com/Quinsie</a></p>
            <p><strong>Blog</strong>: <a href="https://velog.io/@coverrrho" target="_blank" rel="noopener noreferrer">velog.io/@coverrrho</a></p>
          </div>
        </article>
      </div>
    </section>
  );
}
