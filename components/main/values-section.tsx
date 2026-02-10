"use client";

import { motion } from "framer-motion";

const promises = [
  {
    id: "trust",
    title: "고객 신뢰 최우선",
    description:
      "고객과의 약속을 생명처럼 여기며, 정직과 신뢰를 바탕으로 일합니다.",
  },
  {
    id: "innovation",
    title: "창의적 혁신",
    description:
      "끊임없는 배움과 도전으로 기존의 틀을 깨는 혁신적인 솔루션을 제공합니다.",
  },
  {
    id: "responsibility",
    title: "사회적 책임",
    description:
      "우리의 재능과 수익을 사회에 환원하여 더 따뜻한 세상을 만듭니다.",
  },
];

export function ValuesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dark CSS gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-950" />

      {/* Dot-pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

      {/* Decorative blur orbs */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-seal-500/8 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-bold tracking-wider text-brand-400">
              지속가능한 가치
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              바른 마음으로
              <br />
              함께 만드는 가치
            </h2>
            <p className="text-lg text-ink-300 leading-relaxed max-w-xl">
              함께봄은 기업의 사회적 책임을 다하고, 지속 가능한 미래를 위해
              노력합니다. 투명한 경영과 나눔의 실천을 통해 사회와 함께 성장하는
              기업이 되겠습니다.
            </p>
            <div className="pt-4 flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">ESG</span>
                <span className="text-sm text-ink-400 mt-1">지속가능경영</span>
              </div>
              <div className="w-px h-14 bg-white/10 hidden md:block" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">LOHAS</span>
                <span className="text-sm text-ink-400 mt-1">
                  건강한 삶의 가치
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card !bg-white/[0.06] !border-white/[0.08] p-8 md:p-10 rounded-3xl"
          >
            <h3 className="text-xl font-bold text-white mb-8">
              함께봄의 약속
            </h3>
            <ul className="space-y-6">
              {promises.map((item, idx) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 border border-brand-500/20 group-hover:bg-brand-500/25 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-brand-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {item.title}
                    </h4>
                    <p className="text-sm text-ink-400 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
