import "./Skills.css";

const content = {
  kor: {
    title: "기술",
    intro: "프로젝트와 연구에서 실제로 사용한 기술 스택입니다.",
    certTitle: "자격 및 인증",
    certItems: [
      "TOPCIT Level 3 (594/1000) - 2025.11",
      "OPIc IH (ACTFL) - 2025.03",
      "Cos PRO C++ 1급 - 2022.07",
    ],
  },
  eng: {
    title: "Skills",
    intro: "Technical stack used in projects and research.",
    certTitle: "License & Certificate",
    certItems: [
      "TOPCIT Level 3 (594/1000) - Nov 2025",
      "OPIc IH (ACTFL) - Mar 2025",
      "Cos PRO C++ (Professional Level 1) - Jul 2022",
    ],
  },
};

export default function Skills({ language }) {
  const t = content[language];

  return (
    <section id="skills" className="section cv-section">
      <h2>{t.title}</h2>
      <p className="cv-intro">{t.intro}</p>

      <div className="cv-grid">
        <article className="cv-card">
          <h3>AI / ML</h3>
          <p className="cv-subtitle">PyTorch, MLP, YOLO, Faster R-CNN, EasyOCR, RAG, Qwen</p>
        </article>

        <article className="cv-card">
          <h3>Backend / Data</h3>
          <p className="cv-subtitle">Python, FastAPI, Flask, ChromaDB, REST API, Data Pipeline</p>
        </article>

        <article className="cv-card">
          <h3>App / Frontend</h3>
          <p className="cv-subtitle">Kotlin, XML, Android UI/UX, React</p>
        </article>

        <article className="cv-card">
          <h3>{t.certTitle}</h3>
          <ul className="cv-list">
            {t.certItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
