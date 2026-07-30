import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { LoveStorySection } from "@/components/sections/LoveStorySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { DetailsSection } from "@/components/sections/DetailsSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { RequestSection } from "@/components/sections/RequestSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-[100dvh] flex flex-col">
      <Navigation />
      <HeroSection />
      <LoveStorySection />
      <GallerySection />
      <DetailsSection />
      <CountdownSection />
      <RequestSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}
