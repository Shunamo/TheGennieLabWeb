"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function BackgroundEffects() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* 아주 옅은 그레이 배경 패턴 */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>

      {/* 은은한 블루 그라디언트 (우측 상단) */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-samsung/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-bio-cyan/5 rounded-full blur-[100px]"></div>

      {/* === 움직이는 네트워크 입자 (파란색) === */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          particles: {
            number: {
              value: 60,
              density: { enable: true, value_area: 1000 },
            },
            color: { value: "#1428A0" }, // 입자 색상: 삼성 블루
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out",
            },
            links: {
              enable: true,
              distance: 150,
              color: "#1428A0", // 연결선 색상: 삼성 블루
              opacity: 0.15, // 연하게
              width: 1,
            },
          },
          background: { color: "transparent" },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
    </div>
  );
}

