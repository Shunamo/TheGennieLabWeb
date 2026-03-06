import Image from "next/image";

const keywords = [
  "Polygenic Risk Prediction;",
  "Imaging Genetics;",
  "Cognitive Genetics;",
  "Psychiatric Genetics;",
  "Sociogenomics;",
  "Large-scale Electronic Health Records;",
  "Precision Medicine;",
];

export default function AffiliationBand() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-start justify-between gap-10">
          <p className="text-white/90 text-2xl font-semibold tracking-tight">
            Since 2023
          </p>

          <div className="flex-1" />

          <div className="min-w-[520px] max-w-[640px]">
            <div className="leading-[1.75] text-white/90 text-3xl font-light">
              {keywords.map((k) => (
                <div key={k}>{k}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-10">
          <div className="relative h-24 w-[560px] opacity-70">
            <Image
              src="/assets/saihst.png"
              alt="SAIHST"
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          <div className="h-px flex-1 bg-white/25" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/5" />
    </section>
  );
}

