export interface Notice {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  content: string;
  /** 어드민에서 설정 시 상단 고정, 테두리 강조 (리크루팅 등) */
  pinned?: boolean;
}

export const NOTICES: Notice[] = [
  {
    id: "1",
    title: "GENNIE Lab Seminar Series 2025",
    date: "2025.03.15",
    excerpt: "Monthly seminar on genomic medicine and AI applications. Guest speakers from leading institutions.",
    category: "Seminar",
    content: `We are pleased to announce the GENNIE Lab Seminar Series for 2025. This monthly seminar will feature guest speakers from leading institutions worldwide, covering topics in genomic medicine, neuroimaging, and AI applications in precision medicine.

**Schedule:**
- March: Dr. Jane Smith (Stanford) - Polygenic Risk Scores
- April: Dr. John Doe (MIT) - Imaging Genetics
- May: Dr. Sarah Lee (Oxford) - Electronic Health Records

All lab members are encouraged to attend. Seminars will be held in the main conference room. Refreshments will be provided.`,
  },
  {
    id: "2",
    title: "Lab Meeting Schedule Update",
    date: "2025.03.10",
    excerpt: "Weekly lab meetings will be held every Friday at 2PM. Please check the calendar for room assignments.",
    category: "Schedule",
    content: `The lab meeting schedule has been updated for the spring semester. Weekly lab meetings will be held every Friday at 2:00 PM.

**Important notes:**
- Room assignments may vary; please check the shared calendar
- Each member should prepare a brief progress update
- External guests will be announced in advance

If you have scheduling conflicts, please notify the lab manager at least 24 hours in advance.`,
  },
  {
    id: "3",
    title: "Paper Submission Deadline",
    date: "2025.03.05",
    excerpt: "Abstract submission for ISMB 2025 closes on March 15. Contact PI for approval before submitting.",
    category: "Publication",
    content: `The abstract submission deadline for ISMB 2025 is approaching. The deadline is March 15, 2025.

**Submission guidelines:**
1. Contact the PI for approval before submitting
2. Ensure all co-authors have reviewed the abstract
3. Follow the ISMB 2025 format guidelines

For questions regarding submission, please reach out to the lab's publication coordinator. We encourage all lab members with relevant work to consider submitting.`,
  },
  {
    id: "4",
    title: "New Dataset Available",
    date: "2025.02.28",
    excerpt: "UK Biobank imaging genetics dataset access has been approved. See shared drive for documentation.",
    category: "Resource",
    content: `We are excited to announce that access to the UK Biobank imaging genetics dataset has been approved for our lab.

**Access information:**
- Documentation is available on the shared drive
- Data access requires completion of the security training module
- Contact the data manager for credential setup

This dataset includes neuroimaging data linked with genetic information, enabling new research directions in imaging genetics. Please review the data use agreement before accessing.`,
  },
  {
    id: "5",
    title: "Guest Speaker: Dr. Emily Chen",
    date: "2025.03.20",
    excerpt: "Special seminar on deep learning in medical imaging. Room 301, 3PM.",
    category: "Seminar",
    content: `Dr. Emily Chen from Harvard Medical School will present her recent work on deep learning applications in medical imaging. All lab members are welcome.`,
  },
  {
    id: "6",
    title: "Holiday Lab Closure",
    date: "2025.03.12",
    excerpt: "Lab will be closed March 20-22 for spring break. Emergency contact list posted.",
    category: "Schedule",
    content: `The lab will be closed during spring break. Please ensure all experiments are properly secured before leaving.`,
  },
  {
    id: "7",
    title: "Manuscript Review Session",
    date: "2025.03.08",
    excerpt: "Internal review for Nature Genetics submission. Draft due March 10.",
    category: "Publication",
    content: `We will hold an internal review session for the manuscript. Please submit your feedback by the deadline.`,
  },
  {
    id: "8",
    title: "Compute Cluster Maintenance",
    date: "2025.02.25",
    excerpt: "Scheduled maintenance on March 1, 2-6AM. Save your work in advance.",
    category: "Resource",
    content: `The compute cluster will undergo maintenance. Please save all work and log out before the maintenance window.`,
  },
  {
    id: "9",
    title: "Postdoc & PhD Student Recruitment 2025",
    date: "2025.03.01",
    excerpt: "We are looking for motivated postdocs and PhD students in genomic medicine and AI. Apply by March 31.",
    category: "Recruitment",
    content: `GENNIE Lab is recruiting postdoctoral researchers and PhD students for 2025.

**Positions:**
- Postdoc: Genomic medicine, neuroimaging, AI applications
- PhD: Computational biology, machine learning in healthcare

**Requirements:**
- Strong background in relevant fields
- Publication record preferred
- Team collaboration skills

**Application deadline:** March 31, 2025. Please send CV and cover letter to lab contact.`,
    pinned: true,
  },
];

/** 카테고리별로 공지 그룹화 */
export function getNoticesByCategory(): { category: string; notices: Notice[] }[] {
  const map = new Map<string, Notice[]>();
  for (const n of NOTICES) {
    const list = map.get(n.category) ?? [];
    list.push(n);
    map.set(n.category, list);
  }
  // 날짜 최신순 정렬
  const result: { category: string; notices: Notice[] }[] = [];
  map.forEach((notices, category) => {
    result.push({
      category,
      notices: [...notices].sort((a, b) => (b.date > a.date ? 1 : -1)),
    });
  });
  // 카테고리 순서 (Seminar, Schedule, Publication, Resource, 기타)
  const order = ["Seminar", "Schedule", "Publication", "Resource"];
  result.sort((a, b) => {
    const ai = order.indexOf(a.category);
    const bi = order.indexOf(b.category);
    if (ai >= 0 && bi >= 0) return ai - bi;
    if (ai >= 0) return -1;
    if (bi >= 0) return 1;
    return a.category.localeCompare(b.category);
  });
  return result;
}

export function getNoticeById(id: string): Notice | undefined {
  return NOTICES.find((n) => n.id === id);
}
