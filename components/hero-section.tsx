"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import Link from "next/link"

export function HeroSection() {
  // Safely use useAuth with error handling
  let user = null
  try {
    const authContext = useAuth()
    user = authContext?.user || null
  } catch (error) {
    // If useAuth fails (e.g., not wrapped in AuthProvider), default to null
    user = null
  }

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/diverse-happy-family-using-banking-services-togeth.jpg"
          alt="Happy diverse family using banking services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight text-balance">
            Banking that moves with you.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto text-pretty">
            Simple, secure, and smart solutions for all your financial needs. Open a digital account in under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {user ? (
              <>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium min-h-[48px] px-8"
                  >
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard/transfer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary min-h-[48px] px-8 bg-transparent"
                  >
                    Transfer Money
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/open-account">
                  <Button
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium min-h-[48px] px-8"
                  >
                    Open Account Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary min-h-[48px] px-8 bg-transparent"
                  >
                    Login to Your Account
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
