"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { ArrowRight } from "lucide-react";

// 임시 포트폴리오 데이터 (Supabase 연동 전)
const portfolioItems = [
  {
    id: "ai-brand-video",
    title: "스타트업 A사 브랜드 영상",
    category: "video",
    thumbnail: null,
    description: "AI 나레이션과 모션그래픽을 활용한 3분짜리 브랜드 소개 영상",
    client: "스타트업 A사",
    result: "조회수 50만 달성, 문의 200% 증가",
  },
  {
    id: "ai-sns-campaign",
    title: "이커머스 C사 SNS 캠페인",
    category: "marketing",
    thumbnail: null,
    description: "AI 콘텐츠 자동 생성으로 인스타그램 캠페인 운영",
    client: "이커머스 C사",
    result: "팔로워 300% 증가, ROAS 4.2배",
  },
  {
    id: "ai-product-video",
    title: "제조업 D사 제품 소개 영상",
    category: "video",
    thumbnail: null,
    description: "AI 3D 렌더링을 활용한 신제품 소개 영상 시리즈",
    client: "제조업 D사",
    result: "영업 미팅 전환율 35% 향상",
  },
  {
    id: "ai-performance-marketing",
    title: "쇼핑몰 E사 퍼포먼스 마케팅",
    category: "marketing",
    thumbnail: null,
    description: "AI 타겟 분석 기반 메타 광고 최적화",
    client: "쇼핑몰 E사",
    result: "CPA 40% 절감, 매출 2배 성장",
  },
];

const categories = [
  { value: "all", label: "전체" },
  { value: "video", label: "영상" },
  { value: "marketing", label: "마케팅" },
];

const categoryColors: Record<string, string> = {
  video: "bg-blue-100 text-blue-800",
  marketing: "bg-orange-100 text-orange-800",
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <section className="bg-gradient-to-b from-accent/50 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionHeader
            badge="포트폴리오"
            title="함께봄의 프로젝트"
            description="AI 기술로 완성한 다양한 프로젝트를 확인하세요."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          {/* Filter */}
          <div className="flex gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={filter === cat.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat.value)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {filtered.map((item) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.id}`}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground text-sm">
                    {item.thumbnail ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      "썸네일 준비 중"
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className={categoryColors[item.category]}
                      >
                        {item.category === "video" ? "영상" : "마케팅"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.client}
                      </span>
                    </div>
                    <h3 className="mt-2 font-semibold transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {item.result}
                    </p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                      자세히 보기 <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
