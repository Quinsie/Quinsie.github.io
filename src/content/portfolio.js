export const sectionOrder = [
  "home",
  "research",
  "projects",
  "experience",
  "activities",
  "awards",
  "skills",
  "education",
  "contact",
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
      activities: "Activities",
      awards: "Awards",
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
            title: "E-Safe - KESCO(한국전기안전공사) 전기재해위험지도 관리시스템",
            meta: "팀 프로젝트 | 2026.03 - Present",
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
            meta: "학부연구생 | 2025.03 - Present",
            bullets: [
              "Vision/AI 기반 연구 주제 실험 및 구현",
              "프로젝트 단위 모델 개발 및 성능 분석",
            ],
          },
          {
            title: "전북대학교 SW역량인증제 출제위원",
            meta: "2026.03 - Present",
            bullets: [
              "교내 코딩테스트 문제 출제 및 검수 참여",
            ],
          },
          {
            title: "전북대학교 교과목 TA (수업조교)",
            meta: "2025.03 - Present",
            bullets: [
              "이산수학 (2025.03 - 2025.06)",
              "리눅스프로그래밍 (2025.09 - 2025.12)",
              "데이터베이스 (2026.03 - Present)",
              "교과목 운영 보조 및 실습/과제 지원, 학생 질의 응답 수행",
            ],
          },
          {
            title: "SW융합 멘토링 프로그램 알고리즘 멘토",
            meta: "2025.09 - Present",
            bullets: [
              "재학생 대상 프로그래밍 기초, 자료구조 및 알고리즘 교육",
              "2025학년도 2학기, 2026학년도 1학기 연속 수행",
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
      activities: {
        title: "Activities",
        type: "cards",
        cards: [
          {
            title: "STI West Negros University 문화교류 및 어학연수",
            meta: "2026.01 - 2026.02",
          },
          {
            title: "ICPC 2025",
            meta: "2025.10",
            bullets: [
              "Online Competition 참가",
              "교내 은상 수상",
            ],
          },
          {
            title: "ICPC 2022",
            meta: "2022.10 - 2022.11",
            bullets: [
              "2022.10 Online Competition 참가 (6 solve)",
              "교내 금상 수상 후 Seoul Regional 진출",
              "2022.11 Seoul Regional 본선 참가 (4 solve, 54th / 71)",
            ],
          },
          {
            title: "COALA 알고리즘 동아리 부회장",
            meta: "2021.12 - 2022.11",
            bullets: [
              "알고리즘 튜터링 및 개인 멘토링 진행",
              "MT 기획 및 동아리 운영 활동 수행",
            ],
          },
          {
            title: "전북대학교 IT정보공학과 학생회 기획국",
            meta: "2022.03 - 2022.11",
            bullets: [
              "학과 행사 기획 및 운영 참여",
            ],
          },
          {
            title: "공과대학 교육봉사 재능기부",
            meta: "2022.07",
            bullets: [
              "전북대학교 사대부고 대상 수업 진행",
            ],
          },
        ],
      },
      awards: {
        title: "Awards",
        type: "table",
        columns: ["일자", "수상명", "주관", "비고"],
        rows: [
          ["2025.10", "은상", "AWS METAmobility", "자율주행 자동차 경진대회 해커톤"],
          ["2025.10", "은상", "전북대학교", "교내 알고리즘 대회 (ICPC 2025)"],
          ["2025.05", "9위", "전북대학교", "JBNUPC (전북대학교 프로그래밍 대회)"],
          ["2022.10", "금상", "전북대학교", "교내 알고리즘 대회 (ICPC 2022)"],
        ],
      },
      skills: {
        title: "License and Certificate",
        type: "table",
        columns: ["일자", "자격/시험", "등급/점수", "기관"],
        rows: [
          ["2025.12", "전북대학교 SW역량인증제", "Gold 등급", "전북대학교"],
          ["2025.11", "TOPCIT", "Level 3 (594/1000)", "정보통신기획평가원"],
          ["2025.06", "전북대학교 SW역량인증제", "Silver 등급", "전북대학교"],
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
      activities: "Activities",
      awards: "Awards",
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
            meta: "Undergraduate Researcher | Mar 2025 - Present",
            bullets: [
              "Implemented and evaluated vision/AI research ideas",
              "Conducted model development and performance analysis in project settings",
            ],
          },
          {
            title: "Problem Setter, JBNU SW Competency Test",
            meta: "Mar 2026 - Present",
            bullets: [
              "Participated in designing and reviewing coding test problems",
            ],
          },
          {
            title: "Teaching Assistant, JBNU",
            meta: "Mar 2025 - Present",
            bullets: [
              "Discrete Mathematics (Mar 2025 - Jun 2025)",
              "Linux Programming (Sep 2025 - Dec 2025)",
              "Database (Mar 2026 - Present)",
              "Assisted course operation, handled student Q&A, and supported assignments and labs",
            ],
          },
          {
            title: "Algorithm Mentor, SW Convergence Mentoring Program",
            meta: "Sep 2025 - Present",
            bullets: [
              "Taught programming fundamentals, data structures, and basic algorithms to undergraduate students",
              "Participated in both Fall 2025 and Spring 2026 programs",
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
      activities: {
        title: "Activities",
        type: "cards",
        cards: [
          {
            title: "Cultural Exchange & Language Program, STI West Negros University",
            meta: "Jan 2026 - Feb 2026",
          },
          {
            title: "ICPC 2025",
            meta: "Oct 2025",
            bullets: [
              "Participated in Online Competition",
              "Awarded Silver in university-level contest",
            ],
          },
          {
            title: "ICPC 2022",
            meta: "Oct 2022 - Nov 2022",
            bullets: [
              "Participated in Online Competition (6 solves)",
              "Advanced to Seoul Regional after winning Gold in university-level contest",
              "Participated in Seoul Regional Finals (4 solves, 54th / 71)",
            ],
          },
          {
            title: "Vice President, COALA Algorithm Club",
            meta: "Dec 2021 - Nov 2022",
            bullets: [
              "Conducted algorithm tutoring and one-on-one mentoring",
              "Organized MT and managed club activities",
            ],
          },
          {
            title: "Student Council, Dept. of IT Information Engineering",
            meta: "Mar 2022 - Nov 2022",
            bullets: [
              "Participated in planning and operating departmental events",
            ],
          },
          {
            title: "Educational Volunteering Program",
            meta: "Jul 2022",
            bullets: [
              "Delivered lectures at JBNU affiliated high school",
            ],
          },
        ],
      },
      awards: {
        title: "Awards",
        type: "table",
        columns: ["Date", "Award", "Organizer", "Notes"],
        rows: [
          ["Oct 2025", "Silver Award", "AWS METAmobility", "Autonomous Driving Hackathon"],
          ["Oct 2025", "Silver Award", "JBNU", "JBNU Algorithm Contest (ICPC 2025)"],
          ["May 2025", "9th Place", "JBNU", "JBNUPC (JBNU Programming Contest)"],
          ["Oct 2022", "Gold Award", "JBNU", "JBNU Algorithm Contest (ICPC 2022)"],
        ],
      },
      skills: {
        title: "License and Certificate",
        type: "table",
        columns: ["Date", "Certificate", "Level / Score", "Organization"],
        rows: [
          ["Dec 2025", "JBNU SW Competency Certification", "Gold Level", "JBNU"],
          ["Nov 2025", "TOPCIT", "Level 3 (594/1000)", "IITP"],
          ["Jun 2025", "JBNU SW Competency Certification", "Silver Level", "JBNU"],
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
            meta: "Mar 2021 - Present",
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
