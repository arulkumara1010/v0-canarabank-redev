"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { type User, getCurrentUser, setCurrentUser } from "@/lib/auth"

interface AuthContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser)
    setIsLoading(false)
  }, [])

  const login = (user: User) => {
    console.log("[v0] AuthProvider login called with:", user)
    setUser(user)
    setCurrentUser(user)
    if (typeof document !== "undefined") {
      document.cookie = `currentUser=${encodeURIComponent(JSON.stringify(user))}; path=/; max-age=${60 * 60 * 24 * 7}` // 7 days
    }
  }

  const logout = () => {
    console.log("[v0] AuthProvider logout called")
    setUser(null)
    setCurrentUser(null)
    if (typeof document !== "undefined") {
      document.cookie = "currentUser=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    }
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
