import { PortfolioListWithFilter } from "@/components/portfolio-list-with-filter"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-ink-900 py-28 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-ink-900 to-ink-950" />
        <div className="absolute inset-0 dot-pattern opacity-[0.06]" />
        <div className="absolute -top-32 right-0 w-80 h-80 bg-brand-500/15 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-seal-500/10 rounded-full blur-[80px]" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-5">
            <span className="inline-block text-brand-400 font-bold tracking-wider uppercase text-sm border border-brand-500/30 rounded-full px-4 py-1.5 bg-brand-500/10 backdrop-blur-sm">
              포트폴리오
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              함께봄의 <span className="text-gradient">성공 사례</span>
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
