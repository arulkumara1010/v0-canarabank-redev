import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LOANS } from "@/lib/loans"

export default function LoanDetailsPage({ params }: { params: { slug: string } }) {
  const loan = LOANS.find((l) => l.slug === params.slug)
  if (!loan) return notFound()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-heading font-bold">{loan.title}</h1>
            <p className="text-muted-foreground mt-2">{loan.description}</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Details</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-muted-foreground">Interest Rate</p>
                <p className="font-medium">{loan.rate}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Loan Amount</p>
                <p className="font-medium">{loan.amount}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Tenure</p>
                <p className="font-medium">{loan.tenure}</p>
              </div>
              {loan.type ? (
                <div>
                  <p className="text-xs text-muted-foreground">Type</p>
                  <p className="font-medium capitalize">{loan.type}</p>
                </div>
              ) : null}
              {loan.ltv ? (
                <div>
                  <p className="text-xs text-muted-foreground">LTV</p>
                  <p className="font-medium">{loan.ltv}</p>
                </div>
              ) : null}
              {loan.processingFee ? (
                <div>
                  <p className="text-xs text-muted-foreground">Processing Fee</p>
                  <p className="font-medium">{loan.processingFee}</p>
                </div>
              ) : null}
            </CardContent>
          </Card>

          {/* Eligibility */}
          {loan.eligibility?.length ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {loan.eligibility.map((e) => (
                    <li key={e}>• {e}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}

          {/* Required Documents */}
          {loan.docsRequired?.length ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {loan.docsRequired.map((d) => (
                    <li key={d}>• {d}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {loan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-3 justify-center">
            <Link href={`/loans/${loan.slug}/apply`}>
              <Button size="lg">Apply Now</Button>
            </Link>
            <Link href="/loans">
              <Button size="lg" variant="outline" className="bg-transparent">
                Back to All Loans
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
