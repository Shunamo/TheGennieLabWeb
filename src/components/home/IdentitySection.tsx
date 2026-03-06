import Image from "next/image";

const collaborators = [
  {
    src: "/assets/collab/korea-univ.png",
    alt: "Korea University Anam Hospital",
  },
  { src: "/assets/collab/verilux.png", alt: "Verilux Tasma" },
  {
    src: "/assets/collab/brookhaven.png",
    alt: "Brookhaven National Laboratory",
  },
  { src: "/assets/collab/columbia.png", alt: "Columbia University" },
  { src: "/assets/collab/mcgill.png", alt: "McGill University" },
  { src: "/assets/collab/snu.png", alt: "Seoul National University" },
  {
    src: "/assets/collab/samsung-medical.png",
    alt: "Samsung Medical Center",
  },
  { src: "/assets/collab/skku.png", alt: "Sungkyunkwan University" },
  { src: "/assets/collab/northwestern.png", alt: "Northwestern Medicine" },
];

export default function IdentitySection() {
  return (
    <>
      {/* Quote Split - GENOVERGE 스타일로 */}
      <section className="mx-auto max-w-7xl px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
            <Image
              src="/assets/quote-image.jpg"
              alt="Quote visual"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="lg:pl-10">
            <div className="h-full border-l-2 border-primary/20 pl-10">
              <p className="text-slate-600 italic leading-relaxed text-lg">
                &ldquo;I&rsquo;m fascinated by the idea that genetics is digital.
                <br />
                A gene is a long sequence of coded letters, like computer
                information.
                <br />
                Modern biology is becoming very much
                <br />a branch of information technology.&rdquo;
              </p>
              <p className="mt-4 text-slate-500 italic text-lg font-semibold">
                - Richard Dawkins
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 h-px bg-slate-200" />
      </section>

      {/* Mission and Collaborators - GENOVERGE 스타일로 */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">
              Mission for Precision Medicine
            </h3>
            <p className="text-slate-600 leading-relaxed">
              The mission of the{" "}
              <span className="font-semibold text-slate-800">GENNIE Lab</span>{" "}
              is to improve our understanding of the underlying genetic
              architecture of human complex traits ranging from human
              intelligence, cognitive ability, mental illness to clinical
              diseases by leveraging multidimensional biomedical data and
              emerging AI technologies.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">
              We Are Open for Collaboration
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Integrating multiple types of &apos;omics data, including electronic
              health records (EHRs), brain neuroimaging data or social
              longitudinal survey data, with large-scale DNA sequence or
              genotype data is a driving focus of the laboratory.
            </p>
          </div>
        </div>

        {/* Collaborators 로고월 */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 border border-gray-100 shadow-sm">
          <h4 className="text-3xl font-extrabold text-slate-900 mb-10">
            Our collaborators:
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
            {collaborators.map((c) => (
              <div
                key={c.alt}
                className="relative h-20 w-full opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
