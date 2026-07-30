import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function ClosingSection() {
  const ref = useIntersectionObserver();

  return (
    <section className="py-24 px-6 bg-background flex justify-center items-center relative overflow-hidden">
      {/* Gold "&" watermark */}
      <span
        aria-hidden
        className="absolute font-serif font-light select-none leading-none pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[260px] md:text-[360px]"
        style={{ color: "rgba(200,164,106,0.07)" }}
      >
        &amp;
      </span>

      <div ref={ref} className="relative max-w-xl mx-auto flex flex-col items-center text-center fade-up-element">
        {/* Top ornament */}
        <div className="flex items-center gap-3 mb-10 w-52 delay-100">
          <span className="flex-1 h-px bg-[#C8A46A]/45" />
          <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden>
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="#C8A46A" fillOpacity="0.75" />
          </svg>
          <span className="flex-1 h-px bg-[#C8A46A]/45" />
        </div>

        {/* Quote */}
        <h2 className="font-serif text-3xl md:text-5xl text-primary font-light italic mb-10 delay-200">
          "Your Presence is our greatest gift..."
        </h2>

        {/* B – G monogram */}
        <div className="flex items-center gap-4 mb-10 delay-300">
          <span className="font-serif text-lg text-[#C8A46A] tracking-[0.3em]">B</span>
          <span className="w-8 h-px bg-[#C8A46A]/50" />
          <span className="font-serif text-lg text-[#C8A46A] italic">G</span>
        </div>

        {/* Drop line */}
        <span className="w-px h-12 bg-gradient-to-b from-[#C8A46A]/60 to-transparent mb-6 delay-[350ms]" />

        {/* Date */}
        <p className="font-sans text-[10px] text-[#C8A46A]/65 tracking-[0.45em] uppercase delay-400">
          28 · 08 · 2026
        </p>
      </div>
    </section>
  );
}
