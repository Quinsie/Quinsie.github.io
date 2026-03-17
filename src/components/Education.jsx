import "./Education.css";

const content = {
  kor: {
    title: "Education",
    items: [
      { school: "전북대학교 공과대학 IT정보공학과", period: "2021.03 - present", desc: "3.95/4.5 | 재학" },
      { school: "청주세광고등학교", period: "2016.03 - 2019.02", desc: "졸업" },
    ],
  },
  eng: {
    title: "Education",
    items: [
      { school: "JBNU, B.S. in IT Information Engineering", period: "Mar 2021 - present", desc: "3.95/4.5 | In Progress" },
      { school: "Cheongju Sekwang High School", period: "Mar 2016 - Feb 2019", desc: "Graduated" },
    ],
  },
};

export default function Education({ language }) {
  const t = content[language];

  return (
    <section id="education" className="section cv-section">
      <h2>{t.title}</h2>
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
