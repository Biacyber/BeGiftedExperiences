import crestPng from "@assets/gallery/crest.png";

export function Footer() {
  return (
    <footer className="bg-foreground py-6 px-6 flex flex-col items-center justify-center text-center text-background gap-3">
      <img
        src="/gallery/Engagement3.png"
        alt="BeGifted crest"
        className="block w-12 h-12 rounded-full ring-2 ring-[#C8A46A]/70 ring-offset-2 ring-offset-foreground shadow-[0_0_20px_rgba(200,164,106,0.3)]"
      />
      <h3 className="font-serif text-lg tracking-widest uppercase">
        Beauty <span className="italic text-secondary mx-1 lowercase">&</span> Gift
      </h3>
      <p className="font-sans text-[10px] tracking-[0.3em] text-secondary uppercase">
        28 . 08 . 2026
      </p>
      <p className="font-sans text-background/40 text-[10px] tracking-[0.2em] uppercase">
        #BeGiftedExperience
      </p>
    </footer>
  );
}
