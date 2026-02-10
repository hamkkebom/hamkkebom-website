import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "소식",
  description: "함께봄의 최신 뉴스, 인사이트, 프로젝트 소식을 전합니다.",
};

const newsItems = [
  {
    id: 1,
    category: "인사이트",
    title: "2024년 AI 마케팅 트렌드 분석 보고서",
    summary:
      "급변하는 마케팅 환경에서 AI가 어떻게 브랜드 전략을 바꾸고 있는지, 최신 트렌드와 실제 적용 사례를 분석합니다.",
    date: "2024.03.15",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "기업소식",
    title: "함께봄, '올해의 혁신 기업' 수상",
    summary:
      "AI 기술을 활용한 혁신적인 비즈니스 솔루션으로 2024년 올해의 혁신 기업으로 선정되었습니다.",
    date: "2024.03.10",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "프로젝트",
    title: "친환경 교육 콘텐츠 제작 프로젝트 수주",
    summary:
      "ESG 경영을 실천하는 대기업과 협력하여 친환경 교육 콘텐츠를 기획·제작하는 대형 프로젝트를 수주했습니다.",
    date: "2024.02.28",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "인사이트",
    title: "숏폼 콘텐츠의 미래: 어떻게 준비해야 할까?",
    summary:
      "틱톡, 릴스, 숏츠 등 숏폼 플랫폼이 급성장하는 시대, 기업이 숏폼 콘텐츠 전략을 준비하는 방법을 제시합니다.",
    date: "2024.02.20",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "기업소식",
    title: "AI 교육 프로그램 누적 수강생 500명 돌파",
    summary:
      "기업 맞춤 AI 교육 프로그램의 누적 수강생이 500명을 돌파하며, 실무 역량 강화에 기여하고 있습니다.",
    date: "2024.02.15",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "프로젝트",
    title: "스타트업 브랜드 영상 시리즈 완료",
    summary:
      "AI 나레이션과 모션그래픽을 활용한 스타트업 브랜드 영상 시리즈 프로젝트를 성공적으로 마무리했습니다.",
    date: "2024.01.30",
    image:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2940&auto=format&fit=crop",
  },
];

const categories = ["전체", "인사이트", "기업소식", "프로젝트"];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 py-28 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-ink-900 to-ink-950" />
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-500/15 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-seal-500/10 rounded-full blur-[80px]" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-brand-400 font-bold tracking-wider uppercase text-sm border border-brand-500/30 rounded-full px-4 py-1.5 bg-brand-500/10 backdrop-blur-sm">
              소식
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-white leading-tight">
              함께봄의 <span className="text-gradient">새로운 소식</span>
            </h1>
            <p className="mt-4 text-lg text-ink-300 leading-relaxed">
              최신 뉴스, 인사이트, 프로젝트 업데이트를 전합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-ink-100 sticky top-16 z-30">
        <div className="container px-4 md:px-6">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={`text-sm font-semibold whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 ${
                  cat === "전체"
                    ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/20"
                    : "text-ink-500 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 items-center group cursor-pointer">
              <div className="flex-1 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl w-full border border-ink-100/50">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-brand-500 to-brand-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-brand-500/20">
                    {newsItems[0].category}
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="flex items-center text-sm text-ink-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {newsItems[0].date}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink-900 group-hover:text-brand-600 transition-colors leading-tight">
                  {newsItems[0].title}
                </h2>
                <p className="mt-4 text-ink-500 leading-relaxed">
                  {newsItems[0].summary}
                </p>
                <span className="mt-6 inline-flex items-center text-brand-600 font-semibold group-hover:gap-2 transition-all duration-300">
                  자세히 보기 <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-hanji">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {newsItems.slice(1).map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-ink-100/60 hover:border-brand-200/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-ink-800 shadow-sm border border-white/20">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-ink-400 mb-3">
                    <Calendar className="h-3.5 w-3.5 mr-1.5" />
                    {item.date}
                  </div>
                  <h3 className="font-bold text-lg text-ink-900 group-hover:text-brand-600 transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-ink-500 leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
