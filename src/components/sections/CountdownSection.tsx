import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function CountdownSection() {
  const ref = useIntersectionObserver();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // 28 August 2026 2:00 PM WAT
    const targetDate = new Date('2026-08-28T14:00:00+01:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background border-y border-primary/5 flex justify-center items-center">
      <div ref={ref} className="max-w-4xl mx-auto w-full px-6 flex flex-col items-center fade-up-element">
        <p className="font-sans text-primary text-xs tracking-[0.2em] uppercase mb-12 delay-100">
          Awaiting The Moment
        </p>
        
        <div className="flex justify-center gap-8 md:gap-16 lg:gap-24 w-full delay-200">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary font-light mb-4 w-[2ch] text-center tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="font-sans text-xs text-muted-foreground tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
  );
}
