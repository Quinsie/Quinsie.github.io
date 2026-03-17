import "./Research.css";

const content = {
  kor: {
    title: "연구",
    intro: "논문, 연구 주제, 핵심 기여 내용을 정리했습니다.",
    pubTitle: "IEEE RoboticCC 2025 논문",
    pubSub: "A Distributed Drone Weather System using LoRaWAN and LoRa Meshnet",
    pubBullets: [
      "Polling 기반 통신 프로토콜로 메쉬 네트워크 충돌 완화",
      "DFS 기반 Spanning Tree 토폴로지로 안정적인 Token Handover 구현",
      "LoRa 패킷 구조 커스텀 설계 및 통신 로직 구현",
      "ALOHA 방식 한계 실험 평가 및 제안 방식 성능 검증",
      "Methodology 섹션 작성 및 시스템 아키텍처 코드 구현",
    ],
    interestTitle: "연구 관심 분야",
    interestSub: "Deep Learning, Computer Vision, Applied AI Systems",
    interestBullets: [
      "실생활 문제를 데이터와 모델로 풀어내는 응용형 AI",
      "정확도와 실사용성의 균형을 맞춘 모델/시스템 설계",
      "재현 가능한 실험 구조와 문서화 중심의 개발",
    ],
  },
  eng: {
    title: "Research",
    intro: "Publication, research topics, and key contributions.",
    pubTitle: "IEEE RoboticCC 2025 Publication",
    pubSub: "A Distributed Drone Weather System using LoRaWAN and LoRa Meshnet",
    pubBullets: [
      "Implemented a polling-based protocol to reduce collisions in mesh communication",
      "Developed DFS-based spanning-tree topology for stable token handover",
      "Designed a custom LoRa packet protocol and communication logic",
      "Validated limitations of ALOHA and demonstrated proposed method performance",
      "Authored methodology section and implemented system architecture",
    ],
    interestTitle: "Research Interests",
    interestSub: "Deep Learning, Computer Vision, Applied AI Systems",
    interestBullets: [
      "Applied AI for practical, user-facing everyday problems",
      "Model/system design balancing accuracy and deployability",
      "Reproducible experiments and strong technical documentation",
    ],
  },
};

export default function Research({ language }) {
  const t = content[language];

  return (
    <section id="research" className="section cv-section">
      <h2>{t.title}</h2>
      <p className="cv-intro">{t.intro}</p>

      <div className="cv-grid">
        <article className="cv-card">
          <h3>{t.pubTitle}</h3>
          <p className="cv-subtitle">{t.pubSub}</p>
          <ul className="cv-list">
            {t.pubBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="cv-card">
          <h3>{t.interestTitle}</h3>
          <p className="cv-subtitle">{t.interestSub}</p>
          <ul className="cv-list">
            {t.interestBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
