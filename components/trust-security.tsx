import { Card, CardContent } from "@/components/ui/card"
import { Shield, AlertTriangle, RefreshCw } from "lucide-react"

const securityFeatures = [
  {
    icon: RefreshCw,
    title: "Latest Security Updates",
    description: "Regular security patches and updates",
  },
  {
    icon: Shield,
    title: "Safe Banking Tips",
    description: "Learn how to bank safely online",
  },
  {
    icon: AlertTriangle,
    title: "Report a Fraud",
    description: "Quick fraud reporting system",
  },
]

export function TrustSecurity() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance mb-4">
            Your Security is Our Priority
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              At Canara Bank, we employ state-of-the-art security measures to protect your financial information. Our
              multi-layered security approach ensures that your money and personal data remain safe at all times. We
              continuously monitor for suspicious activities and update our security protocols to stay ahead of emerging
              threats.
            </p>
            <p className="text-muted-foreground text-pretty">
              Your trust is our foundation, and we're committed to maintaining the highest standards of security and
              transparency in all our banking services.
            </p>
          </div>

          <div className="grid gap-6">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
