"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProfileCardProps {
  name: string
  image: string
  href: string
  color: string
}

export function ProfileCard({ name, image, href, color }: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className="block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "relative w-full aspect-square rounded-md overflow-hidden transition-all duration-300 border-2 border-transparent",
            isHovered ? `border-${color.split("-")[1]}-600 scale-105` : "",
          )}
        >
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          <div
            className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-300",
              isHovered ? "opacity-30" : "",
              color,
            )}
          />
        </div>
        <span className="mt-3 text-lg font-medium">{name}</span>
      </div>
    </Link>
  )
}
