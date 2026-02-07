import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";

export const metadata: Metadata = {
  title: "AI 교육",
  description:
    "사업자를 위한 맞춤 AI 교육. ChatGPT 활용부터 업무 자동화까지 실전 중심 프로그램.",
};

const process = [
  { step: "01", title: "니즈 분석", description: "기업 환경과 교육 목표를 파악합니다." },
  { step: "02", title: "커리큘럼 설계", description: "맞춤형 교육 프로그램을 설계합니다." },
  { step: "03", title: "교육 실시", description: "실습 중심의 교육을 진행합니다." },
  { step: "04", title: "사후 지원", description: "교육 후 Q&A 및 적용 컨설팅을 제공합니다." },
];

const types = [
  {
    title: "AI 기초 교육",
    description: "AI 입문자를 위한 기본 교육",
    features: ["ChatGPT 활용법", "이미지 생성 AI", "업무 효율화 팁"],
  },
  {
    title: "업무 자동화 교육",
    description: "AI로 반복 업무를 자동화하는 방법",
    features: ["업무 프로세스 분석", "자동화 도구 실습", "커스텀 워크플로우"],
  },
  {
    title: "AI 전략 워크숍",
    description: "경영진을 위한 AI 비즈니스 전략",
    features: ["AI 트렌드 분석", "사업 적용 전략", "ROI 분석"],
  },
];

const pricing = [
  {
    name: "소그룹",
    price: "50만원~",
    description: "1~5인 소규모 교육",
    features: ["2시간 교육", "실습 포함", "교재 제공", "1회 사후 Q&A"],
  },
  {
    name: "기업 교육",
    price: "200만원~",
    description: "기업 단체 교육",
    features: ["4시간 교육", "맞춤 커리큘럼", "실습 + 과제", "2주 사후 지원"],
  },
  {
    name: "장기 프로그램",
    price: "맞춤 견적",
    description: "월간/분기 단위 프로그램",
    features: ["정기 교육", "1:1 코칭", "성과 리포트", "지속 사후 지원"],
  },
];

const faqs = [
  {
    question: "AI를 전혀 모르는 사람도 교육이 가능한가요?",
    answer:
      "네, 입문자부터 숙련자까지 수준별 커리큘럼을 운영합니다. 사전 설문을 통해 수준을 파악하고 맞춤 교육을 제공합니다.",
  },
  {
    question: "온라인 교육도 가능한가요?",
    answer:
      "네, 오프라인과 온라인 모두 가능합니다. Zoom 등 화상 도구를 활용해 실시간 실습 교육을 진행합니다.",
  },
  {
    question: "교육 후 추가 지원이 있나요?",
    answer:
      "패키지에 따라 사후 Q&A, 1:1 코칭, 슬랙 채널 지원 등을 제공합니다.",
  },
  {
    question: "커리큘럼을 우리 회사에 맞게 변경할 수 있나요?",
    answer:
      "기업 교육과 장기 프로그램은 100% 맞춤 커리큘럼으로 진행됩니다. 사전 미팅을 통해 최적화합니다.",
  },
];

export default function EducationServicePage() {
  return (
    <ServicePageLayout
      icon={GraduationCap}
      badge="교육"
      slug="education"
      title="AI 교육"
      description="사업자를 위한 실전 중심 AI 교육. 업무에 바로 적용할 수 있는 실습 프로그램을 제공합니다."
      process={process}
      types={types}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
