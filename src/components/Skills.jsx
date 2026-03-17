import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section cv-section">
      <h2>Skills</h2>
      <p className="cv-intro">프로젝트와 연구에서 실제로 사용한 기술 스택입니다.</p>

      <div className="cv-grid">
        <article className="cv-card">
          <h3>AI / ML</h3>
          <p className="cv-subtitle">PyTorch, MLP, YOLO, Faster R-CNN, EasyOCR, RAG, Qwen</p>
        </article>

        <article className="cv-card">
          <h3>Backend / Data</h3>
          <p className="cv-subtitle">Python, FastAPI, Flask, ChromaDB, REST API, 데이터 수집 파이프라인</p>
        </article>

        <article className="cv-card">
          <h3>App / Frontend</h3>
          <p className="cv-subtitle">Kotlin, XML, Android UI/UX, React</p>
        </article>

        <article className="cv-card">
          <h3>License & Certificate</h3>
          <ul className="cv-list">
            <li>TOPCIT Level 3 (594/1000) - 2025.11</li>
            <li>OPIc IH (ACTFL) - 2025.03</li>
            <li>Cos PRO C++ 1급 - 2022.07</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
