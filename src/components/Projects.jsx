import "./Projects.css";

const content = {
  kor: {
    title: "프로젝트",
    intro: "주요 프로젝트 2건의 목적, 구현, 성과를 정리했습니다.",
    saeroTitle: "새로버스 - BIS 개선 프로젝트",
    saeroMeta: "개인 프로젝트 | 2025.03 - 2025.06",
    saeroStack: "Pytorch (MLP), FastAPI, Python, Kotlin/XML",
    saeroBullets: [
      "기존 BIS 도착 예측 오차를 줄이기 위한 데이터 기반 예측 시스템 개발",
      "시간/요일/날씨/버스정보/위치/교통정보 feature를 이용한 MLP 모델 설계",
      "전주시 451개 노선 실시간 데이터 수집 자동화 파이프라인 구축",
      "Heteroscedastic Loss와 Ranking Loss를 적용해 예측 안정성 개선",
      "FastAPI 기반 추론 API와 Android 앱까지 구현",
    ],
    saeroLinkText: "프로젝트 문서 보기",
    doqTitle: "DoQMate - 문서 기반 AI 챗봇 시스템",
    doqMeta: "팀 프로젝트 (캡스톤) | 2025.09 - 2025.12",
    doqStack: "Qwen, Qwen-VL, EasyOCR, Flask, ChromaDB",
    doqBullets: [
      "PDF 중심 비정형 문서 탐색을 위한 로컬 RAG 파이프라인 구축",
      "EasyOCR 파인튜닝과 LLM 정제 단계를 통해 OCR 품질 향상",
      "문장 단위 재구성과 유사도 검색 최적화로 환각 억제형 응답 설계",
      "검색 신뢰도 낮을 때 답변 거부 정책을 적용해 보안성 강화",
      "멀티 챗봇/문서 관리가 가능한 프론트 UI 구성",
    ],
    doqLinkText: "GitHub 저장소 보기",
  },
  eng: {
    title: "Projects",
    intro: "Two major projects with implementation details and outcomes.",
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
    saeroLinkText: "View Project Docs",
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
    doqLinkText: "View GitHub Repository",
  },
};

export default function Projects({ language }) {
  const t = content[language];

  return (
    <section id="projects" className="section cv-section">
      <h2>{t.title}</h2>
      <p className="cv-intro">{t.intro}</p>

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
