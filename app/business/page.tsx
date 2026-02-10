import type { Metadata } from "next";
import Image from "next/image";
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

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 via-transparent to-ink-900/80" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-brand-400 font-bold tracking-wider uppercase text-sm">
              사업영역
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              사람과 기술이<br />함께 만드는 미래
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
          <div className="space-y-24 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand-600">
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
                        <span className="h-2 w-2 rounded-full bg-brand-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6"
                  >
                    <Link href={service.href}>
                      자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
