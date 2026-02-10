import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

// 임시 데이터 (Supabase 연동 전)
const portfolioItems: Record<
  string,
  {
    title: string;
    category: string;
    client: string;
    description: string;
    challenge: string;
    solution: string;
    result: string;
    image: string;
  }
> = {
  "ai-brand-video": {
    title: "스타트업 A사 브랜드 영상",
    category: "video",
    client: "스타트업 A사",
    description: "AI 나레이션과 모션그래픽을 활용한 3분짜리 브랜드 소개 영상",
    challenge:
      "짧은 기간 내에 투자 유치를 위한 고퀄리티 브랜드 영상이 필요했습니다. 기존 제작사 견적은 예산을 초과했습니다.",
    solution:
      "AI 나레이션과 자동 모션그래픽 생성을 활용해 제작 기간을 2주로 단축하고, 비용을 60% 절감했습니다.",
    result: "유튜브 조회수 50만 달성, 투자 문의 200% 증가",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2940&auto=format&fit=crop",
  },
  "ai-sns-campaign": {
    title: "이커머스 C사 SNS 캠페인",
    category: "marketing",
    client: "이커머스 C사",
    description: "AI 콘텐츠 자동 생성으로 인스타그램 캠페인 운영",
    challenge:
      "소규모 마케팅 팀으로 매일 SNS 콘텐츠를 제작하는 것이 부담이었습니다.",
    solution:
      "AI 콘텐츠 자동 생성 시스템을 구축하고, 최적 포스팅 시간 분석으로 인게이지먼트를 극대화했습니다.",
    result: "팔로워 300% 증가, ROAS 4.2배 달성",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  "ai-product-video": {
    title: "제조업 D사 제품 소개 영상",
    category: "video",
    client: "제조업 D사",
    description: "AI 3D 렌더링을 활용한 신제품 소개 영상 시리즈",
    challenge:
      "실물 촬영이 어려운 제품을 매력적으로 보여줄 방법이 필요했습니다.",
    solution:
      "AI 3D 렌더링과 가상 환경 배경을 활용해 실감 나는 제품 소개 영상을 제작했습니다.",
    result: "영업 미팅 전환율 35% 향상",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
  },
  "ai-performance-marketing": {
    title: "쇼핑몰 E사 퍼포먼스 마케팅",
    category: "marketing",
    client: "쇼핑몰 E사",
    description: "AI 타겟 분석 기반 메타 광고 최적화",
    challenge:
      "광고비 대비 전환율이 낮아 수익성이 떨어지고 있었습니다.",
    solution:
      "AI 타겟 분석으로 핵심 고객을 세분화하고, 광고 소재 A/B 테스트를 자동화했습니다.",
    result: "CPA 40% 절감, 매출 2배 성장",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
  },
};

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = portfolioItems[params.id];
  if (!item) return { title: "포트폴리오" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default function PortfolioDetailPage({ params }: PageProps) {
  const item = portfolioItems[params.id];
  if (!item) notFound();

  const categoryLabel = item.category === "video" ? "영상 제작" : "마케팅";

  return (
    <>
      {/* Hero with image */}
      <section className="relative bg-ink-900 py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/50 to-ink-900" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/15 rounded-full blur-[120px]" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm text-ink-400 transition-colors hover:text-brand-400 mb-6 group"
            >
              <ArrowLeft className="mr-1.5 h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
              포트폴리오 목록
            </Link>
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold border ${
              item.category === "video"
                ? "bg-brand-500/15 text-brand-300 border-brand-500/30"
                : "bg-seal-500/15 text-seal-300 border-seal-500/30"
            }`}>
              {categoryLabel}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {item.title}
            </h1>
            <p className="mt-3 text-ink-400 text-lg font-medium">{item.client}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Project Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-12 border border-ink-100/50">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg text-ink-700 leading-relaxed mb-14">
              {item.description}
            </p>

            {/* Challenge / Solution / Result */}
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="relative p-6 rounded-2xl bg-seal-light/70 border border-seal-200/80 overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-seal-500 to-seal-400" />
                <h3 className="font-bold text-seal-700 flex items-center gap-2 mb-3 mt-1">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-seal-500/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-seal-500" />
                  </span>
                  과제
                </h3>
                <p className="text-sm text-ink-700 leading-relaxed">
                  {item.challenge}
                </p>
              </div>
              <div className="relative p-6 rounded-2xl bg-brand-light/70 border border-brand-200/80 overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-400" />
                <h3 className="font-bold text-brand-700 flex items-center gap-2 mb-3 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-brand-600" />
                  솔루션
                </h3>
                <p className="text-sm text-ink-700 leading-relaxed">
                  {item.solution}
                </p>
              </div>
              <div className="relative p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                <h3 className="font-bold text-blue-700 flex items-center gap-2 mb-3 mt-1">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  </span>
                  결과
                </h3>
                <p className="text-sm font-semibold text-blue-800 leading-relaxed">
                  {item.result}
                </p>
              </div>
            </div>

            <div className="mt-14 text-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Link href="/contact">
                  비슷한 프로젝트 문의하기 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
