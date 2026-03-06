"use client";

import Image from "next/image";

const carouselImages = [
  {
    src: "/icons/image.png",
    alt: "Flower on pink background",
    className: "rounded-2xl",
  },
  {
    src: "/icons/image.png",
    alt: "Yellow-orange leaf",
    className: "rounded-2xl",
  },
  {
    src: "/icons/image.png",
    alt: "Abstract geometric shapes",
    className: "rounded-2xl",
  },
  {
    src: "/icons/image.png",
    alt: "Abstract lines pattern",
    className: "rounded-2xl",
  },
  {
    src: "/icons/image.png",
    alt: "Landscape with pool",
    className: "rounded-2xl",
  },
];

export default function ImageCarousel() {
  return (
    <section className="py-12 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* 곡선형 이미지 캐러셀 */}
        <div className="flex gap-4 md:gap-6 items-center justify-center overflow-x-auto pb-4">
          {carouselImages.map((image, index) => {
            const rotation = (index - 2) * 3; // 중앙에서 멀수록 더 많이 회전
            const translateY = Math.abs(index - 2) * 15; // 곡선 효과
            return (
              <div
                key={index}
                className="relative w-48 md:w-64 h-64 md:h-80 flex-shrink-0 transform hover:scale-105 transition-all duration-300"
                style={{
                  transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

