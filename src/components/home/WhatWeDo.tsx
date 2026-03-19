"use client";

import { useTranslation } from "@/contexts/TranslationContext";

export default function WhatWeDo() {
  const { t } = useTranslation();

  return (
    <section className="pt-4 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 mb-6">
          <div className="p-8 bg-white/20 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.06)] hover:bg-white/25 transition-all">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Mission for Precision Medicine
            </h3>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              {t("home.missionDesc")}
            </p>
          </div>

          <div className="p-8 bg-white/20 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.06)] hover:bg-white/25 transition-all">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              We Are Open for Collaboration
            </h3>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              {t("home.collabDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
