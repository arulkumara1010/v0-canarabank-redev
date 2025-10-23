"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Phone, Navigation, Search, Filter, Star, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { toast } from "sonner"

interface Branch {
  id: string
  name: string
  address: string
  city: string
  pincode: string
  phone: string
  email: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  services: string[]
  features: string[]
  manager: string
  established: string
  distance?: number
  rating: number
  reviews: number
}

const dummyBranches: Branch[] = [
  {
    id: "delhi-cp",
    name: "Canara Bank - Connaught Place",
    address: "Block A, Connaught Place, New Delhi",
    city: "New Delhi",
    pincode: "110001",
    phone: "+91-11-2341-5678",
    email: "cp.delhi@canarabank.com",
    hours: {
      weekdays: "10:00 AM - 4:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Locker Facility", "Foreign Exchange", "Investment Services"],
    features: ["Wheelchair Accessible", "Parking Available", "WiFi", "Coffee Corner"],
    manager: "Rajesh Kumar",
    established: "1985",
    rating: 4.5,
    reviews: 127
  },
  {
    id: "delhi-karol-bagh",
    name: "Canara Bank - Karol Bagh",
    address: "Ajmal Khan Road, Karol Bagh, New Delhi",
    city: "New Delhi",
    pincode: "110005",
    phone: "+91-11-2875-4321",
    email: "karolbagh.delhi@canarabank.com",
    hours: {
      weekdays: "10:00 AM - 4:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Locker Facility", "NRI Services"],
    features: ["Wheelchair Accessible", "Parking Available"],
    manager: "Priya Sharma",
    established: "1992",
    rating: 4.3,
    reviews: 89
  },
  {
    id: "bangalore-mg-road",
    name: "Canara Bank - Bangalore Main",
    address: "MG Road, Bangalore, Karnataka",
    city: "Bangalore",
    pincode: "560001",
    phone: "+91-80-2558-9012",
    email: "mgroad.bangalore@canarabank.com",
    hours: {
      weekdays: "10:00 AM - 4:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Investment Services", "NRI Services", "Digital Banking"],
    features: ["Wheelchair Accessible", "Parking Available", "WiFi", "ATM", "Coffee Corner"],
    manager: "Suresh Reddy",
    established: "1978",
    rating: 4.7,
    reviews: 203
  },
  {
    id: "bangalore-whitefield",
    name: "Canara Bank - Whitefield",
    address: "ITPL Road, Whitefield, Bangalore",
    city: "Bangalore",
    pincode: "560066",
    phone: "+91-80-2841-5678",
    email: "whitefield.bangalore@canarabank.com",
    hours: {
      weekdays: "10:00 AM - 4:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Corporate Banking", "Salary Accounts"],
    features: ["Wheelchair Accessible", "Parking Available", "WiFi", "ATM"],
    manager: "Anita Rao",
    established: "2005",
    rating: 4.4,
    reviews: 156
  },
  {
    id: "mumbai-fort",
    name: "Canara Bank - Mumbai Fort",
    address: "Fort District, Mumbai, Maharashtra",
    city: "Mumbai",
    pincode: "400001",
    phone: "+91-22-2266-7890",
    email: "fort.mumbai@canarabank.com",
    hours: {
      weekdays: "10:00 AM - 4:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Corporate Banking", "Trade Finance", "Treasury Services", "Foreign Exchange"],
    features: ["Wheelchair Accessible", "Parking Available", "WiFi", "ATM", "Coffee Corner"],
    manager: "Vikram Patel",
    established: "1972",
    rating: 4.6,
    reviews: 189
  },
  {
    id: "mumbai-bandra",
    name: "Canara Bank - Bandra West",
    address: "Linking Road, Bandra West, Mumbai",
    city: "Mumbai",
    pincode: "400050",
    phone: "+91-22-2645-1234",
    email: "bandra.mumbai@canarabank.com",
    hours: {
      weekdays: "10:00 AM - 4:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Investment Services", "NRI Services"],
    features: ["Wheelchair Accessible", "Parking Available", "WiFi", "ATM"],
    manager: "Sunita Desai",
    established: "1988",
    rating: 4.2,
    reviews: 134
  },
  {
    id: "chennai-t-nagar",
    name: "Canara Bank - T. Nagar",
    address: "Pondy Bazaar, T. Nagar, Chennai",
    city: "Chennai",
    pincode: "600017",
    phone: "+91-44-2434-5678",
    email: "tnagar.chennai@canarabank.com",
    hours: {
      weekdays: "10:00 AM - 4:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Locker Facility", "Investment Services"],
    features: ["Wheelchair Accessible", "Parking Available", "WiFi", "ATM"],
    manager: "Ramesh Krishnan",
    established: "1983",
    rating: 4.3,
    reviews: 98
  },
  {
    id: "hyderabad-banjara-hills",
    name: "Canara Bank - Banjara Hills",
    address: "Road No. 12, Banjara Hills, Hyderabad",
    city: "Hyderabad",
    pincode: "500034",
    phone: "+91-40-2345-6789",
    email: "banjarahills.hyderabad@canarabank.com",
    hours: {
      weekdays: "10:00 AM - 4:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Corporate Banking", "NRI Services"],
    features: ["Wheelchair Accessible", "Parking Available", "WiFi", "ATM", "Coffee Corner"],
    manager: "Kavitha Reddy",
    established: "1995",
    rating: 4.5,
    reviews: 167
  },
  {
    id: "kolkata-park-street",
    name: "Canara Bank - Park Street",
    address: "Park Street, Kolkata, West Bengal",
    city: "Kolkata",
    pincode: "700016",
    phone: "+91-33-2225-6789",
    email: "parkstreet.kolkata@canarabank.com",
    hours: {
      weekdays: "10:00 AM - 4:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Locker Facility", "Foreign Exchange"],
    features: ["Wheelchair Accessible", "Parking Available", "WiFi", "ATM"],
    manager: "Amit Sen",
    established: "1980",
    rating: 4.4,
    reviews: 145
  },
  {
    id: "pune-camp",
    name: "Canara Bank - Camp Area",
    address: "MG Road, Camp Area, Pune",
    city: "Pune",
    pincode: "411001",
    phone: "+91-20-2553-4567",
    email: "camp.pune@canarabank.com",
    hours: {
      weekdays: "10:00 AM - 4:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Investment Services", "NRI Services"],
    features: ["Wheelchair Accessible", "Parking Available", "WiFi", "ATM"],
    manager: "Rajesh Joshi",
    established: "1987",
    rating: 4.3,
    reviews: 112
  }
]

