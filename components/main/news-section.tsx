"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const categoryStyles: Record<string, string> = {
  인사이트: "bg-brand-500 text-white",
  기업소식: "bg-seal-500 text-white",
  프로젝트: "bg-ink-700 text-white",
};

const newsItems = [
  {
    id: 1,
    category: "인사이트",
    title: "2024년 AI 마케팅 트렌드 분석 보고서",
    date: "2024.03.15",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    category: "기업소식",
    title: "함께봄, '올해의 혁신 기업' 수상",
    date: "2024.03.10",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    category: "프로젝트",
    title: "친환경 교육 콘텐츠 제작 프로젝트 수주",
    date: "2024.02.28",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2940&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    category: "인사이트",
    title: "숏폼 콘텐츠의 미래: 어떻게 준비해야 할까?",
    date: "2024.02.20",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
    link: "#",
  },
];

export function NewsSection() {
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
              소식
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900"
            >
              함께봄의 새로운 소식
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/news"
              className="text-ink-400 hover:text-brand-500 font-medium inline-flex items-center mt-4 md:mt-0 transition-colors group"
            >
              전체보기{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={item.link}
                className="group block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${categoryStyles[item.category] || "bg-ink-600 text-white"} px-3.5 py-1 rounded-full text-xs font-bold shadow-md`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-ink-900 mb-4 line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-ink-300">
                    <Calendar className="h-3.5 w-3.5 mr-2" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
