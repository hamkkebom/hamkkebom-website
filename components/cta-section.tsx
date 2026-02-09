import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "AI로 사업을 한 단계 성장시키세요",
  description = "지금 무료 상담을 신청하시면 전문 컨설턴트가 맞춤 솔루션을 제안해드립니다.",
}: CTASectionProps) {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-slate-900" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 transition-all duration-300"
            >
              <Link href="/contact">
                무료 상담 신청 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full border-2 border-slate-500 bg-transparent text-slate-200 hover:bg-white/10 hover:text-white hover:border-slate-400 font-semibold px-8 transition-all duration-300"
            >
              <Link href="/portfolio">포트폴리오 보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
