"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import { addTransaction } from "@/lib/transactions"
import { toast } from "sonner"

export default function TransferPage() {
  const { user, userData } = useAuth()
  const router = useRouter()
  const [amount, setAmount] = useState("")
  const [beneficiary, setBeneficiary] = useState("")
  const [transferType, setTransferType] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user || !userData) return <div>Loading...</div>

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!amount || !beneficiary || !transferType) {
      toast.error("Please fill in all fields")
      return
    }

    const transferAmount = parseFloat(amount)
    if (transferAmount <= 0) {
      toast.error("Amount must be greater than 0")
      return
    }

    if (transferAmount > userData.user.balance) {
      toast.error("Insufficient balance")
      return
    }

    setIsProcessing(true)

    try {
      // Add transaction to user data
      const transaction = await addTransaction(user.id, {
        type: 'debit',
        amount: transferAmount,
        description: `Transfer to ${beneficiary}`,
        category: 'transfer',
        reference: `${transferType.toUpperCase()}-${Date.now()}`,
        status: 'completed'
      })

      toast.success(`Transfer of ₹${transferAmount.toLocaleString()} to ${beneficiary} completed successfully!`)
      
      // Reset form
      setAmount("")
      setBeneficiary("")
      setTransferType("")
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)

    } catch (error) {
      toast.error("Transfer failed. Please try again.")
      console.error("Transfer error:", error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-gray-900 ml-4">Money Transfer</h1>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Send className="w-5 h-5 mr-2" />
              Transfer Money
            </CardTitle>
            <CardDescription>Send money to your beneficiaries instantly</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTransfer} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="transfer-type">Transfer Type</Label>
                <Select value={transferType} onValueChange={setTransferType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select transfer type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="imps">IMPS - Immediate</SelectItem>
                    <SelectItem value="neft">NEFT - Within 2 hours</SelectItem>
                    <SelectItem value="rtgs">RTGS - Real Time (₹2L+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="beneficiary">Beneficiary</Label>
                <Select value={beneficiary} onValueChange={setBeneficiary}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select beneficiary" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john-doe">John Doe - ****1234</SelectItem>
                    <SelectItem value="jane-smith">Jane Smith - ****5678</SelectItem>
                    <SelectItem value="add-new">+ Add New Beneficiary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="remarks">Remarks (Optional)</Label>
                <Input id="remarks" placeholder="Enter transfer remarks" />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={!amount || !beneficiary || !transferType || isProcessing}
              >
                {isProcessing ? "Processing..." : "Transfer Money"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
