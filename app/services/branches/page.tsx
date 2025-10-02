import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Clock, Phone, Navigation, Search } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BranchLocatorPage() {
  const branches = [
    {
      name: "Canara Bank - Connaught Place",
      address: "Block A, Connaught Place, New Delhi - 110001",
      phone: "+91-11-2341-5678",
      hours: "Mon-Fri: 10:00 AM - 4:00 PM, Sat: 10:00 AM - 2:00 PM",
      services: ["Personal Banking", "Business Banking", "Locker Facility", "Foreign Exchange"],
    },
    {
      name: "Canara Bank - Bangalore Main",
      address: "MG Road, Bangalore, Karnataka - 560001",
      phone: "+91-80-2558-9012",
      hours: "Mon-Fri: 10:00 AM - 4:00 PM, Sat: 10:00 AM - 2:00 PM",
      services: ["Personal Banking", "Business Banking", "Investment Services", "NRI Services"],
    },
    {
      name: "Canara Bank - Mumbai Fort",
      address: "Fort District, Mumbai, Maharashtra - 400001",
      phone: "+91-22-2266-7890",
      hours: "Mon-Fri: 10:00 AM - 4:00 PM, Sat: 10:00 AM - 2:00 PM",
      services: ["Personal Banking", "Corporate Banking", "Trade Finance", "Treasury Services"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Branch Locator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the nearest Canara Bank branch and ATM locations across India
          </p>
        </div>

        {/* Search Section */}
        <section className="mb-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Find Branches Near You</CardTitle>
              <CardDescription className="text-center">Enter your location to find the nearest branch</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Enter city, area, or PIN code" className="pl-9" />
                </div>
                <Button>
                  <Navigation className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Branch Listings */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-semibold text-center mb-8">Popular Branches</h2>
          <div className="grid gap-6">
            {branches.map((branch, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold mb-2">{branch.name}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 flex-shrink-0" />
                          <span>{branch.phone}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{branch.hours}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Services Available:</h4>
                        <div className="flex flex-wrap gap-2">
                          {branch.services.map((service, idx) => (
                            <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button className="w-full">Get Directions</Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Call Branch
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
          <h2 className="text-3xl font-heading font-semibold mb-4">Need Help Finding a Branch?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our customer service team is available to help you locate the nearest branch and services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Call Customer Care</Button>
            <Button size="lg" variant="outline">
              Chat with Us
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
