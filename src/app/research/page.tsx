"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/common/Navigation";
import { Brain, Dna, Microscope, HeartPulse, FileText, X } from "lucide-react";
import Image from "next/image";

const RESEARCH_INTRO = "We decode human complexity through the integration of Genetics, Neuroimaging, and AI.";

const RESEARCH_AREAS = [
  {
    id: "precision-genomic",
    title: "Precision Genomic Medicine",
    icon: Dna,
    subtitle: "Genome-powered Precision Medicine",
    desc: "Integrating large-scale genomic and clinical data (including EHR-linked biobanks) to understand complex disease biology and improve prediction.",
    longDesc: "Applying AI and machine learning algorithms to identify genetic risk factors for various diseases. We focus on developing more inclusive and diverse training models to mitigate predictive biases and expand AI/ML in clinical practice.",
    papers: [
      "Saunders GR, et al. Nature. 2022",
      "Mahajan A, et al. Nature Genetics. 2022",
      "Joo YY, et al. Genes. 2022",
      "Joo YY, et al. JCEM. 2020",
    ],
    gradient: "from-[#559DEA]/30 via-[#559DEA]/10 to-transparent",
  },
  {
    id: "psychiatric-genetics",
    title: "Psychiatric Genetics",
    icon: Brain,
    subtitle: "Genetics of cognition & mental health",
    desc: "Studying the genetic basis of cognitive, psychological, and psychiatric outcomes via multi-modal biomedical data integration.",
    longDesc: "Focusing on various outcomes such as cognitive ability, suicidal behaviors, and ADHD. Our goal is to develop better diagnostic tools and personalized treatments for psychiatric diseases.",
    papers: ["Joo YY, et al. JAMA Network Open. 2022", "Park J, et al. MedRxiv. 2022"],
    gradient: "from-indigo-500/30 via-indigo-500/10 to-transparent",
  },
  {
    id: "imaging-genetics",
    title: "Imaging Genetics",
    icon: Microscope,
    subtitle: "Neuroimaging × Genomics",
    desc: "Linking brain imaging phenotypes with genetic variation to build interpretable and predictive models of mental health outcomes.",
    longDesc: "Analyzing multi-modal data (MRI, Genotype, K-SADS) to classify individuals' state of mental health. We aim to unlock the genetic secrets of brain structure and function.",
    papers: ["Wang HH, et al. MedRxiv. 2021", "Kim K, et al. Human Brain Mapping. 2022"],
    gradient: "from-violet-500/30 via-violet-500/10 to-transparent",
  },
  {
    id: "salutogenesis",
    title: "Salutogenesis",
    icon: HeartPulse,
    subtitle: "Health restoration processes",
    desc: "Developing AI/ML tools that combine genetic, clinical, and environmental signals to support individualized health trajectories.",
    longDesc: "A multi-scale computational approach to explain how physiological networks dynamically change over time during the process of human health restoration.",
    papers: ["NIH Bridge2AI Program (OT2), USA"],
    gradient: "from-teal-500/30 via-teal-500/10 to-transparent",
  },
];

