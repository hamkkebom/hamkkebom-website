import Link from "next/link"
import Image from "next/image"
import { PortfolioItem } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface PortfolioGridProps {
  items: PortfolioItem[]
  className?: string
}

const categoryColors: Record<string, string> = {
  Video: "bg-blue-500",
  Marketing: "bg-emerald-500",
  Education: "bg-violet-500",
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
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hover overlay with icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-900 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
              <ArrowUpRight className="h-5 w-5" />
            </div>
            {/* Category dot */}
            <div className="absolute top-4 left-4">
              <span className={`inline-block h-2.5 w-2.5 rounded-full ${categoryColors[item.category] || "bg-gray-400"} ring-2 ring-white shadow-sm`} />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-1.5">
            <h3 className="font-bold text-[15px] leading-tight text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
              {item.title}
            </h3>
            <div className="flex items-center text-[13px] text-gray-500 font-medium">
              <span>{item.client}</span>
              <span className="mx-2 text-gray-300">·</span>
              <span>{item.category}</span>
              <span className="mx-2 text-gray-300">·</span>
              <span>{item.year}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
