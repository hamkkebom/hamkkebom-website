export const SITE_NAME = "함께봄";
export const SITE_URL = "https://hamkkebom.com";
export const SITE_DESCRIPTION =
  "AI 영상 제작, AI 교육, AI 마케팅 — 함께봄과 함께 AI로 사업을 성장시키세요.";

export const NAV_ITEMS = [
  { label: "회사 소개", href: "/about" },
  {
    label: "서비스",
    href: "/services",
    children: [
      { label: "영상 제작", href: "/services/video" },
      { label: "교육", href: "/services/education" },
      { label: "마케팅", href: "/services/marketing" },
    ],
  },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "문의하기", href: "/contact" },
] as const;

export const SERVICE_TYPES = {
  video: { label: "영상 제작", icon: "Video" },
  education: { label: "교육", icon: "GraduationCap" },
  marketing: { label: "마케팅", icon: "Megaphone" },
} as const;

export const BUDGET_OPTIONS = [
  "100만원 미만",
  "100만원 ~ 300만원",
  "300만원 ~ 500만원",
  "500만원 ~ 1,000만원",
  "1,000만원 이상",
  "미정 / 상담 후 결정",
] as const;
