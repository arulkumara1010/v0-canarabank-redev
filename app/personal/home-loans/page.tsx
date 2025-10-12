import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Home, TrendingDown, Shield, Clock, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomeLoansPage() {
  const loanTypes = [
    {
      title: "Home Purchase Loan",
      description: "Finance your dream home with competitive rates",
      rate: "8.50%",
      maxAmount: "₹5 Crores",
      tenure: "30 Years",
      features: ["Zero processing fee", "Quick approval", "Flexible EMI options"],
    },
    {
      title: "Home Construction Loan",
      description: "Build your home with stage-wise disbursement",
      rate: "8.75%",
      maxAmount: "₹3 Crores",
      tenure: "25 Years",
      features: ["Stage-wise release", "Construction monitoring", "Conversion to home loan"],
    },
    {
      title: "Home Improvement Loan",
      description: "Renovate and upgrade your existing home",
      rate: "9.25%",
      maxAmount: "₹50 Lakhs",
      tenure: "15 Years",
      features: ["Quick disbursement", "Minimal documentation", "No collateral required"],
    },
  ]

  const benefits = [
    { icon: TrendingDown, title: "Competitive Interest Rates", description: "Starting from 8.50% per annum" },
    { icon: Shield, title: "Loan Protection", description: "Optional insurance coverage available" },
    { icon: Clock, title: "Quick Processing", description: "Approval in 7-10 working days" },
    { icon: CheckCircle, title: "Flexible Repayment", description: "Choose your EMI date and tenure" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Home className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Home Loans</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your dream of owning a home into reality with our flexible home loan solutions
          </p>
        </div>

        {/* Loan Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Choose Your Home Loan</h2>
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
                  <Button className="w-full" asChild>
                    <a href={`/loans/home-loan/apply?type=${encodeURIComponent(loan.title)}`}>Apply Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Why Choose Our Home Loans?</h2>
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

        {/* EMI Calculator */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Home Loan EMI Calculator</CardTitle>
              <CardDescription>Calculate your monthly EMI and plan your finances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <Button size="lg" className="mb-4">
                  Calculate EMI
                </Button>
                <p className="text-sm text-muted-foreground">
                  Get instant EMI calculations and choose the best loan option for you
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">Ready to Buy Your Dream Home?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our home loan experts are here to guide you through every step of the process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/loans/home-loan/apply">Apply Online</a>
            </Button>
            <Button size="lg" variant="outline">
              Talk to Expert
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
