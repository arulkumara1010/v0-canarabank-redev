import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, ArrowRightLeft, Shield, Clock, CheckCircle, BarChart3 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CashManagementPage() {
  const services = [
    {
      title: "Cash Collection",
      description: "Efficient collection and concentration services",
      icon: Wallet,
      features: ["Multi-location collections", "Real-time reporting", "Automated reconciliation", "Mobile collections"],
    },
    {
      title: "Payment Solutions",
      description: "Streamlined payment processing",
      icon: ArrowRightLeft,
      features: ["Bulk payments", "Salary processing", "Vendor payments", "Tax payments"],
    },
    {
      title: "Liquidity Management",
      description: "Optimize your cash flow",
      icon: BarChart3,
      features: ["Cash forecasting", "Investment options", "Sweep accounts", "Notional pooling"],
    },
  ]

  const benefits = [
    { icon: Clock, title: "Real-time Visibility", description: "24/7 access to cash position and transactions" },
    { icon: Shield, title: "Secure Transactions", description: "Bank-grade security for all operations" },
    { icon: BarChart3, title: "Analytics & Reporting", description: "Comprehensive cash flow analytics" },
    { icon: CheckCircle, title: "Automation", description: "Reduce manual processes and errors" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Wallet className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Cash Management</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Optimize your cash flow with our comprehensive cash management solutions
          </p>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Cash Management Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Benefits of Our Cash Management</h2>
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
          <h2 className="text-3xl font-heading font-semibold mb-4">Streamline Your Cash Operations</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let our cash management experts help you optimize your business cash flow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
