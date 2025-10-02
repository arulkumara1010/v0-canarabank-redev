import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

const footerSections = [
  {
    title: "Our Products",
    links: [
      { title: "Savings Accounts", href: "/personal/savings" },
      { title: "Credit Cards", href: "/personal/cards" },
      { title: "Home Loans", href: "/personal/home-loans" },
      { title: "Personal Loans", href: "/personal/loans" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Calculators", href: "/services/calculators" },
      { title: "Interest Rates", href: "/about/rates" },
      { title: "Service Charges", href: "/about/charges" },
      { title: "Forms & Downloads", href: "/support/forms" },
    ],
  },
  {
    title: "About Us",
    links: [
      { title: "Our History", href: "/about" },
      { title: "Careers", href: "/about/careers" },
      { title: "Media Center", href: "/about/news" },
      { title: "CSR Initiatives", href: "/about/csr" },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      { title: "Privacy Policy", href: "/support/privacy" },
      { title: "Terms & Conditions", href: "/support/terms" },
      { title: "Contact Us", href: "/support/contact" },
      { title: "Customer Care", href: "/support/care" },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/canarabank", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/canarabank", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/canara-bank", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/canarabank", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Media */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="h-8 w-8 rounded bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">CB</span>
              </div>
              <span className="font-heading font-semibold text-xl">Canara Bank</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 text-pretty">
              Banking that moves with you. Trusted by millions across India.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-heading font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Canara Bank. All rights reserved. | Licensed by Reserve Bank of India
          </p>
        </div>
      </div>
    </footer>
  )
}
