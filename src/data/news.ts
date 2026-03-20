/**
 * 홈 Congratulate 섹션 + Notice 페이지 News 섹션 공통 뉴스 리스트
 * 이 파일만 수정하면 두 곳에 동시 반영됨 (translatable에서 자동 수집)
 */
export interface NewsItem {
  id: string;
  date: string;
  title: string;
  badge?: string;
  link?: string;
}

export const NEWS: NewsItem[] = [
  // Congratulate 스타일 (랩 자랑 소식)
  {
    id: "h1",
    date: "26.2",
    title: "Hyunsong Koh and Jangyeon Park have received their Master's degrees",
  },
  {
    id: "h2",
    date: "26.2",
    badge: "[New Researcher Grant Award]",
    title:
      "Multi-omics and daily lifelog health data integration for healthspan risk axis and personalized well-aging strategies",
  },
  {
    id: "h3",
    date: "26.1",
    badge: "[Paper Published]",
    title: "Novel polygenic risk score for psychiatric disorders in Nature Genetics",
  },
  {
    id: "h4",
    date: "25.12",
    title: "Lab won Best Poster Award at SAIHST Symposium",
  },
  {
    id: "h5",
    date: "25.11",
    badge: "[Conference]",
    title: "Oral presentation at ICML 2025 Workshop on Healthcare AI",
  },
  // Notice 연동 (세미나, 공지 등)
  { id: "n1", date: "2025.03.15", title: "GENNIE Lab Seminar Series 2025", link: "/notice/1" },
  { id: "n2", date: "2025.03.10", title: "Lab Meeting Schedule Update", link: "/notice/2" },
  { id: "n3", date: "2025.03.05", title: "Paper Submission Deadline (ISMB 2025)", link: "/notice/3" },
  { id: "n4", date: "2025.02.28", title: "New Dataset: UK Biobank imaging genetics", link: "/notice/4" },
  { id: "n5", date: "2025.03.01", title: "Postdoc & PhD Student Recruitment 2025", link: "/notice/9" },
];
