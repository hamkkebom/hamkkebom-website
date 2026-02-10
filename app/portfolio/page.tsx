import { PortfolioListWithFilter } from "@/components/portfolio-list-with-filter"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-ink-900 py-28 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 via-transparent to-ink-900/80" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <span className="text-brand-400 font-bold tracking-wider uppercase text-sm">
              포트폴리오
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              함께봄의 성공 사례
            </h1>
            <p className="max-w-[600px] text-lg text-ink-300 leading-relaxed">
              AI 기술과 창의력으로 이뤄낸 프로젝트 결과물을 확인하세요.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <PortfolioListWithFilter />
    </div>
  )
}
