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
import { ArrowLeft, Receipt, Zap, Droplets, Wifi, Phone } from "lucide-react"
import Link from "next/link"

export default function BillsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [billType, setBillType] = useState("")
  const [amount, setAmount] = useState("")

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user) return <div>Loading...</div>

  const billCategories = [
    { id: "electricity", name: "Electricity", icon: Zap, color: "text-yellow-600" },
    { id: "water", name: "Water", icon: Droplets, color: "text-blue-600" },
    { id: "internet", name: "Internet", icon: Wifi, color: "text-green-600" },
    { id: "mobile", name: "Mobile", icon: Phone, color: "text-purple-600" },
  ]

  const handlePayBill = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Bill payment of ₹${amount} for ${billType} initiated successfully!`)
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
            <h1 className="text-xl font-semibold text-gray-900 ml-4">Bill Payments</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {billCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${category.color}`} />
                  <h3 className="font-medium">{category.name}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Receipt className="w-5 h-5 mr-2" />
              Pay Bills
            </CardTitle>
            <CardDescription>Pay your utility bills instantly</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePayBill} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="bill-type">Bill Type</Label>
                <Select value={billType} onValueChange={setBillType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bill type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electricity">Electricity Bill</SelectItem>
                    <SelectItem value="water">Water Bill</SelectItem>
                    <SelectItem value="internet">Internet Bill</SelectItem>
                    <SelectItem value="mobile">Mobile Bill</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="consumer-number">Consumer Number</Label>
                <Input id="consumer-number" placeholder="Enter consumer number" required />
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

              <Button type="submit" className="w-full" disabled={!amount || !billType}>
                Pay Bill
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
