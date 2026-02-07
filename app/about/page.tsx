import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { CTASection } from "@/components/cta-section";
import { Target, Lightbulb, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "회사 소개",
  description:
    "함께봄은 AI 기술로 영상 제작, 교육, 마케팅 서비스를 제공하는 전문 기업입니다.",
};

const values = [
  {
    icon: Target,
    title: "목표 지향",
    description: "클라이언트의 비즈니스 목표 달성에 집중합니다.",
  },
  {
    icon: Lightbulb,
    title: "혁신 추구",
    description: "최신 AI 기술을 끊임없이 연구하고 적용합니다.",
  },
  {
    icon: Users,
    title: "협업 중심",
    description: "고객과 긴밀하게 소통하며 최적의 솔루션을 만듭니다.",
  },
  {
    icon: Heart,
    title: "진정성",
    description: "함께 성장하는 파트너십을 지향합니다.",
  },
];

const team = [
  {
    name: "대표",
    role: "CEO / AI 전략",
    description: "AI 비즈니스 기획 및 전략 총괄",
  },
  {
    name: "영상팀 리드",
    role: "AI 영상 프로듀서",
    description: "AI 기반 영상 제작 및 편집 전문",
  },
  {
    name: "교육팀 리드",
    role: "AI 교육 디렉터",
    description: "기업 맞춤 AI 교육 프로그램 설계",
  },
  {
    name: "마케팅팀 리드",
    role: "AI 마케팅 전략가",
    description: "데이터 기반 AI 마케팅 캠페인 기획",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionHeader
            badge="About Us"
            title="함께봄을 소개합니다"
            description="AI 기술의 가능성을 사업 현장에 연결합니다. 함께봄은 영상 제작, 교육, 마케팅 분야에서 AI를 활용해 클라이언트의 비즈니스 성장을 돕는 전문 기업입니다."
          />
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader badge="핵심 가치" title="우리가 일하는 방식" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {v.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader badge="팀" title="전문가 팀이 함께합니다" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    {member.name[0]}
                  </div>
                  <h3 className="mt-4 font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="함께봄과 함께 시작하세요"
        description="AI 전문가가 당신의 사업에 맞는 최적의 솔루션을 제안해드립니다."
      />
    </>
  );
}
