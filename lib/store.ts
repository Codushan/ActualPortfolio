"use client"

import { create } from "zustand"

type ProfileType = "designer" | "software-engineer" | "civil-engineer" | "management"

interface ProfileState {
  profile: ProfileType
  setProfile: (profile: ProfileType) => void
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: "software-engineer",
  setProfile: (profile) => set({ profile }),
}))
