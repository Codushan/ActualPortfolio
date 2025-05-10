"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/app/Main/uiMain/button"
import { Input } from "@/app/Main/uiMain/input"

interface SearchResult {
  title: string
  category: string
  href: string
}

interface SearchBarProps {
  allItems: SearchResult[]
}

export function SearchBar({ allItems }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setResults([])
      return
    }

    const filtered = allItems.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    setResults(filtered)
  }, [searchQuery, allItems])

  const handleToggleSearch = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setSearchQuery("")
      setResults([])
    }
  }

  return (
    <div className="relative">
      {isOpen ? (
        <div className="absolute right-0 top-0 flex items-center bg-black/90 border border-gray-700 rounded-md w-64 md:w-80">
          <Input
            ref={inputRef}
            type="search"
            placeholder="Titles, people, genres"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
          />
          <Button variant="ghost" size="icon" onClick={handleToggleSearch} className="text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>
      ) : (
        <Button variant="ghost" size="icon" onClick={handleToggleSearch} className="text-white">
          <Search className="h-5 w-5" />
        </Button>
      )}

      {isOpen && results.length > 0 && (
        <div className="absolute right-0 top-12 w-64 md:w-80 bg-black/90 border border-gray-700 rounded-md max-h-96 overflow-y-auto z-50">
          <div className="p-4">
            <h3 className="text-sm font-medium mb-2">Search Results</h3>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index}>
                  <a
                    href={result.href}
                    className="flex flex-col hover:bg-gray-800 p-2 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-medium">{result.title}</span>
                    <span className="text-xs text-gray-400">{result.category}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
