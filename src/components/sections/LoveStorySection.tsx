import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function LoveStorySection() {
  const textRef = useIntersectionObserver();
  const imgRef = useIntersectionObserver();

  return (
    <section id="story" className="pt-24 md:pt-32 pb-10 md:pb-12 px-6 bg-white flex justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div 
          ref={imgRef} 
          className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none fade-up-element"
        >
          {/* Champagne gold mat frame — leading-[0] eliminates inline descender gap */}
          <div className="relative z-10 w-full h-full p-3 leading-[0] bg-[#C8A46A]/20 border border-[#C8A46A]/60 rounded-sm shadow-[0_8px_40px_rgba(200,164,106,0.2)]">
            <img 
              <img
              src="/gallery/hands-embrace.jpg" 
              alt="Beauty and Gift holding hands" 
              className="block w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 rounded-sm"
            />
          </div>
        </div>

        <div ref={textRef} className="flex flex-col items-start fade-up-element text-left">
          <p className="font-sans text-primary text-xs tracking-[0.2em] uppercase mb-6 delay-100">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-primary font-light mb-8 delay-200">
            Forged in Valor.
          </h2>
          
          <p className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed tracking-wide mb-6 delay-300">
            Our paths crossed in the most unlikely of places — on the front lines, serving our country in the fight against terrorism. Amidst the chaos and the profound gravity of our mission, we found a quiet strength in each other. 
          </p>
          
          <p className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed tracking-wide mb-10 delay-400">
            What began as camaraderie turned into an unbreakable bond. We learned that the deepest love is forged in fires of adversity, and that together, we could weather any storm.
          </p>

          <blockquote className="border-l-2 border-secondary pl-6 py-2 delay-500">
            <p className="font-serif text-2xl md:text-3xl text-primary italic mb-4">
              "A cord of three strands is not quickly broken."
            </p>
            <footer className="font-sans text-xs tracking-[0.2em] text-secondary uppercase">
              Ecclesiastes 4:12
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
