import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MessageCircle, Headphones, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CustomerCarePage() {
  const contactMethods = [
    {
      title: "Phone Support",
      description: "Speak directly with our customer service representatives",
      icon: Phone,
      contact: "1800-425-0018",
      availability: "24/7 Available",
      type: "Toll Free",
    },
    {
      title: "Email Support",
      description: "Send us your queries and get detailed responses",
      icon: Mail,
      contact: "customercare@canarabank.com",
      availability: "Response within 24 hours",
      type: "Email",
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      icon: MessageCircle,
      contact: "Available on website",
      availability: "Mon-Sat: 9 AM - 6 PM",
      type: "Chat",
    },
  ]

  const services = [
    { title: "Account Services", description: "Account opening, closure, and modifications" },
    { title: "Card Services", description: "Credit/Debit card issues, blocking, and replacements" },
    { title: "Loan Support", description: "Loan applications, EMI queries, and documentation" },
    { title: "Digital Banking", description: "Net banking, mobile app, and UPI support" },
    { title: "Investment Help", description: "Mutual funds, FD, and investment guidance" },
    { title: "Complaint Resolution", description: "Grievance handling and escalation support" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Headphones className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Customer Care</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help you with all your banking needs. Reach out to us anytime.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">How Can We Help You?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-lg">{method.contact}</p>
                    <div className="flex justify-center gap-2">
                      <Badge variant="secondary">{method.type}</Badge>
                      <Badge variant="outline">{method.availability}</Badge>
                    </div>
                  </div>
                  <Button className="w-full">Contact Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">What We Can Help With</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full mb-4">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-16">
          <Card className="bg-red-50 border-red-200">
            <CardHeader className="text-center">
              <CardTitle className="text-red-700">Emergency Banking Services</CardTitle>
              <CardDescription className="text-red-600">
                For urgent banking issues like card blocking or fraud reporting
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-red-700">1800-425-0018</p>
                  <p className="text-red-600">Available 24/7 for emergencies</p>
                </div>
                <Button variant="destructive" size="lg">
                  Call Emergency Line
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our customer service team is always ready to assist you with personalized support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Schedule Callback</Button>
            <Button size="lg" variant="outline">
              Visit Branch
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
