"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden bg-gradient-to-br from-brand-600 via-ink-900 to-seal-600">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
      <div className="absolute inset-0 bg-ink-900/60" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-seal-500/10 rounded-full blur-[100px]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/30 to-brand-400/10 text-brand-400 mb-8 shadow-lg shadow-brand-500/10 border border-brand-500/20">
            <Sparkles className="h-7 w-7" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            지금 바로 시작하세요
          </h2>
          <p className="mt-5 text-lg md:text-xl text-ink-300/90 leading-relaxed max-w-2xl mx-auto">
            AI 기술로 비즈니스의 새로운 가능성을 열어보세요.<br className="hidden sm:block" />
            전문 컨설턴트가 최적의 솔루션을 제안해드립니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-500 hover:bg-brand-400 text-white font-semibold px-10 py-3 shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-300 hover:-translate-y-px"
            >
              <Link href="/contact">
                무료 상담 신청 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/40 px-10 py-3 backdrop-blur-sm transition-all duration-300"
            >
              <Link href="/portfolio">포트폴리오 보기</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
