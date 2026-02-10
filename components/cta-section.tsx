"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-400 mb-6">
            <Sparkles className="h-7 w-7" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            지금 바로 시작하세요
          </h2>
          <p className="mt-4 text-lg text-ink-300 leading-relaxed">
            AI 기술로 비즈니스의 새로운 가능성을 열어보세요.<br className="hidden sm:block" />
            전문 컨설턴트가 최적의 솔루션을 제안해드립니다.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all duration-300"
            >
              <Link href="/contact">
                무료 상담 신청 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-ink-600 text-ink-300 hover:bg-white/10 hover:text-white hover:border-ink-400 px-8 transition-all duration-300"
            >
              <Link href="/portfolio">포트폴리오 보기</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
