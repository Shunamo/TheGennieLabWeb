"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] bg-[#f5f5f7] pt-32 pb-20 overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/icons/image.png"
          alt="DNA Helix Background"
          fill
          className="object-cover opacity-70"
          priority
        />
        {/* 유리 질감 오버레이 - 더 투명하게 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa]/60 via-[#f5f5f7]/50 to-[#f0f0f2]/60"></div>
        {/* 미묘한 반사 효과 */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/3 to-white/5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1  pt-20 lg:grid-cols-2 gap-16 items-center">
          {/* 왼쪽: 타이틀 + 설명 + CTA */}
          <div className="relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
              眞理
              <br />
              <span className="text-primary">GENNIE Lab</span>
            </h1>

            <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-xl font-medium">
              Accelerating Digital Health through Genomic Insights and
              Neural-Network Intelligence
            </p>

            {/* CTA 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                Explore Research
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-primary/30 text-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center">
                View Publications
              </button>
            </div>
          </div>

          {/* 오른쪽: 이미지가 배경으로 보이도록 빈 공간 */}
          <div className="relative h-[600px] hidden lg:block">
            {/* 이미지가 배경으로 자연스럽게 보이도록 */}
          </div>
        </div>
      </div>
    </section>
  );
}
