"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: "pf-brand-film",
    title: "글로벌 테크기업 브랜드 필름",
    category: "영상 제작",
    gradient: "from-brand-500 to-brand-400",
  },
  {
    id: "pf-sns-campaign",
    title: "스타트업 SNS 마케팅 캠페인",
    category: "디지털 마케팅",
    gradient: "from-seal-500 to-seal-400",
  },
  {
    id: "pf-ai-education",
    title: "AI 활용 기업교육 프로그램",
    category: "교육",
    gradient: "from-ink-600 to-ink-400",
  },
  {
    id: "pf-shortform",
    title: "프리미엄 브랜드 숏폼 시리즈",
    category: "영상 제작",
    gradient: "from-brand-600 to-seal-500",
  },
];

export function PortfolioHighlightSection() {
  return (
    <section className="py-28 bg-hanji">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold tracking-wider text-brand-600 mb-5 block"
            >
              포트폴리오
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900"
            >
              우리가 만든 결과물
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="text-ink-400 hover:text-brand-500 font-medium inline-flex items-center mt-4 md:mt-0 transition-colors group"
            >
              전체 보기{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href="/portfolio" className="group block">
                <div
                  className={`relative h-[280px] md:h-[320px] overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient}`}
                >
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 dot-pattern opacity-[0.06]" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
                    <span className="inline-flex self-start items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-white border border-white/10">
                      {item.category}
                    </span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:translate-x-2 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                        <span>프로젝트 보기</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/5 rounded-full" />
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-ink-900 hover:bg-ink-800 text-white px-8 py-6 text-base font-bold shadow-lg transition-all duration-300"
          >
            <Link href="/portfolio">
              전체 포트폴리오 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
