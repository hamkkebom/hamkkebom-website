"use client";

import { PortfolioItem } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categoryDots: Record<string, string> = {
  "영상": "bg-brand-500",
  "마케팅": "bg-seal-500",
  "교육": "bg-ink-500",
};

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/portfolio/${item.slug}`}
          className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-400"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            {/* Category dot */}
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-ink-800 shadow-sm`}>
                <span className={`h-2 w-2 rounded-full ${categoryDots[item.category] || "bg-ink-400"}`} />
                {item.category}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-ink-900 group-hover:text-brand-600 transition-colors duration-300 line-clamp-1">
              {item.title}
            </h3>
            <p className="text-sm text-ink-400 mt-1">
              {item.client} · {item.year}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
