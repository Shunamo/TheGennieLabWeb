import Image from "next/image";

/** 서버 컴포넌트 - 배경 이미지 SSR로 초기 HTML에 포함 */
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
        />
      </div>
    </div>
  );
}
