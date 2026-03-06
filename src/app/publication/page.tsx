"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/common/Navigation";

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number | "2021";
  link?: string;
  tags: string[];
}

const KEYWORD_TAGS = [
  "Psychiatric genetics",
  "Imaging genetics",
  "Polygenic Prediction",
  "Electronic Health Records",
  "Machine Learning",
  "GWAS",
] as const;

const PUBLICATIONS: Publication[] = [
  // 2025
  {
    id: "2025-1",
    year: 2025,
    venue: "Nature Communications",
    title:
      "Polygenic architecture of brain structure and function, behaviors, and psychopathologies in children.",
    authors: "Joo YY, Kim BG, Kim G, Lee E, Seo J, Cha J.",
    link: "https://doi.org/10.1038/s41467-025-63312-6",
    tags: [
      "2025",
      "Imaging genetics",
      "Psychiatric genetics",
      "Polygenic Prediction",
      "Machine Learning",
    ],
  },
  {
    id: "2025-2",
    year: 2025,
    venue: "Journal of Child Psychology and Psychiatry",
    title:
      "Individual Differences in Effects of Stressful Life Events on Childhood ADHD: Genetic, Neural, and Familial Contributions.",
    authors: "Choi SY, Yi J, Park J, Lee E, Kim BG, Kim G, Joo YY, Cha J.",
    tags: [
      "2025",
      "Psychiatric genetics",
      "Polygenic Prediction",
      "Machine Learning",
    ],
  },
  {
    id: "2025-3",
    year: 2025,
    venue: "Molecular Psychiatry",
    title:
      "Polygenic scores for psychiatric traits mediate the impact of multigenerational history for depression on offspring psychopathology.",
    authors:
      "Lee E, van Dijk MT, Kim BG, Kim G, Murphy E, Talati A, Joo YY, Weissman MM, Cha J.",
    link: "https://doi.org/10.1038/s41380-025-03221-8",
    tags: [
      "2025",
      "Imaging genetics",
      "Psychiatric genetics",
      "Polygenic Prediction",
    ],
  },
  // 2024
  {
    id: "2024-1",
    year: 2024,
    venue: "Journal of Korean Medical Science",
    title:
      "Similar but Distinct Comorbidity Patterns Between Polycystic Ovary Syndrome and Endometriosis in Korean Women: A Nationwide Cohort Study.",
    authors:
      "Jeong HG, Jeon M, Ryu KJ, Kim J, Choe BY, Joo YY*, Park H*. (*equal contribution)",
    link: "https://doi.org/10.3346/jkms.2024.39.e284",
    tags: ["2024", "Electronic Health Records"],
  },
  {
    id: "2024-2",
    year: 2024,
    venue: "Nature",
    title:
      "Genetic drivers of heterogeneity in type 2 diabetes pathophysiology.",
    authors:
      "Suzuki K, Hatzikotoulas K, Southam L, Taylor HJ, Yin X, Lorenz KM, Mandla R, Huerta-Chagoya A, Melloni GE, Kanoni S, Rayner NW et al.",
    link: "https://doi.org/10.1038/s41586-024-07019-6",
    tags: ["2024", "GWAS"],
  },
  {
    id: "2024-3",
    year: 2024,
    venue: "Journal of Psychiatric Research",
    title:
      "Multimodal integration of neuroimaging and genetic data for the diagnosis of mood disorders based on computer vision models.",
    authors: "Lee S, Cho Y, Ji Y, Jeon M, Kim A, Ham BJ, Joo YY.",
    link: "https://doi.org/10.1016/j.jpsychires.2024.02.036",
    tags: [
      "2024",
      "Imaging genetics",
      "Psychiatric genetics",
      "Polygenic Prediction",
      "Electronic Health Records",
      "Machine Learning",
    ],
  },
  {
    id: "2024-4",
    year: 2024,
    venue: "Heliyon",
    title:
      "Early life stress modulates the genetic influence on brain structure and cognitive function in children.",
    authors: "Wang HH, Moon SY, Kim H, Kim G, Ahn WY, Joo YY*, Cha J*.",
    link: "https://doi.org/10.1016/j.heliyon.2023.e23345",
    tags: [
      "2024",
      "Imaging genetics",
      "Psychiatric genetics",
      "Polygenic Prediction",
    ],
  },
  {
    id: "2024-5",
    year: 2024,
    venue: "Elife",
    title:
      "Gene–environment pathways to cognitive intelligence and psychotic-like experiences in children.",
    authors: "Park J, Lee E, Cho G, Hwang H, Kim BG, Kim G, Joo YY*, Cha J*.",
    link: "https://doi.org/10.7554/eLife.88117.4",
    tags: [
      "2024",
      "Imaging genetics",
      "Psychiatric genetics",
      "Polygenic Prediction",
    ],
  },
  {
    id: "2024-6",
    year: 2024,
    venue: "BMC Research Notes",
    title:
      "Genetic sex validation for sample tracking in next-generation sequencing clinical testing.",
    authors:
      "Hu J, Korchina V, Zouk H, Harden MV, Murdock D, Macbeth A, Harrison SM, Lennon N, Kovar C, Balasubramanian A, Zhang L, Chandanavelli G, Pasham D, Rowley R, Wiley K, Smith ME, Gordon A, Jarvik GP, Sleiman P, Kelly MA, Bland HT, Murugan M, Venner E, Boerwinkle E, eMERGE III consortium, et al.",
    link: "https://doi.org/10.1186/s13104-024-06723-w",
    tags: ["2024", "Electronic Health Records", "GWAS"],
  },
  // 2023
  {
    id: "2023-1",
    year: 2023,
    venue: "BMC Genomic Data",
    title:
      "Overestimated Polygenic Prediction due to Overlapping Subjects in Genetic Datasets.",
    authors:
      "Park DK, Chen M, Kim S, Joo YY, Loving RK, Kim HS, Cha J, Yoo S, Kim JH.",
    tags: ["2023", "Polygenic Prediction"],
  },
  {
    id: "2023-3",
    year: 2023,
    venue: "PLoS One",
    title:
      "Multi-ancestry genome- and phenome-wide association studies of diverticular disease in electronic health records with natural language processing enriched phenotyping algorithm.",
    authors:
      "Joo YY, Pacheco JA, Thompson WK, Rasmussen-Torvik LJ, Rasmussen LV, Lin FTJ, Andrade M, Borthwick KM, Bottinger E, Cagan A, Carrell DS, Denny JC, Ellis SB, Gottesman O, Linneman JG, Pathak J, Peissig PL, Shang N, Tromp G, Veerappan A, Smith ME, Chisholm RL, Gawron AJ, Hayes MG, Kho AN.",
    link: "https://doi.org/10.1371/journal.pone.0283553",
    tags: ["2023", "Electronic Health Records", "Machine Learning", "GWAS"],
  },
  {
    id: "2023-4",
    year: 2023,
    venue: "JAMA Network Open",
    title:
      "Trends in sadness and suicidality among Korean adolescents in 2005-2021: a nationwide representative study in 1.1 million individuals.",
    authors:
      "Park S, Yon H, Lee SW, Koyanagi A, Jacob L, Smith L, Cho W, Min C, Lee J, Lee H, Kwon R, Fond G, Boyer L, Rhee SY, Joo YY, Shin JI, Woo HG, Yon DK.",
    link: "https://doi.org/10.1001/jamanetworkopen.2023.14838",
    tags: ["2023", "Psychiatric genetics", "Electronic Health Records"],
  },
  {
    id: "2023-5",
    year: 2023,
    venue: "Journal of Child Psychology and Psychiatry",
    title:
      "Maternal age at birth and child attention‐deficit hyperactivity disorder: causal association or familial confounding?",
    authors: "Baker BH, Joo YY, Park J, Cha J, Baccarelli AA, Posner J.",
    tags: ["2023", "Psychiatric genetics", "Polygenic Prediction"],
  },
  // 2022
  {
    id: "2022-1",
    year: 2022,
    venue: "Frontiers in Endocrinology",
    title:
      "Misperception of body weight and associated socioeconomic and health-related factors among Korean female adults: A nationwide population-based study.",
    authors: "Joo YY, Kim J, Lee K, Cho GJ, Yi KW.",
    tags: ["2022", "Electronic Health Records", "Machine Learning"],
  },
  {
    id: "2022-3",
    year: 2022,
    venue: "Genes",
    title:
      "Cognitive Capacity Genome-Wide Polygenic Scores Identify Individuals with Slower Cognitive Decline in Aging.",
    authors: "Joo YY, Cha J, Freese J, Hayes MG.",
    tags: ["2022", "Psychiatric genetics", "Polygenic Prediction"],
  },
  {
    id: "2022-4",
    year: 2022,
    venue: "JAMA Network Open",
    title:
      "Association of genome-wide polygenic scores for multiple psychiatric and common traits in preadolescent youths at risk of suicide.",
    authors:
      "Joo YY, Moon SY, Wang HH, Kim H, Lee EJ, Kim JH, Posner J, Ahn WY, Choi I, Kim JW, Cha J.",
    link: "https://doi.org/10.1001/jamanetworkopen.2021.48585",
    tags: [
      "2022",
      "Psychiatric genetics",
      "Polygenic Prediction",
      "Machine Learning",
    ],
  },
  {
    id: "2022-7",
    year: 2022,
    venue: "Human Brain Mapping",
    title:
      "The sexual brain, genes, and cognition: A machine‐predicted brain sex score explains individual differences in cognitive intelligence and genetic influence in young children.",
    authors: "Kim K, Joo YY, Ahn G, Wang HH, Moon SY, Kim H, Ahn WY, Cha J.",
    tags: [
      "2022",
      "Imaging genetics",
      "Psychiatric genetics",
      "Polygenic Prediction",
    ],
  },
  // 2021 and earlier
  {
    id: "2021-4",
    year: "2021",
    venue: "Journal of Clinical Endocrinology & Metabolism",
    title:
      "A polygenic and phenotypic risk prediction for Polycystic Ovary Syndrome evaluated by Phenome-wide association studies.",
    authors:
      "Joo YY, Actkins K, Pacheco JA, Basile AO, Carroll R, Crosslin DR, Day F, Denny JC, Velez Edwards DR, Hakonarson H, Harley JB, Hebbring SJ, Ho K, Jarvik GP, Jones M, Karaderi T, Mentch FD, Meun C, Namjou B, Pendergrass S, Ritchie MD, Stanaway IB, Urbanek M, Walunas TL, Smith M, Chisholm RL, Kho AN, Davis L, Hayes MG, International PCOS Consortium.",
    tags: [
      "2021",
      "Polygenic Prediction",
      "Electronic Health Records",
      "Machine Learning",
      "GWAS",
    ],
  },
];

