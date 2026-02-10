"use client";

import { useState } from "react";
import { MOCK_PORTFOLIO_ITEMS as mockPortfolioItems } from "@/lib/mock-data";
import { PortfolioGrid } from "@/components/ui/portfolio-grid";

const categories = ["전체", "영상", "마케팅", "교육"];

export function PortfolioListWithFilter() {
  const [active, setActive] = useState("전체");

  const filtered =
    active === "전체"
      ? mockPortfolioItems
      : mockPortfolioItems.filter((item) => item.category === active);

  return (
    <section className="py-20 bg-hanji">
      <div className="container px-4 md:px-6">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25 scale-105"
                  : "bg-white text-ink-600 hover:bg-brand-50 hover:text-brand-700 shadow-sm border border-ink-100 hover:border-brand-200"
              }`}
              onClick={() => setActive(cat)}
            >
              {cat}
              {active === cat && (
                <span className="ml-2 bg-white/25 px-2.5 py-0.5 rounded-full text-xs font-bold">
                  {filtered.length}
                </span>
              )}
            </button>
          ))}
        </div>

        <PortfolioGrid items={filtered} />
      </div>
    </section>
  );
}
