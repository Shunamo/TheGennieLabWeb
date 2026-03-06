"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

// 예전 버전: 오른쪽에 추상적인 블루/시안 시각적 패널들
export default function HeroSectionOld() {
  return (
    <section className="relative min-h-[85vh] bg-[#f5f5f7] pt-32 pb-20 overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/icons/image.png"
          alt="DNA Helix Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* 유리 질감 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa]/60 via-[#f5f5f7]/50 to-[#f0f0f2]/60"></div>
        {/* 미묘한 반사 효과 */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/3 to-white/5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

          {/* 오른쪽: 추상적인 블루/시안 시각적 패널들 */}
          <div className="relative h-[600px] flex gap-4">
            {/* 왼쪽 패널 - 액체/버블 느낌 */}
            <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-mid/30 to-primary-light/40">
                {/* 액체/버블 패턴 */}
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-primary/40 rounded-full blur-2xl"></div>
                  <div className="absolute top-32 right-16 w-24 h-24 bg-primary-mid/50 rounded-full blur-xl"></div>
                  <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary-light/60 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-32 right-10 w-28 h-28 bg-primary/30 rounded-full blur-2xl"></div>
                </div>
                {/* 반사 효과 */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                {/* 버블들 */}
                <div className="absolute top-24 left-16 w-16 h-16 bg-white/30 rounded-full backdrop-blur-sm border border-white/40"></div>
                <div className="absolute top-40 right-20 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"></div>
                <div className="absolute bottom-28 left-24 w-20 h-20 bg-white/25 rounded-full backdrop-blur-sm border border-white/35"></div>
              </div>
            </div>

            {/* 오른쪽 패널 - 더 복잡한 버블 패턴 */}
            <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-mid/25 via-primary/20 to-primary-light/35">
                {/* 더 많은 버블들 */}
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute top-16 left-12 w-20 h-20 bg-white/40 rounded-full backdrop-blur-md border border-white/50"></div>
                  <div className="absolute top-36 right-16 w-16 h-16 bg-white/30 rounded-full backdrop-blur-md border border-white/40"></div>
                  <div className="absolute top-52 left-20 w-14 h-14 bg-white/35 rounded-full backdrop-blur-md border border-white/45"></div>
                  <div className="absolute bottom-24 right-12 w-18 h-18 bg-white/40 rounded-full backdrop-blur-md border border-white/50"></div>
                  <div className="absolute bottom-40 left-16 w-12 h-12 bg-white/30 rounded-full backdrop-blur-md border border-white/40"></div>
                </div>
                {/* 그라디언트 오버레이 */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary-light/30 to-transparent"></div>
                {/* 액체 느낌의 그라디언트 */}
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-primary/20 via-primary-mid/15 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
