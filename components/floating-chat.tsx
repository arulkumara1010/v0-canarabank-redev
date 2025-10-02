"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "savings":
        router.push("/personal/savings")
        break
      case "loans":
        router.push("/personal/loans")
        break
      case "branches":
        router.push("/services/branches")
        break
      default:
        break
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          <span className="sr-only">{isOpen ? "Close chat" : "Open chat with Canara AI"}</span>
        </Button>

        {/* Hover Label */}
        {!isOpen && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Ask Canara AI
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)]">
          <Card className="shadow-xl border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">AI</span>
                </div>
                <span>Canara AI Assistant</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm text-pretty">
                  Hello! I'm here to help you with your banking needs. You can ask me about our services, account
                  opening, or any other queries.
                </p>
              </div>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-left h-auto py-2 bg-transparent"
                  onClick={() => handleQuickAction("savings")}
                >
                  How do I open a savings account?
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-left h-auto py-2 bg-transparent"
                  onClick={() => handleQuickAction("loans")}
                >
                  What are your loan interest rates?
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-left h-auto py-2 bg-transparent"
                  onClick={() => handleQuickAction("branches")}
                >
                  Find nearest branch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
