"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Static gradient background — shown immediately while video loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-900" />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.pexels.com/videos/3129671/free-video-3129671.jpg?auto=compress&cs=tinysrgb&w=1920"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay — always visible for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-300"
        >
          AI 영상 · 교육 · 마케팅
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          나란히 걷다,<br />마침내 봄
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed"
        >
          함께봄은 AI 기술을 활용하여 영상 제작, 교육, 마케팅 분야의<br className="hidden md:block" />
          혁신적인 솔루션을 제공합니다.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="rounded-full bg-brand-500 hover:bg-brand-600 text-white px-8 font-bold shadow-lg shadow-brand-500/20">
            <Link href="/contact">무료 상담 신청</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-ink-900 px-8 font-bold">
            <Link href="/portfolio">포트폴리오</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-60 transition-opacity hover:opacity-100">
        <span className="text-xs text-white/70 tracking-widest uppercase font-light">Scroll</span>
        <div className="relative">
          <ArrowDown className="h-6 w-6 text-white" />
          <div className="absolute inset-0 h-6 w-6 bg-white/20 rounded-full blur-md" />
        </div>
      </div>
    </section>
  );
}
