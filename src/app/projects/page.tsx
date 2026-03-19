"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/common/Navigation";

export default function ProjectsPage() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
    }
    const el = mainRef.current;
    if (el) {
      el.scrollTop = 0;
      requestAnimationFrame(() => {
        el.scrollTop = 0;
      });
    }
  }, []);

  return (
    <main
      ref={mainRef}
      className="min-h-screen overflow-y-auto overflow-x-hidden bg-white text-slate-800"
    >
      <div className="fixed inset-0 z-0 bg-white flex items-center justify-center">
        <Image
          src="/icons/Gemini_Generated_Image_v2fdk3v2fdk3v2fd.png"
          alt=""
          fill
          className="object-contain opacity-30"
          priority
          sizes="100vw"
        />
      </div>

      <Navigation />

      <div className="relative z-10 pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              Projects
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-300/60 to-transparent" />
          </div>

          <p className="text-slate-600">
            Projects content will be added here.
          </p>
        </div>
      </div>
    </main>
  );
}
