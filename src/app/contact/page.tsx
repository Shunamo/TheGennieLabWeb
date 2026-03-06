"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/common/Navigation";
import { ExternalLink } from "lucide-react";

export default function ContactPage() {
  const mainRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
    }
    const el = mainRef.current;
    if (el) {
      el.scrollTop = 0;
      requestAnimationFrame(() => {
        el.scrollTop = 0;
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:yoonjungjoo@skku.edu?subject=Contact from GENNIE Lab Website&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    )}`;
    window.location.href = mailto;
  };

  return (
    <main
      ref={mainRef}
      className="min-h-screen overflow-y-auto overflow-x-hidden bg-white text-slate-800"
    >
      {/* 배경 이미지 */}
      <div className="fixed inset-0 z-0 bg-white flex items-center justify-center gap-2 overflow-hidden">
        <div className="relative w-1/3 h-full min-w-0 flex-1 rotate-90">
          <Image
            src="/icons/Gemini_Generated_Image_pu7pynpu7pynpu7p.png"
            alt=""
            fill
            className="object-contain"
            priority
            sizes="33vw"
          />
        </div>
        <div className="relative w-1/3 h-full min-w-0 flex-1 rotate-90">
          <Image
            src="/icons/Gemini_Generated_Image_pu7pynpu7pynpu7p.png"
            alt=""
            fill
            className="object-contain"
            priority
            sizes="33vw"
          />
        </div>
        <div className="relative w-1/3 h-full min-w-0 flex-1 rotate-90">
          <Image
            src="/icons/Gemini_Generated_Image_pu7pynpu7pynpu7p.png"
            alt=""
            fill
            className="object-contain"
            priority
            sizes="33vw"
          />
        </div>
      </div>

      <Navigation />

      <div className="relative z-10 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero */}
          <div className="text-start mb-12">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
              If you have any research idea/databases to develop with our group,{" "}
              <br />
              or look for a lab position in our group, feel free to contact us.
            </p>
          </div>

          {/* 메인 카드: 좌(연락처) | 우(폼) */}
          <article
            className="relative rounded-2xl overflow-hidden
            bg-white/20 backdrop-blur-2xl border border-white/60
            shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.08)]"
          >
            <div className="absolute inset-x-0 top-0 h-24 rounded-t-2xl bg-gradient-to-b from-white/60 via-white/25 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* 좌측: 연락처 정보 */}
              <div className="p-8 md:p-10 lg:border-r border-white/30">
                <h2 className="text-2xl font-bold text-slate-800 mb-8">
                  Get in touch
                </h2>

                <div className="space-y-6 text-slate-600">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:yoonjungjoo@skku.edu"
                      className="hover:text-sky-600 transition-colors"
                    >
                      yoonjungjoo@skku.edu
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">
                      Address
                    </p>
                    <address className="not-italic leading-relaxed">
                      Department of Digital Health, SAIHST,
                      <br />
                      Samsung Medical Center, Sungkyunkwan University
                      <br />
                      Irwon-ro 115, A-8th floor, Gangnam-gu
                      <br />
                      Seoul, South Korea 06355
                    </address>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-3">
                      We are hiring
                    </p>
                    <Link
                      href="https://www.notion.so/yooniejoo/2026-GENNIE-Lab-22d4a3cc731480369dbbd2c2db2e8448"
                      className="inline-flex items-center gap-1 text-sky-600 font-medium hover:underline"
                    >
                      Recruitment details
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 우측: 폼 */}
              <div className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-slate-50/80 border border-slate-200/60
                          text-slate-800 placeholder-slate-400
                          focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-300
                          transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-slate-50/80 border border-slate-200/60
                          text-slate-800 placeholder-slate-400
                          focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-300
                          transition-all"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-slate-50/80 border border-slate-200/60
                        text-slate-800 placeholder-slate-400 resize-none
                        focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-300
                        transition-all"
                      placeholder="Write something..."
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="py-3 px-8 rounded-lg font-semibold text-white
                        bg-slate-800 hover:bg-slate-900
                        transition-all duration-300"
                    >
                      Contact us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </article>

          {/* 지도 + 찾아오는 방법 (한 줄) */}
          <section className="mt-8">
            <article
              className="relative rounded-2xl overflow-hidden
              bg-white/20 backdrop-blur-2xl border border-white/60
              shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-16 rounded-t-2xl bg-gradient-to-b from-white/60 via-white/25 to-transparent pointer-events-none z-10" />
              <div className="relative p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                  {/* 찾아오는 방법 */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">
                      Location & How to get here
                    </h2>
                    <div className="space-y-4 text-slate-600 text-sm">
                      <div>
                        <h3 className="font-semibold text-slate-700 mb-2">
                          Address
                        </h3>
                        <address className="not-italic leading-relaxed">
                          Department of Digital Health, SAIHST, Samsung Medical
                          Center, Sungkyunkwan University
                          <br />
                          81 Irwon-ro, Gangnam-gu, Seoul 06351, South Korea
                        </address>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700 mb-2">
                          Transportation
                        </h3>
                        <ul className="space-y-1">
                          <li>
                            • Subway: Irwon Station (Line 3), Exit 1 — about 5
                            min walk
                          </li>
                          <li>
                            • Free shuttle: Irwon Station Exit 1 ↔ Samsung
                            Medical Center
                          </li>
                          <li>
                            • Bus: Various lines to Samsung Medical Center stop
                          </li>
                        </ul>
                      </div>
                      <a
                        href="https://www.google.com/maps/search/Samsung+Medical+Center+Irwon-ro+Gangnam+Seoul"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sky-600 hover:underline font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                  {/* 지도 (작게) - Google Maps 기본 마커만 표시 */}
                  <div className="rounded-xl overflow-hidden border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.3)] h-[200px] lg:h-auto lg:min-h-[200px]">
                    <iframe
                      src="https://maps.google.com/maps?q=Samsung+Medical+Center+Seoul&z=17&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "200px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Samsung Medical Center"
                      className="w-full h-full min-h-[200px]"
                    />
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* We are looking for.. (맨 아래) */}
          <section className="mt-8">
            <article
              className="relative rounded-2xl overflow-hidden
              bg-white/20 backdrop-blur-2xl border border-white/60
              shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-16 rounded-t-2xl bg-gradient-to-b from-white/60 via-white/25 to-transparent pointer-events-none z-10" />

              <div className="relative p-6 md:p-8 lg:p-10">
                {/* Header */}
                <div className="mb-10">
                 
                  <h2 className="mt-3 text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    We are looking for..
                  </h2>
                  <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
                    We are hiring motivated students who are excited about rigorous academic
                    research at the intersection of digital health, genomics, data science,
                    and causal inference.
                  </p>
                  <p className="mt-3 text-sm text-slate-500">
                    Full recruitment details can also be found{" "}
                    <Link
                      href="/notice"
                      className="text-sky-600 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      HERE
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    .
                  </p>
                </div>

                <div className="space-y-10">
                  {/* Academic Background */}
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Academic Background
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Applicants must have either a bachelor&apos;s or master&apos;s degree
                      (expected by 08/2025 or 02/2026) in relevant fields.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-white/60 bg-white/20 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] p-5">
                        <p className="text-sm font-semibold text-slate-800 mb-2">
                          Preferred backgrounds
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Life science, genetics, medicine, cognitive science, or
                          quantitative science backgrounds such as computer science,
                          statistics, physics, or other engineering.
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/60 bg-white/20 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] p-5">
                        <p className="text-sm font-semibold text-slate-800 mb-2">
                          Other Arts & Sciences
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Applicants from other arts and sciences are also welcome if they
                          are equipped with core data science skills, including programming
                          (Python or R) and statistics. For those without prior quantitative
                          analysis experience, we expect strong non-quantitative domain
                          expertise such as psychology, education, or related fields.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Qualities */}
                  <section>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="rounded-xl border border-white/60 bg-white/20 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] p-5">
                        <h3 className="text-base font-bold text-slate-900 mb-2">
                          Great Personality
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Self-motivated, curious, proactive, flexible, mature, kind,
                          generous, collaborative, and independent.
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/60 bg-white/20 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] p-5">
                        <h3 className="text-base font-bold text-slate-900 mb-2">
                          Academic Scholarship
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Observational, reasoning, critical, experimental, creative, and
                          communicative across disciplines.
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/60 bg-white/20 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] p-5">
                        <h3 className="text-base font-bold text-slate-900 mb-2">
                          Commitment
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Dedication to rigorous academic research and a strong work ethic.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Research Interest */}
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      Research Interest
                    </h3>
                    <div className="rounded-xl border border-white/60 bg-white/20 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] p-5">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Applicants should demonstrate clear interest in at least one of the
                        research areas listed below.
                      </p>
                    </div>
                  </section>

                  {/* Expected Skills */}
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      Expected Skills and Experience
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      Students who meet the general requirements and satisfy at least one of
                      the following categories are encouraged to apply. Proficiency in
                      programming (R/Python) and a strong foundation in statistics are
                      essential.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          title: "Category 1 · Coders for Life Sciences",
                          desc: "Proficient in ML/DL with R or Python and interested in applying advanced DL architectures such as Transformers or MAMBA to biomedical or genomics datasets.",
                        },
                        {
                          title: "Category 2 · Causal Inference Specialists",
                          desc: "Interested in causal discovery and inference for treatments, side effects, or disease interactions. Familiarity with propensity score matching, instrumental variables, or DAG-based approaches is needed.",
                        },
                        {
                          title: "Category 3 · DNA Multimodal Data Integrators",
                          desc: "Experienced in omics data and motivated to integrate it with smartwatch, imaging, or EHR data. Understanding of GWAS, PRS, and Mendelian randomization is required.",
                        },
                        {
                          title: "Category 4 · Time-series Data Analysts",
                          desc: "Experienced in or motivated to analyze time-series and temporal data for smart health applications.",
                        },
                        {
                          title: "Category 5 · Sociogenomists",
                          desc: "Interested in the influence of Social Determinants of Health (SDH) on human genetics and health outcomes.",
                        },
                      ].map((cat, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-white/60 bg-white/20 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] p-5"
                        >
                          <p className="text-sm font-semibold text-slate-900 mb-2">
                            {cat.title}
                          </p>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {cat.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Language */}
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      Language Proficiency
                    </h3>
                    <div className="rounded-xl border border-white/60 bg-white/20 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] p-5">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Proficiency in English for academic communication, both written and
                        verbal, is required. Examples include TOEIC 800+, TOEFL iBT 90+, or
                        equivalent ability in reading and writing academic papers in English.
                      </p>
                    </div>
                  </section>

                  {/* Application */}
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Application</h3>

                    <div className="rounded-2xl border border-white/60 bg-white/25 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.05)] p-5 md:p-6">
                      <p className="text-sm font-semibold text-slate-900 mb-2">
                        First come, first served
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Spots are limited and applications will be accepted on a rolling
                        basis.
                      </p>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Please apply by emailing{" "}
                        <a
                          href="mailto:yoonjungjoo@skku.edu"
                          className="text-sky-600 font-semibold hover:underline"
                        >
                          yoonjungjoo@skku.edu
                        </a>
                        .
                      </p>

                      <div>
                        <p className="text-sm font-semibold text-slate-800 mb-3">
                          Required documents
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                          {[
                            "CV / Resume",
                            "Personal statement (any format)",
                            "Official English proficiency test score",
                            "Official undergrad / grad transcripts",
                          ].map((item, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 rounded-lg bg-white/30 backdrop-blur-sm border border-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.4)] px-3 py-3"
                            >
                              <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
