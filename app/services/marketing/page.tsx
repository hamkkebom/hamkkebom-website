import type { Metadata } from "next";
import { Megaphone } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "AI 마케팅",
  description:
    "AI 기반 타겟 분석, 콘텐츠 자동 생성, 성과 최적화로 마케팅 효율을 극대화합니다.",
};

const process = [
  { step: "01", title: "분석 & 전략", description: "시장, 경쟁사, 타겟을 AI로 분석하고 전략을 수립합니다." },
  { step: "02", title: "콘텐츠 제작", description: "AI로 텍스트, 이미지, 영상 콘텐츠를 생성합니다." },
  { step: "03", title: "캠페인 운영", description: "광고 집행 및 채널 운영을 관리합니다." },
  { step: "04", title: "성과 분석", description: "데이터 기반 성과를 분석하고 최적화합니다." },
];

const types = [
  {
    title: "SNS 마케팅",
    description: "AI 기반 SNS 콘텐츠 제작 및 운영",
    features: ["콘텐츠 자동 생성", "최적 포스팅 시간 분석", "인게이지먼트 최적화"],
  },
  {
    title: "퍼포먼스 마케팅",
    description: "데이터 기반 광고 운영 및 최적화",
    features: ["타겟 분석", "A/B 테스트", "ROAS 최적화"],
  },
  {
    title: "콘텐츠 마케팅",
    description: "SEO 최적화된 콘텐츠 전략",
    features: ["키워드 분석", "블로그/뉴스레터", "SEO 최적화"],
  },
];

const pricing = [
  {
    name: "Starter",
    price: "150만원/월~",
    description: "소규모 비즈니스",
    features: ["SNS 1채널", "월 10건 콘텐츠", "월간 리포트"],
  },
  {
    name: "Growth",
    price: "300만원/월~",
    description: "성장 단계 기업",
    features: ["SNS 3채널", "월 30건 콘텐츠", "광고 운영", "주간 리포트"],
  },
  {
    name: "Enterprise",
    price: "맞춤 견적",
    description: "대규모 캠페인",
    features: ["전 채널 통합", "무제한 콘텐츠", "전담 매니저", "실시간 대시보드"],
  },
];

const faqs = [
  {
    question: "AI 마케팅은 기존 마케팅 대행과 무엇이 다른가요?",
    answer:
      "AI를 활용해 콘텐츠 제작 속도를 높이고, 데이터 분석으로 타겟팅 정확도를 극대화합니다. 사람의 전략적 판단과 AI의 효율이 결합됩니다.",
  },
  {
    question: "어떤 플랫폼을 지원하나요?",
    answer:
      "인스타그램, 유튜브, 네이버 블로그, 카카오, 페이스북 등 주요 국내 플랫폼을 모두 지원합니다.",
  },
  {
    question: "최소 계약 기간이 있나요?",
    answer:
      "기본 3개월 계약을 권장하지만, 1개월 단위 계약도 가능합니다. 성과를 확인하시려면 최소 3개월을 추천드립니다.",
  },
  {
    question: "기존 마케팅과 병행할 수 있나요?",
    answer:
      "네, 기존 마케팅 팀이나 대행사와 협업하여 AI 부분만 담당하는 것도 가능합니다.",
  },
];

export default function MarketingServicePage() {
  return (
    <ServicePageLayout
      icon={Megaphone}
      badge="마케팅"
      slug="marketing"
      title="AI 마케팅"
      description="AI 기반 타겟 분석과 콘텐츠 자동 생성으로 마케팅 효율을 극대화합니다."
      process={process}
      types={types}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
