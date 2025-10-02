import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, FileText, Clock, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GrievancesPage() {
  const grievanceTypes = [
    "Account Related Issues",
    "Card Related Problems",
    "Loan and Advance Issues",
    "Digital Banking Problems",
    "Branch Service Issues",
    "ATM Related Complaints",
    "Other Banking Services",
  ]

  const resolutionProcess = [
    {
      step: "1",
      title: "Submit Complaint",
      description: "File your grievance through online form or visit branch",
      icon: FileText,
    },
    {
      step: "2",
      title: "Acknowledgment",
      description: "Receive complaint number and acknowledgment within 24 hours",
      icon: CheckCircle,
    },
    {
      step: "3",
      title: "Investigation",
      description: "Our team investigates and works on resolution",
      icon: Clock,
    },
    {
      step: "4",
      title: "Resolution",
      description: "Issue resolved and communicated within stipulated time",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Grievance Redressal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We value your feedback and are committed to resolving your concerns promptly
          </p>
        </div>

        {/* Complaint Form */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>File a Complaint</CardTitle>
              <CardDescription>
                Please provide detailed information about your grievance for faster resolution
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Account Number</label>
                  <Input placeholder="Enter account number" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mobile Number</label>
                  <Input placeholder="Enter mobile number" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input placeholder="Enter email address" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Complaint Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select complaint type" />
                  </SelectTrigger>
                  <SelectContent>
                    {grievanceTypes.map((type, index) => (
                      <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, "-")}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Complaint Details</label>
                <Textarea placeholder="Please describe your complaint in detail..." className="min-h-[120px]" />
              </div>

              <Button className="w-full" size="lg">
                Submit Complaint
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Resolution Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Our Resolution Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {resolutionProcess.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">Step {step.step}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Escalation Matrix */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Escalation Matrix</CardTitle>
              <CardDescription>
                If you're not satisfied with the resolution, you can escalate your complaint
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Level 1</h3>
                    <p className="text-sm text-muted-foreground mb-2">Branch Manager</p>
                    <p className="text-xs">Resolution within 7 days</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Level 2</h3>
                    <p className="text-sm text-muted-foreground mb-2">Regional Manager</p>
                    <p className="text-xs">Resolution within 15 days</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Level 3</h3>
                    <p className="text-sm text-muted-foreground mb-2">Banking Ombudsman</p>
                    <p className="text-xs">External escalation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">Track Your Complaint</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Use your complaint reference number to track the status of your grievance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Track Complaint</Button>
            <Button size="lg" variant="outline">
              Call Support
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
