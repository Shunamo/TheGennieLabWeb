import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#14299F", // 메인 컬러
          dark: "#021A29", // 어두운 포인트
          mid: "#0080FF", // 중간 포인트
          light: "#ABE9FC", // 밝은 포인트
        },
        // 기존 호환성을 위한 별칭
        samsung: {
          DEFAULT: "#14299F",
          dark: "#021A29",
          hover: "#03B3E2",
        },
        bio: {
          cyan: "#03B3E2", // 중간 포인트로 변경
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite", // 느린 빛 번짐 효과
      },
      fontFamily: {
        // 영문 폰트 설정 (Inter나 Roboto 추천)
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
