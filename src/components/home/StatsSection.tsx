import Image from "next/image";

const keywords = [
  "Polygenic Risk Prediction;",
  "Imaging Genetics;",
  "Cognitive Genetics;",
  "Psychiatric Genetics;",
  "Sociogenomics;",
  "Large-scale Electronic Health Records;",
  "Precision Medicine;",
];

export default function StatsSection() {
  return (
    <section className="bg-[#FCFCFB] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Affiliation Band 스타일 - GENOVERGE 레이아웃으로 */}
        <div className="bg-primary rounded-3xl p-12 mb-16">
          <div className="flex items-start justify-between gap-10 flex-wrap">
            <p className="text-white/90 text-2xl font-semibold tracking-tight">
              Since 2023
            </p>

            <div className="flex-1 min-w-[300px] max-w-[600px]">
              <div className="leading-[1.75] text-white/90 text-2xl md:text-3xl font-light">
                {keywords.map((k) => (
                  <div key={k}>{k}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-10">
            <div className="relative h-20 w-[400px] opacity-70">
              <Image
                src="/assets/saihst.png"
                alt="SAIHST"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="h-px flex-1 bg-white/25" />
          </div>
        </div>

        {/* 통계 및 플랫폼 정보 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 진행 상황 카드 */}
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-slate-600">
                Research Progress
              </span>
            </div>
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-gray-100"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - 0.65)}`}
                  className="text-primary"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-black text-slate-900">65%</span>
              </div>
            </div>
            <p className="text-center text-sm text-slate-500">
              Active projects
            </p>
          </div>

          {/* 플랫폼 통합 텍스트 */}
          <div className="lg:col-span-2 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100">
            <p className="text-2xl font-bold text-slate-900 leading-relaxed">
              Fully integrated with top-tier{" "}
              <span className="text-primary">nextgen sequencing platforms</span>
              .
            </p>
            <div className="flex gap-3 mt-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                mtDNA
              </span>
              <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                Y-STR
              </span>
              <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                Multi-Omics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
