"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { getMessagesEn } from "@/data/translatable";

export type Lang = "en" | "ko";

type TranslationContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  isLoading: boolean;
  error: string | null;
  retry: () => void;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

const CACHE_KEY = "gennie-lab-translations-ko";
const LANG_KEY = "gennie-lab-lang";

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [cache, setCache] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTranslations = useCallback(async () => {
    setError(null);
    console.log("[GENNIE] fetchTranslations called");
    try {
      const messagesEn = getMessagesEn();
      const texts = Object.values(messagesEn);
      const url = typeof window !== "undefined" ? `${window.location.origin}/api/translate` : "/api/translate";
      console.log("[GENNIE] Fetching:", url);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texts, targetLang: "KO" }),
      });

      const data = await res.json();
      console.log("[GENNIE] API response:", res.status, data);

      if (!res.ok) {
        const msg = data?.error || data?.details || `HTTP ${res.status}`;
        throw new Error(msg);
      }

      const translations = data.translations ?? [];
      const keys = Object.keys(messagesEn);
      const newCache: Record<string, string> = {};
      keys.forEach((k, i) => {
        newCache[k] = translations[i] ?? messagesEn[k];
      });
      setCache(newCache);
      localStorage.setItem(CACHE_KEY, JSON.stringify(newCache));
      console.log("[GENNIE] Translation success");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Translation failed";
      setError(msg);
      setCache({});
      console.error("Translation error:", e);
    }
  }, []);

  const setLang = useCallback(async (newLang: Lang) => {
    if (newLang === "en") {
      setLangState("en");
      setError(null);
      localStorage.setItem(LANG_KEY, "en");
      return;
    }

    setLangState("ko");
    localStorage.setItem(LANG_KEY, "ko");
    setError(null);

    try {
      const cached = localStorage.getItem(CACHE_KEY);
      const messagesEn = getMessagesEn();
      const keys = Object.keys(messagesEn);
      let parsed: Record<string, string> | null = null;
      try {
        parsed = cached ? (JSON.parse(cached) as Record<string, string>) : null;
      } catch {
        localStorage.removeItem(CACHE_KEY);
      }
      const cacheValid = parsed && keys.length > 0 && keys.every((k) => parsed![k]);

      if (cacheValid) {
        setCache(parsed!);
        console.log("[GENNIE] Using cached translations");
        return;
      }

      console.log("[GENNIE] No valid cache, fetching...");
      setIsLoading(true);
      await fetchTranslations();
    } finally {
      setIsLoading(false);
    }
  }, [fetchTranslations]);

  const retry = useCallback(() => {
    localStorage.removeItem(CACHE_KEY);
    setLang("ko");
  }, [setLang]);

  const t = useCallback(
    (key: string): string => {
      const messagesEn = getMessagesEn();
      if (lang === "en") return messagesEn[key] ?? key;
      let text = cache[key] ?? messagesEn[key] ?? key;
      if (lang === "ko") {
        text = text.replace(/지하철 지하철/g, "지하철");
        text = text.replace(/81 일원로 81/g, "일원로 81");
        text = text.replace(/사원/g, "학생"); // DeepL often mistranslates "student" as 사원
        if (key === "contact.greatPersonality") {
          text = text.replace(/입니다\.?$/g, "").trim();
        }
      }
      return text;
    },
    [lang, cache]
  );

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY) as Lang | null;
    if (saved === "ko") setLang("ko");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t, isLoading, error, retry }),
    [lang, setLang, t, isLoading, error, retry]
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used within TranslationProvider");
  return ctx;
}
