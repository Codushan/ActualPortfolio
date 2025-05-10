"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Info, Play, Plus, ThumbsUp } from "lucide-react"
import { Button } from "@/app/Main/uiMain/button"
import { cn } from "@/lib/utils"

interface ContentItem {
  title: string
  image: string
}

interface ContentRowProps {
  title: string
  items: ContentItem[]
  color: string
}

export function ContentRow({ title, items, color }: ContentRowProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [startIndex, setStartIndex] = useState(0)
  const itemsToShow = 5

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - 1))
  }

  const handleNext = () => {
    setStartIndex(Math.min(items.length - itemsToShow, startIndex + 1))
  }

  const visibleItems = items.slice(startIndex, startIndex + itemsToShow)

  return (
    <div className="relative pb-16">
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <div className="relative group">
        <div className="flex space-x-2 overflow-visible">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[19%] z-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded transition-all duration-300",
                  hoveredIndex === index ? "scale-125 z-20 shadow-xl" : "scale-100",
                )}
                style={{
                  transformOrigin: "center center",
                }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={350}
                  height={200}
                  className="object-cover w-full aspect-video"
                />

                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex flex-col">
                    <div className={`absolute inset-0 bg-${color}-600 opacity-20`} />

                    <div className="mt-auto p-3 bg-black/80">
                      <h3 className="font-medium text-sm mb-2">{item.title}</h3>
                      <div className="flex space-x-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30"
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30"
                        >
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 ml-auto"
                        >
                          <Info className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {startIndex > 0 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-12 rounded-none bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}

        {startIndex < items.length - itemsToShow && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-12 rounded-none bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}
      </div>
    </div>
  )
}