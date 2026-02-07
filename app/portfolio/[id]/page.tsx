import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ArrowLeft } from "lucide-react";

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

  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            포트폴리오 목록
          </Link>

          <div className="mt-6">
            <Badge
              variant="secondary"
              className={
                item.category === "video"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-orange-100 text-orange-800"
              }
            >
              {item.category === "video" ? "영상" : "마케팅"}
            </Badge>
            <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
              {item.title}
            </h1>
            <p className="mt-1 text-muted-foreground">{item.client}</p>
          </div>

          {/* Media placeholder */}
          <div className="mt-8 aspect-video rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
            미디어 준비 중
          </div>

          <p className="mt-6 text-muted-foreground">{item.description}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold text-destructive">과제</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.challenge}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold text-primary">솔루션</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.solution}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold text-secondary-foreground">결과</h3>
                <p className="mt-2 text-sm font-medium text-primary">
                  {item.result}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/contact">비슷한 프로젝트 문의하기</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
