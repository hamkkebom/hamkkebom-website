"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram", hoverColor: "hover:text-pink-400" },
  { icon: Youtube, href: "#", label: "Youtube", hoverColor: "hover:text-red-400" },
  { icon: Facebook, href: "#", label: "Facebook", hoverColor: "hover:text-blue-400" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-ink-900 to-ink-950 text-ink-300 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-14">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-5 block">
              <Image
                src="/images/logo.png"
                alt="함께봄"
                width={140}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-ink-400 leading-relaxed mb-7">
              AI 기술과 크리에이티브의 만남,<br />
              세상을 바꾸는 새로운 시선.
            </p>
            <div className="flex gap-5">
               {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                 <Link
                   key={label}
                   href={href}
                   aria-label={label}
                   className={`text-ink-500 ${hoverColor} hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(45,143,111,0.3)] transition-all duration-300`}
                 >
                   <Icon className="h-5 w-5" />
                 </Link>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-[0.15em] mb-5">회사</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-ink-400 hover:text-brand-400 transition-colors duration-300">회사소개</Link></li>
              <li><Link href="/history" className="text-ink-400 hover:text-brand-400 transition-colors duration-300">연혁</Link></li>
              <li><Link href="/careers" className="text-ink-400 hover:text-brand-400 transition-colors duration-300">채용</Link></li>
              <li><Link href="/contact" className="text-ink-400 hover:text-brand-400 transition-colors duration-300">문의하기</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-[0.15em] mb-5">사업영역</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/video" className="text-ink-400 hover:text-brand-400 transition-colors duration-300">AI 영상 제작</Link></li>
              <li><Link href="/services/marketing" className="text-ink-400 hover:text-brand-400 transition-colors duration-300">디지털 마케팅</Link></li>
              <li><Link href="/services/education" className="text-ink-400 hover:text-brand-400 transition-colors duration-300">미래 교육</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-semibold text-white/60 uppercase tracking-[0.15em] mb-5">연락처</h4>
             <ul className="space-y-3 text-sm text-ink-400">
                <li>서울특별시 강남구</li>
                <li>Tel: 02-1234-5678</li>
                <li>
                  <Link href="mailto:contact@hamkkebom.com" className="hover:text-brand-400 transition-colors duration-300">
                    contact@hamkkebom.com
                  </Link>
                </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-ink-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ink-500">
           <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-white/80 transition-colors duration-300">개인정보처리방침</Link>
              <Link href="/terms" className="hover:text-white/80 transition-colors duration-300">이용약관</Link>
              <Link href="/sitemap" className="hover:text-white/80 transition-colors duration-300">사이트맵</Link>
           </div>
           <p className="text-ink-600">© 2025 함께봄. All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="absolute right-6 bottom-8 animate-float flex h-11 w-11 items-center justify-center rounded-full bg-ink-800/80 backdrop-blur-sm border border-ink-700/50 text-ink-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all duration-300 shadow-lg hover:shadow-brand-500/25 hover:-translate-y-1"
        aria-label="맨 위로"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
}
