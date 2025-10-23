"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Download,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Home,
  User,
  FileText,
  Smartphone,
  LogIn,
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

const accountTypeNames = {
  savings: "Savings Account",
  current: "Current Account",
  salary: "Salary Account",
  student: "Student Account",
}

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const accountType = searchParams.get("type") || "savings"

  const [applicationData, setApplicationData] = useState<any>(null)
  const [applicationNumber, setApplicationNumber] = useState("")

  // Function to clear application data
  const clearApplicationData = () => {
    localStorage.removeItem("accountFormData")
    localStorage.removeItem("accountDocuments")
    localStorage.removeItem("completeAccountData")
  }

  useEffect(() => {
    // Load complete application data
    const savedData = localStorage.getItem("completeAccountData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setApplicationData(data)

      // Generate application number
      const appNumber = `CAN${Date.now().toString().slice(-8)}`
      setApplicationNumber(appNumber)

      // Show success notification after a short delay to ensure page is rendered
      setTimeout(() => {
        toast.success("Account application submitted successfully!")
      }, 500)

      // Clear data after 30 seconds to give user time to see the page
      const clearTimer = setTimeout(() => {
        clearApplicationData()
      }, 30000)

      // Cleanup timer on unmount
      return () => clearTimeout(clearTimer)
    } else {
      // Redirect if no data found
      router.push("/open-account")
    }
  }, [router])

  const handleDownloadReceipt = () => {
    // In a real app, this would generate and download a PDF receipt
    const receiptData = {
      applicationNumber,
      accountType,
      submissionDate: new Date().toLocaleDateString(),
      applicantName: applicationData?.formData
        ? `${applicationData.formData.firstName} ${applicationData.formData.lastName}`
        : "",
      email: applicationData?.formData?.email || "",
      phone: applicationData?.formData?.phone || "",
    }

    console.log("Receipt data:", receiptData)
    alert("Receipt download would start here in a real application")
  }

  if (!applicationData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading your application details...</p>
        </div>
      </div>
    )
  }

  const { formData } = applicationData

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-heading font-bold text-green-600 mb-2">Application Submitted Successfully!</h1>
            <p className="text-muted-foreground text-lg">
              Your {accountTypeNames[accountType as keyof typeof accountTypeNames]} application has been received and is
              being processed.
            </p>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700">
                <strong>Application Number:</strong> {applicationNumber}
              </p>
              <p className="text-xs text-green-600 mt-1">
                Please save this number for future reference. You can return to this page anytime.
              </p>
            </div>
          </div>

          {/* Application Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Application Summary</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Submitted
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Application Number</p>
                  <p className="font-mono font-semibold text-lg">{applicationNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Account Type</p>
                  <p className="font-semibold">{accountTypeNames[accountType as keyof typeof accountTypeNames]}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Submission Date</p>
                  <p className="font-semibold">
                    {new Date().toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Expected Processing Time</p>
                  <p className="font-semibold">2-3 Business Days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Applicant Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Applicant Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-semibold">
                      {formData.firstName} {formData.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Address</p>
                    <p className="font-semibold flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {formData.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone Number</p>
                    <p className="font-semibold flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      +91 {formData.phone}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-semibold flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(formData.dateOfBirth).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">PAN Number</p>
                    <p className="font-semibold font-mono">{formData.panNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold flex items-start gap-2">
                      <Home className="h-4 w-4 mt-0.5" />
                      <span>
                        {formData.address}, {formData.city}, {formData.state} - {formData.pincode}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Document Verification</h4>
                    <p className="text-sm text-muted-foreground">
                      Our team will verify your submitted documents within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Account Activation</h4>
                    <p className="text-sm text-muted-foreground">
                      Once verified, your account will be activated and you'll receive confirmation via email and SMS.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Welcome Kit</h4>
                    <p className="text-sm text-muted-foreground">
                      Your debit card, cheque book, and welcome kit will be dispatched to your registered address.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Start Banking</h4>
                    <p className="text-sm text-muted-foreground">
                      Access your account through our mobile app and internet banking platform.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <p>
                  • Keep your application number <strong>{applicationNumber}</strong> safe for future reference.
                </p>
                <p>• You will receive regular updates about your application status via email and SMS.</p>
                <p>• If additional documents are required, our team will contact you within 2 business days.</p>
                <p>• For any queries, contact our customer support at 1800-425-0018 or visit your nearest branch.</p>
                <p>
                  • Your account will be ready for use once the initial deposit is made and verification is complete.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleDownloadReceipt} variant="outline" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download Receipt
            </Button>

            <Link href="/login">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={clearApplicationData}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login to Your Account
              </Button>
            </Link>

            <Link href="/support">
              <Button variant="outline" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Next Steps */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                What's Next?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Account Verification</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll verify your documents and information within 2-3 business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Account Activation</h4>
                    <p className="text-sm text-muted-foreground">
                      Once verified, your account will be activated and you'll receive login credentials via email/SMS.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Start Banking</h4>
                    <p className="text-sm text-muted-foreground">
                      Login to your dashboard to access all banking services, transfer money, and manage your account.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile App Promotion */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Smartphone className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-lg font-semibold">Download Our Mobile App</h3>
                <p className="text-muted-foreground">
                  Get instant access to your account, make transactions, and manage your finances on the go.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline">
                    <img src="/assets/img/icons/googleplay.png" alt="Play Store" className="h-5 w-5 mr-2" />
                    Play Store
                  </Button>
                  <Button variant="outline">
                    <img src="/apple-app-store-icon.png" alt="App Store" className="h-5 w-5 mr-2" />
                    App Store
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
