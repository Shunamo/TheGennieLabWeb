"use client";

import { TranslationProvider } from "@/contexts/TranslationContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <TranslationProvider>{children}</TranslationProvider>;
}
