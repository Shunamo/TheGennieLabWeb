"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/common/Navigation";
import { ChevronRight, Pin } from "lucide-react";
import { NOTICES } from "@/data/notices";
import { NEWS } from "@/data/news";
import { useTranslation } from "@/contexts/TranslationContext";

export default function NoticePage() {
  const { t } = useTranslation();
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
      className="min-h-screen overflow-y-auto overflow-x-hidden bg-white text-slate-800"
    >
      {/* 배경 이미지 - 90도 회전 후 가로 3개 나열 */}
      <div className="fixed inset-0 z-0 bg-white flex items-center justify-center gap-2 overflow-hidden">
        <div className="relative w-1/3 h-full min-w-0 flex-1 rotate-90">
          <Image
            src="/icons/Gemini_Generated_Image_pu7pynpu7pynpu7p.png"
            alt=""
            fill
            className="object-contain"
            priority
            sizes="33vw"
          />
        </div>
        <div className="relative w-1/3 h-full min-w-0 flex-1 rotate-90">
          <Image
            src="/icons/Gemini_Generated_Image_pu7pynpu7pynpu7p.png"
            alt=""
            fill
            className="object-contain"
            priority
            sizes="33vw"
          />
        </div>
        <div className="relative w-1/3 h-full min-w-0 flex-1 rotate-90">
          <Image
            src="/icons/Gemini_Generated_Image_pu7pynpu7pynpu7p.png"
            alt=""
            fill
            className="object-contain"
            priority
            sizes="33vw"
          />
        </div>
      </div>

      <Navigation />

      <div className="relative z-10 pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* News - 간단한 게시판 형식 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">News</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-300/60 to-transparent" />
            </div>
            <ul className="rounded-2xl bg-white/20 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] divide-y divide-white/40 overflow-hidden">
              {NEWS.filter((item) => !item.link).map((item) => (
                <li key={item.id}>
                  <div className="flex items-center gap-4 px-6 py-4 group">
                    <span className="text-xs font-medium text-slate-500 shrink-0 w-24">
                      {item.date}
                    </span>
                    <span className="text-sm font-medium text-slate-800">
                      {t(`news.title.${item.id}`)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Notice - 상세 카드 */}
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Notice</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-300/60 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[...NOTICES]
              .sort((a, b) => {
                if (a.pinned && !b.pinned) return -1;
                if (!a.pinned && b.pinned) return 1;
                return b.date > a.date ? 1 : -1;
              })
              .map((notice) => (
                <Link
                  key={notice.id}
                  href={`/notice/${notice.id}`}
                  className="group block"
                >
                  <article
                    className={`relative rounded-2xl p-6 md:p-8
                      bg-white/20 backdrop-blur-2xl
                      transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]
                      overflow-hidden cursor-pointer
                      ${notice.pinned
                        ? "border border-amber-200/70 shadow-[0_0_20px_rgba(253,224,71,0.12),0_8px_32px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.06)] hover:shadow-[0_0_28px_rgba(253,224,71,0.18),0_12px_40px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.95)] hover:bg-white/25"
                        : "border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.06),inset_0_2px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(0,0,0,0.08)] hover:bg-white/30"
                      }`}
                  >
                    {/* 유리 상단 하이라이트 */}
                    <div className="absolute inset-x-0 top-0 h-28 rounded-t-2xl bg-gradient-to-b from-white/60 via-white/25 to-transparent pointer-events-none" />
                    {notice.pinned && (
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.06)] flex items-center justify-center">
                        <Pin className="w-5 h-5 text-amber-600/80" />
                      </div>
                    )}

                    <div className="relative">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/35 backdrop-blur-md text-slate-600 border border-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.04)] mb-4">
                          {notice.category}
                        </span>
                      <p className="text-xs font-medium text-slate-500 mb-2">{notice.date}</p>
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors mb-3">
                        {t(`notice.${notice.id}.title`)}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {t(`notice.${notice.id}.excerpt`)}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-medium text-slate-500 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all duration-300">
                        <span>{t("notice.readMore")}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
