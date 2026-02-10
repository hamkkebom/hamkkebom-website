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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/20 scale-105"
                  : "bg-white text-ink-600 hover:bg-brand-light hover:text-brand-700 shadow-sm"
              }`}
              onClick={() => setActive(cat)}
            >
              {cat}
              {active === cat && (
                <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
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
