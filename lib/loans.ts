export type Loan = {
  slug: string
  category: "personal" | "home" | "business" | "education" | "vehicle"
  title: string
  description: string
  rate: string
  amount: string
  tenure: string
  features: string[]
  // New optional fields for uniqueness and richer UI
  type?: "secured" | "unsecured"
  processingFee?: string
  ltv?: string // loan-to-value where applicable
  eligibility?: string[]
  docsRequired?: string[]
  icon?: string
}

export const LOANS: Loan[] = [
  {
    slug: "personal-loan",
    category: "personal",
    title: "Personal Loan",
    description: "Instant personal loans with minimal documentation and flexible usage.",
    rate: "10.5% onwards",
    amount: "Up to ₹40 Lakhs",
    tenure: "Up to 5 years",
    features: ["Instant approval", "Minimal documentation", "Flexible usage", "Prepayment facility"],
    type: "unsecured",
    processingFee: "Up to 2.0% of sanctioned amount",
    eligibility: ["Salaried 21–60 years", "Minimum monthly income ₹25,000", "Credit score 700+"],
    docsRequired: ["KYC (Aadhaar/PAN)", "Last 3 months' salary slips", "Last 6 months' bank statements"],
    icon: "/personal-loan-icon.jpg",
  },
  {
    slug: "car-loan",
    category: "vehicle",
    title: "Car Loan",
    description: "Drive your dream car with up to 100% on-road financing.",
    rate: "8.75% onwards",
    amount: "Up to ₹1 Crore",
    tenure: "Up to 7 years",
    features: ["Quick processing", "Flexible EMI options", "Insurance facility", "Attractive interest rates"],
    type: "secured",
    ltv: "Up to 90–100% of on-road price",
    processingFee: "Up to 1.0% of loan amount",
    eligibility: ["Salaried/Self-employed", "Stable income proof", "Age 21–65 years"],
    docsRequired: ["KYC", "Proforma invoice", "Income proof", "Address proof"],
    icon: "/car-loan-icon.jpg",
  },
  {
    slug: "education-loan",
    category: "education",
    title: "Education Loan",
    description: "Fund tuition and living expenses with flexible repayment after studies.",
    rate: "9.5% onwards",
    amount: "Up to ₹1.5 Crores",
    tenure: "Up to 15 years",
    features: ["Covers tuition & living", "Moratorium period", "Tax benefits", "Collateral-free options"],
    type: "unsecured",
    processingFee: "Up to 1.5% of loan amount",
    eligibility: ["Admission to recognized institution (India/Abroad)", "Co-applicant may be required"],
    docsRequired: ["Admission letter", "Fee structure", "KYC", "Co-applicant income proof"],
    icon: "/education-loan-icon.jpg",
  },
  {
    slug: "home-loan",
    category: "home",
    title: "Home Loan",
    description: "Finance your dream home with competitive rates and flexible tenure.",
    rate: "8.5% onwards",
    amount: "Up to ₹5 Crores",
    tenure: "Up to 30 years",
    features: ["Minimal documentation", "Quick approval", "Flexible repayment", "Balance transfer facility"],
    type: "secured",
    ltv: "Up to 80–90% of property value",
    processingFee: "0.25%–0.50% of loan amount",
    eligibility: ["Salaried/Self-employed", "Property within approved locations", "Age 21–70 years"],
    docsRequired: ["KYC", "Income proof", "Property documents (Title/Agreement)", "Bank statements"],
    icon: "/home-loan-icon.jpg",
  },
  {
    slug: "working-capital",
    category: "business",
    title: "Working Capital Loan",
    description: "Meet day-to-day business operational needs with flexible limits.",
    rate: "9.50% onwards",
    amount: "Up to ₹50 Crores",
    tenure: "12 Months (renewable)",
    features: ["Quick disbursement", "Flexible repayment", "Minimal documentation"],
    type: "secured",
    processingFee: "1.0%–1.5% of sanctioned limit",
    eligibility: ["Business vintage ≥ 2 years", "Satisfactory banking track record"],
    docsRequired: ["KYC (Entity & Promoters)", "GST returns", "Bank statements", "Financials (P&L/BS)"],
    icon: "/working-capital-icon.jpg",
  },
  {
    slug: "term-loan",
    category: "business",
    title: "Term Loan",
    description: "Finance expansion, machinery, or capital projects.",
    rate: "10.25% onwards",
    amount: "Up to ₹100 Crores",
    tenure: "Up to 7 years",
    features: ["Competitive rates", "Structured repayment", "Long tenure"],
    type: "secured",
    processingFee: "Up to 1.5% of loan amount",
    eligibility: ["Business vintage ≥ 3 years", "Profitable operations preferred"],
    docsRequired: ["KYC", "Project report", "Financials", "Collateral documents"],
    icon: "/term-loan-icon.jpg",
  },
  {
    slug: "msme-loan",
    category: "business",
    title: "MSME Loan",
    description: "Special schemes for Micro, Small & Medium Enterprises.",
    rate: "8.75% onwards",
    amount: "Up to ₹25 Crores",
    tenure: "Up to 5 years",
    features: ["Government subsidies", "Collateral-free options", "Quick approval"],
    type: "secured",
    processingFee: "Up to 1.0% of loan amount",
    eligibility: ["Udyam registered MSMEs", "Business vintage ≥ 1 year"],
    docsRequired: ["KYC", "Udyam certificate", "Bank statements", "ITR/GST returns"],
    icon: "/msme-loan-icon.jpg",
  },
]
