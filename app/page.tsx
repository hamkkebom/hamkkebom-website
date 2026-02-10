import { HeroSection } from "@/components/main/hero-section";
import { BusinessSection } from "@/components/main/business-section";
import { PortfolioHighlightSection } from "@/components/main/portfolio-highlight-section";
import { ValuesSection } from "@/components/main/values-section";
import { StatsSection } from "@/components/main/stats-section";
import { TestimonialsSection } from "@/components/main/testimonials-section";
import { NewsSection } from "@/components/main/news-section";
import { CTASection } from "@/components/main/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <BusinessSection />
      <PortfolioHighlightSection />
      <ValuesSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsSection />
      <CTASection />
    </div>
  );
}
