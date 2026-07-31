import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Navigation() {
  const scrollY = useScroll();
  const isScrolled = scrollY > 50;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
      <nav
        className={cn(
          "flex items-center gap-6 md:gap-10 rounded-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] nav-glass",
          isScrolled ? "px-6 py-3 shadow-lg" : "px-8 py-5"
        )}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="w-10 h-10 flex-shrink-0 rounded-full ring-2 ring-[#C8A46A]/70 ring-offset-2 ring-offset-primary/80 shadow-[0_0_16px_rgba(200,164,106,0.4)] transition-transform duration-500 hover:scale-105 hover:opacity-80"
          aria-label="Home"
        >
          <img src="/gallery/Engagement3.png" alt="B&G Logo" className="block w-full h-full object-contain rounded-full" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {["Story", "Gallery", "Details", "Request"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase hover:text-secondary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
