import Link from "next/link"
import Image from "next/image"
import { PortfolioItem } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface PortfolioGridProps {
  items: PortfolioItem[]
  className?: string
}

export function PortfolioGrid({ items, className }: PortfolioGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10", className)}>
      {items.map((item) => (
        <Link 
          key={item.id} 
          href={`/portfolio/${item.slug}`}
          className="group block"
        >
          {/* Thumbnail Container */}
          <div className="relative aspect-video overflow-hidden bg-gray-100 mb-3">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay (Optional per GDWEB style, but nice for interaction) */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </div>

          {/* Text Content */}
          <div className="space-y-1">
            <h3 className="font-bold text-[15px] leading-tight text-gray-900 group-hover:text-green-600 transition-colors">
              {item.title}
            </h3>
            <div className="flex items-center text-[13px] text-gray-500 font-medium">
              <span>{item.client}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span>{item.category}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span>{item.year}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
