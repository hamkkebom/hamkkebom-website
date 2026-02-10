"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Static gradient background — shown immediately while video loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" />
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

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-700 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          AI로 만드는<br />
          <span className="text-emerald-400">더 나은 내일</span>
        </h1>
        
        <p className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl font-light leading-relaxed">
          기술과 사람이 조화로운 세상을 위해,<br className="hidden sm:block" />
          함께봄이 바른 AI 기술로 새로운 가치를 창조합니다.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group min-w-[160px] rounded-full bg-white text-black hover:bg-emerald-400 hover:text-black border-none text-base font-semibold transition-all duration-300"
          >
            <Link href="/about">
              브랜드 스토리
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="group min-w-[160px] rounded-full border-2 border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-emerald-400 text-base font-semibold transition-all duration-300"
          >
            <Link href="/portfolio">
              포트폴리오
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70 transition-opacity hover:opacity-100">
        <ArrowDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}
