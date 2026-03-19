/**
 * 홈페이지 'Congratulate!' 섹션 - 랩 자랑 소식
 * highlights.ts만 수정하면 됨 (translatable에서 자동 수집)
 */
export interface Highlight {
  id: string;
  date: string;
  badge?: string;
  title: string;
}

export const HIGHLIGHTS: Highlight[] = [
  {
    id: "1",
    date: "26.2",
    title: "Hyunsong Koh and Jangyeon Park have received their Master's degrees",
  },
  {
    id: "2",
    date: "26.2",
    badge: "[New Researcher Grant Award]",
    title:
      "Multi-omics and daily lifelog health data integration for healthspan risk axis and personalized well-aging strategies",
  },
  {
    id: "3",
    date: "26.1",
    badge: "[Paper Published]",
    title: "Novel polygenic risk score for psychiatric disorders in Nature Genetics",
  },
  {
    id: "4",
    date: "25.12",
    title: "Lab won Best Poster Award at SAIHST Symposium",
  },
  {
    id: "5",
    date: "25.11",
    badge: "[Conference]",
    title: "Oral presentation at ICML 2025 Workshop on Healthcare AI",
  },
];
