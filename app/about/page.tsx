import type { Metadata } from "next";
import Image from "next/image";
import { Target, Lightbulb, Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "회사 소개",
  description:
    "함께봄은 AI 기술로 영상 제작, 교육, 마케팅 서비스를 제공하는 전문 기업입니다.",
};

const values = [
  {
    icon: Target,
    title: "목표 지향",
    description: "클라이언트의 비즈니스 목표 달성에 집중하며, 성과로 보답합니다.",
  },
  {
    icon: Lightbulb,
    title: "혁신 추구",
    description: "최신 AI 기술을 끊임없이 연구하고 실무에 적용합니다.",
  },
  {
    icon: Users,
    title: "협업 중심",
    description: "고객과 긴밀하게 소통하며 최적의 솔루션을 만듭니다.",
  },
  {
    icon: Heart,
    title: "진정성",
    description: "함께 성장하는 진정한 파트너십을 지향합니다.",
  },
];

const milestones = [
  { year: "2023", event: "함께봄 설립, AI 영상 제작 사업 시작" },
  { year: "2023", event: "첫 기업 고객 AI 교육 프로그램 운영" },
  { year: "2024", event: "AI 마케팅 대행 서비스 런칭" },
  { year: "2024", event: "누적 프로젝트 50건 달성" },
  { year: "2025", event: "정산 · 실시간 확인 시스템 구축" },
  { year: "2025", event: "통합 AI 솔루션 플랫폼 확장" },
];

const team = [
  {
    name: "대표",
    role: "CEO / AI 전략",
    description: "AI 비즈니스 기획 및 전략 총괄. 데이터 기반의 의사결정으로 팀을 이끕니다.",
  },
  {
    name: "영상팀 리드",
    role: "AI 영상 프로듀서",
    description: "AI 기반 영상 제작 및 편집 전문. 창의적 비주얼 스토리텔링을 설계합니다.",
  },
  {
    name: "교육팀 리드",
    role: "AI 교육 디렉터",
    description: "기업 맞춤 AI 교육 프로그램 설계. 실무 역량 강화에 집중합니다.",
  },
  {
    name: "마케팅팀 리드",
    role: "AI 마케팅 전략가",
    description: "데이터 기반 AI 마케팅 캠페인 기획. 성과 최적화를 추구합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
            alt="함께봄 팀"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm">
              회사 소개
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              나란히 걷다,<br />마침내 봄
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              AI 기술의 가능성을 사업 현장에 연결합니다. 함께봄은 영상 제작, 교육, 마케팅 분야에서 
              AI를 활용해 클라이언트의 비즈니스 성장을 돕는 전문 기업입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm">
              핵심 가치
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              우리가 일하는 방식
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm">
              연혁
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              성장의 발자취
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold shrink-0">
                    {m.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-slate-200 my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-base font-medium text-slate-900 pt-2">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm">
              팀
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              전문가 팀이 함께합니다
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-2xl font-bold text-white shadow-lg">
                  {member.name[0]}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm text-emerald-600 font-medium">{member.role}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop"
            alt="사무실"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              기술과 사람이 조화로운<br />세상을 만듭니다
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              함께봄은 AI의 힘을 빌려 모든 비즈니스가 더 스마트하게 성장할 수 있도록 돕겠습니다.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8"
            >
              <Link href="/contact">
                프로젝트 문의하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
