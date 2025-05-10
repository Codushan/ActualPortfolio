"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/app/Youtube/components/ui/input"
import { Button } from "@/app/Youtube/components/ui/button"
import { Search } from "lucide-react"

export function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search functionality would go here
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
      <Input
        type="search"
        placeholder="Search profiles and content..."
        className="pr-10"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  )
}
