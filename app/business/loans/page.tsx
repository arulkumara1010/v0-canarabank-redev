import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, TrendingUp, Clock, Shield, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BusinessLoansPage() {
  const loanTypes = [
    {
      title: "Working Capital Loan",
      description: "Meet your day-to-day business operational needs",
      rate: "9.50%",
      maxAmount: "₹50 Crores",
      tenure: "12 Months",
      features: ["Quick disbursement", "Flexible repayment", "Minimal documentation"],
    },
    {
      title: "Term Loan",
      description: "Finance your business expansion and equipment purchase",
      rate: "10.25%",
      maxAmount: "₹100 Crores",
      tenure: "7 Years",
      features: ["Competitive rates", "Long tenure", "Structured repayment"],
    },
    {
      title: "MSME Loan",
      description: "Special schemes for Micro, Small & Medium Enterprises",
      rate: "8.75%",
      maxAmount: "₹25 Crores",
      tenure: "5 Years",
      features: ["Government subsidies", "Collateral-free options", "Quick approval"],
    },
  ]

  const benefits = [
    { icon: TrendingUp, title: "Competitive Rates", description: "Starting from 8.75% per annum" },
    { icon: Clock, title: "Quick Processing", description: "Approval in 7-15 working days" },
    { icon: Shield, title: "Flexible Terms", description: "Customized repayment options" },
    { icon: Building2, title: "Expert Support", description: "Dedicated relationship managers" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Business Loans</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fuel your business growth with our comprehensive loan solutions
          </p>
        </div>

        {/* Loan Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Choose Your Business Loan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{loan.title}</CardTitle>
                  <CardDescription>{loan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Interest Rate</span>
                    <Badge variant="secondary" className="text-lg font-semibold">
                      {loan.rate}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Max Amount</span>
                    <span className="font-semibold">{loan.maxAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Max Tenure</span>
                    <span className="font-semibold">{loan.tenure}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Why Choose Our Business Loans?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our business loan experts are ready to help you achieve your growth objectives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Apply Online</Button>
            <Button size="lg" variant="outline">
              Schedule Meeting
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
