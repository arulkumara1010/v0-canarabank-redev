import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Percent, Shield, Zap } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    icon: Percent,
    title: "Cashback Credit Card",
    description: "Earn up to 5% on all your spending.",
    image: "/modern-credit-card-design.jpg",
    href: "/personal/cards",
  },
  {
    icon: Shield,
    title: "Secure Savings Account",
    description: "High interest rates with complete security.",
    image: "/secure-digital-banking-interface.jpg",
    href: "/personal/savings",
  },
  {
    icon: Zap,
    title: "Instant Personal Loan",
    description: "Get approved in minutes, not days.",
    image: "/fast-loan-approval-mobile-app.jpg",
    href: "/loans/personal-loan", // updated to new details route
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance mb-4">Solutions Tailored For You</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Discover our range of financial products designed to meet your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <product.icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>
                <Link href={product.href}>
                  <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
