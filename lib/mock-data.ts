export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  imageUrl: string;
  slug: string;
}

export const MOCK_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "AI 기반 학습 플랫폼 홍보 영상",
    category: "Video",
    client: "EduTech Corp",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2940&auto=format&fit=crop",
    slug: "edutech-video",
  },
  {
    id: "2",
    title: "스마트 물류 시스템 소개",
    category: "Video",
    client: "LogisOne",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop",
    slug: "logis-intro",
  },
  {
    id: "3",
    title: "친환경 에너지 브랜드 마케팅",
    category: "Marketing",
    client: "EcoEnergy",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
    slug: "eco-marketing",
  },
  {
    id: "4",
    title: "헬스케어 앱 사용자 가이드",
    category: "Video",
    client: "HealthPlus",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop",
    slug: "health-app",
  },
  {
    id: "5",
    title: "금융 사기 예방 캠페인",
    category: "Marketing",
    client: "FinanceSafe",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    slug: "finance-campaign",
  },
  {
    id: "6",
    title: "AI 튜터링 서비스 런칭",
    category: "Video",
    client: "TutorAI",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop",
    slug: "ai-tutor",
  },
  {
    id: "7",
    title: "사내 AI 도입 실무 교육",
    category: "Education",
    client: "TechCorp",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
    slug: "corp-education",
  },
  {
    id: "8",
    title: "이커머스 매출 증대 전략",
    category: "Marketing",
    client: "ShopNow",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
    slug: "ecommerce-strategy",
  },
  {
    id: "9",
    title: "생성형 AI 활용 워크샵",
    category: "Education",
    client: "CreativeAgency",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop",
    slug: "ai-workshop",
  },
];
