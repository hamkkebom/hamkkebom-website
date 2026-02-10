"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Video, Megaphone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

interface BusinessItem {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
}

const businesses: BusinessItem[] = [
  {
    title: "AI 영상 제작",
    description:
      "최첨단 AI 기술을 활용하여 상상을 현실로 만드는 영상 콘텐츠를 제작합니다.",
    link: "/services/video",
    icon: Video,
    gradient: "from-brand-500 to-brand-400",
    accentColor: "bg-brand-500",
  },
  {
    title: "디지털 마케팅",
    description:
      "데이터 기반의 전략적 마케팅 솔루션으로 고객의 브랜드 가치를 극대화합니다.",
    link: "/services/marketing",
    icon: Megaphone,
    gradient: "from-seal-500 to-seal-400",
    accentColor: "bg-seal-500",
  },
  {
    title: "미래 교육",
    description:
      "미래 시대를 이끌어갈 인재를 양성하는 혁신적인 교육 프로그램을 제공합니다.",
    link: "/services/education",
    icon: GraduationCap,
    gradient: "from-ink-600 to-ink-400",
    accentColor: "bg-ink-600",
  },
];

export function BusinessSection() {
  return (
    <section className="py-28 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold tracking-wider text-brand-600 mb-5"
          >
            사업영역
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-5"
          >
            사람과 기술이 함께 만드는 미래
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink-400 max-w-2xl mx-auto text-lg"
          >
            함께봄은 AI 기술과 창의적인 아이디어를 결합하여
            <br className="hidden md:block" /> 새로운 가치를 창출하고 더 나은
            세상을 만들어갑니다.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {businesses.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative h-[440px] overflow-hidden rounded-3xl transition-all duration-500 group-hover:[transform:rotateY(-2deg)_rotateX(2deg)] group-hover:shadow-2xl">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`}
                />

                {/* Pattern overlay */}
                <div className="absolute inset-0 dot-pattern opacity-[0.08]" />

                {/* Glass overlay on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500" />

                {/* Large background icon */}
                <div className="absolute -bottom-8 -right-8 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500">
                  <item.icon className="h-64 w-64 text-white" strokeWidth={0.5} />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  {/* Icon badge */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/80 mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    <Link href={item.link}>
                      <Button className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-ink-900 transition-all duration-300 px-6 group-hover:border-white/50">
                        자세히 보기{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
