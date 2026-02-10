import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Video, Megaphone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "사업영역",
  description:
    "함께봄의 AI 영상 제작, 디지털 마케팅, 미래 교육 서비스를 소개합니다.",
};

const services = [
  {
    icon: Video,
    title: "AI 영상 제작",
    description:
      "최첨단 AI 기술을 활용하여 상상을 현실로 만드는 영상 콘텐츠를 제작합니다. 기업 홍보, 제품 소개, SNS 콘텐츠까지 빠르고 효율적으로.",
    features: ["AI 나레이션 & 자막", "모션그래픽 자동 생성", "3D 렌더링", "숏폼 최적화"],
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2940&auto=format&fit=crop",
    href: "/services/video",
  },
  {
    icon: Megaphone,
    title: "디지털 마케팅",
    description:
      "데이터 기반의 전략적 마케팅 솔루션으로 고객의 브랜드 가치를 극대화합니다. AI가 분석하고, 전문가가 전략을 세웁니다.",
    features: ["SNS 콘텐츠 자동 생성", "퍼포먼스 마케팅", "타겟 분석 & A/B 테스트", "SEO 최적화"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    href: "/services/marketing",
  },
  {
    icon: GraduationCap,
    title: "미래 교육",
    description:
      "미래 시대를 이끌어갈 인재를 양성하는 혁신적인 교육 프로그램을 제공합니다. 실무에 바로 적용할 수 있는 실습 중심 커리큘럼.",
    features: ["ChatGPT 활용 교육", "업무 자동화 실습", "AI 전략 워크숍", "맞춤 커리큘럼"],
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop",
    href: "/services/education",
  },
];

/* Per-service visual gradients and accent colors (replace Unsplash) */
const serviceVisuals = [
  { gradient: "from-brand-500/20 via-brand-400/10 to-cyan-500/20", accent: "brand", pattern: "dot-pattern" },
  { gradient: "from-seal-500/20 via-seal-400/10 to-orange-500/20", accent: "seal", pattern: "grid-pattern" },
  { gradient: "from-ink-500/20 via-blue-400/10 to-brand-500/20", accent: "ink", pattern: "dot-pattern" },
];

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-ink-900 to-ink-950" />
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-500/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-seal-500/15 rounded-full blur-[80px]" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-brand-400 font-bold tracking-wider uppercase text-sm border border-brand-500/30 rounded-full px-4 py-1.5 bg-brand-500/10 backdrop-blur-sm">
              사업영역
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              사람과 기술이<br /><span className="text-gradient">함께 만드는 미래</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
              함께봄은 AI 기술과 창의적인 아이디어를 결합하여
              새로운 가치를 창출하고 더 나은 세상을 만들어갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="space-y-28 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const visual = serviceVisuals[index];
              return (
                <div
                  key={service.title}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 lg:gap-16 items-center`}
                >
                  {/* Visual block — CSS gradient + pattern + icon (no Unsplash) */}
                  <div className="flex-1 w-full">
                    <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br ${visual.gradient} border border-ink-100`}>
                      <div className={`absolute inset-0 ${visual.pattern} opacity-[0.15]`} />
                      {/* Decorative blurred orb */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/30 rounded-full blur-[60px]" />
                      {/* Large centered icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl shadow-ink-900/10">
                          <service.icon className="h-12 w-12 text-brand-600" />
                        </div>
                      </div>
                      {/* Number badge */}
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-sm font-bold text-ink-800 shadow-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/20">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-ink-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-ink-700"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 shrink-0">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                          </span>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Link href={service.href}>
                        자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
