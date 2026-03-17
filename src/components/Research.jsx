import "./Research.css";

export default function Research() {
  return (
    <section id="research" className="section cv-section">
      <h2>Research</h2>
      <p className="cv-intro">논문, 연구 주제, 핵심 기여 내용을 정리했습니다.</p>

      <div className="cv-grid">
        <article className="cv-card">
          <h3>IEEE RoboticCC 2025 논문</h3>
          <p className="cv-subtitle">A Distributed Drone Weather System using LoRaWAN and LoRa Meshnet</p>
          <ul className="cv-list">
            <li>Polling 기반 통신 프로토콜로 메쉬 네트워크 충돌 완화</li>
            <li>DFS 기반 Spanning Tree 토폴로지로 안정적인 Token Handover 구현</li>
            <li>LoRa 패킷 구조 커스텀 설계 및 통신 로직 구현</li>
            <li>ALOHA 방식 한계 실험 평가 및 제안 방식 성능 검증</li>
            <li>Methodology 섹션 작성 및 시스템 아키텍처 코드 구현</li>
          </ul>
        </article>

        <article className="cv-card">
          <h3>연구 관심 분야</h3>
          <p className="cv-subtitle">Deep Learning, Computer Vision, Applied AI Systems</p>
          <ul className="cv-list">
            <li>실생활 문제를 데이터와 모델로 풀어내는 응용형 AI</li>
            <li>정확도와 실사용성의 균형을 맞춘 모델/시스템 설계</li>
            <li>문서화와 재현 가능한 실험 구조를 중시한 개발 방식</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