export default function ResearchPage() {
  const [selectedArea, setSelectedArea] = useState<typeof RESEARCH_AREAS[0] | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeOverlay = () => {
    setIsClosing(true);
  };

  const handleExitComplete = () => {
    setSelectedArea(null);
    setIsClosing(false);
  };

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
      className="fixed inset-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-[#FEFEFE] text-slate-800"
    >
      <Navigation />

      {/* 고정 배경 - Research Mission용 */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-[75vh] max-h-[650px]">
          <Image
            src="/icons/Gemini_Generated_Image_tvnpsstvnpsstvnp.png"
            alt=""
            fill
            className="object-contain opacity-90"
            style={{ objectPosition: "80% center" }}
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Section 1: Hero - 전체 화면, 스크롤 내려야 그리드 보임 */}
      <section className="snap-start relative z-10 min-h-screen flex flex-col items-start justify-center">
        <div className="max-w-6xl w-full mx-auto px-6">
          <h1 className="text-7xl md:text-5xl ml-16 lg:text-7xl font-black tracking-tight text-black">
            Research Mission
          </h1>
          <p className="text-lg md:text-xl  text-slate-600 max-w-2xl leading-relaxed mt-6 ml-16 md:ml-16">
            {RESEARCH_INTRO}
          </p>
        </div>
      </section>

      {/* Section 2: 그리드 4개 - 스크롤 내려야 보임 */}
      <section className="snap-start relative z-10 pt-40 md:pt-40 pb-24 bg-[#FEFEFE] overflow-visible">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Research Areas</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#559DEA]/30 to-transparent"></div>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              Our research integrates genetics, neuroimaging, and AI to advance precision medicine.
            </p>
          </div>
          <div className="relative overflow-visible">
            {/* 그리드 - 일반 플로우로 높이 확보 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-6">
              {RESEARCH_AREAS.map((area) => (
                  <motion.button
                    key={area.id}
                    type="button"
                    onClick={() => {
                    if (selectedArea?.id === area.id) {
                      closeOverlay();
                    } else {
                      setSelectedArea(area);
                    }
                  }}
                    className="group relative overflow-hidden rounded-xl text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="h-full min-h-[180px] sm:min-h-[280px] rounded-xl overflow-hidden bg-white/90 backdrop-blur-xl border border-sky-200/60 shadow-[0_4px_20px_rgba(85,157,234,0.08)] transition-shadow duration-300 group-hover:shadow-[0_8px_32px_rgba(85,157,234,0.12)]">
                      <div className={`relative h-full min-h-[180px] sm:min-h-[280px] bg-gradient-to-br ${area.gradient}`}>
                        <Image
                          src="/icons/Gemini_Generated_Image_v2fdk3v2fdk3v2fd.png"
                          alt=""
                          fill
                          className="object-cover object-center opacity-20 group-hover:opacity-30 transition-opacity"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                          <span className="text-xs font-semibold text-[#559DEA] uppercase tracking-wide mb-1">{area.subtitle}</span>
                          <h2 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#559DEA] transition-colors">{area.title}</h2>
                        </div>
                      </div>
                    </div>
                  </motion.button>
              ))}
            </div>

            {/* 확장 오버레이: 화면 크게 차지, 폰트/여백 유지 */}
            {selectedArea && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isClosing ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                onAnimationComplete={() => {
                  if (isClosing) handleExitComplete();
                }}
                className="absolute inset-0 z-10 rounded-xl overflow-hidden bg-white border border-sky-200/60 shadow-[0_8px_40px_rgba(85,157,234,0.15)] flex flex-col cursor-pointer"
                style={{ transformOrigin: "center center" }}
                onClick={closeOverlay}
              >
                  {/* Image Header */}
                  <div className={`relative shrink-0 bg-gradient-to-br ${selectedArea.gradient}`} style={{ height: "140px" }}>
                    <Image
                      src="/icons/Gemini_Generated_Image_v2fdk3v2fdk3v2fd.png"
                      alt=""
                      fill
                      className="object-cover object-center opacity-30"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <span className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-1">{selectedArea.subtitle}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{selectedArea.title}</h2>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); closeOverlay(); }}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Text Body */}
                  <div className="flex-1 min-h-0 flex flex-col overflow-y-auto overflow-x-hidden bg-[#F5F7FB] text-slate-800 p-6 md:p-8 border-t border-slate-200/80">
                    <p className="text-base font-medium text-slate-800 leading-relaxed mb-4">{selectedArea.desc}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{selectedArea.longDesc}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <FileText size={14} className="text-[#559DEA] shrink-0" />
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Selected Works</span>
                    </div>
                    <div className="space-y-2">
                      {selectedArea.papers.map((paper, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm">
                          <span className="text-sm text-slate-700 leading-tight flex-1">{paper}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
