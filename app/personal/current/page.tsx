import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, CreditCard, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"

const currentAccountFeatures = [
  {
    icon: Building2,
    title: "Business Banking",
    description: "Designed for businesses and professionals",
  },
  {
    icon: CreditCard,
    title: "Unlimited Transactions",
    description: "No limit on number of transactions",
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description: "Handle international transactions easily",
  },
  {
    icon: TrendingUp,
    title: "Overdraft Facility",
    description: "Access to overdraft when you need it",
  },
]

export default function CurrentAccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              Current Accounts for Your Business
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty">
              Streamline your business banking with our feature-rich current accounts
            </p>
            <Link href="/open-account/personal-info?type=current">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Open Current Account
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Current Account Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentAccountFeatures.map((feature) => (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Choose Your Current Account</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Business Current Account</CardTitle>
                  <p className="text-muted-foreground">For small and medium businesses</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Minimum Balance</span>
                      <span className="font-semibold">₹10,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Free Transactions</span>
                      <span className="font-semibold">100/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overdraft Facility</span>
                      <span className="font-semibold">Available</span>
                    </div>
                    <Link href="/open-account/personal-info?type=current">
                      <Button className="w-full mt-6">Open Account</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Premium Current Account</CardTitle>
                  <p className="text-muted-foreground">For large enterprises</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Minimum Balance</span>
                      <span className="font-semibold">₹1,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Free Transactions</span>
                      <span className="font-semibold">Unlimited</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Relationship Manager</span>
                      <span className="font-semibold">Dedicated</span>
                    </div>
                    <Link href="/open-account/personal-info?type=current">
                      <Button className="w-full mt-6">Open Account</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
