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
      <section className="relative bg-slate-900 py-28 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-slate-900/80" />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30">
              <Icon className="h-8 w-8" />
            </div>
            <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm">
              {badge}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <SectionHeader badge="프로세스" title="진행 과정" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.step} className="relative group">
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[60%] w-full h-px bg-gradient-to-r from-emerald-300 to-slate-200" />
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-sm font-bold text-white relative z-10 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <SectionHeader badge="서비스 유형" title="서비스 범위" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((type) => (
              <Card key={type.title} className="border-0 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <div className="h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900">{type.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {type.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {type.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <Check className="h-4 w-4 text-emerald-500 shrink-0" />
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
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <SectionHeader
            badge="요금"
            title="요금 안내"
            description="프로젝트 규모와 요구사항에 따라 맞춤 견적을 제안해드립니다."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((tier, index) => (
              <Card
                key={tier.name}
                className={`border-0 shadow-sm relative overflow-hidden hover:-translate-y-1 transition-all duration-300 ${
                  index === 1
                    ? "ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/10"
                    : "hover:shadow-lg"
                }`}
              >
                {index === 1 && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">추천</span>
                    </div>
                  </>
                )}
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                  <div className="mt-3 text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {tier.price}
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <Check className="h-4 w-4 text-emerald-500 shrink-0" />
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
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <SectionHeader badge="FAQ" title="자주 묻는 질문" />
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:text-emerald-600 transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-5">
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
