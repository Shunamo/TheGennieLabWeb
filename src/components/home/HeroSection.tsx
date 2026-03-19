"use client";

const RESEARCH_AREAS = [
  "Medical AI",
  "AI application for Multiomics data",
  "Foundation models for Healthcare",
  "Causal Machine learning for Prescription Optimization",
  "Integrated multimodal AI framework",
  "Psychiatric Genetics",
  "Sociogenomics",
  "Polygenic Risk Prediction",
  "Imaging Genetics",
  "Large-scale Electronic Health Records",
  "Precision Medicine",
];

const TAG_STYLE =
  "px-4 py-2.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/60 text-slate-700 text-sm font-medium whitespace-nowrap shadow-[0_4px_24px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)]";

export default function HeroSection() {
  const topRow = RESEARCH_AREAS.slice(0, 5);
  const bottomRow = RESEARCH_AREAS.slice(5, 11);

  return (
    <div className="flex flex-col items-center mt-20 gap-5 pt-32 md:pt-32">
      <h1 className="text-7xl md:text-5xl lg:text-7xl font-black tracking-tight text-slate-900">
        GENNIE Lab
      </h1>

      {/* 소제목 - 번역 X */}
      <div className="px-6 md:px-12">
        <p className="text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed text-center">
          <span className="font-bold">Ge</span>nomic Insights and{" "}
          <span className="font-bold">N</span>eural-
          <span className="font-bold">N</span>etwork{" "}
          <span className="font-bold">I</span>ntelligence for Healthcar
          <span className="font-bold">e</span>
        </p>
      </div>

      {/* 연구 영역 태그 */}
      <div className="flex flex-col items-center gap-3 mt-6 px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {topRow.map((area, index) => (
            <span key={index} className={TAG_STYLE}>
              {area}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {bottomRow.map((area, index) => (
            <span key={index} className={TAG_STYLE}>
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
