"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { getLoanApplications, LOAN_STATUSES, type LoanApplication } from "@/lib/transactions"
import { ProtectedRoute } from "@/components/protected-route"

function LoanDashboardContent() {
  const { user } = useAuth()
  const router = useRouter()
  const [loanApplications, setLoanApplications] = useState<LoanApplication[]>([])

  useEffect(() => {
    if (!user) {
      router.push("/login")
    } else {
      const loans = getLoanApplications(user.id)
      setLoanApplications(loans)
    }
  }, [user, router])

  if (!user) return <div>Loading...</div>

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount)
  }

  const getStatusIcon = (status: LoanApplication['status']) => {
    switch (status) {
      case 'submitted':
        return <Clock className="h-4 w-4 text-yellow-600" />
      case 'under_review':
        return <AlertCircle className="h-4 w-4 text-blue-600" />
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-600" />
      case 'disbursed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusVariant = (status: LoanApplication['status']) => {
    switch (status) {
      case 'submitted':
        return 'secondary'
      case 'under_review':
        return 'default'
      case 'approved':
        return 'default'
      case 'rejected':
        return 'destructive'
      case 'disbursed':
        return 'default'
      default:
        return 'secondary'
    }
  }

  const groupedLoans = loanApplications.reduce((acc, loan) => {
    if (!acc[loan.status]) {
      acc[loan.status] = []
    }
    acc[loan.status].push(loan)
    return acc
  }, {} as Record<LoanApplication['status'], LoanApplication[]>)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Loan Applications</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.name}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loanApplications.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(groupedLoans.submitted?.length || 0) + (groupedLoans.under_review?.length || 0)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{groupedLoans.approved?.length || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Disbursed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{groupedLoans.disbursed?.length || 0}</div>
            </CardContent>
          </Card>
        </div>

        {/* Loan Applications */}
        {loanApplications.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Loan Applications</h3>
              <p className="text-gray-500 text-center mb-6">
                You haven't applied for any loans yet. Browse our loan products to get started.
              </p>
              <Link href="/loans">
                <Button>Browse Loans</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedLoans).map(([status, loans]) => (
              <Card key={status}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {getStatusIcon(status as LoanApplication['status'])}
                    <span className="ml-2">{LOAN_STATUSES[status as LoanApplication['status']]}</span>
                    <Badge variant={getStatusVariant(status as LoanApplication['status'])} className="ml-2">
                      {loans.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {loans.map((loan) => (
                      <div key={loan.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-medium text-lg">{loan.loanType}</h4>
                            <Badge variant={getStatusVariant(loan.status)}>
                              {LOAN_STATUSES[loan.status]}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                            <div>
                              <p className="text-sm text-gray-600">Amount</p>
                              <p className="font-semibold">{formatCurrency(loan.amount)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Tenure</p>
                              <p className="font-semibold">{loan.tenure}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Application Number</p>
                              <p className="font-semibold text-sm">{loan.applicationNumber}</p>
                            </div>
                          </div>
                          {loan.purpose && (
                            <div className="mt-2">
                              <p className="text-sm text-gray-600">Purpose</p>
                              <p className="text-sm">{loan.purpose}</p>
                            </div>
                          )}
                          <div className="mt-2">
                            <p className="text-sm text-gray-600">Applied Date</p>
                            <p className="text-sm">{new Date(loan.applicationDate).toLocaleDateString()}</p>
                          </div>
                          {loan.remarks && (
                            <div className="mt-2">
                              <p className="text-sm text-gray-600">Remarks</p>
                              <p className="text-sm">{loan.remarks}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function LoanDashboardPage() {
  return (
    <ProtectedRoute>
      <LoanDashboardContent />
    </ProtectedRoute>
  )
}
