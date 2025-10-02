import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Percent, Shield, Smartphone } from "lucide-react"
import Link from "next/link"

const savingsFeatures = [
  {
    icon: Percent,
    title: "Competitive Interest Rates",
    description: "Earn up to 4.5% per annum on your savings",
  },
  {
    icon: Shield,
    title: "Zero Balance Account",
    description: "No minimum balance required for digital accounts",
  },
  {
    icon: Smartphone,
    title: "Digital Banking",
    description: "Complete banking at your fingertips",
  },
]

const accountTypes = [
  {
    name: "Regular Savings",
    minBalance: "₹1,000",
    interestRate: "3.5%",
    features: ["Debit Card", "Net Banking", "Mobile Banking", "Cheque Book"],
  },
  {
    name: "Premium Savings",
    minBalance: "₹25,000",
    interestRate: "4.0%",
    features: ["Priority Banking", "Free NEFT/RTGS", "Higher Transaction Limits", "Relationship Manager"],
  },
  {
    name: "Digital Savings",
    minBalance: "₹0",
    interestRate: "4.5%",
    features: ["Paperless Account", "Instant Account Opening", "Digital Debit Card", "24/7 Support"],
  },
]

export default function SavingsAccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              Savings Accounts That Grow With You
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty">
              Start your savings journey with competitive interest rates and zero hidden charges
            </p>
            <Link href="/open-account/personal-info?type=savings">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Open Account Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Choose Our Savings Account?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {savingsFeatures.map((feature) => (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Choose Your Account Type</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {accountTypes.map((account) => (
                <Card key={account.name} className="relative">
                  <CardHeader>
                    <CardTitle className="text-xl">{account.name}</CardTitle>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Minimum Balance: {account.minBalance}</p>
                      <p className="text-2xl font-bold text-primary">{account.interestRate} p.a.</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {account.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/open-account/personal-info?type=savings">
                      <Button className="w-full mt-6">Select This Account</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
