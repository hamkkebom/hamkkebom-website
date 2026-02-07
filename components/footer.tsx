import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary">{SITE_NAME}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI로 시작하는 당신의 사업.
              <br />
              영상 제작, 교육, 마케팅까지.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold">서비스</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services/video"
                  className="transition-colors hover:text-primary"
                >
                  영상 제작
                </Link>
              </li>
              <li>
                <Link
                  href="/services/education"
                  className="transition-colors hover:text-primary"
                >
                  교육
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketing"
                  className="transition-colors hover:text-primary"
                >
                  마케팅
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold">회사</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-primary"
                >
                  회사 소개
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-primary"
                >
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-primary"
                >
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold">연락처</h4>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>이메일: hello@hamkkebom.com</li>
              <li>영업시간: 평일 09:00 ~ 18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
