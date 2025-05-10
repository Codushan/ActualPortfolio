"use client"

import { useProfileStore } from "@/lib/store"
import { useTheme } from "@/app/Main/compoMain/theme-provider"
import { DesignerProfile } from "@/app/Main/designer-profile"
import { SoftwareEngineerProfile } from "@/app/Main/software-engineer-profile"
import { CivilEngineerProfile } from "@/app/Main/civil-engineer-profile"
import { ManagementProfile } from "@/app/Main/management-profile"

export function Portfolio() {
  const { profile } = useProfileStore()
  const { themeStyle, themeMode } = useTheme()

  return (
    <div className="container mx-auto px-4 py-8">
      {profile === "software-engineer" && <SoftwareEngineerProfile />}
      {profile === "designer" && <DesignerProfile />}
      {profile === "civil-engineer" && <CivilEngineerProfile />}
      {profile === "management" && <ManagementProfile />}
    </div>
  )
}
