import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import abstractBg from "@assets/gallery/night-embrace.jpg";

export function DetailsSection() {
  const ref = useIntersectionObserver();

  return (
    <section id="details" className="relative py-20 px-6 flex justify-center items-center overflow-hidden min-h-[80vh]">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url(${abstractBg})` }}
        />
        <div className="absolute inset-0 bg-foreground/90 mix-blend-multiply" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center fade-up-element">
        <p className="font-sans text-secondary text-xs tracking-[0.2em] uppercase mb-8 delay-100">
          The Celebration
        </p>
        
        <h2 className="font-serif text-4xl md:text-6xl text-background font-light mb-16 delay-200">
          Traditional Marriage Rites
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-16 delay-300">
          <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-secondary/20 pb-8 md:pb-0 md:pr-8">
            <span className="font-sans text-secondary text-xs tracking-[0.2em] uppercase mb-4">When</span>
            <span className="font-serif text-2xl text-background mb-2">Friday, 28 August</span>
            <span className="font-serif text-xl text-background/80 italic">2026</span>
            <span className="font-sans text-sm text-background mt-4 tracking-widest">2:00 PM Prompt</span>
          </div>

          <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-secondary/20 pb-8 md:pb-0 md:pr-8 md:px-8">
            <span className="font-sans text-secondary text-xs tracking-[0.2em] uppercase mb-4">Where</span>
            <span className="font-serif text-2xl text-background mb-2">NAOWA</span>
            <span className="font-serif text-xl text-background/80 italic">National Secretariat</span>
            <span className="font-sans text-sm text-background/60 mt-4 tracking-wide text-center">Asokoro, Abuja</span>
          </div>

          <div className="flex flex-col items-center md:pl-8">
            <span className="font-sans text-secondary text-xs tracking-[0.2em] uppercase mb-4">Attire</span>
            <span className="font-serif text-2xl text-background mb-2">Traditional</span>
            <span className="font-serif text-xl text-background/80 italic">Elegance</span>
            <span className="font-sans text-xs text-background/60 mt-4 tracking-widest">Burgundy • White • Champagne Gold</span>
          </div>
        </div>

        <div className="delay-400">
          <Button asChild variant="secondary" className="px-10 lowercase" style={{ textTransform: 'none' }}>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=9.094490878815833,7.525882234028479" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tracking-wide"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Navigate with Google Maps
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
