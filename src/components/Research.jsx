import "./Research.css";

const content = {
  kor: {
    title: "Publications",
    subtitle: "A Distributed Drone Weather System using LoRaWAN and LoRa Meshnet",
    venue: "IEEE RoboticCC 2025",
    linkLabel: "IEEE Xplore",
    bullets: [
      "메쉬 네트워크 충돌 방지를 위한 Polling 기반 통신 프로토콜 설계 및 구현",
      "DFS 기반 Spanning Tree 토폴로지로 안정적인 Token Handover 알고리즘 개발",
      "드론 간 효율적인 데이터 송수신을 위한 LoRa 패킷 구조 설계 및 통신 로직 구현",
      "ALOHA 프로토콜의 한계 실험 및 제안 방식 성능 검증",
      "Methodology 섹션 작성 및 시스템 아키텍처 코드 구현",
    ],
  },
  eng: {
    title: "Publications",
    subtitle: "A Distributed Drone Weather System using LoRaWAN and LoRa Meshnet",
    venue: "IEEE RoboticCC 2025",
    linkLabel: "IEEE Xplore",
    bullets: [
      "Implemented a polling-based protocol to prevent collisions in mesh communication",
      "Developed a DFS-based spanning-tree topology for stable token handover",
      "Designed a custom LoRa packet structure and communication logic",
      "Validated ALOHA limitations and the effectiveness of the proposed approach",
      "Authored the Methodology section and implemented system architecture in code",
    ],
  },
};

export default function Research({ language }) {
  const t = content[language];

  return (
    <section id="research" className="section cv-section">
      <h2>{t.title}</h2>
      <div className="cv-grid">
        <article className="cv-card">
          <h3>{t.subtitle}</h3>
          <p className="cv-meta">{t.venue}</p>
          <ul className="cv-list">
            {t.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="cv-link-row">
            <a
              href="https://ieeexplore.ieee.org/document/11392049/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.linkLabel}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
