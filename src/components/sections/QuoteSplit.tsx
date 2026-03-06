import Image from "next/image";

export default function QuoteSplit() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-slate-100">
          <Image
            src="/assets/quote-image.jpg"
            alt="Quote visual"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="lg:pl-10">
          <div className="h-full border-l border-slate-200 pl-10">
            <p className="text-slate-500 italic leading-relaxed text-lg">
              &ldquo;I&rsquo;m fascinated by the idea that genetics is digital.
              <br />
              A gene is a long sequence of coded letters, like computer information.
              <br />
              Modern biology is becoming very much
              <br />
              a branch of information technology.&rdquo;
            </p>
            <p className="mt-4 text-slate-500 italic text-lg">- Richard Dawkins</p>
          </div>
        </div>
      </div>

      <div className="mt-16 h-px bg-slate-200" />
    </section>
  );
}

