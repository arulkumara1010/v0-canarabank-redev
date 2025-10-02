import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Car, GraduationCap, Briefcase, Calculator } from "lucide-react"

const loanTypes = [
  {
    icon: Home,
    name: "Home Loans",
    rate: "8.5% onwards",
    amount: "Up to ₹5 Crores",
    tenure: "Up to 30 years",
    features: ["Minimal documentation", "Quick approval", "Flexible repayment", "Balance transfer facility"],
  },
  {
    icon: Car,
    name: "Car Loans",
    rate: "8.75% onwards",
    amount: "Up to ₹1 Crore",
    tenure: "Up to 7 years",
    features: ["100% on-road price financing", "Quick processing", "Flexible EMI options", "Insurance facility"],
  },
  {
    icon: GraduationCap,
    name: "Education Loans",
    rate: "9.5% onwards",
    amount: "Up to ₹1.5 Crores",
    tenure: "Up to 15 years",
    features: ["Covers tuition & living expenses", "Moratorium period", "Tax benefits", "Collateral-free options"],
  },
  {
    icon: Briefcase,
    name: "Personal Loans",
    rate: "10.5% onwards",
    amount: "Up to ₹40 Lakhs",
    tenure: "Up to 5 years",
    features: ["Instant approval", "Minimal documentation", "Flexible usage", "Prepayment facility"],
  },
]

export default function LoansPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              Loans to Fulfill Your Dreams
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty">
              Competitive interest rates, quick processing, and flexible repayment options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Apply for Loan
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Calculator className="mr-2 h-4 w-4" />
                EMI Calculator
              </Button>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Choose Your Loan Type</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {loanTypes.map((loan) => (
                <Card key={loan.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <loan.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{loan.name}</CardTitle>
                        <p className="text-primary font-semibold">{loan.rate}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Loan Amount</p>
                        <p className="font-semibold">{loan.amount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tenure</p>
                        <p className="font-semibold">{loan.tenure}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <h4 className="font-medium">Key Features:</h4>
                      <ul className="space-y-1">
                        {loan.features.map((feature) => (
                          <li key={feature} className="text-sm text-muted-foreground">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="flex-1">Apply Now</Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Simple Loan Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Apply Online", desc: "Fill the application form" },
                { step: "2", title: "Document Upload", desc: "Submit required documents" },
                { step: "3", title: "Verification", desc: "Quick verification process" },
                { step: "4", title: "Disbursement", desc: "Get funds in your account" },
              ].map((process) => (
                <div key={process.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.desc}</p>
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
