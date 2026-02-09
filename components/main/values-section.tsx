"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export function ValuesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542601906990-24d4c16419d9?q=80&w=2874&auto=format&fit=crop"
          alt="Sustainable Future"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/65" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <span className="text-emerald-400 font-bold tracking-wider uppercase">
              지속가능한 가치
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              바른 마음으로<br />
              함께 만드는 가치
            </h2>
            <p className="text-lg text-slate-100 leading-relaxed max-w-xl">
              함께봄은 기업의 사회적 책임을 다하고, 지속 가능한 미래를 위해 노력합니다.
              투명한 경영과 나눔의 실천을 통해 사회와 함께 성장하는 기업이 되겠습니다.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">ESG</span>
                  <span className="text-sm text-slate-200">지속가능경영</span>
               </div>
               <div className="w-px h-12 bg-white/30 mx-4 hidden md:block" />
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">LOHAS</span>
                  <span className="text-sm text-slate-300">건강한 삶의 가치</span>
               </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
          >
             <h3 className="text-xl font-bold text-white mb-4">함께봄의 약속</h3>
             <ul className="space-y-4">
                <li className="flex items-start gap-4">
                   <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2" />
                   <div>
                      <h4 className="text-white font-medium">고객 신뢰 최우선</h4>
                      <p className="text-sm text-slate-200 mt-1">고객과의 약속을 생명처럼 여기며, 정직과 신뢰를 바탕으로 일합니다.</p>
                   </div>
                </li>
                <li className="flex items-start gap-4">
                   <div className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                   <div>
                      <h4 className="text-white font-medium">창의적 혁신</h4>
                      <p className="text-sm text-slate-300 mt-1">끊임없는 배움과 도전으로 기존의 틀을 깨는 혁신적인 솔루션을 제공합니다.</p>
                   </div>
                </li>
                 <li className="flex items-start gap-4">
                   <div className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                   <div>
                      <h4 className="text-white font-medium">사회적 책임</h4>
                      <p className="text-sm text-slate-300 mt-1">우리의 재능과 수익을 사회에 환원하여 더 따뜻한 세상을 만듭니다.</p>
                   </div>
                </li>
             </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
