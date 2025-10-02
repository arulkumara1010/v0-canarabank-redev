import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Shield, Smartphone, Clock, CreditCard } from "lucide-react"

export default function NetBankingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">Net Banking Login</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty">
              Access your account anytime, anywhere with secure internet banking
            </p>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Login to Net Banking</CardTitle>
                  <p className="text-muted-foreground">Enter your credentials to access your account</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="userId" className="block text-sm font-medium mb-2">
                        User ID
                      </label>
                      <Input id="userId" placeholder="Enter your User ID" />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-2">
                        Password
                      </label>
                      <Input id="password" type="password" placeholder="Enter your Password" />
                    </div>
                    <Button className="w-full" size="lg">
                      Login
                    </Button>
                    <div className="text-center space-y-2">
                      <a href="#" className="text-sm text-primary hover:underline block">
                        Forgot User ID?
                      </a>
                      <a href="#" className="text-sm text-primary hover:underline block">
                        Forgot Password?
                      </a>
                      <a href="#" className="text-sm text-primary hover:underline block">
                        First Time User? Register Now
                      </a>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Net Banking Features</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "Secure Banking", desc: "256-bit SSL encryption" },
                { icon: Clock, title: "24/7 Access", desc: "Bank anytime, anywhere" },
                { icon: CreditCard, title: "Bill Payments", desc: "Pay all your bills online" },
                { icon: Smartphone, title: "Mobile Friendly", desc: "Works on all devices" },
              ].map((feature) => (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
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
