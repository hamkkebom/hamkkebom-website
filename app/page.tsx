import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Video, GraduationCap, Megaphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "AI 영상 제작",
    description:
      "AI 기술을 활용한 고품질 영상 제작. 기업 홍보, 제품 소개, SNS 콘텐츠까지.",
    href: "/services/video",
  },
  {
    icon: GraduationCap,
    title: "AI 교육",
    description:
      "사업자를 위한 맞춤 AI 교육. ChatGPT부터 업무 자동화까지 실전 중심.",
    href: "/services/education",
  },
  {
    icon: Megaphone,
    title: "AI 마케팅",
    description:
      "AI 기반 타겟 분석과 콘텐츠 자동 생성으로 마케팅 효율을 극대화합니다.",
    href: "/services/marketing",
  },
];

const stats = [
  { value: "150+", label: "완료 프로젝트" },
  { value: "98%", label: "고객 만족도" },
  { value: "50+", label: "파트너 기업" },
  { value: "3년+", label: "AI 전문 경력" },
];

const testimonials = [
  {
    quote:
      "함께봄 덕분에 AI 영상 제작을 내재화할 수 있었습니다. 비용 절감 효과가 정말 컸어요.",
    name: "김대표",
    company: "스타트업 A사",
  },
  {
    quote:
      "AI 교육 과정이 실전 중심이라 바로 업무에 적용할 수 있었습니다.",
    name: "이팀장",
    company: "중소기업 B사",
  },
  {
    quote:
      "마케팅 성과가 눈에 띄게 올랐어요. AI 분석 기반이라 효율이 다릅니다.",
    name: "박마케터",
    company: "이커머스 C사",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background py-20 sm:py-28">
        {/* Decorative blobs */}
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <AnimateOnScroll>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              AI 전문 서비스 기업
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              AI로 시작하는
              <br />
              <span className="text-primary">당신의 사업</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
              영상 제작, 교육, 마케팅까지 — 함께봄이 AI 기술로 사업 성장을
              함께합니다.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">무료 상담 신청</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  포트폴리오 보기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            badge="서비스"
            title="AI 전문가가 함께합니다"
            description="영상 제작부터 교육, 마케팅까지 — 비즈니스에 필요한 AI 솔루션을 제공합니다."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.href} delay={i * 100}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold transition-colors group-hover:text-primary">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                        자세히 보기 <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader badge="고객 후기" title="함께봄과 함께한 기업들" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-3 text-2xl text-primary/30">&ldquo;</div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t.quote}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{t.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {t.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
