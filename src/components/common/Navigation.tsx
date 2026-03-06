"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Home } from "lucide-react";
import Image from "next/image";
import { useScrollTop } from "@/contexts/ScrollContext";

const navigationItems = [
  { label: "About", href: "/about" },
  { label: "Member", href: "/member" },
  { label: "Research", href: "/research" },
  { label: "Publication", href: "/publication" },
  { label: "Notice", href: "/notice" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const scrollTop = useScrollTop();

  const logoOpacity = scrollTop > 50 ? 1 : 0;
  const isHome = pathname === "/";

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
              transition-all duration-300 absolute left-6"
          >
            <Home className="w-5 h-5" />
          </Link>
        ) : (
          <Link
            href="/"
            className="flex items-center transition-opacity duration-300 absolute left-6"
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

        {/* 네비게이션 링크들 - 중앙 */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium absolute left-1/2 -translate-x-1/2">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                px-5 py-2.5 rounded-full
                backdrop-blur-md border border-slate-100
                transition-all duration-300
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

        {/* 햄버거 메뉴 - 오른쪽 */}
        <button className="md:hidden text-slate-900 absolute right-6 p-1">
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </nav>
  );
}
