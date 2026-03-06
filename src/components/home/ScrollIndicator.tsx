"use client";

import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-20 h-20">
        {/* 원형 배경 */}
        <div className="absolute inset-0 rounded-full border-2 border-slate-300"></div>
        
        {/* 마우스 아이콘 */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Mouse className="w-6 h-6 text-slate-600" />
        </div>
        
        {/* "SCROLL DOWN" 텍스트 (원 둘레) */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 80 80"
        >
          <defs>
            <path
              id="circle"
              d="M 40,40 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
            />
          </defs>
          <text
            fontSize="6"
            fill="#64748b"
            fontWeight="bold"
            textAnchor="middle"
          >
            <textPath href="#circle" startOffset="0%">
              SCROLL DOWN ★ SCROLL DOWN ★
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

