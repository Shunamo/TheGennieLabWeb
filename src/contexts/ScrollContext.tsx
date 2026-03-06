"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

const ScrollContext = createContext<number>(0);

export function ScrollProvider({ children, scrollRef }: { children: ReactNode; scrollRef: React.RefObject<HTMLElement | null> }) {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const el = scrollRef?.current;
    if (!el) return;
    const handler = () => setScrollTop(el.scrollTop);
    handler(); // initial
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [scrollRef]);

  return <ScrollContext.Provider value={scrollTop}>{children}</ScrollContext.Provider>;
}

export function useScrollTop() {
  return useContext(ScrollContext);
}
