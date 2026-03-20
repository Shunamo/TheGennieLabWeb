"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { NEWS } from "@/data/news";

const NEWS_WITHOUT_LINKS = NEWS.filter((item) => !item.link);
const VISIBLE_COUNT = 3;
const INTERVAL_MS = 4000;
const ITEM_HEIGHT = 52;
const GAP = 12; // space-y-3
const ITEM_SLOT = ITEM_HEIGHT + GAP;

export default function CongratulateSection() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const n = NEWS_WITHOUT_LINKS.length;
  const extendedItems = [...NEWS_WITHOUT_LINKS, ...NEWS_WITHOUT_LINKS.slice(0, 3)];
  const maxIndex = n;

  const next = useCallback(() => {
    setIndex((i) => Math.min(i + 1, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (n <= VISIBLE_COUNT) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [n, next]);

  useEffect(() => {
    if (n <= VISIBLE_COUNT) return;
    if (index === maxIndex) {
      const id = setTimeout(() => setIndex(0), 550);
      return () => clearTimeout(id);
    }
  }, [index, maxIndex, n]);

  if (n === 0) return null;

  const displayIndex = n <= VISIBLE_COUNT ? 0 : index;
  const items = n > VISIBLE_COUNT ? extendedItems : NEWS_WITHOUT_LINKS;

  return (
    <div className="pt-60 md:pt-60 ">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
        Congratulate!
      </h2>

      <div
        className="overflow-hidden rounded-xl"
        style={{
          height: n <= VISIBLE_COUNT ? undefined : ITEM_HEIGHT * VISIBLE_COUNT + GAP * (VISIBLE_COUNT - 1),
        }}
      >
        <ul
          className="space-y-3 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={
            n > VISIBLE_COUNT
              ? { transform: `translateY(-${displayIndex * ITEM_SLOT}px)` }
              : undefined
          }
        >
          {items.map((item, i) => (
            <li
              key={`${item.id}-${i}`}
              className="rounded-xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] px-5 py-3 shrink-0"
              style={{ minHeight: ITEM_HEIGHT }}
            >
              <div className="flex items-center gap-3 flex-nowrap">
                <span className="text-xs font-semibold text-slate-500 shrink-0 w-12">
                  {item.date}
                </span>
                {item.badge && (
                  <span className="shrink-0 inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-amber-400/30 text-amber-800 border border-amber-400/50">
                    {item.badge}
                  </span>
                )}
                <p className="text-sm md:text-base text-slate-800 leading-relaxed min-w-0 truncate">
                  {t(`news.title.${item.id}`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
