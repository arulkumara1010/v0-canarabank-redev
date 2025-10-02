import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, GraduationCap, Leaf, Users, Target, Award } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CSRPage() {
  const initiatives = [
    {
      title: "Education for All",
      description:
        "Supporting quality education through scholarships, infrastructure development, and digital learning programs",
      icon: GraduationCap,
      impact: "50,000+ students benefited",
      investment: "₹100 Crores",
    },
    {
      title: "Healthcare Access",
      description: "Mobile health clinics, medical camps, and healthcare infrastructure in rural and underserved areas",
      icon: Heart,
      impact: "2 Lakh+ people served",
      investment: "₹75 Crores",
    },
    {
      title: "Environmental Conservation",
      description: "Tree plantation drives, renewable energy projects, and sustainable banking practices",
      icon: Leaf,
      impact: "10 Lakh+ trees planted",
      investment: "₹50 Crores",
    },
    {
      title: "Rural Development",
      description: "Skill development programs, women empowerment, and livelihood enhancement initiatives",
      icon: Users,
      impact: "25,000+ families supported",
      investment: "₹80 Crores",
    },
  ]

  const achievements = [
    { metric: "₹300+ Crores", description: "Total CSR investment in FY 2023-24" },
    { metric: "500+ Projects", description: "Active CSR initiatives across India" },
    { metric: "10 Lakh+", description: "Lives directly impacted" },
    { metric: "28 States", description: "Pan-India presence of CSR activities" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Corporate Social Responsibility</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Committed to creating positive social impact and building a better tomorrow for all
          </p>
        </div>

        {/* CSR Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.metric}</div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CSR Initiatives */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Our Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <initiative.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{initiative.title}</CardTitle>
                  </div>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Impact</p>
                      <p className="font-semibold text-green-600">{initiative.impact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Investment</p>
                      <p className="font-semibold text-primary">{initiative.investment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CSR Philosophy */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Our CSR Philosophy</CardTitle>
              <CardDescription className="text-center">
                Building sustainable communities through responsible banking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Focused Approach</h3>
                  <p className="text-sm text-muted-foreground">
                    Strategic investments in education, healthcare, environment, and rural development
                  </p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Community Partnership</h3>
                  <p className="text-sm text-muted-foreground">
                    Collaborating with NGOs, government bodies, and local communities for maximum impact
                  </p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Measurable Outcomes</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular monitoring and evaluation to ensure sustainable and meaningful change
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Annual Report */}
        <section className="mb-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">CSR Annual Report 2023-24</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Detailed overview of our CSR activities, impact assessment, and future commitments
              </p>
              <Button size="lg">Download Report</Button>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">Partner With Us</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us in creating positive social impact. Connect with our CSR team to explore partnership opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact CSR Team</Button>
            <Button size="lg" variant="outline">
              View Projects
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
