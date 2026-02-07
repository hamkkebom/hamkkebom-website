import type { Metadata } from "next";
import { Video } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "AI 영상 제작",
  description:
    "AI 기술을 활용한 고품질 영상 제작 서비스. 기업 홍보, 제품 소개, SNS 콘텐츠까지.",
};

const process = [
  { step: "01", title: "상담 & 기획", description: "목적과 타겟에 맞는 영상 콘셉트를 기획합니다." },
  { step: "02", title: "스크립트 & AI 생성", description: "AI로 스크립트, 이미지, 보이스를 생성합니다." },
  { step: "03", title: "편집 & 보정", description: "전문 편집자가 AI 결과물을 완성도 높게 다듬습니다." },
  { step: "04", title: "검수 & 납품", description: "피드백 반영 후 최종본을 전달합니다." },
];

const types = [
  {
    title: "기업 홍보 영상",
    description: "브랜드 이미지를 효과적으로 전달하는 홍보 영상",
    features: ["브랜드 스토리텔링", "AI 나레이션", "모션그래픽"],
  },
  {
    title: "제품/서비스 소개",
    description: "제품의 가치를 명확히 보여주는 소개 영상",
    features: ["AI 3D 렌더링", "자동 자막", "다국어 지원"],
  },
  {
    title: "SNS 콘텐츠",
    description: "숏폼 중심의 SNS 최적화 콘텐츠",
    features: ["릴스/숏츠 최적화", "시리즈 제작", "A/B 테스트"],
  },
];

const pricing = [
  {
    name: "Basic",
    price: "100만원~",
    description: "간단한 소개 영상",
    features: ["1분 이내", "AI 나레이션", "기본 편집", "1회 수정"],
  },
  {
    name: "Standard",
    price: "300만원~",
    description: "기업 홍보/제품 소개 영상",
    features: ["3분 이내", "시나리오 기획", "모션그래픽", "2회 수정"],
  },
  {
    name: "Premium",
    price: "맞춤 견적",
    description: "대규모 프로젝트/시리즈",
    features: ["시간 협의", "풀 프로덕션", "다국어", "무제한 수정"],
  },
];

const faqs = [
  {
    question: "AI 영상 제작은 기존 영상 제작과 어떻게 다른가요?",
    answer:
      "AI를 활용하면 이미지 생성, 나레이션, 자막 등을 자동화하여 제작 시간과 비용을 크게 줄일 수 있습니다. 전문 편집자가 최종 퀄리티를 보장합니다.",
  },
  {
    question: "제작 기간은 얼마나 걸리나요?",
    answer:
      "기본 영상은 1~2주, 기업 홍보 영상은 3~4주 정도 소요됩니다. 프로젝트 규모에 따라 달라질 수 있습니다.",
  },
  {
    question: "수정은 몇 번까지 가능한가요?",
    answer:
      "패키지별로 수정 횟수가 다르며, Premium 패키지는 무제한 수정이 가능합니다. 상담 시 상세히 안내드립니다.",
  },
  {
    question: "영상 소스 파일도 받을 수 있나요?",
    answer:
      "네, 요청 시 프로젝트 파일을 포함하여 전달해드립니다. 별도 비용이 발생할 수 있습니다.",
  },
];

export default function VideoServicePage() {
  return (
    <ServicePageLayout
      icon={Video}
      badge="영상 제작"
      slug="video"
      title="AI 영상 제작"
      description="AI 기술로 기업 홍보, 제품 소개, SNS 콘텐츠 영상을 빠르고 효율적으로 제작합니다."
      process={process}
      types={types}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
