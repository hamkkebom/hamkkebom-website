import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ServiceType {
  title: string;
  description: string;
  features: string[];
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  icon: LucideIcon;
  badge: string;
  slug: string;
  title: string;
  description: string;
  process: ProcessStep[];
  types: ServiceType[];
  pricing: PricingTier[];
  faqs: FAQ[];
}

export function ServicePageLayout({
  icon: Icon,
  badge,
  slug,
  title,
  description,
  process,
  types,
  pricing,
  faqs,
}: ServicePageProps) {
  return (
    <>
      <ServiceJsonLd
        name={title}
        description={description}
        url={`${SITE_URL}/services/${slug}`}
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero — Dark header with dot pattern */}
      <section className="relative bg-gradient-to-br from-ink-950 via-ink-900 to-brand-900/20 py-32 sm:py-40 overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="dot-pattern absolute inset-0 opacity-[0.03]" />
        {/* Abstract decorative blur circles */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-seal-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[160px]" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500/30 to-brand-600/20 text-brand-400 ring-1 ring-brand-500/30 shadow-lg shadow-brand-500/20 backdrop-blur-sm">
              <Icon className="h-10 w-10" />
            </div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-bold tracking-wider uppercase backdrop-blur-sm">
              {badge}
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <SectionHeader badge="프로세스" title="진행 과정" />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.step} className="relative group">
                {/* Gradient connector line with animated dot */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[60%] w-full h-[2px]">
                    <div className="h-full bg-gradient-to-r from-brand-400 via-brand-300 to-ink-200 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
                  </div>
                )}
                <div className="rounded-2xl p-6 transition-all duration-300 group-hover:bg-brand-50/60 group-hover:shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-base font-bold text-white relative z-10 shadow-lg shadow-brand-500/25 group-hover:scale-110 group-hover:shadow-brand-500/30 transition-all duration-300">
                    {step.step}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-24 sm:py-28 bg-hanji">
        <div className="container px-4 md:px-6">
          <SectionHeader badge="서비스 유형" title="서비스 범위" />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((type) => (
              <Card key={type.title} className="border border-ink-100/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group bg-white/80 backdrop-blur-sm relative">
                {/* Top accent gradient line */}
                <div className="h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-seal-500/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-ink-900 group-hover:text-brand-700 transition-colors duration-300">{type.title}</h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {type.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-ink-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-200">
                          <Check className="h-3 w-3 text-brand-600" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <SectionHeader
            badge="요금"
            title="요금 안내"
            description="프로젝트 규모와 요구사항에 따라 맞춤 견적을 제안해드립니다."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
            {pricing.map((tier, index) => (
              <Card
                key={tier.name}
                className={`relative overflow-hidden transition-all duration-500 ${
                  index === 1
                    ? "border-2 border-brand-500 shadow-2xl shadow-brand-500/15 scale-[1.03] lg:scale-105 z-10 bg-white"
                    : "border border-ink-100/60 shadow-sm hover:shadow-xl hover:-translate-y-2 bg-white"
                }`}
              >
                {index === 1 && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 via-brand-500 to-seal-500/60" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md shadow-brand-500/25">추천</span>
                    </div>
                  </>
                )}
                <CardContent className="p-8 lg:p-10">
                  <h3 className="text-lg font-bold text-ink-900">{tier.name}</h3>
                  <div className="mt-4 text-3xl sm:text-4xl font-bold text-gradient">
                    {tier.price}
                  </div>
                  <p className="mt-3 text-sm text-ink-400 leading-relaxed">
                    {tier.description}
                  </p>
                  <div className="mt-6 h-px bg-gradient-to-r from-ink-100 via-ink-200 to-ink-100" />
                  <ul className="mt-6 space-y-3.5">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-ink-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-200">
                          <Check className="h-3 w-3 text-brand-600" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-28 bg-hanji">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <SectionHeader badge="FAQ" title="자주 묻는 질문" />
            <Accordion type="single" collapsible className="mt-14 space-y-3">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="border border-ink-200/60 rounded-xl bg-white/60 backdrop-blur-sm px-6 data-[state=open]:border-brand-200 data-[state=open]:bg-white data-[state=open]:shadow-md data-[state=open]:shadow-brand-500/5 transition-all duration-300">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-ink-900 hover:text-brand-600 hover:no-underline transition-colors py-5 [&[data-state=open]]:text-brand-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink-500 leading-relaxed text-sm md:text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
