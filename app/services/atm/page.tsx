"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, CreditCard, Search, Navigation, Filter, Star, ExternalLink, Clock, Wifi, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { toast } from "sonner"

interface ATM {
  id: string
  location: string
  address: string
  city: string
  pincode: string
  type: string
  features: string[]
  services: string[]
  status: "Active" | "Maintenance" | "Out of Service"
  cashAvailable: boolean
  lastUpdated: string
  distance?: number
  rating: number
  reviews: number
  operatingHours: string
  landmark: string
  accessibility: string[]
}

const dummyATMs: ATM[] = [
  {
    id: "delhi-saket-mall",
    location: "Select City Mall - Saket",
    address: "Select City Walk, Saket, New Delhi",
    city: "New Delhi",
    pincode: "110017",
    type: "Cash Deposit & Withdrawal",
    features: ["24/7 Available", "Cash Deposit", "Balance Inquiry", "PIN Change", "Mini Statement"],
    services: ["Cash Withdrawal", "Cash Deposit", "Balance Inquiry", "PIN Change", "Mini Statement", "Fund Transfer"],
    status: "Active",
    cashAvailable: true,
    lastUpdated: "2 minutes ago",
    rating: 4.5,
    reviews: 89,
    operatingHours: "24/7",
    landmark: "Near Food Court, Ground Floor",
    accessibility: ["Wheelchair Accessible", "Audio Instructions"]
  },
  {
    id: "delhi-cp-atm",
    location: "Connaught Place ATM",
    address: "Block A, Connaught Place, New Delhi",
    city: "New Delhi",
    pincode: "110001",
    type: "Cash Withdrawal",
    features: ["24/7 Available", "Balance Inquiry", "Mini Statement"],
    services: ["Cash Withdrawal", "Balance Inquiry", "Mini Statement"],
    status: "Active",
    cashAvailable: true,
    lastUpdated: "5 minutes ago",
    rating: 4.3,
    reviews: 67,
    operatingHours: "24/7",
    landmark: "Near Metro Station Exit",
    accessibility: ["Wheelchair Accessible"]
  },
  {
    id: "bangalore-phoenix-mall",
    location: "Phoenix Mall - Whitefield",
    address: "Whitefield Main Road, Bangalore",
    city: "Bangalore",
    pincode: "560066",
    type: "Cash Deposit & Withdrawal",
    features: ["24/7 Available", "Cash Deposit", "Balance Inquiry", "PIN Change", "Fund Transfer"],
    services: ["Cash Withdrawal", "Cash Deposit", "Balance Inquiry", "PIN Change", "Fund Transfer", "Mini Statement"],
    status: "Active",
    cashAvailable: true,
    lastUpdated: "1 minute ago",
    rating: 4.7,
    reviews: 124,
    operatingHours: "24/7",
    landmark: "Near Central Court, Level 2",
    accessibility: ["Wheelchair Accessible", "Audio Instructions", "Braille Keypad"]
  },
  {
    id: "bangalore-mg-road-atm",
    location: "MG Road ATM",
    address: "MG Road, Bangalore, Karnataka",
    city: "Bangalore",
    pincode: "560001",
    type: "Cash Withdrawal",
    features: ["24/7 Available", "Balance Inquiry", "Mini Statement"],
    services: ["Cash Withdrawal", "Balance Inquiry", "Mini Statement"],
    status: "Active",
    cashAvailable: false,
    lastUpdated: "15 minutes ago",
    rating: 4.2,
    reviews: 95,
    operatingHours: "24/7",
    landmark: "Near Brigade Road Junction",
    accessibility: ["Wheelchair Accessible"]
  },
  {
    id: "mumbai-bandra-atm",
    location: "Linking Road ATM",
    address: "Linking Road, Bandra West, Mumbai",
    city: "Mumbai",
    pincode: "400050",
    type: "Cash Deposit & Withdrawal",
    features: ["24/7 Available", "Cash Deposit", "Balance Inquiry", "PIN Change", "Fund Transfer"],
    services: ["Cash Withdrawal", "Cash Deposit", "Balance Inquiry", "PIN Change", "Fund Transfer", "Mini Statement"],
    status: "Active",
    cashAvailable: true,
    lastUpdated: "3 minutes ago",
    rating: 4.4,
    reviews: 78,
    operatingHours: "24/7",
    landmark: "Near Bandra Station",
    accessibility: ["Wheelchair Accessible", "Audio Instructions"]
  },
  {
    id: "mumbai-fort-atm",
    location: "Fort District ATM",
    address: "Fort District, Mumbai, Maharashtra",
    city: "Mumbai",
    pincode: "400001",
    type: "Cash Withdrawal",
    features: ["24/7 Available", "Balance Inquiry", "Mini Statement"],
    services: ["Cash Withdrawal", "Balance Inquiry", "Mini Statement"],
    status: "Maintenance",
    cashAvailable: false,
    lastUpdated: "2 hours ago",
    rating: 4.1,
    reviews: 56,
    operatingHours: "24/7",
    landmark: "Near CST Station",
    accessibility: ["Wheelchair Accessible"]
  },
  {
    id: "chennai-t-nagar-atm",
    location: "T. Nagar ATM",
    address: "Pondy Bazaar, T. Nagar, Chennai",
    city: "Chennai",
    pincode: "600017",
    type: "Cash Deposit & Withdrawal",
    features: ["24/7 Available", "Cash Deposit", "Balance Inquiry", "PIN Change"],
    services: ["Cash Withdrawal", "Cash Deposit", "Balance Inquiry", "PIN Change", "Mini Statement"],
    status: "Active",
    cashAvailable: true,
    lastUpdated: "8 minutes ago",
    rating: 4.3,
    reviews: 73,
    operatingHours: "24/7",
    landmark: "Near Pondy Bazaar Metro",
    accessibility: ["Wheelchair Accessible"]
  },
  {
    id: "hyderabad-banjara-atm",
    location: "Banjara Hills ATM",
    address: "Road No. 12, Banjara Hills, Hyderabad",
    city: "Hyderabad",
    pincode: "500034",
    type: "Cash Withdrawal",
    features: ["24/7 Available", "Balance Inquiry", "Mini Statement"],
    services: ["Cash Withdrawal", "Balance Inquiry", "Mini Statement"],
    status: "Active",
    cashAvailable: true,
    lastUpdated: "4 minutes ago",
    rating: 4.6,
    reviews: 91,
    operatingHours: "24/7",
    landmark: "Near City Center Mall",
    accessibility: ["Wheelchair Accessible", "Audio Instructions"]
  },
  {
    id: "kolkata-park-street-atm",
    location: "Park Street ATM",
    address: "Park Street, Kolkata, West Bengal",
    city: "Kolkata",
    pincode: "700016",
    type: "Cash Deposit & Withdrawal",
    features: ["24/7 Available", "Cash Deposit", "Balance Inquiry", "PIN Change", "Fund Transfer"],
    services: ["Cash Withdrawal", "Cash Deposit", "Balance Inquiry", "PIN Change", "Fund Transfer", "Mini Statement"],
    status: "Active",
    cashAvailable: true,
    lastUpdated: "6 minutes ago",
    rating: 4.4,
    reviews: 82,
    operatingHours: "24/7",
    landmark: "Near Flurys",
    accessibility: ["Wheelchair Accessible"]
  },
  {
    id: "pune-camp-atm",
    location: "Camp Area ATM",
    address: "MG Road, Camp Area, Pune",
    city: "Pune",
    pincode: "411001",
    type: "Cash Withdrawal",
    features: ["24/7 Available", "Balance Inquiry", "Mini Statement"],
    services: ["Cash Withdrawal", "Balance Inquiry", "Mini Statement"],
    status: "Out of Service",
    cashAvailable: false,
    lastUpdated: "1 day ago",
    rating: 3.8,
    reviews: 45,
    operatingHours: "24/7",
    landmark: "Near Pune Station",
    accessibility: ["Wheelchair Accessible"]
  },
  {
    id: "delhi-airport-atm",
    location: "Delhi Airport ATM",
    address: "Terminal 3, Indira Gandhi International Airport, New Delhi",
    city: "New Delhi",
    pincode: "110037",
    type: "Cash Deposit & Withdrawal",
    features: ["24/7 Available", "Cash Deposit", "Balance Inquiry", "PIN Change", "Multi-currency"],
    services: ["Cash Withdrawal", "Cash Deposit", "Balance Inquiry", "PIN Change", "Mini Statement", "Foreign Exchange"],
    status: "Active",
    cashAvailable: true,
    lastUpdated: "1 minute ago",
    rating: 4.8,
    reviews: 156,
    operatingHours: "24/7",
    landmark: "Near Departure Gate 1",
    accessibility: ["Wheelchair Accessible", "Audio Instructions", "Multi-language"]
  },
  {
    id: "bangalore-airport-atm",
    location: "Bangalore Airport ATM",
    address: "Terminal 1, Kempegowda International Airport, Bangalore",
    city: "Bangalore",
    pincode: "560300",
    type: "Cash Deposit & Withdrawal",
    features: ["24/7 Available", "Cash Deposit", "Balance Inquiry", "PIN Change", "Multi-currency"],
    services: ["Cash Withdrawal", "Cash Deposit", "Balance Inquiry", "PIN Change", "Mini Statement", "Foreign Exchange"],
    status: "Active",
    cashAvailable: true,
    lastUpdated: "2 minutes ago",
    rating: 4.7,
    reviews: 134,
    operatingHours: "24/7",
    landmark: "Near Arrival Gate 2",
    accessibility: ["Wheelchair Accessible", "Audio Instructions", "Multi-language"]
  }
]

