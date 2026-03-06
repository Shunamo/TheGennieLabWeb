"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Navigation from "@/components/common/Navigation";
import { ArrowLeft, Pin } from "lucide-react";
import { getNoticeById } from "@/data/notices";

export default function NoticeDetailPage() {
  const params = useParams();
  const mainRef = useRef<HTMLElement>(null);
  const id = params.id as string;
  const notice = getNoticeById(id);

  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
    }
    const el = mainRef.current;
    if (el) {
      el.scrollTop = 0;
      requestAnimationFrame(() => { el.scrollTop = 0; });
    }
  }, [id]);

  if (!notice) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-36 px-6 max-w-2xl mx-auto">
          <p className="text-slate-600">Notice not found.</p>
          <Link href="/notice" className="mt-4 inline-flex items-center gap-2 text-sky-600 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Notice
          </Link>
        </div>
      </main>
    );
  }

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
        <div className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/notice"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Notice
          </Link>

          {/* Glassy 메인 카드 */}
          <article className={`relative rounded-2xl p-8 md:p-12 overflow-hidden
            bg-white/20 backdrop-blur-2xl
            ${notice.pinned
              ? "border border-amber-200/70 shadow-[0_0_20px_rgba(253,224,71,0.12),0_8px_32px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.06)]"
              : "border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.06)]"
            }`}>
            {/* 유리 상단 하이라이트 */}
            <div className="absolute inset-x-0 top-0 h-32 rounded-t-2xl bg-gradient-to-b from-white/60 via-white/25 to-transparent pointer-events-none" />
            {notice.pinned && (
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(0,0,0,0.06)] flex items-center justify-center">
                <Pin className="w-6 h-6 text-amber-600/80" />
              </div>
            )}

            <div className="relative">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/35 backdrop-blur-md text-slate-600 border border-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(0,0,0,0.04)]">
                  {notice.category}
                </span>
              <p className="text-sm font-medium text-slate-500 mb-2">{notice.date}</p>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                {notice.title}
              </h1>
              <div className="prose prose-slate max-w-none">
                {notice.content.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-4">
                    {paragraph.split("**").map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j} className="font-semibold text-slate-700">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
