import { Dna, Network, Activity, ChevronRight } from "lucide-react";

export default function ResearchAreas() {
  const researchCards = [
    {
      title: "Genomic LLMs",
      icon: Dna,
      desc: "Building foundation models for DNA sequence understanding.",
    },
    {
      title: "Multi-Omics AI",
      icon: Network,
      desc: "Integrating heterogeneous biological data for deep insights.",
    },
    {
      title: "Precision Medicine",
      icon: Activity,
      desc: "AI-driven diagnostics and personalized treatment plans.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Key Research Areas
          </h2>
          <p className="text-slate-500">
            Focusing on the convergence of Bio-data and AI models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-samsung/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-samsung transition-colors duration-300">
                <card.icon className="w-7 h-7 text-samsung group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {card.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {card.desc}
              </p>
              <span className="text-samsung font-bold text-sm flex items-center gap-2 cursor-pointer">
                Learn more{" "}
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

