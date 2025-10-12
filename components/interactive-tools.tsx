"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Calculator } from "lucide-react"

export function InteractiveTools() {
  const [loanAmount, setLoanAmount] = useState([500000])
  const [interestRate, setInterestRate] = useState([8.5])
  const [tenure, setTenure] = useState([5])

  const calculateEMI = () => {
    const P = loanAmount[0]
    const r = interestRate[0] / 100 / 12
    const n = tenure[0] * 12

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    return Math.round(emi)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-balance mb-4">Plan Your Finances</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Use our interactive tools to make informed financial decisions
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Calculator className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">EMI Calculator</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Loan Amount</label>
                    <span className="text-sm font-semibold text-primary">₹{loanAmount[0].toLocaleString("en-IN")}</span>
                  </div>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={10000000}
                    min={100000}
                    step={50000}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Interest Rate (%)</label>
                    <span className="text-sm font-semibold text-primary">{interestRate[0]}%</span>
                  </div>
                  <Slider
                    value={interestRate}
                    onValueChange={setInterestRate}
                    max={20}
                    min={5}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Tenure (Years)</label>
                    <span className="text-sm font-semibold text-primary">{tenure[0]} years</span>
                  </div>
                  <Slider value={tenure} onValueChange={setTenure} max={30} min={1} step={1} className="w-full" />
                </div>
              </div>

              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Monthly EMI</p>
                <p className="text-3xl font-bold text-primary">₹{calculateEMI().toLocaleString("en-IN")}</p>
              </div>

              <Button
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium min-h-[48px]"
                asChild
              >
                <a href="/loans/personal-loan/apply">Apply for a Personal Loan</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
