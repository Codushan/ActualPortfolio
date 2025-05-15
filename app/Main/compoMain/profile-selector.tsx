"use client"
import { Check, ChevronDown, User } from "lucide-react"
import { Button } from "@/app/Main/uiMain/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/Main/uiMain/dropdown-menu"
import { useProfileStore } from "@/lib/store"

export function ProfileSelector() {
  const { profile, setProfile } = useProfileStore()

  const profiles = [
    { id: "software-engineer", name: "Software Engineer" },
    { id: "designer", name: "Designer" },
    { id: "civil-engineer", name: "Civil Engineer" },
    { id: "management", name: "Management" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>{profiles.find((p) => p.id === profile)?.name || "Profile"}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>Select Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {profiles.map((p) => (
          <DropdownMenuItem key={p.id} onClick={() => setProfile(p.id)} className="flex items-center justify-between">
            {p.name}
            {profile === p.id && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
