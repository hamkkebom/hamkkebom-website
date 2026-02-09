import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-4 block">
              <Image
                src="/images/logo.png"
                alt="함께봄"
                width={140}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              AI 기술과 크리에이티브의 만남,<br />
              세상을 바꾸는 새로운 시선.
            </p>
            <div className="flex gap-4">
               <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
               <Link href="#" className="hover:text-white transition-colors"><Youtube className="h-5 w-5" /></Link>
               <Link href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">회사</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">회사소개</Link></li>
              <li><Link href="/history" className="hover:text-white transition-colors">연혁</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">채용</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">문의하기</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">사업영역</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/business/video" className="hover:text-white transition-colors">AI 영상 제작</Link></li>
              <li><Link href="/business/marketing" className="hover:text-white transition-colors">디지털 마케팅</Link></li>
              <li><Link href="/business/education" className="hover:text-white transition-colors">미래 교육</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-4">연락처</h4>
             <ul className="space-y-2 text-sm text-slate-300">
                <li>서울특별시 강남구</li>
                <li>Tel: 02-1234-5678</li>
                <li>Email: contact@hamkkebom.com</li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
           <div className="flex gap-4 mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
              <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">사이트맵</Link>
           </div>
           <p>© 2025 함께봄. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
