import "./Skills.css";

const content = {
  kor: {
    title: "License and Certificate",
    columns: ["일자", "자격/시험", "등급/점수", "기관"],
    rows: [
      ["2025.11", "TOPCIT", "Level 3 (594/1000)", "정보통신기획평가원"],
      ["2025.03", "OPIc", "IH (Intermediate High)", "ACTFL"],
      ["2022.07", "Cos PRO C++", "1급", "YBM IT"],
    ],
  },
  eng: {
    title: "License and Certificate",
    columns: ["Date", "Certificate", "Level / Score", "Organization"],
    rows: [
      ["Nov 2025", "TOPCIT", "Level 3 (594/1000)", "IITP"],
      ["Mar 2025", "OPIc", "IH (Intermediate High)", "ACTFL"],
      ["Jul 2022", "Cos PRO C++", "Professional (Level 1)", "YBM IT"],
    ],
  },
};

export default function Skills({ language }) {
  const t = content[language];

  return (
    <section id="skills" className="section cv-section">
      <h2>{t.title}</h2>
      <div className="cv-grid">
        <article className="cv-card">
          <div className="cv-table">
            <div className="cv-table-row cv-table-head">
              {t.columns.map((col) => (
                <div key={col}>{col}</div>
              ))}
            </div>
            {t.rows.map((row) => (
              <div className="cv-table-row" key={row.join("-")}>
                {row.map((cell, index) => (
                  <div key={cell}>
                    <span className="cv-cell-label">{t.columns[index]}: </span>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
