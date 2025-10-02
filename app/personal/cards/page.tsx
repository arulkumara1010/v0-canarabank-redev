import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Gift, Shield, Zap } from "lucide-react"

const creditCards = [
  {
    name: "Cashback Credit Card",
    image: "/placeholder-tk5eu.png",
    annualFee: "₹999",
    cashback: "Up to 5%",
    features: ["5% cashback on online shopping", "2% on dining", "1% on all other spends", "Welcome bonus ₹2000"],
    color: "from-blue-600 to-purple-600",
  },
  {
    name: "Travel Rewards Card",
    image: "/placeholder-5oep6.png",
    annualFee: "₹2,999",
    cashback: "4X Rewards",
    features: ["4X reward points on travel", "Airport lounge access", "Travel insurance", "Fuel surcharge waiver"],
    color: "from-green-600 to-teal-600",
  },
  {
    name: "Premium Lifestyle Card",
    image: "/placeholder-czvik.png",
    annualFee: "₹4,999",
    cashback: "Unlimited Rewards",
    features: ["Concierge services", "Golf privileges", "Dining discounts", "Priority customer service"],
    color: "from-gray-800 to-black",
  },
]

export default function CreditCardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              Credit Cards for Every Lifestyle
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty">
              Discover rewards, cashback, and exclusive privileges with our range of credit cards
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Apply Now
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Credit Card Benefits</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Gift, title: "Reward Points", desc: "Earn points on every purchase" },
                { icon: Shield, title: "Fraud Protection", desc: "Zero liability on fraudulent transactions" },
                { icon: Zap, title: "Instant Approval", desc: "Get approved in minutes" },
                { icon: CreditCard, title: "Contactless Payments", desc: "Tap and pay securely" },
              ].map((benefit) => (
                <Card key={benefit.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Credit Cards Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Credit Cards</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {creditCards.map((card) => (
                <Card key={card.name} className="overflow-hidden">
                  <div className={`h-48 bg-gradient-to-r ${card.color} p-6 text-white relative`}>
                    <div className="absolute top-4 right-4">
                      <CreditCard className="h-8 w-8" />
                    </div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-xl font-bold">{card.name}</h3>
                      <p className="text-sm opacity-90">Canara Bank</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-muted-foreground">Annual Fee</span>
                      <span className="font-semibold">{card.annualFee}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm text-muted-foreground">Cashback/Rewards</span>
                      <span className="font-semibold text-primary">{card.cashback}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {card.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Apply for This Card</Button>
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
