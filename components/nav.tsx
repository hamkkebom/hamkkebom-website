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

  // Determine text color based on scroll state and page
  // Home page starts transparent (white text), becomes white (black text) on scroll
  // Other pages always have white background (black text) or specific header style
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHome || isMobileMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm h-16"
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
                "text-sm font-medium transition-colors hover:text-emerald-500",
                isTransparent 
                  ? "text-white/90 hover:text-white"
                  : "text-slate-600 hover:text-emerald-500",
                pathname === item.href && (isTransparent ? "text-white font-bold" : "text-emerald-500 font-bold")
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            asChild
            className={cn(
                "ml-4 rounded-full px-6 font-semibold transition-all duration-300",
                isTransparent 
                    ? "border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900" 
                    : "border-0 bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm"
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
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className={cn("h-6 w-6 transition-colors", isTransparent ? "text-white" : "text-black")} />
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "border-b border-gray-100 pb-4",
                    pathname === item.href ? "text-emerald-500" : "text-gray-900"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600" asChild>
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
