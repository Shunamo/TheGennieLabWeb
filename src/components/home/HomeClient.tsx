"use client";

import { useEffect, useRef } from "react";
import { ScrollProvider } from "@/contexts/ScrollContext";
import Navigation from "@/components/common/Navigation";
import HeroSection from "@/components/home/HeroSection";
import CongratulateSection from "@/components/home/CongratulateSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import Collaborators from "@/components/home/Collaborators";

export default function HomeClient() {
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

        <section className="snap-start relative z-10 min-h-screen flex flex-col items-center justify-center">
          <HeroSection />
        </section>
        <section className="snap-start relative z-10 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <CongratulateSection />
          </div>
          <WhatWeDo />
          <Collaborators />
        </section>
      </main>
    </ScrollProvider>
  );
}
