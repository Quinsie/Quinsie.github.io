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
  {
    href: "https://www.linkedin.com/in/jiho-pyo-17b6ba256/",
    icon: "linkedin",
    label: "LinkedIn",
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
            title: "전기설비 안전점검 우선순위화를 위한 Cascade 기반 전기재해 위험 예측 모델 연구",
            meta: "2026 대한전기학회 하계학술대회",
            bullets: [
              "화재사건, 건물 및 전기설비, 기상, 점검 이력 데이터 전처리 및 건물-월 단위 예측 데이터셋 구축",
              "희소 화재 데이터 기반 Cascade CatBoost 모델 설계 및 점검 후보군 우선순위화",
              "60일 이내 화재 예측에서 후보군 양성 건물 87.7% 보존 및 상위 10% Recall 61.8% 달성",
              "SHAP 기반 위험 요인 분석 및 현장 점검 의사결정 근거 제시",
            ],
          },
          {
            title: "A Distributed Drone Weather System using LoRaWAN and LoRa Meshnet",
            meta: "IEEE RoboticCC 2025",
            bullets: [
              "메쉬 네트워크 충돌 방지를 위한 Polling 기반 통신 프로토콜 설계 및 구현",
              "DFS 기반 탐색과 Backtracking을 적용한 분산 Token Handover 알고리즘 개발",
              "DISC 패킷 기반 연결성 탐색 및 멱등적 데이터 병합 로직 설계",
              "드론 간 데이터 전달을 위한 LoRa 패킷 구조 및 통신 로직 구현",
              "Methodology 섹션 작성과 시스템 아키텍처 코드 구현, 현장 연결성 테스트 수행",
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
            meta: "팀 프로젝트 | 2026.03 - 2026.06",
            bullets: [
              "화재사건, 건물 및 전기설비, 기상, 점검/검사 이력 데이터를 결합한 전처리 및 위험도 산정 시스템 개발",
              "CatBoost 기반 60일 이내 화재 발생 예측 및 Cascade 구조 기반 점검 우선순위 산출",
              "연구 결과를 바탕으로 대한전기학회 하계학술대회 공동저자 논문 게재 및 발표",
              "전자정부표준프레임워크 기반 업무 웹사이트 구현 및 배포",
              "광주 및 전남 지역 실증 및 한국전기안전공사 파일럿 테스트를 통한 현업 적용성 검증",
              "전국 단위 확장 검토 및 동일 주제의 전국민 AI 경진대회 본선 프로젝트 수행",
            ],
            links: [
              {
                label: "Github",
                href: "https://github.com/Quinsie/ESafe",
              },
            ],
          },
          {
            title: "새로버스 - BIS 개선 프로젝트",
            meta: "개인 프로젝트 | 2025.03 - 2025.06",
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
              meta: "팀 프로젝트 | 2025.09 - 2025.12",
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
              "연구실 하드웨어와 개발 환경을 관리하고 서버실 운영을 지원",
              "연구실 작업 환경 설정, 장비 및 계정 관리, 연구실 운영을 지원",
              "비디오 모아레 패턴 제거 및 화질 복원 연구 과제의 문헌 검토, 정기 세미나, 데이터 및 실험 환경 준비에 참여",
              {
                label: "MRI 신경영상을 활용한 비전 AI 기반 치매 조기진단 연구 - 2026 전북특구 전략기술 연구성과 사업화 지원 과제 참여",
                meta: "(2026.04 - Present)",
                separator: " ",
                details: [
                  "ADNI 기반 MRI/임상 데이터 확보 및 연구용 데이터셋 구성 및 전처리 수행",
                ],
              },
            ],
            links: [
              {
                label: "Lab Website",
                href: "https://jbnu-vilab.github.io/",
              },
            ],
          },
          {
            title: "전북대학교 전공교과목 TA",
            meta: "2025.03 - Present",
            bullets: [
              { label: "이산수학", meta: "2025.03 - 2025.06" },
              { label: "리눅스프로그래밍", meta: "2025.09 - 2025.12" },
              { label: "데이터베이스", meta: "2026.03 - 2026.06" },
              "교과목 운영 보조 및 실습/과제 지원, 학생 질의 응답 수행",
            ],
          },
          {
            title: "주식회사 액티부키",
            meta: "학생 인턴 | 2026.07",
            bullets: [
              "디지털 트윈 및 3D 실감형 콘텐츠 플랫폼의 산업 동향, 구조 및 활용 가능성 조사",
              "3D 모델링, 공간 데이터 구축, 실시간 상태 표현을 위한 데이터 처리 및 시각화 기술 검토",
              "가상 공간 이동, 객체 선택, 정보 조회 등 사용자 상호작용과 인터페이스 구성 방안 분석",
              "데이터 수집, 가상 공간 구축, 콘텐츠 시각화, 사용자 상호작용까지의 플랫폼 흐름 및 확장 방향 정리",
            ],
          },
          {
            title: "SW융합 멘토링 프로그램 알고리즘 멘토",
            meta: "2025.09 - 2026.06",
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
            meta: "학생 인턴 | 2025.09",
            bullets: [
              "농업 데이터셋 기반 YOLO/Faster R-CNN 모델 구현 및 평가",
              "데이터 증강/하이퍼파라미터 튜닝을 통한 일반화 성능 개선",
              "모델 경량화와 양자화 기반 속도-정확도 trade-off 분석",
            ],
          },
          {
            title: "Purdue University",
            meta: "학생 인턴 | 2025.06 - 2025.08",
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
            title: "COALA 알고리즘 동아리",
            meta: "동아리 부회장 | 2021.12 - 2022.11",
            bullets: [
                "알고리즘 튜터링 및 개인 멘토링 진행",
              "MT 기획 및 동아리 운영 활동 수행",
            ],
          },
          {
            title: "전북대학교 IT지능정보공학과 1대 학생회",
            meta: "기획국원 | 2022.03 - 2022.11",
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
            ["2026.06", "장려상", "전북대학교", "2026-1 캡스톤디자인 경진대회"],
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
          ["2026.05", "TOPCIT", "Level 3 (632/1000)", "정보통신기획평가원"],
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
            subtitle: "3.97/4.5 | 종합석차 3/32 | 재학",
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
            title: "A Cascade-Based Electrical Disaster Risk Prediction Model for Prioritizing Electrical Facility Safety Inspections",
            meta: "KIEE Summer Conference 2026",
            bullets: [
                "Built a building-month prediction dataset from fire incidents, building and electrical-facility, weather, and inspection-history data",
                "Designed a Cascade CatBoost model to prioritize inspection candidates from sparse fire data",
                "Retained 87.7% of positive buildings and achieved 61.8% recall in the top 10% for 60-day fire prediction",
                "Analyzed risk factors with SHAP to support field-inspection decisions",
            ],
          },
          {
            title: "A Distributed Drone Weather System using LoRaWAN and LoRa Meshnet",
            meta: "IEEE RoboticCC 2025",
            bullets: [
              "Implemented a polling-based protocol to prevent collisions in mesh communication",
              "Developed a distributed token-handover algorithm using DFS traversal and backtracking",
              "Designed connectivity discovery and idempotent data-merging logic based on DISC packets",
              "Implemented the LoRa packet structure and communication logic for drone-to-drone data delivery",
              "Authored the Methodology section, implemented the system architecture in code, and conducted field connectivity tests",
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
            meta: "Team Project | Mar 2026 - Jun 2026",
            bullets: [
              "Preprocessed fire incidents, building and electrical-facility, weather, and inspection-history data for risk assessment",
              "Developed a CatBoost model for 60-day fire prediction and a Cascade-based inspection-prioritization pipeline",
              "Co-authored and presented a paper at KIEE Summer Conference 2026 based on the project research",
              "Built and deployed an operational web application on the e-Government Standard Framework",
              "Validated field applicability through regional testing in Gwangju and Jeonnam and a KESCO pilot test",
              "Explored nationwide expansion and advanced to the finals of a national AI competition on the same topic",
            ],
            links: [
              {
                label: "Github",
                href: "https://github.com/Quinsie/ESafe",
              },
            ],
          },
          {
            title: "Saero Bus - BIS Improvement Project",
            meta: "Personal Project | Mar 2025 - Jun 2025",
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
              meta: "Team Project | Sep 2025 - Dec 2025",
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
              "Manage lab hardware and development environments, including server-room operations",
              "Support workspace setup, equipment and account management, and lab operations",
              {
                label: "Vision AI-based early diagnosis of dementia using MRI neuroimaging - Participant in the 2026 Jeonbuk Special R&D Zone Strategic Technology Research Commercialization Support Project",
                meta: "(Apr 2026 - Present)",
                separator: " ",
                details: [
                  "Acquired and preprocessed MRI and clinical data from ADNI to build a research dataset",
                ],
              },
              "Participate in literature review, regular seminars, and data and experiment-environment preparation for video moiré-pattern removal and restoration research",
            ],
            links: [
              {
                label: "Lab Website",
                href: "https://jbnu-vilab.github.io/",
              },
            ],
          },
          {
            title: "Major Course Teaching Assistant, JBNU",
            meta: "Mar 2025 - Present",
            bullets: [
              { label: "Discrete Mathematics", meta: "Mar 2025 - Jun 2025" },
              { label: "Linux Programming", meta: "Sep 2025 - Dec 2025" },
              { label: "Database", meta: "Mar 2026 - Jun 2026" },
              "Assisted course operation, handled student Q&A, and supported assignments and labs",
            ],
          },
          {
            title: "ActiBooky Inc.",
            meta: "Student Intern | Jul 2026",
            bullets: [
              "Reviewed industry trends, architecture, and applications of digital-twin and 3D immersive-content platforms",
              "Examined 3D modeling, spatial-data construction, and data-processing and visualization techniques for real-time state representation",
              "Analyzed interaction and interface approaches for navigation, object selection, and information retrieval in virtual spaces",
              "Organized the platform flow from data collection and virtual-space construction to visualization and user interaction",
            ],
          },
          {
            title: "Algorithm Mentor, SW Convergence Mentoring Program",
            meta: "Sep 2025 - Jun 2026",
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
            title: "COALA Algorithm Club",
            meta: "Vice President | Dec 2021 - Nov 2022",
            bullets: [
                "Conducted algorithm tutoring and one-on-one mentoring",
              "Organized MT and managed club activities",
            ],
          },
          {
            title: "1st Student Council, Department of IT Intelligence and Information Engineering, JBNU",
            meta: "Planning Bureau Member | Mar 2022 - Nov 2022",
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
          ["Jun 2026", "Encouragement Award", "JBNU", "2026-1 Capstone Design Competition"],
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
          ["May 2026", "TOPCIT", "Level 3 (632/1000)", "IITP"],
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
            subtitle: "3.97/4.5 | Overall Rank: 3/32 | In Progress",
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
