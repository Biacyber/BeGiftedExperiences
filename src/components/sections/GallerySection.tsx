import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { GalleryCarousel } from "@/components/sections/GalleryCarousel";

const images = [
  { src: "/gallery/proposal.jpg", alt: "The proposal beneath the rose arch" },
  { src: "/gallery/laughing-embrace.jpg", alt: "Beauty and Gift sharing a laugh" },
  { src: "/gallery/gallery-6.jpg", alt: "Engagement moment" },
  { src: "/gallery/hands-embrace.jpg", alt: "A quiet embrace" },
  { src: "/gallery/gallery-7.jpg", alt: "Engagement moment" },
  { src: "/gallery/night-embrace.jpg", alt: "Beneath the city lights" },
  { src: "/gallery/gallery-8.jpg", alt: "Engagement moment" }
];

export function GallerySection() {
  const ref = useIntersectionObserver();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="pt-10 md:pt-12 pb-24 md:pb-32 px-6 bg-white flex justify-center items-center">
      <div ref={ref} className="max-w-6xl mx-auto w-full fade-up-element">
        <div className="text-center mb-3 md:mb-4 delay-100">
          <p className="font-sans text-primary text-xs tracking-[0.2em] uppercase mb-6">
            Gallery
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-primary font-light">
            Moments Along the Way
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 delay-200">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`flex bg-[#C8A46A]/25 border border-[#C8A46A]/55 p-[5px] rounded-sm shadow-[0_4px_20px_rgba(200,164,106,0.18)] ${
                index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open photo: ${image.alt}`}
                className="relative w-full h-full overflow-hidden rounded-sm group leading-[0] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="block w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </button>
            </div>
          ))}
        </div>

        {/* Carousel — 5 new photos, 3 visible at a time */}
        <GalleryCarousel />
      </div>

      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-4xl w-[92vw] bg-[#C8A46A]/20 border border-[#C8A46A]/60 p-3 sm:p-3 max-h-[90vh] shadow-[0_0_60px_rgba(200,164,106,0.25)]">
          <DialogTitle className="sr-only">
            {activeIndex !== null ? images[activeIndex].alt : "Gallery photo"}
          </DialogTitle>
          {activeIndex !== null && (
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-sm animate-in fade-in zoom-in-95 duration-500"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
