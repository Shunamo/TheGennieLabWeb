"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollProvider } from "@/contexts/ScrollContext";
import Navigation from "@/components/common/Navigation";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import Partnership from "@/components/home/Partnership";
import Collaborators from "@/components/home/Collaborators";

export default function Home() {
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
    <ScrollProvider scrollRef={mainRef}>
    <main
      ref={mainRef}
      className="fixed inset-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-transparent text-slate-900"
    >
      <Navigation />

      {/* 고정 배경 - 스크롤해도 고정 */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-[75vh] max-h-[650px]">
          <Image
            src="/icons/Gemini_Generated_Image_v2fdk3v2fdk3v2fd.png"
            alt=""
            fill
            className="object-contain object-bottom opacity-90"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      <section className="snap-start relative z-10 min-h-screen flex flex-col items-center justify-center">
        <HeroSection />
      </section>
      <section className="snap-start relative z-10 bg-transparent">
        <WhatWeDo />
        <Collaborators />
      </section>

    </main>
    </ScrollProvider>
  );
}
