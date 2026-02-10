"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

const navItems = [
  { name: "회사소개", href: "/about" },
  { name: "사업영역", href: "/business" },
  { name: "포트폴리오", href: "/portfolio" },
  { name: "소식", href: "/news" },
  { name: "문의", href: "/contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled || !isHome || isMobileMenuOpen
          ? "bg-white/90 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-16 border-b border-ink-100/50"
          : "bg-transparent h-20"
      )}
    >
      <div className="container h-full px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 block">
           <Image
             src="/images/logo.png"
             alt="함께봄"
             width={160}
             height={64}
             priority
             className={cn(
               "h-14 w-auto object-contain transition-all duration-300",
               isTransparent ? "brightness-0 invert" : ""
             )}
           />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative text-[13px] font-medium tracking-wide transition-colors duration-300 py-1",
                isTransparent 
                  ? "text-white/85 hover:text-white"
                  : "text-ink-500 hover:text-ink-900",
                pathname === item.href && (isTransparent ? "text-white font-semibold" : "text-brand-500 font-semibold")
              )}
            >
              {item.name}
              {/* Gradient hover underline */}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 ease-out",
                pathname === item.href
                  ? "w-full"
                  : "w-0 group-hover:w-full",
                isTransparent
                  ? "bg-white"
                  : "bg-gradient-to-r from-brand-500 to-seal-500"
              )} />
            </Link>
          ))}
          <Button 
            asChild
            className={cn(
                "ml-6 rounded-full px-7 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300",
                isTransparent 
                    ? "border border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-ink-900 hover:border-white" 
                    : "border-0 bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-px"
            )}
          >
            <Link href="/contact">프로젝트 문의</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-ink-900" />
          ) : (
            <Menu className={cn("h-6 w-6 transition-colors", isTransparent ? "text-white" : "text-ink-900")} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
           <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 top-0 min-h-screen bg-white pt-28 px-8 flex flex-col md:hidden"
          >
            {/* Decorative accent line */}
            <div className="absolute top-16 left-8 right-8 h-px bg-gradient-to-r from-brand-500/40 via-seal-500/20 to-transparent" />
            
            <nav className="flex flex-col space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-medium tracking-tight block transition-colors duration-300",
                      pathname === item.href 
                        ? "text-brand-500" 
                        : "text-ink-900 hover:text-brand-500"
                    )}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <span className="block mt-2 w-8 h-0.5 bg-gradient-to-r from-brand-500 to-seal-500 rounded-full" />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
              >
                <Button className="w-full mt-4 bg-brand-500 hover:bg-brand-600 rounded-full h-14 text-base font-semibold shadow-lg shadow-brand-500/20" asChild>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    프로젝트 문의하기
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
