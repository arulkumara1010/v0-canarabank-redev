import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, CreditCard, Smartphone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Account Services",
      icon: HelpCircle,
      faqs: [
        {
          question: "How do I open a savings account?",
          answer:
            "You can open a savings account by visiting any Canara Bank branch with required documents (Aadhaar, PAN, address proof) or apply online through our website. The minimum balance requirement varies by account type.",
        },
        {
          question: "What is the minimum balance requirement?",
          answer:
            "Minimum balance varies by account type: Regular Savings - ₹500, Premium Savings - ₹10,000, Salary Account - ₹0. Rural and semi-urban branches may have different requirements.",
        },
        {
          question: "How can I update my mobile number?",
          answer:
            "Visit your home branch with a written request and identity proof, or use net banking/mobile app if already registered. You can also call customer care for assistance.",
        },
      ],
    },
    {
      title: "Digital Banking",
      icon: Smartphone,
      faqs: [
        {
          question: "How do I activate net banking?",
          answer:
            "Visit any branch with your account details and ID proof to get net banking credentials, or apply online if you have a debit card. You'll receive login details via registered mobile/email.",
        },
        {
          question: "What if I forget my net banking password?",
          answer:
            "Use the 'Forgot Password' option on the login page, or visit your branch with ID proof. You can also call customer care for password reset assistance.",
        },
        {
          question: "Is mobile banking safe?",
          answer:
            "Yes, our mobile banking uses multi-layer security including encryption, OTP verification, and biometric authentication. Never share your login credentials with anyone.",
        },
      ],
    },
    {
      title: "Cards & Payments",
      icon: CreditCard,
      faqs: [
        {
          question: "How do I block my debit/credit card?",
          answer:
            "Call our 24/7 helpline 1800-425-0018, use net banking/mobile app, or visit any branch. Report immediately if your card is lost or stolen.",
        },
        {
          question: "What are the charges for ATM transactions?",
          answer:
            "First 5 transactions per month are free at Canara Bank ATMs. Other bank ATMs: First 3 free, then ₹20 + GST per transaction. Cash deposit charges may apply.",
        },
        {
          question: "How long does it take to get a new card?",
          answer:
            "New debit cards are issued within 7-10 working days. Credit cards take 10-15 working days after approval. You can track your application status online.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common banking questions
          </p>
        </div>

        {/* Search Section */}
        <section className="mb-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search for answers..." className="pl-9" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Categories */}
        <section className="mb-16">
          <div className="space-y-8">
            {faqCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">Didn't Find Your Answer?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our customer service team is ready to help you with any specific questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Support</Button>
            <Button size="lg" variant="outline">
              Live Chat
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
