"use client";

import { motion } from "framer-motion";

const stats = [
  { id: "stat-projects", number: "150+", label: "완료 프로젝트" },
  { id: "stat-partners", number: "50+", label: "파트너 기업" },
  { id: "stat-satisfaction", number: "98%", label: "고객 만족도" },
  { id: "stat-response", number: "24h", label: "평균 응답시간" },
];

export function StatsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

      {/* Decorative blur orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-500/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-seal-500/6 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-bold tracking-wider text-brand-400 mb-5">
            성과
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            숫자로 증명하는 신뢰
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center group"
            >
              <div className="relative mb-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight animate-count-up">
                  {stat.number}
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-brand-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-sm md:text-base text-ink-400 font-medium">
                {stat.label}
              </span>
              {/* Subtle divider line on desktop */}
              <div className="mt-6 mx-auto w-8 h-px bg-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
