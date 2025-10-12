"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/auth-provider"
import { LOANS } from "@/lib/loans"

export default function ApplyLoanPage({ params }: { params: { slug: string } }) {
  const loan = LOANS.find((l) => l.slug === params.slug)
  const { user } = useAuth()
  const router = useRouter()
  const search = useSearchParams()
  const prefillType = search.get("type") || undefined

  const [form, setForm] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    amount: "",
    tenure: "",
    purpose: prefillType || "",
    propertyValue: "",
    location: "",
    make: "",
    model: "",
    year: "",
    institution: "",
    course: "",
    businessName: "",
    revenue: "",
    gstin: "",
    employer: "",
    income: "",
    existingEmi: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [applicationId, setApplicationId] = useState<string | null>(null)

  if (!loan) {
    if (typeof window !== "undefined") router.replace("/loans")
    return null
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Dummy submit: create fake application ID and show success
    const id = `CAN-${loan.slug}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
    setApplicationId(id)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold">Apply for {loan.title}</h1>
            <p className="text-muted-foreground mt-2">
              {user
                ? "Fill the details to proceed with your application."
                : "Please login to continue your application."}
            </p>
          </div>

          {!user ? (
            <Card>
              <CardHeader>
                <CardTitle>Login Required</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  You need to be logged in to apply. After login, you will be redirected back here.
                </p>
                <Link href={`/login?next=/loans/${loan.slug}/apply${prefillType ? `?type=${prefillType}` : ""}`}>
                  <Button className="w-full">Login to Continue</Button>
                </Link>
                <Link href={`/loans/${loan.slug}`}>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Loan Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : submitted ? (
            <Card>
              <CardHeader>
                <CardTitle>Application Submitted</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">Thank you, {form.fullName}. Your application has been submitted successfully.</p>
                <div className="p-4 rounded bg-muted/50">
                  <p className="text-xs text-muted-foreground">Application ID</p>
                  <p className="font-mono font-semibold">{applicationId}</p>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" onClick={() => router.push("/dashboard")}>
                    Go to Dashboard
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent" onClick={() => router.push("/loans")}>
                    Browse More Loans
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Applicant Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" name="fullName" value={form.fullName} onChange={onChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" name="email" value={form.email} onChange={onChange} required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="amount">Desired Amount (INR)</Label>
                      <Input
                        id="amount"
                        name="amount"
                        inputMode="numeric"
                        placeholder="500000"
                        value={form.amount}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="tenure">Tenure (Years)</Label>
                      <Input
                        id="tenure"
                        name="tenure"
                        inputMode="numeric"
                        placeholder="5"
                        value={form.tenure}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Unique fields by loan category */}
                  {loan.category === "home" && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyValue">Estimated Property Value (INR)</Label>
                        <Input id="propertyValue" name="propertyValue" placeholder="7500000" onChange={onChange} />
                      </div>
                      <div>
                        <Label htmlFor="location">Property Location (City)</Label>
                        <Input id="location" name="location" placeholder="Bengaluru" onChange={onChange} />
                      </div>
                    </div>
                  )}

                  {loan.category === "vehicle" && (
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="make">Vehicle Make</Label>
                        <Input id="make" name="make" placeholder="Maruti Suzuki" onChange={onChange} />
                      </div>
                      <div>
                        <Label htmlFor="model">Model</Label>
                        <Input id="model" name="model" placeholder="Baleno Alpha" onChange={onChange} />
                      </div>
                      <div>
                        <Label htmlFor="year">Year</Label>
                        <Input id="year" name="year" inputMode="numeric" placeholder="2024" onChange={onChange} />
                      </div>
                    </div>
                  )}

                  {loan.category === "education" && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="institution">Institution</Label>
                        <Input id="institution" name="institution" placeholder="IIT Bombay" onChange={onChange} />
                      </div>
                      <div>
                        <Label htmlFor="course">Course</Label>
                        <Input id="course" name="course" placeholder="M.Tech Computer Science" onChange={onChange} />
                      </div>
                    </div>
                  )}

                  {loan.category === "business" && (
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input
                          id="businessName"
                          name="businessName"
                          placeholder="Acme Exports Pvt Ltd"
                          onChange={onChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="revenue">Annual Revenue (₹)</Label>
                        <Input
                          id="revenue"
                          name="revenue"
                          inputMode="numeric"
                          placeholder="25000000"
                          onChange={onChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="gstin">GSTIN (optional)</Label>
                        <Input id="gstin" name="gstin" placeholder="22ABCDE1234F1Z5" onChange={onChange} />
                      </div>
                    </div>
                  )}

                  {loan.category === "personal" && (
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="employer">Employer</Label>
                        <Input id="employer" name="employer" placeholder="TCS" onChange={onChange} />
                      </div>
                      <div>
                        <Label htmlFor="income">Monthly Income (₹)</Label>
                        <Input id="income" name="income" inputMode="numeric" placeholder="85000" onChange={onChange} />
                      </div>
                      <div>
                        <Label htmlFor="existingEmi">Existing EMIs (₹)</Label>
                        <Input
                          id="existingEmi"
                          name="existingEmi"
                          inputMode="numeric"
                          placeholder="0"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="purpose">Purpose / Type (optional)</Label>
                    <Input
                      id="purpose"
                      name="purpose"
                      placeholder="e.g., Home improvement, Car purchase"
                      value={form.purpose}
                      onChange={onChange}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      Submit Application
                    </Button>
                    <Link href={`/loans/${loan.slug}`}>
                      <Button type="button" variant="outline" className="flex-1 bg-transparent">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