export default function ATMLocatorPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")
  const [filteredATMs, setFilteredATMs] = useState<ATM[]>(dummyATMs)
  const [selectedCity, setSelectedCity] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [sortBy, setSortBy] = useState("distance")

  const cities = ["all", ...Array.from(new Set(dummyATMs.map(atm => atm.city)))]
  const types = ["all", "Cash Withdrawal", "Cash Deposit & Withdrawal"]
  const statuses = ["all", "Active", "Maintenance", "Out of Service"]

  useEffect(() => {
    let filtered = dummyATMs

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(atm => 
        atm.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        atm.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        atm.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        atm.pincode.includes(searchQuery) ||
        atm.landmark.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by city
    if (selectedCity !== "all") {
      filtered = filtered.filter(atm => atm.city === selectedCity)
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter(atm => atm.type === selectedType)
    }

    // Filter by status
    if (selectedStatus !== "all") {
      filtered = filtered.filter(atm => atm.status === selectedStatus)
    }

    // Sort ATMs
    if (sortBy === "distance") {
      // Simulate distance calculation (random for demo)
      filtered = filtered.map(atm => ({
        ...atm,
        distance: Math.floor(Math.random() * 15) + 1
      })).sort((a, b) => (a.distance || 0) - (b.distance || 0))
    } else if (sortBy === "rating") {
      filtered = filtered.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "name") {
      filtered = filtered.sort((a, b) => a.location.localeCompare(b.location))
    }

    setFilteredATMs(filtered)
  }, [searchQuery, selectedCity, selectedType, selectedStatus, sortBy])

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a location to search")
      return
    }
    // Search is handled by useEffect
  }

  const handleGetDirections = (atm: ATM) => {
    // In a real app, this would open maps with directions
    toast.success(`Directions to ${atm.location} will open in your maps app`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-green-600 bg-green-100"
      case "Maintenance": return "text-yellow-600 bg-yellow-100"
      case "Out of Service": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getCashStatusColor = (cashAvailable: boolean) => {
    return cashAvailable ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <CreditCard className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">ATM Locator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the nearest Canara Bank ATM for all your banking needs
          </p>
        </div>

        {/* Search Section */}
        <section className="mb-8">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Find ATMs Near You</CardTitle>
              <CardDescription className="text-center">Locate the nearest ATM with cash availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Enter location, landmark, or PIN code" 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <Button onClick={handleSearch}>
                  <Navigation className="w-4 h-4 mr-2" />
                  Find ATMs
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

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="ATM Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map(type => (
                      <SelectItem key={type} value={type}>
                        {type === "all" ? "All Types" : type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map(status => (
                      <SelectItem key={status} value={status}>
                        {status === "all" ? "All Status" : status}
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
            Found {filteredATMs.length} ATM{filteredATMs.length !== 1 ? 's' : ''} 
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* ATM Listings */}
        <section className="mb-16">
          <div className="grid gap-6">
            {filteredATMs.map((atm) => (
              <Card key={atm.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* ATM Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1">{atm.location}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{atm.rating}</span>
                            <span className="text-sm text-muted-foreground">({atm.reviews} reviews)</span>
                            {atm.distance && (
                              <Badge variant="secondary" className="ml-2">
                                {atm.distance} km away
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(atm.status)}>
                            {atm.status}
                          </Badge>
                          <Badge className={getCashStatusColor(atm.cashAvailable)}>
                            {atm.cashAvailable ? "Cash Available" : "No Cash"}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">{atm.address}</p>
                            <p className="text-sm text-muted-foreground">{atm.city} - {atm.pincode}</p>
                            <p className="text-sm text-muted-foreground"><strong>Landmark:</strong> {atm.landmark}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm"><strong>Hours:</strong> {atm.operatingHours}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm"><strong>Last Updated:</strong> {atm.lastUpdated}</span>
                        </div>
                      </div>

                      {/* Services */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Services Available:</h4>
                        <div className="flex flex-wrap gap-1">
                          {atm.services.map((service) => (
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
                          {atm.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Accessibility */}
                      {atm.accessibility.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Accessibility:</h4>
                          <div className="flex flex-wrap gap-1">
                            {atm.accessibility.map((access) => (
                              <Badge key={access} variant="outline" className="text-xs text-blue-600 border-blue-600">
                                {access}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="text-sm text-muted-foreground">
                        <p><strong>ATM Type:</strong> {atm.type}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 lg:min-w-[200px]">
                      <Button 
                        onClick={() => handleGetDirections(atm)}
                        className="w-full"
                        variant="outline"
                        disabled={atm.status === "Out of Service"}
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>

                      <Button 
                        className="w-full"
                        variant="outline"
                        disabled={atm.status === "Out of Service"}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Map
                      </Button>

                      {atm.status === "Maintenance" && (
                        <Button 
                          className="w-full"
                          variant="outline"
                        >
                          <Clock className="h-4 w-4 mr-2" />
                          Check Status
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredATMs.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <CreditCard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No ATMs found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or location
                </p>
                <Button onClick={() => {
                  setSearchQuery("")
                  setSelectedCity("all")
                  setSelectedType("all")
                  setSelectedStatus("all")
                }}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </section>

        {/* ATM Services Info */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">ATM Services & Features</CardTitle>
              <CardDescription className="text-center">What you can do at our ATMs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Cash Withdrawal</h3>
                  <p className="text-sm text-muted-foreground">Withdraw cash 24/7 from any Canara Bank ATM</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wifi className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Cash Deposit</h3>
                  <p className="text-sm text-muted-foreground">Deposit cash directly to your account</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Balance Inquiry</h3>
                  <p className="text-sm text-muted-foreground">Check your account balance instantly</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Mini Statement</h3>
                  <p className="text-sm text-muted-foreground">Get your recent transaction history</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">PIN Services</h3>
                  <p className="text-sm text-muted-foreground">Change or generate new ATM PIN</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Navigation className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Fund Transfer</h3>
                  <p className="text-sm text-muted-foreground">Transfer funds between your accounts</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
