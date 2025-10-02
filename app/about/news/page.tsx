import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Newspaper, TrendingUp } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  const news = [
    {
      title: "Canara Bank Launches New Digital Banking Platform",
      summary: "Enhanced mobile and internet banking experience with AI-powered features for better customer service",
      date: "March 15, 2024",
      category: "Digital Banking",
      featured: true,
    },
    {
      title: "Record Q4 Results: Net Profit Grows 25%",
      summary: "Strong financial performance driven by improved asset quality and robust business growth",
      date: "March 10, 2024",
      category: "Financial Results",
      featured: true,
    },
    {
      title: "Green Banking Initiative: ₹10,000 Crore Commitment",
      summary: "Major investment in renewable energy projects and sustainable financing solutions",
      date: "March 5, 2024",
      category: "Sustainability",
      featured: false,
    },
    {
      title: "New Branch Openings Across Rural India",
      summary: "Expanding financial inclusion with 500 new branches in underserved areas",
      date: "February 28, 2024",
      category: "Expansion",
      featured: false,
    },
    {
      title: "Partnership with Fintech Startups",
      summary: "Strategic collaborations to enhance digital payment solutions and customer experience",
      date: "February 20, 2024",
      category: "Partnerships",
      featured: false,
    },
    {
      title: "Award for Best Public Sector Bank",
      summary: "Recognition for excellence in customer service and digital transformation initiatives",
      date: "February 15, 2024",
      category: "Awards",
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Digital Banking",
    "Financial Results",
    "Sustainability",
    "Expansion",
    "Partnerships",
    "Awards",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Newspaper className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">News & Updates</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest developments, achievements, and initiatives at Canara Bank
          </p>
        </div>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Featured News */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8">Featured News</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {news
              .filter((item) => item.featured)
              .map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-primary" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.summary}</p>
                      <Button variant="outline" className="w-full bg-transparent">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* All News */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold mb-8">Recent Updates</h2>
          <div className="space-y-6">
            {news
              .filter((item) => !item.featured)
              .map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="md:col-span-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">{item.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {item.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.summary}</p>
                      </div>
                      <div className="flex items-center">
                        <Button variant="outline" className="w-full bg-transparent">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-heading font-semibold mb-4">Stay Informed</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border rounded-md" />
            <Button>Subscribe</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
