"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"
import { useRouter } from "next/navigation"

export function BranchLocator() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/services/branches?search=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push("/services/branches")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance mb-4">Find Us Near You</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Locate our branches and ATMs across the country
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="p-6">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <MapPin className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Branch & ATM Locator</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <label htmlFor="location-search" className="text-sm font-medium">
                  Enter Pincode or City
                </label>
                <div className="flex space-x-2">
                  <Input
                    id="location-search"
                    placeholder="e.g., 560001 or Bangalore"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSearch}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 min-h-[44px]"
                  >
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center text-pretty">
                Find the nearest branch or ATM with directions and contact details
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
