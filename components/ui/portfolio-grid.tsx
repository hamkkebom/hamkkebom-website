"use client";

import { PortfolioItem } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categoryStyles: Record<string, { dot: string; bg: string; text: string }> = {
  "영상": { dot: "bg-brand-500", bg: "bg-brand-500/10", text: "text-brand-700" },
  "마케팅": { dot: "bg-seal-500", bg: "bg-seal-500/10", text: "text-seal-700" },
  "교육": { dot: "bg-ink-500", bg: "bg-ink-500/10", text: "text-ink-700" },
};

const defaultCatStyle = { dot: "bg-ink-400", bg: "bg-ink-100", text: "text-ink-700" };

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => {
        const catStyle = categoryStyles[item.category] || defaultCatStyle;
        return (
          <Link
            key={item.id}
            href={`/portfolio/${item.slug}`}
            className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-ink-100/60 hover:border-brand-200/60"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between p-5">
                <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  자세히 보기
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              {/* Category pill badge */}
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${catStyle.bg} ${catStyle.text} border border-white/20`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${catStyle.dot}`} />
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-ink-900 group-hover:text-brand-600 transition-colors duration-300 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-sm text-ink-400 mt-1.5">
                {item.client} · {item.year}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
