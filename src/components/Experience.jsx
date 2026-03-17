import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section cv-section">
      <h2>Experience</h2>
      <p className="cv-intro">인턴십, 연구실, 해외 공동연구 경험입니다.</p>

      <div className="cv-grid">
        <article className="cv-card">
          <h3>전북대학교 시각지능연구실</h3>
          <p className="cv-meta">학부연구생 | 2025.03 - 현재</p>
          <ul className="cv-list">
            <li>Vision/AI 기반 연구 주제 실험 및 구현</li>
            <li>프로젝트 단위 모델 개발과 성능 분석 수행</li>
          </ul>
        </article>

        <article className="cv-card">
          <h3>주식회사 액티부키</h3>
          <p className="cv-meta">학생 인턴 | 2025.09 (1개월)</p>
          <ul className="cv-list">
            <li>농업 데이터셋 기반 YOLO/Faster R-CNN 객체탐지 모델 구현 및 평가</li>
            <li>데이터 증강 및 하이퍼파라미터 튜닝으로 일반화 성능 개선</li>
            <li>모델 경량화/양자화 관점에서 속도-정확도 trade-off 분석</li>
          </ul>
        </article>

        <article className="cv-card">
          <h3>Purdue University</h3>
          <p className="cv-meta">학생 인턴 / Visiting Scholar | 2025.06 - 2025.08</p>
          <ul className="cv-list">
            <li>국제 공동연구 결과 기반 IEEE RoboticCC 2025 논문 공동 저술</li>
            <li>해당 연구 논문 채택 및 발표 수행</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
