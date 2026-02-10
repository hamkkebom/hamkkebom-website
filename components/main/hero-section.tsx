"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const headlineChars = "나란히 걷다, 마침내 봄".split("").map((char, idx) => ({
  id: `h-${idx}-${char.charCodeAt(0)}`,
  char,
  idx,
}));

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink-900">
      {/* Rich CSS gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-900" />

      {/* Decorative dot-pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-[0.04]" />

      {/* Abstract decorative blur circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-seal-500/15 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[160px]" />

      {/* Subtle grid accent */}
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium tracking-widest text-brand-300 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
          AI 영상 · 교육 · 마케팅
        </motion.span>

        {/* Character-by-character stagger headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
          {headlineChars.map((item) => (
            <motion.span
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + item.idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block ${item.char === "," ? "mr-1" : ""} ${item.char === " " ? "mr-3" : ""}`}
            >
              {item.char === " " ? "\u00A0" : item.char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-xl text-base md:text-lg text-white/60 leading-relaxed font-light"
        >
          함께봄은 AI 기술을 활용하여 영상 제작, 교육, 마케팅 분야의
          <br className="hidden md:block" />
          혁신적인 솔루션을 제공합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-brand-500 hover:bg-brand-400 text-white px-8 py-6 text-base font-bold shadow-lg shadow-brand-500/25 transition-all duration-300 hover:shadow-brand-400/30 hover:shadow-xl"
          >
            <Link href="/contact">무료 상담 신청</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-base font-bold transition-all duration-300"
          >
            <Link href="/portfolio">포트폴리오</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator — smooth float */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
      >
        <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-light">
          Scroll
        </span>
        <div className="animate-float">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/15">
            <ArrowDown className="h-4 w-4 text-white/50" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
