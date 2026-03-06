"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Flow Cytometry",
    description:
      "We offers the same flow cytometry capabilities at all of our locations",
    graphic: "flow-cytometry", // 추상적인 3D 구체
  },
  {
    title: "Clinical Trials",
    description: "Our mission is to assist pharma",
    graphic: "clinical-trials", // 사람 사진
  },
  {
    title: "Histology",
    description: "Specimens received are processed, sectioned, and",
    graphic: "histology", // 추상적인 아이콘
  },
  {
    title: "Molecular Genetics",
    description: "We offer a variety of tests across",
    graphic: "molecular-genetics", // 추상적인 3D 구체
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-lg transition-all group cursor-pointer"
            >
              {/* 그래픽 영역 */}
              <div className="relative h-40 mb-5 rounded-xl overflow-hidden bg-gradient-to-br from-primary-light/20 via-primary-mid/10 to-primary/20">
                {/* 추상적인 3D 구체 효과 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary-light/40 via-primary-mid/30 to-primary/40 blur-2xl"></div>
                  <div className="absolute w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm border border-white/40"></div>
                </div>
              </div>

              {/* 텍스트 영역 */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* 화살표 버튼 */}
              <div className="flex justify-end">
                <button className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-all group-hover:scale-110">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

