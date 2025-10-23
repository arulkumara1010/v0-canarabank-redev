"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { type User, getCurrentUser, setCurrentUser } from "@/lib/auth"
import { initializeUserData, getUserData, type UserData } from "@/lib/transactions"

interface AuthContextType {
  user: User | null
  userData: UserData | null
  login: (user: User) => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
      // Initialize or get user data with transactions and loans
      const data = initializeUserData(currentUser)
      setUserData(data)
    }
    setIsLoading(false)
  }, [])

  const login = (user: User) => {
    console.log("[v0] AuthProvider login called with:", user)
    setUser(user)
    setCurrentUser(user)
    
    // Initialize user data with transactions and loans
    const data = initializeUserData(user)
    setUserData(data)
    
    if (typeof document !== "undefined") {
      document.cookie = `currentUser=${encodeURIComponent(JSON.stringify(user))}; path=/; max-age=${60 * 60 * 24 * 7}` // 7 days
    }
  }

  const logout = () => {
    console.log("[v0] AuthProvider logout called")
    setUser(null)
    setUserData(null)
    setCurrentUser(null)
    if (typeof document !== "undefined") {
      document.cookie = "currentUser=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    }
  }

  return <AuthContext.Provider value={{ user, userData, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
