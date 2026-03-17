import "./Experience.css";

const content = {
  kor: {
    title: "경험",
    intro: "인턴십, 연구실, 해외 공동연구 경험입니다.",
    items: [
      {
        title: "전북대학교 시각지능연구실",
        meta: "학부연구생 | 2025.03 - 현재",
        bullets: [
          "Vision/AI 기반 연구 주제 실험 및 구현",
          "프로젝트 단위 모델 개발과 성능 분석 수행",
        ],
      },
      {
        title: "주식회사 액티부키",
        meta: "학생 인턴 | 2025.09 (1개월)",
        bullets: [
          "농업 데이터셋 기반 YOLO/Faster R-CNN 객체탐지 모델 구현 및 평가",
          "데이터 증강 및 하이퍼파라미터 튜닝으로 일반화 성능 개선",
          "모델 경량화/양자화 관점에서 속도-정확도 trade-off 분석",
        ],
      },
      {
        title: "Purdue University",
        meta: "학생 인턴 / Visiting Scholar | 2025.06 - 2025.08",
        bullets: [
          "국제 공동연구 결과 기반 IEEE RoboticCC 2025 논문 공동 저술",
          "해당 연구 논문 채택 및 발표 수행",
        ],
      },
    ],
  },
  eng: {
    title: "Experience",
    intro: "Internship, lab, and international collaborative research experience.",
    items: [
      {
        title: "JBNU Vision Intelligence Lab",
        meta: "Undergraduate Researcher | Mar 2025 - Present",
        bullets: [
          "Implemented and evaluated vision/AI research ideas",
          "Conducted model development and performance analysis in project settings",
        ],
      },
      {
        title: "ActiBooky Inc.",
        meta: "Student Intern | Sep 2025",
        bullets: [
          "Implemented and evaluated YOLO/Faster R-CNN object detection models on agricultural datasets",
          "Improved generalization through data augmentation and hyperparameter tuning",
          "Analyzed speed-accuracy trade-offs with compression and quantization",
        ],
      },
      {
        title: "Purdue University",
        meta: "Visiting Scholar | Jun 2025 - Aug 2025",
        bullets: [
          "Co-authored IEEE RoboticCC 2025 paper based on collaborative research outcomes",
          "Presented accepted publication at the conference",
        ],
      },
    ],
  },
};

export default function Experience({ language }) {
  const t = content[language];

  return (
    <section id="experience" className="section cv-section">
      <h2>{t.title}</h2>
      <p className="cv-intro">{t.intro}</p>

      <div className="cv-grid">
        {t.items.map((item) => (
          <article className="cv-card" key={`${item.title}-${item.meta}`}>
            <h3>{item.title}</h3>
            <p className="cv-meta">{item.meta}</p>
            <ul className="cv-list">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
