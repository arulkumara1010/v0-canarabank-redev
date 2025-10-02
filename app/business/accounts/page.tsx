import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, TrendingUp } from "lucide-react"

export default function BusinessAccountsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              Business Banking Solutions
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty">
              Comprehensive banking solutions designed for businesses of all sizes
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Get Started
            </Button>
          </div>
        </section>

        {/* Business Account Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Business Account Types</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Small Business",
                  desc: "Perfect for startups and small enterprises",
                  features: ["Low minimum balance", "Free digital banking", "Basic overdraft facility"],
                },
                {
                  icon: Users,
                  title: "Medium Enterprise",
                  desc: "Designed for growing businesses",
                  features: ["Higher transaction limits", "Dedicated relationship manager", "Trade finance solutions"],
                },
                {
                  icon: TrendingUp,
                  title: "Corporate Banking",
                  desc: "For large corporations and institutions",
                  features: ["Customized solutions", "Treasury services", "International banking"],
                },
              ].map((account) => (
                <Card key={account.title}>
                  <CardHeader className="text-center">
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                      <account.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{account.title}</CardTitle>
                    <p className="text-muted-foreground">{account.desc}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {account.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Learn More</Button>
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