export default function BranchLocatorPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")
  const [filteredBranches, setFilteredBranches] = useState<Branch[]>(dummyBranches)
  const [selectedCity, setSelectedCity] = useState("all")
  const [selectedService, setSelectedService] = useState("all")
  const [sortBy, setSortBy] = useState("distance")

  const cities = ["all", ...Array.from(new Set(dummyBranches.map(b => b.city)))]
  const services = ["all", "Personal Banking", "Business Banking", "Corporate Banking", "NRI Services", "Investment Services", "Foreign Exchange", "Locker Facility"]

  useEffect(() => {
    let filtered = dummyBranches

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(branch => 
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.pincode.includes(searchQuery)
      )
    }

    // Filter by city
    if (selectedCity !== "all") {
      filtered = filtered.filter(branch => branch.city === selectedCity)
    }

    // Filter by service
    if (selectedService !== "all") {
      filtered = filtered.filter(branch => branch.services.includes(selectedService))
    }

    // Sort branches
    if (sortBy === "distance") {
      // Simulate distance calculation (random for demo)
      filtered = filtered.map(branch => ({
        ...branch,
        distance: Math.floor(Math.random() * 10) + 1
      })).sort((a, b) => (a.distance || 0) - (b.distance || 0))
    } else if (sortBy === "rating") {
      filtered = filtered.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "name") {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    setFilteredBranches(filtered)
  }, [searchQuery, selectedCity, selectedService, sortBy])

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a location to search")
      return
    }
    // Search is handled by useEffect
  }

  const handleGetDirections = (branch: Branch) => {
    // In a real app, this would open maps with directions
    toast.success(`Directions to ${branch.name} will open in your maps app`)
  }

  const handleCallBranch = (phone: string) => {
    // In a real app, this would initiate a phone call
    toast.success(`Calling ${phone}`)
  }

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
            Find the nearest Canara Bank branch locations across India
          </p>
        </div>

        {/* Search Section */}
        <section className="mb-8">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Find Branches Near You</CardTitle>
              <CardDescription className="text-center">Enter your location to find the nearest branch</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Enter city, area, or PIN code" 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <Button onClick={handleSearch}>
                  <Navigation className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="City" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>
                        {city === "all" ? "All Cities" : city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service} value={service}>
                        {service === "all" ? "All Services" : service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">Distance</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredBranches.length} branch{filteredBranches.length !== 1 ? 'es' : ''} 
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Branch Listings */}
        <section className="mb-16">
          <div className="grid gap-6">
            {filteredBranches.map((branch) => (
              <Card key={branch.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Branch Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1">{branch.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{branch.rating}</span>
                            <span className="text-sm text-muted-foreground">({branch.reviews} reviews)</span>
                            {branch.distance && (
                              <Badge variant="secondary" className="ml-2">
                                {branch.distance} km away
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {branch.established}
                        </Badge>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">{branch.address}</p>
                            <p className="text-sm text-muted-foreground">{branch.city} - {branch.pincode}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{branch.phone}</span>
                        </div>

                        <div className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div className="text-sm">
                            <p><strong>Mon-Fri:</strong> {branch.hours.weekdays}</p>
                            <p><strong>Sat:</strong> {branch.hours.saturday}</p>
                            <p><strong>Sun:</strong> {branch.hours.sunday}</p>
                          </div>
                        </div>
                      </div>

                      {/* Services */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Services Available:</h4>
                        <div className="flex flex-wrap gap-1">
                          {branch.services.map((service) => (
                            <Badge key={service} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {branch.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        <p><strong>Branch Manager:</strong> {branch.manager}</p>
                        <p><strong>Email:</strong> {branch.email}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 lg:min-w-[200px]">
                      <Button 
                        onClick={() => handleGetDirections(branch)}
                        className="w-full"
                        variant="outline"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      
                      <Button 
                        onClick={() => handleCallBranch(branch.phone)}
                        className="w-full"
                        variant="outline"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Branch
                      </Button>

                      <Button 
                        className="w-full"
                        variant="outline"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Map
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBranches.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No branches found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or location
                </p>
                <Button onClick={() => {
                  setSearchQuery("")
                  setSelectedCity("all")
                  setSelectedService("all")
                }}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}