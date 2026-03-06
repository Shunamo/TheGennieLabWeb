"use client";

import Image from "next/image";

/** 위 4개: 한국 (삼성, 성균관대, 서울대, 고려대) */
const TOP_ROW = [
  { src: "/icons/삼성서울병원.svg", alt: "Samsung Seoul Hospital", wide: true },
  { src: "/icons/성균관대.svg", alt: "Sungkyunkwan University", wide: false },
  { src: "/icons/서울대.svg", alt: "Seoul National University", wide: false },
  { src: "/icons/고려대안암1.svg", alt: "Korea University", wide: true },
];

/** 아래 4개: 나머지 */
const BOTTOM_ROW = [
  { src: "/icons/mcgill_univ.svg", alt: "McGill University", wide: false },
  { src: "/icons/Brookhaven_National_Laboratory_logo.svg.png", alt: "Brookhaven National Laboratory", wide: true },
  { src: "/icons/Columbia_University_logo.svg", alt: "Columbia University", wide: true },
  { src: "/icons/Northwestern_Medicine_Feinberg_School_of_Medicine_logo.svg", alt: "Northwestern Medicine Feinberg School of Medicine", wide: true },
];

export default function Collaborators() {
  return (
    <section className=" pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-white/20 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.06)] p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Our collaborators</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#559DEA]/30 to-transparent" />
          </div>
          {/* 위 4개: 삼성, 성균관대, 서울대, 고려대 */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 mb-10">
            {TOP_ROW.map((logo, i) => (
              <div
                key={i}
                className={`flex items-center justify-center ${
                  logo.wide ? "w-52 h-18 md:w-64 md:h-24" : "w-28 h-28 md:w-36 md:h-36"
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.wide ? 256 : 144}
                  height={logo.wide ? 96 : 144}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
          {/* 아래 4개: McGill, Brookhaven, Columbia, Northwestern */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
            {BOTTOM_ROW.map((logo, i) => (
              <div
                key={i}
                className={`flex items-center justify-center ${
                  logo.wide ? "w-52 h-18 md:w-64 md:h-24" : "w-28 h-28 md:w-36 md:h-36"
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.wide ? 256 : 144}
                  height={logo.wide ? 96 : 144}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
