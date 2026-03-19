"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Languages } from "lucide-react";
import Image from "next/image";
import { useScrollTop } from "@/contexts/ScrollContext";
import { useTranslation } from "@/contexts/TranslationContext";

/** Members 드롭다운: Lab(교수님) / Members(우리들) */
const membersDropdownItems = [
  { label: "Captain", href: "/captain" },
  { label: "Lab Members", href: "/member" },
];

const navigationItems = [
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publication" },
  { label: "Notice", href: "/notice" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const scrollTop = useScrollTop();
  const { lang, setLang, isLoading, error, retry } = useTranslation();
  const [membersOpen, setMembersOpen] = useState(false);

  const logoOpacity = scrollTop > 50 ? 1 : 0;
  const isHome = pathname === "/";
  const membersRef = useRef<HTMLDivElement>(null);
  const isMembersActive = pathname === "/captain" || pathname === "/member";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (membersRef.current && !membersRef.current.contains(e.target as Node)) {
        setMembersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 md:h-28 flex items-center relative">
        {/* 홈 버튼 (홈이 아닐 때만) 또는 로고 */}
        {!isHome ? (
          <Link
            href="/"
            className="flex items-center p-2.5 rounded-full
              backdrop-blur-md border border-slate-100
              bg-white/40 text-slate-700 hover:bg-white/60 hover:text-slate-900
              hover:scale-105 active:scale-95
              transition-all duration-200 ease-out absolute left-6"
          >
            <Home className="w-5 h-5" />
          </Link>
        ) : (
          <Link
            href="/"
            className="flex items-center transition-all duration-200 ease-out absolute left-6 hover:scale-105 active:scale-95"
            style={{ opacity: logoOpacity }}
          >
            <Image
              src="/icons/LogoBlue.svg"
              alt="GENNIE Lab"
              width={200}
              height={200}
              className="w-24 h-24 md:w-28 md:h-28"
            />
          </Link>
        )}

        {/* 네비게이션 링크들 - 중앙: About, Members, Projects, ... */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium absolute left-1/2 -translate-x-1/2">
          {/* About (먼저) */}
          <Link
            href="/research"
            className={`
              px-5 py-2.5 rounded-full
              backdrop-blur-md border border-slate-100
              transition-all duration-200 ease-out
              hover:scale-105 active:scale-95
              ${
                pathname === "/about"
                  ? "bg-white/80 text-slate-900 font-semibold shadow-lg shadow-black/5"
                  : "bg-white/40 text-slate-700 hover:bg-white/60 hover:text-slate-900"
              }
            `}
          >
            About
          </Link>
          {/* Members 드롭다운 */}
          <div className="relative" ref={membersRef}>
            <button
              type="button"
              onClick={() => setMembersOpen((o) => !o)}
              className={`
                px-5 py-2.5 rounded-full
                backdrop-blur-md border border-slate-100
                transition-all duration-200 ease-out
                hover:scale-105 active:scale-95
                ${
                  isMembersActive || membersOpen
                    ? "bg-white/80 text-slate-900 font-semibold shadow-lg shadow-black/5"
                    : "bg-white/40 text-slate-700 hover:bg-white/60 hover:text-slate-900"
                }
              `}
              aria-expanded={membersOpen}
              aria-haspopup="true"
            >
              Members
            </button>
            {membersOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex gap-2 z-50">
                {membersDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMembersOpen(false)}
                    className={`
                      min-w-[100px] text-center px-5 py-2.5 rounded-full
                      text-slate-700 hover:text-slate-900
                      transition-all duration-200 ease-out whitespace-nowrap
                      shadow-lg shadow-black/5
                      hover:scale-105 active:scale-95
                      ${pathname === item.href ? "text-[#559DEA] font-semibold" : ""}
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                px-5 py-2.5 rounded-full
                backdrop-blur-md border border-slate-100
                transition-all duration-200 ease-out
                hover:scale-105 active:scale-95
                ${
                  pathname === item.href
                    ? "bg-white/80 text-slate-900 font-semibold shadow-lg shadow-black/5"
                    : "bg-white/40 text-slate-700 hover:bg-white/60 hover:text-slate-900"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* 우측: 언어 토글 */}
        <div className="flex items-center gap-2 absolute right-6 z-10">
          {error && (
            <button
              type="button"
              onClick={retry}
              className="text-xs text-amber-600 hover:text-amber-700 font-medium shrink-0 transition-transform duration-200 hover:scale-110 active:scale-95"
              title="Retry translation"
            >
              Retry
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.shiftKey) {
                localStorage.removeItem("gennie-lab-translations-ko");
              }
              setLang(lang === "en" ? "ko" : "en");
            }}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full shrink-0
              backdrop-blur-md border border-slate-100 bg-white/40 text-slate-700
              hover:bg-white/60 hover:text-slate-900
              hover:scale-105 active:scale-95
              transition-all duration-200 ease-out
              disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            title={lang === "en" ? "한국어로 전환" : "Switch to English"}
          >
            <Languages className="w-4 h-4 shrink-0" />
            <span className="text-sm font-medium">
              {isLoading ? "..." : lang === "en" ? "EN" : "한국어"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
