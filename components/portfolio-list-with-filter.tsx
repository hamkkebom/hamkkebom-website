"use client"

import { useState } from "react"
import { PortfolioGrid } from "@/components/ui/portfolio-grid"
import { PortfolioItem } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface PortfolioListWithFilterProps {
  items: PortfolioItem[]
}

const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "Video", label: "영상" },
  { id: "Marketing", label: "마케팅" },
  { id: "Education", label: "교육" },
]

export function PortfolioListWithFilter({ items }: PortfolioListWithFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems = items.filter((item) => {
    if (activeCategory === "all") return true
    return item.category === activeCategory
  })

  return (
    <div>
      {/* Category Filter */}
      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              activeCategory === category.id
                ? "bg-gray-900 text-white shadow-md transform scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <PortfolioGrid items={filteredItems} className="animate-in fade-in slide-in-from-bottom-4 duration-500" />
      
      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          해당 카테고리의 프로젝트가 아직 없습니다.
        </div>
      )}
    </div>
  )
}
