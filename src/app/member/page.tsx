"use client";

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/common/Navigation";
import Image from "next/image";
import { useTranslation } from "@/contexts/TranslationContext";

/** sky 톤 통일 */
const STATUS_TAG_STYLE: Record<string, { bg: string; text: string; border: string }> = {
  "M.S.": { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200" },
  "Ph.D.": { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200" },
  "B.S./M.S.": { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200" },
  "M.S./Ph.D.": { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200" },
  "Undergrad Intern": { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200" },
  "M.S. Intern": { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200" },
  "Research Intern": { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200" },
};

function getTagStyle(tag: string) {
  return STATUS_TAG_STYLE[tag] ?? { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200" };
}

interface Member {
  name: string;
  position: string;
  /** M.S., Ph.D., B.S./M.S., M.S./Ph.D., Undergrad Intern, M.S. Intern, Research Intern */
  statusTags: string[];
  research: string[];
  period: string;
  image?: string;
  bio?: string;
  details?: string;
  socials?: {
    email?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

interface PermanentMember {
  name: string;
  position: string;
  currentPosition: string;
}

const Icons = {
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Link: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  ChevronDown: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
};

const currentMembers: Member[] = [
  {
    name: "Hyunsong Koh",
    position: "Full-time ph.d student",
    statusTags: ["Ph.D."],
    research: ["Polygenic risk score", "GWAS", "Disease risk prediction"],
    period: "Jan. 2024 ~",
    bio: "Focusing on genetic risk prediction and translational applications of GWAS.",
    details:
      "Developing and validating polygenic risk scores (PRS) for complex diseases. Interested in improving PRS portability across diverse populations and integrating functional annotations.",
    socials: {
      email: "mailto:hyunsong.koh@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com/in",
    },
  },
  {
    name: "Ji Hyeok Lee",
    position: "full-time m.s/ph.d student",
    statusTags: ["M.S./Ph.D."],
    research: [
      "Gene-environment interactions in disease etiology",
      "AI models for disease diagnosis",
    ],
    period: "Nov. 2024 ~",
    bio: "Bridging gene-environment interplay and AI-driven clinical prediction.",
    details:
      "Investigating how genetic susceptibility and environmental factors jointly influence disease. Building deep learning pipelines for diagnosis and risk stratification using large-scale biobank data.",
    socials: {
      email: "mailto:jihyeok.lee@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com/in",
    },
  },
  {
    name: "Chaeyeon Kim",
    position: "full-time m.s student",
    statusTags: ["M.S."],
    research: [
      "Multimodal Medical Data Integration",
      "AI-driven Precision Medicine",
      "Genomic Data Analysis",
    ],
    period: "Feb. 2025 ~",
    bio: "Integrating multi-omics and clinical data for precision medicine.",
    details:
      "Working on multimodal frameworks that combine genomic, imaging, and electronic health data. Aiming to identify biomarkers and build predictive models for early disease detection and treatment selection.",
    socials: {
      email: "mailto:chaeyeon.kim@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com/in",
    },
  },
  {
    name: "Jinyun Kim",
    position: "full-time m.s student",
    statusTags: ["M.S."],
    research: [
      "AI-driven Multiomics Analysis",
      "Causal Inference Modeling",
      "Time-series Forecasting",
    ],
    period: "Feb. 2025 ~",
    bio: "Exploring causal structure and dynamics in multi-omics and health data.",
    details:
      "Developing causal inference and time-series methods for longitudinal omics and EHR data. Focus on distinguishing causation from correlation and forecasting disease trajectories.",
    socials: {
      email: "mailto:jinyun.kim@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com/in",
    },
  },
  {
    name: "Chaeyoon Shin",
    position: "integrated b.s/M.s student",
    statusTags: ["B.S./M.S."],
    research: [
      "Sociogenomics",
      "Precision psychiatry",
      "Multimodal health data",
    ],
    period: "Feb. 2025 ~",
    bio: "Studying social determinants, genetics, and mental health outcomes.",
    details:
      "Researching how social and environmental factors interact with genetic risk in psychiatric disorders. Using multimodal data to advance precision psychiatry and population stratification.",
    socials: {
      email: "mailto:chaeyoon.shin@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com/in",
    },
  },
  {
    name: "Eunsoo Cho",
    position: "full-time m.s. student",
    statusTags: ["M.S."],
    research: [
      "Multimodal Architecture Design",
      "Model Optimization",
      "AI-based Drug Design",
    ],
    period: "Sep. 2025 ~",
    bio: "Designing efficient AI architectures for drug discovery and molecular modeling.",
    details:
      "Focusing on lightweight and scalable models for protein-ligand interaction and drug response prediction. Interested in model compression and deployment for real-world applications.",
    socials: {
      email: "mailto:eunsoo.cho@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com/in",
    },
  },
  {
    name: "Suhyun Kim",
    position: "full-time m.s student",
    statusTags: ["M.S."],
    research: [
      "Multimodal Data Fusion",
      "Geometric Deep Learning",
      "Pipeline Architecture Design",
    ],
    period: "Oct. 2025 ~",
    bio: "Building geometric and multimodal deep learning pipelines for biomedical data.",
    details:
      "Developing graph neural networks and fusion methods for protein structure, molecular, and clinical data. Also interested in MLOps and reproducible research pipelines.",
    socials: {
      email: "mailto:suhyun.kim@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com/in",
    },
  },
  {
    name: "Ildong Lee",
    position: "part-time ph.d student",
    statusTags: ["Ph.D."],
    research: [
      "Patient Generated Health Data (PGHD)",
      "AI-driven Multimodal Digital Phenotyping",
    ],
    period: "Dec. 2025 ~",
    bio: "Using real-world and wearable data for digital phenotyping and remote monitoring.",
    details:
      "Focusing on patient-generated and wearable sensor data to characterize disease phenotypes and progression outside the clinic. Building AI models for continuous health monitoring and early warning.",
  },
  {
    name: "Yurim Kang",
    position: "Research intern",
    statusTags: ["Research Intern"],
    research: [
      "Genomic Risk Prediction",
      "Multimodal Data Integration",
      "Longitudinal Health Data Analysis",
    ],
    period: "Feb. 2026 ~",
    bio: "Interested in genomic risk scores and longitudinal health analytics.",
    details:
      "Contributing to projects on genomic risk prediction and multimodal integration of omics with longitudinal health records. Exploring methods for temporal and cross-modal modeling.",
  },
  {
    name: "Sangmin Park",
    position: "Research intern",
    statusTags: ["Research Intern"],
    research: [
      "Salutogenesis",
      "AI-driven Health Analytics",
      "Multimodal data Integration",
    ],
    period: "Feb. 2026 ~",
    bio: "Focusing on health promotion, salutogenesis, and data-driven wellness analytics.",
    details:
      "Working on AI-driven health analytics and multimodal data integration with an emphasis on factors that promote health and well-being, in addition to disease prediction.",
  },
  {
    name: "Seungyob Yi",
    position: "Research intern",
    statusTags: ["Research Intern"],
    research: [
      "Phenotype - patient stratification",
      "Graph ML",
      "Drug response prediction",
    ],
    period: "Feb. 2026 ~",
    bio: "Interested in patient stratification, graph machine learning, and drug response.",
    details:
      "Contributing to phenotype definition, patient stratification, and graph-based models for drug response prediction. Exploring geometric and relational structure in clinical and molecular data.",
  },
];

const permanentMembers: PermanentMember[] = [
  { name: "Jina Kim", position: "Research intern (2021-2022)", currentPosition: "Data Analyst, LG Energy Solution" },
  { name: "Kiwon Lee", position: "Research intern (2021-2022)", currentPosition: "LG" },
  { name: "Minhyek Jeon", position: "Research intern (2022-2023)", currentPosition: "MS student, Computational Biology, Carnegie Mellon University School of Computer Science, USA" },
  { name: "Jang Yeon Park", position: "M.S. student (2024-2026)", currentPosition: "Clinical Data Manager @AITRICS" },
];

export default function MemberPage() {
  const { t } = useTranslation();
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
    }
    const el = mainRef.current;
    if (el) {
      el.scrollTop = 0;
      requestAnimationFrame(() => { el.scrollTop = 0; });
    }
  }, []);

  const toggleMember = (name: string) => {
    if (selectedName === name) {
      setSelectedName(null);
    } else {
      setSelectedName(name);
    }
  };

  return (
    <main
      ref={mainRef}
      className="fixed inset-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-transparent text-slate-800"
    >
      <Navigation />

      {/* 고정 배경 */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-[75vh] max-h-[650px]">
          <Image
            src="/icons/Gemini_Generated_Image_coqfepcoqfepcoqf.png"
            alt=""
            fill
            className="object-contain object-center opacity-90"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Section 1: Hero */}
      <section className="snap-start relative z-10 min-h-screen flex flex-col items-start justify-center">
        <div className="max-w-6xl w-full mx-auto px-6">
          <h1 className="text-7xl ml-28 md:text-5xl lg:text-7xl font-black tracking-tight text-black">
            Our Team
          </h1>
        </div>
      </section>

      {/* Section 2: 스크롤 내리면 배경 흰색 */}
      <section className="snap-start relative z-10 py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 mt-12">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Current Members</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#559DEA]/30 to-transparent"></div>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-5xl text-start">
              GENNIE Lab brings together researchers passionate about integrating genomics, neuroimaging, and AI to advance precision medicine. Our members collaborate on polygenic risk scores, psychiatric genetics, imaging genetics, and salutogenesis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentMembers.map((member, idx) => {
                const isFlipped = selectedName === member.name;
                return (
                <div key={member.name} className="group/card">
                <button
                  type="button"
                  onClick={() => toggleMember(member.name)}
                  className="relative w-full aspect-[3/4] overflow-hidden transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-500 ease-in-out"
                    style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "none" }}
                  >
                    {/* Front - 불투명 */}
                    <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
                      <div className="h-full bg-white border border-sky-200/60 shadow-[0_4px_20px_rgba(85,157,234,0.08)] overflow-hidden rounded-xl transition-shadow duration-300 group-hover/card:shadow-[0_8px_32px_rgba(85,157,234,0.12)]">
                        <div className="relative h-[85%] min-h-[180px] bg-sky-50 flex items-center justify-center overflow-hidden">
                          {member.image ? (
                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                          ) : (
                            <span className="text-6xl font-bold text-[#559DEA]/40">{member.name.charAt(0)}</span>
                          )}
                        </div>
                        <div className="px-3 py-1.5 bg-white border-t border-sky-200/40 flex flex-col justify-center text-left shrink-0">
                          <div className="flex items-center justify-between gap-2 ">
                            <div className="min-w-0">
                              <h3 className="text-lg font-bold text-slate-800 tracking-tight truncate">{member.name}</h3>
                              <p className="text-xs text-slate-600 mt-0.5 truncate whitespace-nowrap">{member.position}</p>
                            </div>
                            {(member.socials?.email || member.socials?.github || member.socials?.linkedin) && (
                              <div className="flex gap-1 shrink-0">
                                {member.socials?.email && (
                                  <a href={member.socials.email.startsWith("mailto:") ? member.socials.email : `mailto:${member.socials.email}`} className="p-1 bg-sky-50 rounded hover:bg-[#559DEA] hover:text-white hover:scale-110 active:scale-95 text-slate-600 transition-all duration-200" onClick={(e) => e.stopPropagation()} aria-label="Email">
                                    <Icons.Mail />
                                  </a>
                                )}
                                {member.socials?.github && (
                                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-1 bg-sky-50 rounded hover:bg-slate-800 hover:text-white hover:scale-110 active:scale-95 text-slate-600 transition-all duration-200" onClick={(e) => e.stopPropagation()} aria-label="GitHub">
                                    <Icons.Github />
                                  </a>
                                )}
                                {member.socials?.linkedin && (
                                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-1 bg-sky-50 rounded hover:bg-[#0A66C2] hover:text-white hover:scale-110 active:scale-95 text-slate-600 transition-all duration-200" onClick={(e) => e.stopPropagation()} aria-label="LinkedIn">
                                    <Icons.LinkedIn />
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Back - 어두운 배경 + 흰 글자 */}
                    <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                      <div className="h-full overflow-hidden rounded-xl relative bg-slate-500">
                        {/* glassy 오버레이 + 콘텐츠 */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-y-auto overflow-x-hidden rounded-xl p-4 pt-6 flex flex-col gap-3 items-stretch text-left min-h-0">
                        <p className="absolute top-4 right-4 text-xs font-medium text-white z-10">{member.period}</p>

                        {member.bio && (
                          <div className="w-full min-w-0">
                            <p className="text-sm text-white font-bold mt-4 leading-relaxed break-words">
                              {t(`member.bio.${idx}`)}
                            </p>
                          </div>
                        )}

                        {member.details && (
                          <div className="w-full min-w-0">
                            <p className="text-xs font-bold text-sky-300 uppercase mt-3 tracking-wider mb-2">Focus</p>
                            <p className="text-sm text-slate-200 mt-2 leading-relaxed break-words">
                              {t(`member.details.${idx}`)}
                            </p>
                          </div>
                        )}

                        <div className="w-full min-w-0 mt-auto pt-3 pb-4">
                          <p className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-2">Research Interests</p>
                          <div className="flex flex-wrap gap-1.5 justify-start">
                            {member.research.map((area, i) => (
                              <span key={i} className="inline-block px-2.5 py-1 text-xs font-medium text-white bg-white/10 border border-white/30 rounded">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </button>
                </div>
                );
              })}
            </div>

        {/* Permanent Members Section */}
        <section className="pt-16 md:pt-20 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Permanent Members</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#559DEA]/30 to-transparent"></div>
            </div>

            <div className="overflow-hidden border border-sky-200/60 bg-white/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(85,157,234,0.06)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/30 backdrop-blur-sm border-b border-white/40 text-slate-600 text-sm uppercase tracking-wider">
                      <th className="py-4 px-6 font-semibold">Name</th>
                      <th className="py-4 px-6 font-semibold">Position</th>
                      <th className="py-4 px-6 font-semibold">Current Position</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sky-200/40">
                    {permanentMembers.map((member, index) => (
                      <tr key={index} className="hover:bg-sky-50/50 transition-colors duration-200">
                        <td className="py-4 px-6 font-medium text-slate-800 whitespace-nowrap">{member.name}</td>
                        <td className="py-4 px-6 text-slate-600 text-sm whitespace-nowrap">{member.position}</td>
                        <td className="py-4 px-6 text-sky-700 font-medium text-sm line-clamp-2">{member.currentPosition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500 italic">
              {t("member.footerNote")}
            </p>
          </div>
        </section>
      </div>
      </section>
    </main>
  );
}