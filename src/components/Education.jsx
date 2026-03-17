import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section cv-section">
      <h2>Education</h2>
      <p className="cv-intro">학력과 현재 학업 상태입니다.</p>
      <div className="cv-grid">
        <article className="cv-card">
          <h3>전북대학교 IT정보공학과</h3>
          <p className="cv-meta">2021.03 - 현재</p>
          <p className="cv-subtitle">공학사 과정 재학 중 (GPA 3.95 / 4.5)</p>
        </article>
        <article className="cv-card">
          <h3>청주세광고등학교</h3>
          <p className="cv-meta">2016.03 - 2019.02</p>
          <p className="cv-subtitle">졸업</p>
        </article>
      </div>
    </section>
  );
}
