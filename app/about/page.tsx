import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

const milestones = [
  { year: "1906", event: "Founded as Canara Banking Corporation Limited" },
  { year: "1969", event: "Nationalized and became Canara Bank" },
  { year: "1990", event: "Expanded international operations" },
  { year: "2000", event: "Launched internet banking services" },
  { year: "2010", event: "Mobile banking revolution" },
  { year: "2020", event: "Digital transformation initiatives" },
]

const achievements = [
  {
    icon: Users,
    title: "10+ Crore Customers",
    description: "Serving millions across India and globally",
  },
  {
    icon: Globe,
    title: "9,000+ Branches",
    description: "Extensive network across India",
  },
  {
    icon: Award,
    title: "100+ Years",
    description: "Century of trusted banking services",
  },
  {
    icon: TrendingUp,
    title: "₹15+ Lakh Crores",
    description: "Total business volume",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
              A Century of Trust & Excellence
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-pretty">
              From humble beginnings in 1906 to becoming one of India's leading public sector banks, our journey has
              been defined by innovation, integrity, and inclusive growth.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Achievements</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement) => (
                <Card key={achievement.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Canara Bank was founded in 1906 by Ammembal Subba Rao Pai, a visionary who believed in empowering
                    people through accessible banking services. What started as a small banking corporation in Mangalore
                    has grown into one of India's most trusted financial institutions.
                  </p>
                  <p>
                    Through decades of transformation, we have consistently adapted to changing times while staying true
                    to our core values of integrity, customer-centricity, and social responsibility. Today, we serve
                    over 10 crore customers through our extensive network of branches and digital platforms.
                  </p>
                  <p>
                    Our commitment to innovation has led us to embrace digital banking, sustainable finance, and
                    inclusive growth initiatives that benefit all sections of society.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder-rc0zf.png"
                  alt="Historic Canara Bank building"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Card>
                        <CardContent className="p-4">
                          <p className="font-medium">{milestone.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
