import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Percent, Smartphone, Building2, CreditCard } from "lucide-react"
import Link from "next/link"

const accountTypes = [
  {
    id: "savings",
    name: "Savings Account",
    description: "Perfect for personal banking and savings",
    minBalance: "₹1,000",
    interestRate: "4.5%",
    popular: true,
    features: [
      "Competitive interest rates up to 4.5% p.a.",
      "Zero balance digital account option",
      "Free debit card and mobile banking",
      "24/7 customer support",
    ],
    icon: Percent,
    color: "bg-green-50 border-green-200 hover:bg-green-100",
  },
  {
    id: "current",
    name: "Current Account",
    description: "Designed for businesses and professionals",
    minBalance: "₹10,000",
    interestRate: "N/A",
    popular: false,
    features: [
      "Unlimited transactions",
      "Overdraft facility available",
      "Multi-currency support",
      "Dedicated relationship manager",
    ],
    icon: Building2,
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
  },
  {
    id: "salary",
    name: "Salary Account",
    description: "Exclusive benefits for salaried professionals",
    minBalance: "₹0",
    interestRate: "3.5%",
    popular: false,
    features: [
      "Zero minimum balance",
      "Free accident insurance",
      "Priority customer service",
      "Exclusive offers and discounts",
    ],
    icon: CreditCard,
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
  },
  {
    id: "student",
    name: "Student Account",
    description: "Special account for students and young professionals",
    minBalance: "₹0",
    interestRate: "4.0%",
    popular: false,
    features: [
      "No minimum balance required",
      "Free debit card",
      "Educational loan benefits",
      "Digital banking features",
    ],
    icon: Smartphone,
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
  },
]

export default function OpenAccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              Open Your Account in Minutes
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty">
              Choose the perfect account type for your needs and start your digital banking journey today
            </p>
            <div className="flex items-center justify-center gap-2 text-secondary">
              <CheckCircle className="h-5 w-5" />
              <span>100% Digital Process</span>
              <span className="mx-2">•</span>
              <CheckCircle className="h-5 w-5" />
              <span>Instant Account Opening</span>
              <span className="mx-2">•</span>
              <CheckCircle className="h-5 w-5" />
              <span>Zero Paperwork</span>
            </div>
          </div>
        </section>

        {/* Account Selection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Choose Your Account Type</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Select the account that best fits your banking needs. You can always upgrade or add more accounts later.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {accountTypes.map((account) => (
                <Card key={account.id} className={`relative transition-all duration-200 ${account.color}`}>
                  {account.popular && (
                    <Badge className="absolute -top-3 left-6 bg-secondary text-secondary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <account.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{account.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{account.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Min Balance</p>
                        <p className="font-semibold">{account.minBalance}</p>
                      </div>
                      {account.interestRate !== "N/A" && (
                        <div>
                          <p className="text-sm text-muted-foreground">Interest Rate</p>
                          <p className="font-semibold text-primary">{account.interestRate} p.a.</p>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {account.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/open-account/personal-info?type=${account.id}`}>
                      <Button className="w-full" size="lg">
                        Select {account.name}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Simple 4-Step Process</h2>
              <p className="text-muted-foreground">Get your account ready in just a few minutes</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: "1", title: "Choose Account", desc: "Select your preferred account type" },
                { step: "2", title: "Personal Details", desc: "Fill in your basic information" },
                { step: "3", title: "Upload Documents", desc: "Submit required documents" },
                { step: "4", title: "Account Ready", desc: "Start banking immediately" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
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
