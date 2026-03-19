"use client";

import Image from "next/image";

/** 배경 이미지 - 블러 플레이스홀더로 즉시 표시, 로드 후 자연스럽게 전환 */
const BLUR_DATA =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

export default function HomeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center bg-[#fefefe]">
      <div className="relative w-full h-[75vh] max-h-[650px]">
        <Image
          src="/icons/Gemini_Generated_Image_v2fdk3v2fdk3v2fd.png"
          alt=""
          fill
          className="object-contain object-bottom opacity-90"
          priority
          sizes="100vw"
          quality={80}
          placeholder="blur"
          blurDataURL={BLUR_DATA}
        />
      </div>
    </div>
  );
}
