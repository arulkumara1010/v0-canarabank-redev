import { Card } from "@/components/ui/card"
import { Home, Car, GraduationCap, CreditCard, Coins, Send, Receipt, FileText, PiggyBank } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"

const quickAccessItems = [
  {
    icon: Home,
    title: "Home Loans",
    href: "/loans/home-loan",
  },
  {
    icon: Car,
    title: "Car Loans",
    href: "/loans/car-loan",
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    href: "/loans/education-loan",
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    href: "/personal/cards",
  },
  {
    icon: Coins,
    title: "Digital Deposits",
    href: "/personal/savings",
  },
]

const loggedInQuickAccessItems = [
  {
    icon: Send,
    title: "Transfer Money",
    href: "/dashboard/transfer",
  },
  {
    icon: Receipt,
    title: "Pay Bills",
    href: "/dashboard/bills",
  },
  {
    icon: FileText,
    title: "Loan Status",
    href: "/dashboard/loans",
  },
  {
    icon: PiggyBank,
    title: "Savings",
    href: "/personal/savings",
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    href: "/personal/cards",
  },
]

export function QuickAccessPanel() {
  // Safely use useAuth with error handling
  let user = null
  try {
    const authContext = useAuth()
    user = authContext?.user || null
  } catch (error) {
    // If useAuth fails (e.g., not wrapped in AuthProvider), default to null
    user = null
  }
  
  const items = user ? loggedInQuickAccessItems : quickAccessItems

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-heading font-bold mb-2">
            {user ? "Quick Banking Actions" : "Quick Access"}
          </h2>
          <p className="text-muted-foreground">
            {user ? "Manage your account and banking needs" : "Explore our services and products"}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <Link key={item.title} href={item.href}>
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-border/50">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-sm text-center text-balance">{item.title}</h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}