const YEAR_LABELS: (number | "2021")[] = [2025, 2024, 2023, 2022, "2021"];

const ALL_FILTER_TAGS = Array.from(
  new Set([...YEAR_LABELS.map(String), ...KEYWORD_TAGS]),
).sort((a, b) => {
  if (/^\d{4}$/.test(a) && /^\d{4}$/.test(b)) return Number(b) - Number(a);
  if (/^\d{4}$/.test(a)) return 1;
  if (/^\d{4}$/.test(b)) return -1;
  return a.localeCompare(b);
});

function TagChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-4 py-2 rounded-lg text-xs font-semibold border transition-all",
        selected
          ? "bg-[#559DEA] text-white border-[#559DEA] shadow-[0_2px_8px_rgba(85,157,234,0.35),inset_0_1px_0_rgba(255,255,255,0.35)]"
          : "bg-white/25 backdrop-blur-sm text-slate-700 border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.04)] hover:bg-white/35 hover:border-[#559DEA]/50",
      ].join(" ")}
      type="button"
    >
      {label === "2021" ? "~2021" : label}
    </button>
  );
}

function PubCard({ pub }: { pub: Publication }) {
  const nonYearTags = pub.tags.filter((t) => !/^\d{4}$/.test(t));
  return (
    <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] transition-shadow">
      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold text-[#559DEA] uppercase tracking-wide">
            {pub.venue}
          </p>
          <span className="text-xs font-semibold text-slate-400">
            {pub.year === "2021" ? "~2021" : pub.year}
          </span>
        </div>

        <div className="mt-3 space-y-1">
          {pub.link ? (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[15px] leading-relaxed font-semibold text-slate-900 hover:text-[#559DEA] transition-colors"
            >
              {pub.title}
            </a>
          ) : (
            <p className="text-[15px] leading-relaxed font-semibold text-slate-900">
              {pub.title}
            </p>
          )}
          <p className="text-[14px] leading-relaxed text-slate-600">
            {pub.authors}
          </p>
        </div>

        {nonYearTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {nonYearTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#559DEA]/15 backdrop-blur-sm text-[#1f5aa6] border border-[#559DEA]/40 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PublicationPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filteredPublications = useMemo(() => {
    let list = PUBLICATIONS;

    if (selectedTags.length > 0) {
      list = list.filter((p) => selectedTags.every((t) => p.tags.includes(t)));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter((p) => {
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchAuthors = p.authors.toLowerCase().includes(q);
        const matchVenue = p.venue.toLowerCase().includes(q);
        const matchTag = p.tags.some((t) => t.toLowerCase().includes(q));
        return matchTitle || matchAuthors || matchVenue || matchTag;
      });
    }

    return list;
  }, [selectedTags, searchQuery]);

  const byYear = useMemo(() => {
    const map: Record<string, Publication[]> = {};
    YEAR_LABELS.forEach((y) => {
      map[String(y)] = filteredPublications.filter((pub) => pub.year === y);
    });
    return map;
  }, [filteredPublications]);

  const totalVisible = filteredPublications.length;

  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
    }
    const el = mainRef.current;
    if (el) {
      el.scrollTop = 0;
      requestAnimationFrame(() => {
        el.scrollTop = 0;
      });
    }
  }, []);

  return (
    <main
      ref={mainRef}
      className="fixed inset-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-transparent text-slate-800"
    >
      <Navigation />

      {/* 고정 배경 - Publication용 */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-[90vh] max-h-[850px]">
          <Image
            src="/icons/Gemini_Generated_Image_w8nxy4w8nxy4w8nx.png"
            alt=""
            fill
            className="object-contain object-center opacity-90"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Section 1: Hero - 전체 화면, 스크롤 내려야 내용 보임 */}
      <section className="snap-start relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-5xl lg:text-7xl font-black tracking-tight text-black">
            Publications
          </h1>
        </div>
      </section>

      {/* Section 2: 콘텐츠 - 스크롤 내려야 보임 */}
      <section className="snap-start relative z-10 pt-16 md:pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Compact header */}
          <header className="mb-10">
            <div className="flex items-center gap-4 pt-20 mb-6">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                Publications
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#559DEA]/30 to-transparent" />
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] px-4 py-2">
                  <p className="text-xs font-semibold text-slate-500">
                    Visible
                  </p>
                  <p className="text-sm font-bold text-slate-900 leading-none">
                    {totalVisible}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] px-4 py-2 hidden sm:block">
                  <p className="text-xs font-semibold text-slate-500">
                    Latest venue
                  </p>
                  <p className="text-sm font-bold text-slate-900 leading-none">
                    Nature Communications
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-4">
                {/* Search */}
                <div className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.06)] p-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Search
                  </p>
                  <div className="mt-3 relative">
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Title, author, venue, keyword..."
                      className="w-full rounded-lg bg-white/30 backdrop-blur-sm border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.04)] px-4 py-3 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#559DEA]/40 focus:border-[#559DEA]/40"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-800"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {/* Filters */}
                <div className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.06)] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Filters
                    </p>
                    {(selectedTags.length > 0 || searchQuery.trim()) && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedTags([]);
                          setSearchQuery("");
                        }}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-900"
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {ALL_FILTER_TAGS.map((tag) => (
                      <TagChip
                        key={tag}
                        label={tag}
                        selected={selectedTags.includes(tag)}
                        onClick={() => toggleTag(tag)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <section className="lg:col-span-8">
              {filteredPublications.length === 0 ? (
                <div className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.06)] p-10 text-center">
                  <p className="text-slate-700 font-semibold">
                    No publications match your search or filters.
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    Try removing a filter or changing your query.
                  </p>
                </div>
              ) : (
                <div className="space-y-10">
                  {YEAR_LABELS.map((year) => {
                    const pubs = byYear[String(year)];
                    if (!pubs || pubs.length === 0) return null;

                    return (
                      <div key={String(year)} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-bold text-slate-900">
                            {year === "2021" ? "~2021" : year}
                          </h2>
                          <span className="text-xs font-semibold text-slate-500 bg-white/40 backdrop-blur-sm border border-white/60 shadow-[0_2px_6px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] rounded-lg px-2 py-0.5">
                            {pubs.length}
                          </span>
                          <div className="h-px flex-1 bg-slate-200" />
                        </div>

                        <div className="grid gap-4">
                          {pubs.map((pub) => (
                            <PubCard key={pub.id} pub={pub} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
