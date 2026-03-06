"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/common/Navigation";
import { Briefcase, MapPin } from "lucide-react";

/** 교수님 사진 URL. 설정하면 카드에 표시됩니다. (예: "/about/captain.jpg" 또는 외부 URL) */
const CAPTAIN_IMAGE: string | undefined = undefined;

export default function AboutPage() {
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

  return (
    <main
      ref={mainRef}
      className="fixed inset-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-transparent text-slate-800"
    >
      <Navigation />

      {/* 고정 배경 - 아래로 깔려있음, 스크롤해도 보임 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/icons/Gemini_Generated_Image_9veay79veay79vea.png"
          alt=""
          fill
          className="object-contain object-bottom opacity-90"
          priority
          sizes="100vw"
        />
      </div>

      {/* Section 1: Hero - 배경 이미지 */}
      <section className="snap-start relative z-10 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-7xl md:text-5xl lg:text-7xl font-black tracking-tight text-black">
          Yoonjung Yoonie Joo
        </h1>
      </section>

      {/* Section 2: 프로필 + Education - 흰 배경, 하단 그라데이션으로 자연스럽게 전환 */}
      <section
        className="snap-start relative z-10 min-h-screen pt-16 md:pt-20 pb-16 md:pb-20"
        style={{
          background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 75%, rgba(255,255,255,0.95) 85%, rgba(255,255,255,0.7) 92%, rgba(255,255,255,0.3) 97%, transparent 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* 프로필 카드 - 테두리 없음 */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16 mt-16 md:mt-24">
            <div className="shrink-0">
              <div className="w-56 h-72 md:w-64 md:h-80 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
                {CAPTAIN_IMAGE ? (
                  <Image src={CAPTAIN_IMAGE} alt="Yoonjung Yoonie Joo" width={256} height={320} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-6xl font-bold text-[#559DEA]/20">Y</span>
                )}
              </div>
            </div>
            <div className="flex-1 min-w-0 h-72 md:h-80 flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold pt-8 text-slate-900">Yoonjung Yoonie Joo</p>
                <p className="mt-2 text-lg md:whitespace-nowrap">
                  <span className="font-semibold text-[#559DEA]">Assistant Professor</span>
                  <span className="text-slate-600"> · Samsung Medical Center · Sungkyunkwan University</span>
                </p>
                <p className="mt-6 text-base text-slate-600 leading-relaxed">
                  Big data analytics & precision medicine — integrating genomic and clinical data for translational impact.
                </p>
                <div className="mt-6 flex flex-col gap-1 text-base text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#559DEA] shrink-0" />
                    Samsung Medical Center (SMC), Seoul, South Korea
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-[#559DEA] shrink-0" />
                    <span><span className="font-medium text-slate-700">Dept. of Digital Health</span> · Samsung Genome Institute (SGI)</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4 pb-8">
                <a href="https://scholar.google.com/citations?user=r6OBQqgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-800 transition-colors" aria-label="Google Scholar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/Google_Scholar_logo.svg" alt="" className="h-6 w-auto object-contain" />
                </a>
                <a href="https://orcid.org/0000-0001-9506-8742" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-800 transition-colors" aria-label="ORCID">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/ORCID_logo.svg" alt="" className="h-4 w-auto object-contain" />
                </a>
                <a href="https://www.scopus.com/authid/detail.uri?authorId=57204126093" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-800 transition-colors" aria-label="Scopus">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/Scopus_logo.svg" alt="" className="h-4 w-auto object-contain" />
                </a>
                <a href="https://www.semanticscholar.org/author/Yoonjung-Yoonie-Joo/3466689" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-800 transition-colors" aria-label="Semantic Scholar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/Semantic_Scholar_logo.svg" alt="" className="h-4 w-auto object-contain" />
                </a>
              </div>
            </div>
          </div>

        {/* Education - Section 2 흰 배경 안에 포함 */}
        <section id="education" className="scroll-mt-28 mb-16">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Education</h2>
          <div className="rounded-2xl bg-slate-50/90 border border-slate-200/80 divide-y divide-slate-200/80 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <p className="font-bold text-slate-900 text-base">Northwestern University, Chicago, USA</p>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide shrink-0">2014 – 2020</span>
              </div>
              <p className="mt-2 font-semibold text-slate-800">Ph.D. in Health and Biomedical Informatics</p>
              <p className="text-sm text-slate-600">Driskill Program in Life Sciences, Feinberg School of Medicine</p>
              <p className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-wide">Advisors / Thesis Committee</p>
              <ul className="mt-1 space-y-1 text-sm text-slate-700">
                <li>M Geoffrey Hayes, Ph.D · Northwestern University</li>
                <li>Abel N Kho, MD · Northwestern University</li>
                <li>Denise M Scholtens, Ph.D · Northwestern University</li>
                <li>Jeremy Freese, Ph.D · Stanford University</li>
              </ul>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <p className="font-bold text-slate-900 text-base">Northwestern University, Evanston, USA</p>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide shrink-0">2011 – 2013</span>
              </div>
              <p className="mt-2 font-semibold text-slate-800">M.S. in Biotechnology</p>
              <p className="text-sm text-slate-600">McCormick School of Engineering · Advisor: Amy S Pallar, MD</p>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <p className="font-bold text-slate-900 text-base">Korea University, Seoul, South Korea</p>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide shrink-0">2006 – 2011</span>
              </div>
              <p className="mt-2 font-semibold text-slate-800">B.S. in Life Sciences (major) & Business Administration (minor)</p>
            </div>
          </div>
        </section>
        </div>
      </section>

      {/* Section 3: Experience, Teaching, Service - 배경 이미지 */}
      <section className="snap-start relative z-10 pt-16 md:pt-20 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
        {/* Professional Experience */}
        <section id="experience" className="scroll-mt-28 mb-16">
          <h2 className="text-xl font-bold text-slate-800 mt-28 mb-6">Professional Experience</h2>
          <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.06)] divide-y divide-white/40 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <p className="font-bold text-slate-900 text-base">Samsung Medical Center, Sungkyunkwan University</p>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide shrink-0">Sep. 2023 – Present</span>
              </div>
              <p className="mt-2 font-semibold text-slate-800">Assistant Professor</p>
              <p className="text-sm text-slate-600 mt-1">Department of Digital Health, SAIHST · Samsung Genome Institute (SGI) · Research Institute for Future Medicine, SMC</p>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <p className="font-bold text-slate-900 text-base">Korea University, Institute of Data Science</p>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide shrink-0">Jan. 2021 – Aug. 2023</span>
              </div>
              <p className="mt-2 font-semibold text-slate-800">Research Professor</p>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <p className="font-bold text-slate-900 text-base">Seoul National University, Connectome Lab</p>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide shrink-0">Apr. 2020 – Dec. 2020</span>
              </div>
              <p className="mt-2 font-semibold text-slate-800">Postdoctoral Researcher</p>
              <p className="text-sm text-slate-600">Advisor: Jiook Cha, Ph.D</p>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <p className="font-bold text-slate-900 text-base">Seoul National University, AI Institute</p>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide shrink-0">Nov. 2021 – Aug. 2023</span>
              </div>
              <p className="mt-2 font-semibold text-slate-800">Postdoctoral Researcher</p>
            </div>
          </div>
        </section>

        {/* Teaching */}
        <section id="teaching" className="scroll-mt-28 mb-16">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Teaching</h2>
          <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.06)] divide-y divide-white/40 overflow-hidden">
            {[
              { term: "Spring 2023", courses: "Introduction to Data Science (40 grad students, IDS507) · Biomedical Data Science Informatics (30 grad students, MGR501)" },
              { term: "Fall 2022", courses: "AI Seminar Series for Future Industries (370 grad students, IDS506) · Biomedical Data Science Informatics 2 (30 grad students, MGR500) · Introduction to Artificial Intelligence (32 grad students, IDS503)" },
              { term: "Spring 2022", courses: "Introduction to Data Science (120 grad students, IDS507) · Introduction to Artificial Intelligence (41 grad students, IDS503) · Biomedical Data Science Informatics (30 grad students, BMS553)" },
              { term: "Fall 2021", courses: "Introduction to Artificial Intelligence (59 grad students, IDS503) · AI Seminar Series for Future Industries (461 grad students, IDS506)" },
              { term: "Spring 2021", courses: "Data Science (32 grad students, IDS501) · Data Science and Artificial Intelligence (undergrad) courses" },
            ].map(({ term, courses }) => (
              <div key={term} className="p-6 md:p-8">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{term}</p>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{courses}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial & Service */}
        <section id="service" className="scroll-mt-28">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Editorial & Service</h2>
          <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.06)] p-6 md:p-8 border-l-4 border-[#559DEA]">
            <ul className="divide-y divide-white/40 text-sm text-slate-700">
              <li className="flex items-baseline gap-2 py-6 first:pt-0 last:pb-0">
                <span className="font-bold text-slate-900 shrink-0">Editorial Board Member</span>
                <span>Scientific Reports (2024 –)</span>
              </li>
              <li className="flex items-baseline gap-2 py-6 first:pt-0 last:pb-0">
                <span className="font-bold text-slate-900 shrink-0">Review Editor</span>
                <span>Frontiers in Developmental Psychology (2023 –)</span>
              </li>
            </ul>
          </div>
        </section>
        </div>
      </section>
    </main>
  );
}
