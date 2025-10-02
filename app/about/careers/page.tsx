import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Briefcase, GraduationCap, Heart, MapPin, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CareersPage() {
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salary packages with performance bonuses",
      icon: Briefcase,
    },
    {
      title: "Learning & Development",
      description: "Continuous training programs and skill development opportunities",
      icon: GraduationCap,
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive leave policies",
      icon: Heart,
    },
    {
      title: "Career Growth",
      description: "Clear career progression paths and leadership development",
      icon: Users,
    },
  ]

  const openings = [
    {
      title: "Probationary Officer",
      department: "General Banking",
      location: "Pan India",
      type: "Full-time",
      experience: "0-2 years",
      description: "Join our management trainee program and build a career in banking",
    },
    {
      title: "Specialist Officer - IT",
      department: "Information Technology",
      location: "Bangalore, Mumbai, Delhi",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead digital transformation initiatives and banking technology solutions",
    },
    {
      title: "Credit Analyst",
      department: "Risk Management",
      location: "Mumbai, Chennai, Kolkata",
      type: "Full-time",
      experience: "2-4 years",
      description: "Analyze credit risks and support lending decisions",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Careers at Canara Bank</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join India's leading public sector bank and build a rewarding career in banking
          </p>
        </div>

        {/* Why Join Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Why Choose Canara Bank?</h2>
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

        {/* Current Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Current Openings</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-muted-foreground" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button className="w-full">Apply Now</Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
              <CardDescription>Follow these simple steps to apply for positions at Canara Bank</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Browse Jobs</h3>
                  <p className="text-sm text-muted-foreground">Find positions that match your skills</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Apply Online</h3>
                  <p className="text-sm text-muted-foreground">Submit your application and documents</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Assessment</h3>
                  <p className="text-sm text-muted-foreground">Complete online tests and interviews</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Join Team</h3>
                  <p className="text-sm text-muted-foreground">Start your banking career with us</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">Ready to Start Your Banking Career?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have built successful careers with Canara Bank
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">View All Jobs</Button>
            <Button size="lg" variant="outline">
              Create Profile
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
