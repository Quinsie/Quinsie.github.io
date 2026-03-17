import "./Education.css";

const content = {
  kor: {
    title: "학력",
    intro: "학력과 현재 학업 상태입니다.",
    items: [
      { school: "전북대학교 IT정보공학과", period: "2021.03 - 현재", desc: "공학사 과정 재학 중 (GPA 3.95 / 4.5)" },
      { school: "청주세광고등학교", period: "2016.03 - 2019.02", desc: "졸업" },
    ],
  },
  eng: {
    title: "Education",
    intro: "Academic background and current status.",
    items: [
      { school: "JBNU, B.S. in IT Information Engineering", period: "Mar 2021 - Present", desc: "In Progress (GPA 3.95 / 4.5)" },
      { school: "Cheongju Sekwang High School", period: "Mar 2016 - Feb 2019", desc: "Graduated" },
    ],
  },
};

export default function Education({ language }) {
  const t = content[language];

  return (
    <section id="education" className="section cv-section">
      <h2>{t.title}</h2>
      <p className="cv-intro">{t.intro}</p>
      <div className="cv-grid">
        {t.items.map((item) => (
          <article className="cv-card" key={`${item.school}-${item.period}`}>
            <h3>{item.school}</h3>
            <p className="cv-meta">{item.period}</p>
            <p className="cv-subtitle">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
