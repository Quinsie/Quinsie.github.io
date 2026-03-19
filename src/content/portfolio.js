export const sectionOrder = [
  "home",
  "contact",
  "research",
  "projects",
  "experience",
  "skills",
  "education",
];

export const socialLinks = [
  {
    href: "https://github.com/Quinsie",
    icon: "github",
    label: "GitHub",
  },
  {
    href: "https://velog.io/@coverrrho",
    icon: "velog",
    label: "Velog",
  },
  {
    href: "https://www.instagram.com/coverrrr.ho/",
    icon: "instagram",
    label: "Instagram",
  },
];

export const portfolioContent = {
  kor: {
    navigation: {
      home: "Home",
      contact: "Contact",
      research: "Publications",
      projects: "Projects",
      experience: "Experience",
      skills: "License & Certificate",
      education: "Education",
    },
    home: {
      name: "표지호",
      englishName: "Jiho Pyo",
      role: "AI Engineer (Research-Oriented)",
      summaryLines: [
        "일상의 불편함을 포착해 기술로 해결하며, 문제의 본질을 파고드는 몰입을 즐깁니다.",
        "새로운 배움을 성장의 동력으로 삼아, 막연한 기술을 우리 삶에 밀착된 유용한 가치로 바꿉니다.",
      ],
      contactLabel: "Contact",
      email: "hoyyang22@jbnu.ac.kr",
      birth: "2000.04.29",
      githubText: "https://github.com/Quinsie/",
      blogText: "https://velog.io/@coverrrho/",
    },
    sections: {
      contact: {
        title: "Contact",
        type: "contact",
        entries: [
          {
            label: "Email",
            value: "hoyyang22@jbnu.ac.kr",
            href: "mailto:hoyyang22@jbnu.ac.kr",
          },
          {
            label: "Birth",
            value: "2000.04.29",
          },
          {
            label: "Github",
            value: "https://github.com/Quinsie/",
            href: "https://github.com/Quinsie",
          },
          {
            label: "Blog",
            value: "https://velog.io/@coverrrho/",
            href: "https://velog.io/@coverrrho",
          },
        ],
      },
      research: {
        title: "Publications",
        type: "cards",
        cards: [
          {
            title: "A Distributed Drone Weather System using LoRaWAN and LoRa Meshnet",
            meta: "IEEE RoboticCC 2025",
            bullets: [
              "메쉬 네트워크 충돌 방지를 위한 Polling 기반 통신 프로토콜 설계 및 구현",
              "DFS 기반 Spanning Tree 토폴로지로 안정적인 Token Handover 알고리즘 개발",
              "드론 간 효율적인 데이터 송수신을 위한 LoRa 패킷 구조 설계 및 통신 로직 구현",
              "ALOHA 프로토콜의 한계 실험 및 제안 방식 성능 검증",
              "Methodology 섹션 작성 및 시스템 아키텍처 코드 구현",
            ],
            links: [
              {
                label: "IEEE Xplore",
                href: "https://ieeexplore.ieee.org/document/11392049/",
              },
            ],
          },
        ],
      },
      projects: {
        title: "Projects",
        type: "cards",
        cards: [
          {
            title: "E-Safe - KESCO 전기재해위험지도 관리시스템",
            meta: "팀 프로젝트 | 2026.03 - present",
            subtitle: "AI/ML, 데이터 분석",
            bullets: [
              "건물 정적 위험요소, 기상 위험, 설비 점검/검사 이력, 과거 화재 이력을 결합한 전기재해 위험도 산정 시스템 개발",
              "건물 단위 전기재해 위험지수 모델 설계 및 분석 알고리즘 개발",
              "AI 기반 재난 예측 및 분석이 가능한 신규 모델 구축 예정",
              "공공기관 서식 대응을 위한 보고서 자동 생성 시스템 설계",
              "DB 설계 및 프론트엔드/백엔드 전반의 데이터 파이프라인 최적화 수행",
            ],
            links: [],
          },
          {
            title: "새로버스 - BIS 개선 프로젝트",
            meta: "개인 프로젝트 | 2025.03 - 2025.06",
            subtitle: "Pytorch (MLP), FastAPI, Python, Kotlin/XML",
            bullets: [
              "기존 BIS 도착 예상 오차를 줄이기 위한 데이터 기반 도착 예측 시스템 개발",
              "시간, 요일, 날씨, 버스정보, 위치, 교통정보를 feature로 활용한 MLP 모델 설계",
              "전주시 451개 노선 실시간 도착정보 수집 자동화 파이프라인 구축",
              "Heteroscedastic Loss와 Ranking Loss를 적용해 모델 안정성/타당성 강화",
              "FastAPI 기반 저지연 추론 API 및 Android 앱 구현",
            ],
            links: [
              {
                label: "Docs",
                href: "https://velog.io/@coverrrho/프로젝트-개요",
              },
            ],
          },
          {
            title: "DoQMate - 문서 기반 AI 챗봇 시스템",
            meta: "팀 프로젝트 (캡스톤) | 2025.09 - 2025.12",
            subtitle: "Qwen, Qwen-VL, EasyOCR, Flask, ChromaDB",
            bullets: [
              "PDF 중심 비정형 데이터 탐색을 위한 보안 특화 로컬 RAG 시스템 구축",
              "EasyOCR 파인튜닝 및 LLM 기반 정제 단계 도입으로 OCR 정확도 개선",
              "문장 단위 재구성과 검색 최적화로 환각을 억제한 문서 기반 응답 구현",
              "검색 신뢰도가 낮은 경우 답변을 거부하도록 설계해 보안성 강화",
              "복수 챗봇/문서 관리를 포함한 프론트엔드 UI 구성",
            ],
            links: [
              {
                label: "Github",
                href: "https://github.com/Quinsie/doqmate",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        type: "cards",
        cards: [
          {
            title: "전북대학교 시각지능연구실",
            meta: "학부연구생 | 2025.03 - present",
            bullets: [
              "Vision/AI 기반 연구 주제 실험 및 구현",
              "프로젝트 단위 모델 개발 및 성능 분석",
            ],
          },
          {
            title: "Holysoft Studio",
            meta: "학생 인턴 | 2026.01 - 2026.02",
            bullets: [
              "Unity 기반 게임 개발 프로세스 학습 및 프로젝트 참여",
              "C# 스크립트를 활용한 게임 로직 구현 및 기능 개발 경험",
              "게임 오브젝트 구조 및 이벤트 시스템 이해를 기반으로 간단한 인터랙션 구현",
              "게임 개발 전반의 파이프라인(기획개발테스트) 실무 프로세스 경험",
            ],
          },
          {
            title: "주식회사 액티부키",
            meta: "학생 인턴 | 2025.09 (1개월)",
            bullets: [
              "농업 데이터셋 기반 YOLO/Faster R-CNN 모델 구현 및 평가",
              "데이터 증강/하이퍼파라미터 튜닝을 통한 일반화 성능 개선",
              "모델 경량화와 양자화 기반 속도-정확도 trade-off 분석",
            ],
          },
          {
            title: "Purdue University",
            meta: "학생 인턴 | 2025.06 - 2025.08 (2개월)",
            bullets: [
              "국제 공동연구 성과를 바탕으로 RoboticCC 2025 논문 공동 저술",
              "논문 채택 및 발표 수행",
            ],
          },
        ],
      },
      skills: {
        title: "License and Certificate",
        type: "table",
        columns: ["일자", "자격/시험", "등급/점수", "기관"],
        rows: [
          ["2025.11", "TOPCIT", "Level 3 (594/1000)", "정보통신기획평가원"],
          ["2025.03", "OPIc", "IH (Intermediate High)", "ACTFL"],
          ["2022.07", "Cos PRO C++", "1급", "YBM IT"],
        ],
      },
      education: {
        title: "Education",
        type: "cards",
        cards: [
          {
            title: "전북대학교 공과대학 IT정보공학과",
            meta: "2021.03 - present",
            subtitle: "3.95/4.5 | 재학",
          },
          {
            title: "청주세광고등학교",
            meta: "2016.03 - 2019.02",
            subtitle: "졸업",
          },
        ],
      },
    },
  },
  eng: {
    navigation: {
      home: "Home",
      contact: "Contact",
      research: "Publications",
      projects: "Projects",
      experience: "Experience",
      skills: "License & Certificate",
      education: "Education",
    },
    home: {
      name: "표지호",
      englishName: "Jiho Pyo",
      role: "AI Engineer (Research-Oriented)",
      summaryLines: [
        "I enjoy identifying everyday problems and uncovering their core,",
        "transforming abstract technologies into practical value through continuous learning.",
      ],
      contactLabel: "Contact",
      email: "hoyyang22@jbnu.ac.kr",
      birth: "Apr 29, 2000",
      githubText: "https://github.com/Quinsie/",
      blogText: "https://velog.io/@coverrrho/",
    },
    sections: {
      contact: {
        title: "Contact",
        type: "contact",
        entries: [
          {
            label: "Email",
            value: "hoyyang22@jbnu.ac.kr",
            href: "mailto:hoyyang22@jbnu.ac.kr",
          },
          {
            label: "Birth",
            value: "Apr 29, 2000",
          },
          {
            label: "Github",
            value: "https://github.com/Quinsie/",
            href: "https://github.com/Quinsie",
          },
          {
            label: "Blog",
            value: "https://velog.io/@coverrrho/",
            href: "https://velog.io/@coverrrho",
          },
        ],
      },
      research: {
        title: "Publications",
        type: "cards",
        cards: [
          {
            title: "A Distributed Drone Weather System using LoRaWAN and LoRa Meshnet",
            meta: "IEEE RoboticCC 2025",
            bullets: [
              "Implemented a polling-based protocol to prevent collisions in mesh communication",
              "Developed a DFS-based spanning-tree topology for stable token handover",
              "Designed a custom LoRa packet structure and communication logic",
              "Validated ALOHA limitations and the effectiveness of the proposed approach",
              "Authored the Methodology section and implemented system architecture in code",
            ],
            links: [
              {
                label: "IEEE Xplore",
                href: "https://ieeexplore.ieee.org/document/11392049/",
              },
            ],
          },
        ],
      },
      projects: {
        title: "Projects",
        type: "cards",
        cards: [
          {
            title: "E-Safe - KESCO Electrical Hazard Risk Mapping System",
            meta: "Team Project | Mar 2026 - Present",
            subtitle: "AI/ML, Data Analysis",
            bullets: [
              "Developing a risk assessment system that integrates structural risk factors, weather conditions, inspection history, and past fire records",
              "Designing building-level electrical hazard risk index models and analytical algorithms",
              "Planning to build AI-based models for disaster prediction and analysis",
              "Designing an automated report generation system aligned with public institution formats",
              "Optimizing end-to-end data pipelines including database, backend, and frontend systems",
            ],
            links: [],
          },
          {
            title: "Saero Bus - BIS Improvement Project",
            meta: "Personal Project | Mar 2025 - Jun 2025",
            subtitle: "Pytorch (MLP), FastAPI, Python, Kotlin/XML",
            bullets: [
              "Built a data-driven system to reduce errors in existing BIS bus arrival predictions",
              "Designed an MLP model using time, day, weather, bus, location, and traffic features",
              "Built an automated pipeline collecting real-time data for 451 active routes in Jeonju",
              "Applied heteroscedastic loss and ranking loss for robustness and monotonicity",
              "Implemented FastAPI inference APIs and Android application",
            ],
            links: [
              {
                label: "Docs",
                href: "https://velog.io/@coverrrho/프로젝트-개요",
              },
            ],
          },
          {
            title: "DoQMate - Document-Based AI Chatbot System",
            meta: "Team Project (Capstone) | Sep 2025 - Dec 2025",
            subtitle: "Qwen, Qwen-VL, EasyOCR, Flask, ChromaDB",
            bullets: [
              "Built a local RAG pipeline for secure exploration of enterprise PDF documents",
              "Improved OCR quality with EasyOCR fine-tuning and LLM-based refinement",
              "Reduced hallucinations through sentence-level reconstruction and retrieval optimization",
              "Applied confidence-based rejection policy for stronger document-grounded responses",
              "Implemented frontend UI for multi-chatbot and document management",
            ],
            links: [
              {
                label: "Github",
                href: "https://github.com/Quinsie/doqmate",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        type: "cards",
        cards: [
          {
            title: "JBNU Vision Intelligence Lab",
            meta: "Undergraduate Researcher | Mar 2025 - present",
            bullets: [
              "Implemented and evaluated vision/AI research ideas",
              "Conducted model development and performance analysis in project settings",
            ],
          },
          {
            title: "Holysoft Studio",
            meta: "Student Intern | Jan 2026 - Feb 2026",
            bullets: [
              "Learned Unity-based game development workflow and participated in development projects",
              "Implemented game logic and features using C# scripting",
              "Built simple interactive systems based on Unity's object and event architecture",
              "Experienced the full game development pipeline from planning to testing",
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
      skills: {
        title: "License and Certificate",
        type: "table",
        columns: ["Date", "Certificate", "Level / Score", "Organization"],
        rows: [
          ["Nov 2025", "TOPCIT", "Level 3 (594/1000)", "IITP"],
          ["Mar 2025", "OPIc", "IH (Intermediate High)", "ACTFL"],
          ["Jul 2022", "Cos PRO C++", "Professional (Level 1)", "YBM IT"],
        ],
      },
      education: {
        title: "Education",
        type: "cards",
        cards: [
          {
            title: "JBNU, B.S. in IT Information Engineering",
            meta: "Mar 2021 - present",
            subtitle: "3.95/4.5 | In Progress",
          },
          {
            title: "Cheongju Sekwang High School",
            meta: "Mar 2016 - Feb 2019",
            subtitle: "Graduated",
          },
        ],
      },
    },
  },
};

export function getPortfolioContent(language) {
  return portfolioContent[language] ?? portfolioContent.kor;
}
