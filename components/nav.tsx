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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHome || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-xl shadow-sm h-16 border-b border-ink-100"
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
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-brand-500 py-1",
                isTransparent 
                  ? "text-white/90 hover:text-white"
                  : "text-ink-500 hover:text-brand-500",
                pathname === item.href && (isTransparent ? "text-white font-bold" : "text-brand-500 font-bold")
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className={cn(
                    "absolute -bottom-1 left-0 right-0 h-0.5 rounded-full",
                    isTransparent ? "bg-white" : "bg-brand-500"
                  )}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Button 
            asChild
            className={cn(
                "ml-4 rounded-full px-6 font-semibold transition-all duration-300",
                isTransparent 
                    ? "border-2 border-white bg-transparent text-white hover:bg-white hover:text-ink-900" 
                    : "border-0 bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow-md"
            )}
          >
            <Link href="/contact">프로젝트 문의</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
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
            className="absolute inset-0 top-0 min-h-screen bg-white pt-24 px-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium">
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
                      "border-b border-ink-100 pb-4 block",
                      pathname === item.href ? "text-brand-500" : "text-ink-900"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Button className="w-full mt-4 bg-brand-500 hover:bg-brand-600 rounded-xl" asChild>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  프로젝트 문의하기
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
