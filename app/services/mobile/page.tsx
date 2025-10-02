import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Download, Shield, Zap, CheckCircle, Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MobileBankingPage() {
  const features = [
    {
      title: "Account Management",
      description: "Complete control over your accounts",
      icon: Smartphone,
      features: ["Balance inquiry", "Mini statements", "Account statements", "Cheque book requests"],
    },
    {
      title: "Fund Transfers",
      description: "Transfer money instantly",
      icon: Zap,
      features: ["IMPS transfers", "NEFT/RTGS", "UPI payments", "Beneficiary management"],
    },
    {
      title: "Bill Payments",
      description: "Pay all your bills in one place",
      icon: CheckCircle,
      features: ["Utility bills", "Mobile recharge", "DTH recharge", "Insurance premiums"],
    },
  ]

  const benefits = [
    { icon: Shield, title: "Secure Banking", description: "Multi-layer security with biometric authentication" },
    { icon: Zap, title: "Instant Transactions", description: "Real-time fund transfers and payments" },
    { icon: Star, title: "User Friendly", description: "Intuitive interface for all age groups" },
    { icon: CheckCircle, title: "24/7 Access", description: "Bank anytime, anywhere" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Mobile Banking</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience banking at your fingertips with our feature-rich mobile app
          </p>
        </div>

        {/* App Download Section */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-heading font-semibold mb-4">Download Canara Bank Mobile App</h2>
                  <p className="text-muted-foreground mb-6">
                    Get the most advanced mobile banking experience with our award-winning app
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Download for Android
                    </Button>
                    <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Download className="w-5 h-5" />
                      Download for iOS
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <Badge variant="secondary">4.5★ Rating</Badge>
                    <Badge variant="secondary">10M+ Downloads</Badge>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-48 h-96 bg-gradient-to-b from-primary/10 to-primary/5 rounded-3xl mx-auto flex items-center justify-center">
                    <Smartphone className="w-24 h-24 text-primary" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">App Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Available Services:</h4>
                    <ul className="space-y-1">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Why Choose Our Mobile App?</h2>
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
          <h2 className="text-3xl font-heading font-semibold mb-4">Start Mobile Banking Today</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join millions of customers who trust our mobile banking app for their daily banking needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Download App</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
