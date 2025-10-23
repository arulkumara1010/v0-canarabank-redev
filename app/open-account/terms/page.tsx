"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft, ArrowRight, FileText, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

const accountTypeNames = {
  savings: "Savings Account",
  current: "Current Account",
  salary: "Salary Account",
  student: "Student Account",
}

export default function TermsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const accountType = searchParams.get("type") || "savings"

  const [agreements, setAgreements] = useState({
    termsAndConditions: false,
    privacyPolicy: false,
    accountAgreement: false,
    electronicConsent: false,
    riskDisclosure: false,
  })

  const [formData, setFormData] = useState<any>(null)
  const [documentData, setDocumentData] = useState<any>(null)

  useEffect(() => {
    // Load data from previous steps
    const savedFormData = localStorage.getItem("accountFormData")
    const savedDocuments = localStorage.getItem("accountDocuments")

    if (savedFormData) setFormData(JSON.parse(savedFormData))
    if (savedDocuments) setDocumentData(JSON.parse(savedDocuments))
  }, [])

  const handleAgreementChange = (key: string, checked: boolean) => {
    setAgreements((prev) => ({ ...prev, [key]: checked }))
  }

  const allAgreed = Object.values(agreements).every(Boolean)

  const handleSubmit = () => {
    if (allAgreed) {
      // Store all data for final confirmation
      const completeData = {
        formData,
        documentData,
        agreements,
        accountType,
        submissionDate: new Date().toISOString(),
      }

      localStorage.setItem("completeAccountData", JSON.stringify(completeData))
      toast.success("Terms and conditions accepted!")
      router.push(`/open-account/confirmation?type=${accountType}`)
    } else {
      toast.error("Please accept all terms and conditions")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Link href={`/open-account/documents?type=${accountType}`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-heading font-bold">
                  Open {accountTypeNames[accountType as keyof typeof accountTypeNames]}
                </h1>
                <p className="text-muted-foreground">Step 4 of 4: Terms & Agreements</p>
              </div>
            </div>
            <Progress value={100} className="h-2" />
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Review and Accept Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Please carefully read and accept the following terms and conditions to complete your account opening
                process. These agreements govern your relationship with Canara Bank and outline your rights and
                responsibilities.
              </p>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <div className="space-y-6">
            {/* General Terms and Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Terms and Conditions
                  </div>
                  {agreements.termsAndConditions && <CheckCircle className="h-5 w-5 text-green-500" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-48 w-full border rounded-md p-4 mb-4">
                  <div className="space-y-4 text-sm">
                    <h4 className="font-semibold">1. Account Opening and Maintenance</h4>
                    <p>
                      By opening an account with Canara Bank, you agree to maintain the account in accordance with our
                      terms and conditions. The bank reserves the right to close accounts that do not comply with our
                      policies.
                    </p>

                    <h4 className="font-semibold">2. Minimum Balance Requirements</h4>
                    <p>
                      You agree to maintain the minimum balance as specified for your account type. Failure to maintain
                      minimum balance may result in charges as per our fee schedule.
                    </p>

                    <h4 className="font-semibold">3. Transaction Limits</h4>
                    <p>
                      Daily transaction limits apply to all accounts. These limits may be modified by the bank with
                      prior notice to customers.
                    </p>

                    <h4 className="font-semibold">4. Interest Rates</h4>
                    <p>
                      Interest rates are subject to change based on RBI guidelines and bank policies. Current rates will
                      be communicated through official channels.
                    </p>

                    <h4 className="font-semibold">5. Account Closure</h4>
                    <p>
                      Either party may close the account with appropriate notice. Outstanding dues must be settled
                      before account closure.
                    </p>
                  </div>
                </ScrollArea>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreements.termsAndConditions}
                    onCheckedChange={(checked) => handleAgreementChange("termsAndConditions", checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm font-medium">
                    I have read and agree to the Terms and Conditions
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Privacy Policy
                  </div>
                  {agreements.privacyPolicy && <CheckCircle className="h-5 w-5 text-green-500" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-48 w-full border rounded-md p-4 mb-4">
                  <div className="space-y-4 text-sm">
                    <h4 className="font-semibold">Data Collection and Usage</h4>
                    <p>
                      We collect personal information necessary for account opening and maintenance. This includes
                      identity verification, contact details, and financial information.
                    </p>

                    <h4 className="font-semibold">Data Protection</h4>
                    <p>
                      Your personal data is protected using industry-standard security measures. We do not share your
                      information with third parties without your consent, except as required by law.
                    </p>

                    <h4 className="font-semibold">Communication Preferences</h4>
                    <p>
                      We may contact you regarding account-related matters, promotional offers, and important updates
                      through various channels including email, SMS, and phone.
                    </p>

                    <h4 className="font-semibold">Data Retention</h4>
                    <p>
                      We retain your data as per regulatory requirements and bank policies. You have the right to
                      request data deletion subject to legal obligations.
                    </p>
                  </div>
                </ScrollArea>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={agreements.privacyPolicy}
                    onCheckedChange={(checked) => handleAgreementChange("privacyPolicy", checked as boolean)}
                  />
                  <label htmlFor="privacy" className="text-sm font-medium">
                    I have read and agree to the Privacy Policy
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Account Agreement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Account Agreement
                  </div>
                  {agreements.accountAgreement && <CheckCircle className="h-5 w-5 text-green-500" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-32 w-full border rounded-md p-4 mb-4">
                  <div className="space-y-2 text-sm">
                    <p>
                      This agreement governs the specific terms for your{" "}
                      {accountTypeNames[accountType as keyof typeof accountTypeNames]}. It includes details about fees,
                      charges, interest rates, and account-specific features.
                    </p>
                    <p>
                      By accepting this agreement, you acknowledge that you understand the features, benefits, and
                      obligations associated with your chosen account type.
                    </p>
                  </div>
                </ScrollArea>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="account"
                    checked={agreements.accountAgreement}
                    onCheckedChange={(checked) => handleAgreementChange("accountAgreement", checked as boolean)}
                  />
                  <label htmlFor="account" className="text-sm font-medium">
                    I agree to the Account Agreement for{" "}
                    {accountTypeNames[accountType as keyof typeof accountTypeNames]}
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Electronic Consent */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Electronic Communications Consent
                  </div>
                  {agreements.electronicConsent && <CheckCircle className="h-5 w-5 text-green-500" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    By providing your consent, you agree to receive account statements, notices, and other
                    communications electronically. This includes email notifications, SMS alerts, and digital statements
                    through our online banking platform.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="electronic"
                      checked={agreements.electronicConsent}
                      onCheckedChange={(checked) => handleAgreementChange("electronicConsent", checked as boolean)}
                    />
                    <label htmlFor="electronic" className="text-sm font-medium">
                      I consent to receive communications electronically
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Disclosure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Risk Disclosure
                  </div>
                  {agreements.riskDisclosure && <CheckCircle className="h-5 w-5 text-green-500" />}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Banking services involve certain risks including but not limited to interest rate fluctuations,
                    regulatory changes, and technology-related risks. Please ensure you understand these risks before
                    proceeding.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="risk"
                      checked={agreements.riskDisclosure}
                      onCheckedChange={(checked) => handleAgreementChange("riskDisclosure", checked as boolean)}
                    />
                    <label htmlFor="risk" className="text-sm font-medium">
                      I acknowledge and understand the risks involved
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final Confirmation */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold">Ready to Complete Your Account Opening?</h3>
                <p className="text-muted-foreground">
                  By clicking "Complete Account Opening", you confirm that all information provided is accurate and you
                  agree to all the terms and conditions outlined above.
                </p>
                {!allAgreed && (
                  <p className="text-sm text-red-500">Please accept all terms and conditions to proceed</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            <Link href={`/open-account/documents?type=${accountType}`}>
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Documents
              </Button>
            </Link>
            <Button onClick={handleSubmit} disabled={!allAgreed} size="lg" className="bg-primary hover:bg-primary/90">
              Complete Account Opening
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
