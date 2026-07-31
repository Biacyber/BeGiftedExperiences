import { useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const carouselImages = [
  {
    src: "/gallery/gallery-walk.png",
    alt: "Beauty and Gift walking hand in hand",
  },
  {
    src: "/gallery/gallery-dance.png",
    alt: "A tender embrace beneath the sky",
  },
  {
    src: "/gallery/gallery-street.png",
    alt: "Stolen glance on the avenue",
  },
  {
    src: "/gallery/gallery-beauty.png",
    alt: "Beauty — radiant and ready",
  },
  {
    src: "/gallery/gallery-gift.png",
    alt: "Gift — the groom in his element",
  },
];

const TOTAL = carouselImages.length;
const VISIBLE = 3;

export function GalleryCarousel() {
  const [startIdx, setStartIdx] = useState(0);
  const [epoch, setEpoch] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const busy = useRef(false);

  const shift = useCallback((delta: 1 | -1) => {
    if (busy.current) return;

    busy.current = true;

    setStartIdx((prev) => (prev + delta + TOTAL) % TOTAL);
    setEpoch((e) => e + 1);

    setTimeout(() => {
      busy.current = false;
    }, 420);
  }, []);

  const visibleImages = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = (startIdx + i) % TOTAL;
    return { ...carouselImages[idx], absoluteIdx: idx };
  });

  return (
    <div className="mt-10 md:mt-12">
      <div className="text-center mb-6">
        <p className="font-sans text-primary text-xs tracking-[0.2em] uppercase">
          More Moments
        </p>
      </div>

      <div className="relative flex items-center gap-3">
        <button
          type="button"
          onClick={() => shift(-1)}
          aria-label="Previous photos"
          className="flex-none z-10 w-10 h-10 rounded-full flex items-center justify-center border border-[#C8A46A]/60 bg-white/70 backdrop-blur-sm text-[#C8A46A] shadow-[0_0_18px_rgba(200,164,106,0.25)] hover:bg-[#C8A46A]/10 hover:shadow-[0_0_28px_rgba(200,164,106,0.45)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A46A]"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>

        <div className="flex-1 grid grid-cols-3 gap-3 md:gap-4 overflow-hidden">
          {visibleImages.map(({ src, alt, absoluteIdx }, position) => (
            <div
              key={`${epoch}-${position}`}
              className="flex bg-[#C8A46A]/25 border border-[#C8A46A]/55 p-[5px] rounded-sm shadow-[0_4px_20px_rgba(200,164,106,0.18)] aspect-[3/4] animate-in fade-in slide-in-from-bottom-4 duration-400 fill-mode-both"
              style={{ animationDelay: `${position * 60}ms` }}
            >
              <button
                type="button"
                onClick={() => setLightbox(absoluteIdx)}
                aria-label={`Open photo: ${alt}`}
                className="relative w-full h-full overflow-hidden rounded-sm group leading-[0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A46A] focus-visible:ring-offset-2"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="block w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => shift(1)}
          aria-label="Next photos"
          className="flex-none z-10 w-10 h-10 rounded-full flex items-center justify-center border border-[#C8A46A]/60 bg-white/70 backdrop-blur-sm text-[#C8A46A] shadow-[0_0_18px_rgba(200,164,106,0.25)] hover:bg-[#C8A46A]/10 hover:shadow-[0_0_28px_rgba(200,164,106,0.45)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A46A]"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setStartIdx(i);
              setEpoch((e) => e + 1);
            }}
            aria-label={`Go to photo ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === startIdx
                ? "w-5 h-[5px] bg-[#C8A46A]"
                : "w-[5px] h-[5px] bg-[#C8A46A]/35 hover:bg-[#C8A46A]/60"
            }`}
          />
        ))}
      </div>

      <Dialog
        open={lightbox !== null}
        onOpenChange={(open) => !open && setLightbox(null)}
      >
        <DialogContent className="max-w-3xl w-[92vw] bg-[#C8A46A]/20 border border-[#C8A46A]/60 p-3 sm:p-3 max-h-[90vh] shadow-[0_0_60px_rgba(200,164,106,0.25)]">
          <DialogTitle className="sr-only">
            {lightbox !== null
              ? carouselImages[lightbox].alt
              : "Gallery photo"}
          </DialogTitle>

          {lightbox !== null && (
            <img
              src={carouselImages[lightbox].src}
              alt={carouselImages[lightbox].alt}
              className="w-full max-h-[82vh] object-contain rounded-sm animate-in fade-in zoom-in-95 duration-500"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
