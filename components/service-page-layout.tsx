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

      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-7 w-7" />
          </div>
          <SectionHeader badge={badge} title={title} description={description} />
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader badge="프로세스" title="진행 과정" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="mt-3 font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader badge="유형" title="서비스 범위" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((type) => (
              <Card key={type.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{type.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {type.description}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {type.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            badge="요금"
            title="요금 가이드"
            description="프로젝트 규모와 요구사항에 따라 맞춤 견적을 제안해드립니다."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((tier) => (
              <Card key={tier.name}>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{tier.name}</h3>
                  <div className="mt-2 text-2xl font-bold text-primary">
                    {tier.price}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeader badge="FAQ" title="자주 묻는 질문" />
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
