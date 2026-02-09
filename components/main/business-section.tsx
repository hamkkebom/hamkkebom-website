"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const businesses = [
  {
    title: "AI 영상 제작",
    description: "최첨단 AI 기술을 활용하여 상상을 현실로 만드는 영상 콘텐츠를 제작합니다.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop",
    link: "/services/video",
    color: "bg-blue-900",
  },
  {
    title: "디지털 마케팅",
    description: "데이터 기반의 전략적 마케팅 솔루션으로 고객의 브랜드 가치를 극대화합니다.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
    link: "/services/marketing",
    color: "bg-green-800",
  },
  {
    title: "미래 교육",
    description: "미래 시대를 이끌어갈 인재를 양성하는 혁신적인 교육 프로그램을 제공합니다.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2732&auto=format&fit=crop",
    link: "/services/education",
    color: "bg-indigo-900",
  },
];

export function BusinessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-500 font-bold tracking-wider uppercase mb-4 block"
          >
            사업영역
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            사람과 기술이 함께 만드는 미래
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            함께봄은 AI 기술과 창의적인 아이디어를 결합하여
            <br className="hidden md:block" /> 새로운 가치를 창출하고 더 나은 세상을 만들어갑니다.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {businesses.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-200 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {item.description}
                </p>
                <Link href={item.link}>
                  <Button 
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-200"
                  >
                    자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>  
  );
}
