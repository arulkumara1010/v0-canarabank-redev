"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LOANS, type Loan } from "@/lib/loans"

const CATEGORIES: Array<Loan["category"] | "all"> = ["all", "personal", "home", "vehicle", "education", "business"]

export default function AllLoansPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("all")
  const [q, setQ] = useState("")

  const visible = useMemo(() => {
    const list = active === "all" ? LOANS : LOANS.filter((l) => l.category === active)
    if (!q.trim()) return list
    const term = q.toLowerCase()
    return list.filter(
      (l) =>
        l.title.toLowerCase().includes(term) ||
        l.description.toLowerCase().includes(term) ||
        l.features.some((f) => f.toLowerCase().includes(term)),
    )
  }, [active, q])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold text-balance">All Loans</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-pretty">
            Explore our loan products, filter by category, and apply online in minutes.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <Button
                key={c}
                size="sm"
                variant={active === c ? "default" : "outline"}
                className={active === c ? "" : "bg-transparent"}
                onClick={() => setActive(c)}
              >
                {c === "all" ? "All" : `${c[0].toUpperCase()}${c.slice(1)}`}
              </Button>
            ))}
          </div>
          <div className="w-full md:w-72">
            <Input placeholder="Search loans..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map((loan) => (
            <Card key={loan.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-2">
                {loan.icon ? (
                  <img
                    src={loan.icon || "/placeholder.svg"}
                    width={64}
                    height={64}
                    alt={`${loan.title} icon`}
                    className="h-12 w-12"
                  />
                ) : null}
                <CardTitle className="text-xl">{loan.title}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">{loan.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs capitalize">
                    {loan.category} loan
                  </span>
                  {loan.type ? (
                    <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs">
                      {loan.type === "secured" ? "Secured" : "Unsecured"}
                    </span>
                  ) : null}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-[10px] text-muted-foreground">Rate</p>
                    <p className="font-medium">{loan.rate}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">Amount</p>
                    <p className="font-medium">{loan.amount}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">Tenure</p>
                    <p className="font-medium">{loan.tenure}</p>
                  </div>
                </div>

                {/* show unique attributes compactly */}
                {loan.processingFee || loan.ltv ? (
                  <div className="grid grid-cols-2 gap-3">
                    {loan.processingFee ? (
                      <div>
                        <p className="text-[10px] text-muted-foreground">Processing Fee</p>
                        <p className="text-sm">{loan.processingFee}</p>
                      </div>
                    ) : null}
                    {loan.ltv ? (
                      <div>
                        <p className="text-[10px] text-muted-foreground">LTV</p>
                        <p className="text-sm">{loan.ltv}</p>
                      </div>
                    ) : null}
                  </div>
                ) : null}

                <ul className="text-sm text-muted-foreground space-y-1">
                  {loan.features.slice(0, 3).map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Link href={`/loans/${loan.slug}`}>
                    <Button variant="outline" className="bg-transparent">
                      View Details
                    </Button>
                  </Link>
                  <Link href={`/loans/${loan.slug}/apply`}>
                    <Button>Apply Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
