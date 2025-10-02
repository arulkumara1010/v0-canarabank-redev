import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, CreditCard, Search, Navigation } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ATMLocatorPage() {
  const atms = [
    {
      location: "Select City Mall - Saket",
      address: "Select City Walk, Saket, New Delhi - 110017",
      type: "Cash Deposit & Withdrawal",
      features: ["24/7 Available", "Cash Deposit", "Balance Inquiry", "PIN Change"],
      status: "Active",
    },
    {
      location: "Phoenix Mall - Bangalore",
      address: "Whitefield Main Road, Bangalore - 560066",
      type: "Cash Withdrawal",
      features: ["24/7 Available", "Balance Inquiry", "Mini Statement", "PIN Change"],
      status: "Active",
    },
    {
      location: "Linking Road - Mumbai",
      address: "Linking Road, Bandra West, Mumbai - 400050",
      type: "Cash Deposit & Withdrawal",
      features: ["24/7 Available", "Cash Deposit", "Balance Inquiry", "Fund Transfer"],
      status: "Active",
    },
  ]

  const services = [
    { title: "Cash Withdrawal", description: "Withdraw cash 24/7 from any Canara Bank ATM" },
    { title: "Cash Deposit", description: "Deposit cash directly to your account" },
    { title: "Balance Inquiry", description: "Check your account balance instantly" },
    { title: "Mini Statement", description: "Get your recent transaction history" },
    { title: "PIN Services", description: "Change or generate new ATM PIN" },
    { title: "Fund Transfer", description: "Transfer funds between your accounts" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <CreditCard className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">ATM Locator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the nearest Canara Bank ATM for all your banking needs
          </p>
        </div>

        {/* Search Section */}
        <section className="mb-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Find ATMs Near You</CardTitle>
              <CardDescription className="text-center">Locate the nearest ATM with cash availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Enter location or landmark" className="pl-9" />
                </div>
                <Button>
                  <Navigation className="w-4 h-4 mr-2" />
                  Find ATMs
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ATM Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">ATM Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full mb-4">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ATM Listings */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Nearby ATMs</h2>
          <div className="grid gap-6">
            {atms.map((atm, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">{atm.location}</h3>
                        <Badge variant={atm.status === "Active" ? "default" : "secondary"}>{atm.status}</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{atm.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 flex-shrink-0" />
                          <span>{atm.type}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Available Services:</h4>
                        <div className="flex flex-wrap gap-2">
                          {atm.features.map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button className="w-full">Get Directions</Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Check Cash Status
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">ATM Not Working?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Report ATM issues or find alternative locations through our customer service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Report Issue</Button>
            <Button size="lg" variant="outline">
              Customer Care
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
