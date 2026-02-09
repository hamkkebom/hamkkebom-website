import { HeroSection } from "@/components/main/hero-section";
import { BusinessSection } from "@/components/main/business-section";
import { ValuesSection } from "@/components/main/values-section";
import { NewsSection } from "@/components/main/news-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <BusinessSection />
      <ValuesSection />
      <NewsSection />
    </div>
  );
}
