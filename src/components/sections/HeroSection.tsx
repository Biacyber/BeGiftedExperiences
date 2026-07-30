import heroCoupleJpg from "@assets/gallery/laughing-embrace.jpg";
import crestPng from "@assets/gallery/crest.png";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-foreground">
      {/* Background Image with parallax feel */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-out scale-105"
          style={{ 
            backgroundImage: `url(${heroCoupleJpg})`,
          }}
        />
        <div className="absolute inset-0 bg-foreground/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-primary/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-16">
        <img
          src={crestPng}
          alt="BeGifted crest"
          className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 rounded-full shadow-[0_0_40px_rgba(200,164,106,0.35)] ring-2 ring-[#C8A46A]/70 ring-offset-2 ring-offset-primary/60 animate-in fade-in duration-1000 delay-100 fill-mode-both"
        />
        <p className="font-sans text-secondary text-sm tracking-[0.3em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          You are invited
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-background font-light leading-tight tracking-tight mb-2 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 fill-mode-both">
          Beauty <span className="italic text-secondary mx-2">&</span> Gift
        </h1>
        <p className="font-sans text-background/80 text-sm md:text-base tracking-[0.1em] uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-both mt-3 max-w-md">
          The BeGifted Experience
        </p>

        <div className="mt-7 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-[600ms] fill-mode-both">
          <Button
            onClick={() => {
              const el = document.getElementById("request");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#C8A46A] text-[#651C28] hover:bg-[#b8944a] border-0 font-sans tracking-[0.18em] text-sm uppercase px-9 py-3 font-semibold shadow-[0_4px_32px_rgba(200,164,106,0.55)] transition-all duration-300"
          >
            Request Invitation
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-1000 fill-mode-both flex flex-col items-center gap-4">
          <span className="w-px h-12 bg-gradient-to-b from-secondary to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
