import "./Projects.css";

const content = {
  kor: {
    title: "Projects",
    saeroTitle: "새로버스 - BIS 개선 프로젝트",
    saeroMeta: "개인 프로젝트 | 2025.03 - 2025.06",
    saeroStack: "Pytorch (MLP), FastAPI, Python, Kotlin/XML",
    saeroBullets: [
      "기존 BIS 도착 예상 오차를 줄이기 위한 데이터 기반 도착 예측 시스템 개발",
      "시간, 요일, 날씨, 버스정보, 위치, 교통정보를 feature로 활용한 MLP 모델 설계",
      "전주시 451개 노선 실시간 도착정보 수집 자동화 파이프라인 구축",
      "Heteroscedastic Loss와 Ranking Loss를 적용해 모델 안정성/타당성 강화",
      "FastAPI 기반 저지연 추론 API 및 Android 앱 구현",
    ],
    saeroLinkText: "Docs",
    doqTitle: "DoQMate - 문서 기반 AI 챗봇 시스템",
    doqMeta: "팀 프로젝트 (캡스톤) | 2025.09 - 2025.12",
    doqStack: "Qwen, Qwen-VL, EasyOCR, Flask, ChromaDB",
    doqBullets: [
      "PDF 중심 비정형 데이터 탐색을 위한 보안 특화 로컬 RAG 시스템 구축",
      "EasyOCR 파인튜닝 및 LLM 기반 정제 단계 도입으로 OCR 정확도 개선",
      "문장 단위 재구성과 검색 최적화로 환각을 억제한 문서 기반 응답 구현",
      "검색 신뢰도가 낮은 경우 답변을 거부하도록 설계해 보안성 강화",
      "복수 챗봇/문서 관리를 포함한 프론트엔드 UI 구성",
    ],
    doqLinkText: "Github",
  },
  eng: {
    title: "Projects",
    saeroTitle: "Saero Bus - BIS Improvement Project",
    saeroMeta: "Personal Project | Mar 2025 - Jun 2025",
    saeroStack: "Pytorch (MLP), FastAPI, Python, Kotlin/XML",
    saeroBullets: [
      "Built a data-driven system to reduce errors in existing BIS bus arrival predictions",
      "Designed an MLP model using time, day, weather, bus, location, and traffic features",
      "Built an automated pipeline collecting real-time data for 451 active routes in Jeonju",
      "Applied heteroscedastic loss and ranking loss for robustness and monotonicity",
      "Implemented FastAPI inference APIs and Android application",
    ],
    saeroLinkText: "Docs",
    doqTitle: "DoQMate - Document-Based AI Chatbot System",
    doqMeta: "Team Project (Capstone) | Sep 2025 - Dec 2025",
    doqStack: "Qwen, Qwen-VL, EasyOCR, Flask, ChromaDB",
    doqBullets: [
      "Built a local RAG pipeline for secure exploration of enterprise PDF documents",
      "Improved OCR quality with EasyOCR fine-tuning and LLM-based refinement",
      "Reduced hallucinations through sentence-level reconstruction and retrieval optimization",
      "Applied confidence-based rejection policy for stronger document-grounded responses",
      "Implemented frontend UI for multi-chatbot and document management",
    ],
    doqLinkText: "Github",
  },
};

export default function Projects({ language }) {
  const t = content[language];

  return (
    <section id="projects" className="section cv-section">
      <h2>{t.title}</h2>

      <div className="cv-grid">
        <article className="cv-card">
          <h3>{t.saeroTitle}</h3>
          <p className="cv-meta">{t.saeroMeta}</p>
          <p className="cv-subtitle">{t.saeroStack}</p>
          <ul className="cv-list">
            {t.saeroBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="cv-link-row">
            <a href="https://velog.io/@coverrrho/프로젝트-개요" target="_blank" rel="noopener noreferrer">{t.saeroLinkText}</a>
          </div>
        </article>

        <article className="cv-card">
          <h3>{t.doqTitle}</h3>
          <p className="cv-meta">{t.doqMeta}</p>
          <p className="cv-subtitle">{t.doqStack}</p>
          <ul className="cv-list">
            {t.doqBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="cv-link-row">
            <a href="https://github.com/Quinsie/doqmate" target="_blank" rel="noopener noreferrer">{t.doqLinkText}</a>
          </div>
        </article>
      </div>
    </section>
  );
}
