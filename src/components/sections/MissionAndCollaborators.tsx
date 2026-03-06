import Image from "next/image";

const collaborators = [
  { src: "/assets/collab/korea-univ.png", alt: "Korea University Anam Hospital" },
  { src: "/assets/collab/verilux.png", alt: "Verilux Tasma" },
  { src: "/assets/collab/brookhaven.png", alt: "Brookhaven National Laboratory" },
  { src: "/assets/collab/columbia.png", alt: "Columbia University" },
  { src: "/assets/collab/mcgill.png", alt: "McGill University" },
  { src: "/assets/collab/snu.png", alt: "Seoul National University" },
  { src: "/assets/collab/samsung-medical.png", alt: "Samsung Medical Center" },
  { src: "/assets/collab/skku.png", alt: "Sungkyunkwan University" },
  { src: "/assets/collab/northwestern.png", alt: "Northwestern Medicine" },
];

export default function MissionAndCollaborators() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-4xl font-extrabold text-slate-900">
            Mission for Precision Medicine
          </h3>
          <p className="mt-6 text-slate-600 leading-relaxed">
            The mission of the <span className="font-semibold text-slate-800">GENNIE Lab</span> is to improve our
            understanding of the underlying genetic architecture of human complex traits ranging from human intelligence,
            cognitive ability, mental illness to clinical diseases by leveraging multidimensional biomedical data and
            emerging AI technologies.
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-extrabold text-slate-900">
            We Are Open for Collaboration
          </h3>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Integrating multiple types of &apos;omics data, including electronic health records (EHRs), brain neuroimaging data
            or social longitudinal survey data, with large-scale DNA sequence or genotype data is a driving focus of the
            laboratory.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h4 className="text-3xl font-extrabold text-slate-900">Our collaborators:</h4>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
          {collaborators.map((c) => (
            <div key={c.alt} className="relative h-20 w-full">
              <Image src={c.src} alt={c.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

