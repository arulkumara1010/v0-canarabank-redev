"use client"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  PiggyBank,
  TrendingUp,
  Send,
  Receipt,
  Settings,
  LogOut,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Home,
  FileText,
} from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ProtectedRoute } from "@/components/protected-route"
import { getRecentTransactions, getLoanApplications, LOAN_STATUSES } from "@/lib/transactions"

function DashboardContent() {
  const { user, userData, logout } = useAuth()
  const router = useRouter()
  const [showBalance, setShowBalance] = useState(true)

  console.log("[v0] Dashboard user:", user)
  console.log("[v0] Dashboard userData:", userData)

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleGoHome = () => {
    router.push("/")
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount)
  }

  // Get recent transactions and loan applications
  const recentTransactions = user ? getRecentTransactions(user.id, 5) : []
  const loanApplications = user ? getLoanApplications(user.id) : []
  const pendingLoans = loanApplications.filter(loan => loan.status === 'submitted' || loan.status === 'under_review')

  if (!user || !userData) {
    return <div>Loading user data...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.name}</span>
              <Button variant="outline" size="sm" onClick={handleGoHome}>
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Account Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setShowBalance(!showBalance)}>
                {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{showBalance ? formatCurrency(userData.user.balance) : "••••••••"}</div>
              <p className="text-xs text-muted-foreground">
                Account: {user.accountNumber} • {user.accountType.toUpperCase()}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account Type</CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">{user.accountType}</div>
              <Badge variant="secondary" className="mt-2">
                Active
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Loan Status */}
        {pendingLoans.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Loan Applications Status
              </CardTitle>
              <CardDescription>Track your pending loan applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingLoans.map((loan) => (
                  <div key={loan.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{loan.loanType}</h4>
                      <p className="text-sm text-gray-600">
                        Amount: {formatCurrency(loan.amount)} • Tenure: {loan.tenure}
                      </p>
                      <p className="text-xs text-gray-500">
                        Applied: {new Date(loan.applicationDate).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge 
                      variant={loan.status === 'submitted' ? 'secondary' : 'default'}
                      className="ml-4"
                    >
                      {LOAN_STATUSES[loan.status]}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your account with these quick actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                className="h-20 flex-col space-y-2 bg-transparent"
                variant="outline"
                onClick={() => router.push("/dashboard/transfer")}
              >
                <Send className="h-6 w-6" />
                <span className="text-sm">Transfer Money</span>
              </Button>
              <Button
                className="h-20 flex-col space-y-2 bg-transparent"
                variant="outline"
                onClick={() => router.push("/dashboard/bills")}
              >
                <Receipt className="h-6 w-6" />
                <span className="text-sm">Pay Bills</span>
              </Button>
              <Button className="h-20 flex-col space-y-2 bg-transparent" variant="outline">
                <CreditCard className="h-6 w-6" />
                <span className="text-sm">Card Services</span>
              </Button>
              <Button 
                className="h-20 flex-col space-y-2 bg-transparent" 
                variant="outline"
                onClick={() => router.push("/dashboard/loans")}
              >
                <FileText className="h-6 w-6" />
                <span className="text-sm">Loan Status</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest account activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-full ${
                          transaction.type === "credit" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}
                      >
                        {transaction.type === "credit" ? (
                          <ArrowDownLeft className="h-4 w-4" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        transaction.type === "credit" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {transaction.type === "credit" ? "+" : "-"}
                      {formatCurrency(transaction.amount)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Services</CardTitle>
              <CardDescription>Manage your banking services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Investment Portfolio
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Apply for Credit Card
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <PiggyBank className="mr-2 h-4 w-4" />
                  Fixed Deposits
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
