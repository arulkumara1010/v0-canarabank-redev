import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, PieChart, Shield, Target, DollarSign, BarChart3 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function InvestmentsPage() {
  const investmentOptions = [
    {
      title: "Fixed Deposits",
      description: "Secure investment with guaranteed returns",
      returns: "7.25%",
      tenure: "1-10 Years",
      minAmount: "₹1,000",
      risk: "Low",
      features: ["Guaranteed returns", "Flexible tenure", "Loan against FD available"],
    },
    {
      title: "Mutual Funds",
      description: "Diversified portfolio managed by experts",
      returns: "12-15%",
      tenure: "1+ Years",
      minAmount: "₹500",
      risk: "Medium",
      features: ["Professional management", "Diversification", "SIP options available"],
    },
    {
      title: "Recurring Deposits",
      description: "Build wealth with regular monthly investments",
      returns: "6.75%",
      tenure: "1-10 Years",
      minAmount: "₹100",
      risk: "Low",
      features: ["Regular savings habit", "Flexible amounts", "Auto-debit facility"],
    },
  ]

  const benefits = [
    { icon: TrendingUp, title: "Wealth Growth", description: "Grow your money with competitive returns" },
    { icon: Shield, title: "Secure Investments", description: "Bank-backed security and reliability" },
    { icon: Target, title: "Goal-Based Planning", description: "Achieve your financial goals systematically" },
    { icon: BarChart3, title: "Expert Guidance", description: "Professional investment advisory services" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <PieChart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Investment Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build wealth and secure your future with our comprehensive investment options
          </p>
        </div>

        {/* Investment Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Investment Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {investmentOptions.map((investment, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{investment.title}</CardTitle>
                    <Badge variant={investment.risk === "Low" ? "secondary" : "default"}>{investment.risk} Risk</Badge>
                  </div>
                  <CardDescription>{investment.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Expected Returns</span>
                      <p className="font-semibold text-green-600">{investment.returns}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Tenure</span>
                      <p className="font-semibold">{investment.tenure}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Min Amount</span>
                      <p className="font-semibold">{investment.minAmount}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {investment.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <DollarSign className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">Invest Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Why Invest With Us?</h2>
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

        {/* Investment Calculator */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Investment Calculator</CardTitle>
              <CardDescription>Plan your investments and see potential returns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <Button size="lg" className="mb-4">
                  Calculate Returns
                </Button>
                <p className="text-sm text-muted-foreground">
                  Estimate your investment growth and make informed decisions
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">Start Your Investment Journey</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our investment advisors will help you choose the right products for your financial goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Start Investing</Button>
            <Button size="lg" variant="outline">
              Speak to Advisor
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
