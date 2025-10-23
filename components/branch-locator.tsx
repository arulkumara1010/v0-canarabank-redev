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

  const handleATMSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/services/atm?search=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push("/services/atm")
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
          <h2 className="text-3xl font-heading font-bold mb-4">Find Branches & ATMs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Locate the nearest Canara Bank branch or ATM with detailed information and directions
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                Branch & ATM Locator
              </CardTitle>
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
              
              <div className="flex gap-2">
                <Button
                  onClick={handleSearch}
                  variant="outline"
                  className="flex-1"
                >
                  Find Branches
                </Button>
                <Button
                  onClick={handleATMSearch}
                  variant="outline"
                  className="flex-1"
                >
                  Find ATMs
                </Button>
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