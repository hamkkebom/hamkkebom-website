"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: "testimonial-kim",
    quote:
      "함께봄과의 협업은 우리 브랜드의 전환점이었습니다. AI 기술을 활용한 영상 퀄리티가 기대 이상이었어요.",
    author: "김지현",
    company: "테크스타트업 대표",
  },
  {
    id: "testimonial-lee",
    quote:
      "마케팅 캠페인 ROI가 3배 이상 증가했습니다. 데이터 기반 전략이 확실히 다릅니다.",
    author: "이승우",
    company: "이커머스 마케팅팀장",
  },
  {
    id: "testimonial-park",
    quote:
      "교육 프로그램 도입 후 직원들의 AI 활용 역량이 눈에 띄게 향상되었습니다.",
    author: "박서연",
    company: "대기업 인사팀",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold tracking-wider text-brand-600 mb-5"
          >
            고객 후기
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900"
          >
            파트너들의 이야기
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative h-full p-8 md:p-10 rounded-3xl bg-hanji border border-ink-100/80 hover:border-brand-200 hover:shadow-xl transition-all duration-500">
                {/* Large quotation mark */}
                <div className="mb-6">
                  <span className="text-6xl font-serif leading-none text-brand-500/20 select-none">
                    &ldquo;
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-lg text-ink-600 leading-relaxed mb-8 font-medium">
                  {item.quote}
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-ink-100">
                  {/* Avatar placeholder */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-400 text-white font-bold text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-ink-900">{item.author}</p>
                    <p className="text-sm text-ink-400">{item.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
