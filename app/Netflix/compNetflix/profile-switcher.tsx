"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/Main/uiMain/dropdown-menu"

const profileOptions = [
  {
    name: "Software Engineer",
    image: "/placeholder.svg?height=40&width=40",
    href: "/Netflix/profile/software-engineer",
  },
  {
    name: "Designer",
    image: "/placeholder.svg?height=40&width=40",
    href: "/Netflix/profile/designer",
  },
  {
    name: "Civil Engineer",
    image: "/placeholder.svg?height=40&width=40",
    href: "/Netflix/profile/civil-engineer",
  },
  {
    name: "Management",
    image: "/placeholder.svg?height=40&width=40",
    href: "/Netflix/profile/management",
  },
]

interface ProfileSwitcherProps {
  currentProfileImage: string
  currentProfileName: string
}

export function ProfileSwitcher({ currentProfileImage, currentProfileName }: ProfileSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="flex items-center space-x-2 focus:outline-none">
        <div className="w-8 h-8 rounded overflow-hidden">
          <Image
            src={currentProfileImage || "/placeholder.svg"}
            alt={currentProfileName}
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-black/90 border border-gray-700">
        <div className="py-2 px-3 text-sm text-gray-400">Switch Profiles</div>
        {profileOptions.map((profile) => (
          <DropdownMenuItem key={profile.name} asChild className="focus:bg-gray-800">
            <Link href={profile.href} className="flex items-center gap-3 py-2">
              <div className="w-8 h-8 rounded overflow-hidden">
                <Image
                  src={profile.image || "/placeholder.svg"}
                  alt={profile.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="text-white">{profile.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem asChild className="focus:bg-gray-800">
          <Link href="/Netflix" className="text-center py-2 text-gray-400 hover:text-white">
            Back to Profile Selection
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
