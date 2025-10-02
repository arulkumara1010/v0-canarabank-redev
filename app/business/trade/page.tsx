import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Ship, FileText, CreditCard, CheckCircle, TrendingUp } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TradeFinancePage() {
  const services = [
    {
      title: "Letters of Credit",
      description: "Secure international trade transactions",
      icon: FileText,
      features: ["Import/Export LC", "Standby LC", "Documentary collections", "Trade guarantees"],
    },
    {
      title: "Trade Finance",
      description: "Comprehensive financing solutions",
      icon: CreditCard,
      features: ["Pre-shipment finance", "Post-shipment finance", "Bill discounting", "Factoring services"],
    },
    {
      title: "Foreign Exchange",
      description: "Currency exchange and hedging",
      icon: TrendingUp,
      features: ["Spot transactions", "Forward contracts", "Currency swaps", "Risk management"],
    },
  ]

  const benefits = [
    { icon: Globe, title: "Global Network", description: "Worldwide correspondent banking relationships" },
    { icon: Ship, title: "Trade Expertise", description: "Specialized trade finance professionals" },
    { icon: FileText, title: "Documentation", description: "Complete trade documentation support" },
    { icon: CheckCircle, title: "Compliance", description: "Full regulatory compliance assistance" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Trade Finance</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive trade finance solutions for your international business needs
          </p>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Our Trade Finance Services</h2>
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
                    <h4 className="font-medium text-sm">Services Include:</h4>
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
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Why Choose Our Trade Finance?</h2>
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
          <h2 className="text-3xl font-heading font-semibold mb-4">Expand Your Global Business</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with our trade finance specialists to explore international opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Contact Expert
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
