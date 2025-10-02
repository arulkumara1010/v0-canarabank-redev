"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Search, Globe, Menu, User, LogOut } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/components/auth-provider"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const navigationItems = [
    {
      title: "Personal",
      items: [
        { title: "Savings Accounts", href: "/personal/savings" },
        { title: "Credit Cards", href: "/personal/cards" },
        { title: "Personal Loans", href: "/personal/loans" },
        { title: "Current Accounts", href: "/personal/current" },
        { title: "Home Loans", href: "/personal/home-loans" },
        { title: "Investments", href: "/personal/investments" },
      ],
    },
    {
      title: "Business",
      items: [
        { title: "Business Accounts", href: "/business/accounts" },
        { title: "Business Loans", href: "/business/loans" },
        { title: "Trade Finance", href: "/business/trade" },
        { title: "Cash Management", href: "/business/cash" },
      ],
    },
    {
      title: "Services",
      items: [
        { title: "Net Banking", href: user ? "/dashboard" : "/login" },
        { title: "Mobile Banking", href: "/services/mobile" },
        { title: "Branch Locator", href: "/services/branches" },
        { title: "ATM Locator", href: "/services/atm" },
      ],
    },
    {
      title: "Support",
      items: [
        { title: "Contact Us", href: "/support/contact" },
        { title: "Customer Care", href: "/support/care" },
        { title: "FAQs", href: "/support/faq" },
        { title: "Grievances", href: "/support/grievances" },
      ],
    },
    {
      title: "About",
      items: [
        { title: "About Us", href: "/about" },
        { title: "Careers", href: "/about/careers" },
        { title: "News & Updates", href: "/about/news" },
        { title: "CSR", href: "/about/csr" },
      ],
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CB</span>
            </div>
            <span className="font-heading font-semibold text-xl text-primary">Canara Bank</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="h-11 px-4 py-2">{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem) => (
                        <NavigationMenuLink key={subItem.title} asChild>
                          <Link
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{subItem.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search services..." className="pl-9 w-64" />
              </div>
            </div>

            {/* Language Selector */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Globe className="h-4 w-4" />
              <span className="sr-only">Language selector</span>
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <User className="h-4 w-4" />
                    <span className="hidden md:inline">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium min-h-[44px]">
                  Net Banking Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-4">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <h3 className="font-heading font-semibold text-primary">{item.title}</h3>
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block py-2 text-sm hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
