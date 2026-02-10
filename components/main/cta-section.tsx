"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-900" />

      {/* Dot-pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-[0.04]" />

      {/* Decorative blur circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-500/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-seal-500/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-bold tracking-wider text-brand-400 mb-6"
          >
            시작하기
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            함께 걸어갈 준비가
            <br />
            되셨나요?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-ink-300 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            AI 기술로 비즈니스의 새로운 가능성을 열어보세요.
            <br className="hidden md:block" />
            무료 상담으로 시작할 수 있습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-500 hover:bg-brand-400 text-white px-10 py-6 text-base font-bold shadow-lg shadow-brand-500/25 transition-all duration-300 hover:shadow-xl"
            >
              <Link href="/contact">
                무료 상담 신청
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 px-10 py-6 text-base font-bold transition-all duration-300"
            >
              <Link href="/about">회사 소개</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
