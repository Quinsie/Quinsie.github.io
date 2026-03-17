import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section cv-section">
      <h2>Projects</h2>
      <p className="cv-intro">주요 프로젝트 2건의 목적, 구현, 성과를 정리했습니다.</p>

      <div className="cv-grid">
        <article className="cv-card">
          <h3>새로버스 - BIS 개선 프로젝트</h3>
          <p className="cv-meta">개인 프로젝트 | 2025.03 - 2025.06</p>
          <p className="cv-subtitle">Pytorch (MLP), FastAPI, Python, Kotlin/XML</p>
          <ul className="cv-list">
            <li>기존 BIS 도착 예측 오차를 줄이기 위한 데이터 기반 예측 시스템 개발</li>
            <li>시간/요일/날씨/버스정보/위치/교통정보 feature를 이용한 MLP 모델 설계</li>
            <li>전주시 451개 노선 실시간 데이터 수집 자동화 파이프라인 구축</li>
            <li>Heteroscedastic Loss와 Ranking Loss를 적용해 예측 안정성 개선</li>
            <li>FastAPI 기반 추론 API와 Android 앱까지 구현</li>
          </ul>
          <div className="cv-link-row">
            <a href="https://velog.io/@coverrrho/프로젝트-개요" target="_blank" rel="noopener noreferrer">프로젝트 문서 보기</a>
          </div>
        </article>

        <article className="cv-card">
          <h3>DoQMate - 문서 기반 AI 챗봇 시스템</h3>
          <p className="cv-meta">팀 프로젝트 (캡스톤) | 2025.09 - 2025.12</p>
          <p className="cv-subtitle">Qwen, Qwen-VL, EasyOCR, Flask, ChromaDB</p>
          <ul className="cv-list">
            <li>PDF 중심 비정형 문서 탐색을 위한 로컬 RAG 파이프라인 구축</li>
            <li>EasyOCR 파인튜닝과 LLM 정제 단계를 통해 OCR 품질 향상</li>
            <li>문장 단위 재구성과 유사도 검색 최적화로 환각 억제형 응답 설계</li>
            <li>검색 신뢰도 낮을 때 답변 거부 정책을 적용해 보안성 강화</li>
            <li>멀티 챗봇/문서 관리가 가능한 프론트 UI 구성</li>
          </ul>
          <div className="cv-link-row">
            <a href="https://github.com/Quinsie/doqmate" target="_blank" rel="noopener noreferrer">GitHub 저장소 보기</a>
          </div>
        </article>
      </div>
    </section>
  );
}
