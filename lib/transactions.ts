// Transaction management system
export interface Transaction {
  id: string
  type: 'credit' | 'debit'
  amount: number
  description: string
  date: string
  category: 'transfer' | 'bill' | 'salary' | 'refund' | 'withdrawal' | 'other'
  reference?: string
  status: 'completed' | 'pending' | 'failed'
}

export interface LoanApplication {
  id: string
  loanType: string
  amount: number
  tenure: string
  purpose: string
  applicationDate: string
  status: 'submitted' | 'under_review' | 'approved' | 'rejected' | 'disbursed'
  applicationNumber: string
  remarks?: string
}

export interface UserData {
  user: {
    id: string
    name: string
    email: string
    accountNumber: string
    accountType: "savings" | "current" | "business"
    balance: number
    phone: string
  }
  transactions: Transaction[]
  loanApplications: LoanApplication[]
}

// Transaction categories
export const TRANSACTION_CATEGORIES = {
  transfer: 'Money Transfer',
  bill: 'Bill Payment',
  salary: 'Salary Credit',
  refund: 'Refund',
  withdrawal: 'ATM Withdrawal',
  other: 'Other'
} as const

// Loan application statuses
export const LOAN_STATUSES = {
  submitted: 'Application Submitted',
  under_review: 'Under Review',
  approved: 'Approved',
  rejected: 'Rejected',
  disbursed: 'Disbursed'
} as const

// Generate unique transaction ID
export const generateTransactionId = (): string => {
  return `TXN-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
}

// Generate unique loan application ID
export const generateLoanApplicationId = (): string => {
  return `LOAN-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
}

// Get user data from localStorage
export const getUserData = (userId: string): UserData | null => {
  if (typeof window === "undefined") return null
  
  const userData = localStorage.getItem(`userData_${userId}`)
  return userData ? JSON.parse(userData) : null
}

// Save user data to localStorage
export const saveUserData = (userData: UserData): void => {
  if (typeof window === "undefined") return
  
  localStorage.setItem(`userData_${userData.user.id}`, JSON.stringify(userData))
}

// Add transaction to user data
export const addTransaction = (userId: string, transaction: Omit<Transaction, 'id' | 'date'>): Transaction => {
  const userData = getUserData(userId)
  if (!userData) {
    throw new Error('User data not found')
  }

  const newTransaction: Transaction = {
    ...transaction,
    id: generateTransactionId(),
    date: new Date().toISOString()
  }

  userData.transactions.unshift(newTransaction)
  
  // Update balance based on transaction
  if (transaction.type === 'credit') {
    userData.user.balance += transaction.amount
  } else if (transaction.type === 'debit') {
    userData.user.balance -= transaction.amount
  }

  saveUserData(userData)
  return newTransaction
}

// Add loan application to user data
export const addLoanApplication = (userId: string, loanData: Omit<LoanApplication, 'id' | 'applicationDate' | 'status'>): LoanApplication => {
  const userData = getUserData(userId)
  if (!userData) {
    throw new Error('User data not found')
  }

  const newLoanApplication: LoanApplication = {
    ...loanData,
    id: generateLoanApplicationId(),
    applicationDate: new Date().toISOString(),
    status: 'submitted'
  }

  userData.loanApplications.unshift(newLoanApplication)
  saveUserData(userData)
  return newLoanApplication
}

// Update loan application status
export const updateLoanApplicationStatus = (userId: string, loanId: string, status: LoanApplication['status'], remarks?: string): boolean => {
  const userData = getUserData(userId)
  if (!userData) return false

  const loanIndex = userData.loanApplications.findIndex(loan => loan.id === loanId)
  if (loanIndex === -1) return false

  userData.loanApplications[loanIndex].status = status
  if (remarks) {
    userData.loanApplications[loanIndex].remarks = remarks
  }

  saveUserData(userData)
  return true
}

// Initialize user data if not exists
export const initializeUserData = (user: UserData['user']): UserData => {
  const existingData = getUserData(user.id)
  if (existingData) {
    return existingData
  }

  const initialData: UserData = {
    user,
    transactions: [
      {
        id: generateTransactionId(),
        type: 'credit',
        amount: user.balance,
        description: 'Initial Balance',
        date: new Date().toISOString(),
        category: 'other',
        status: 'completed'
      }
    ],
    loanApplications: []
  }

  saveUserData(initialData)
  return initialData
}

// Get recent transactions
export const getRecentTransactions = (userId: string, limit: number = 10): Transaction[] => {
  const userData = getUserData(userId)
  if (!userData) return []

  return userData.transactions.slice(0, limit)
}

// Get loan applications
export const getLoanApplications = (userId: string): LoanApplication[] => {
  const userData = getUserData(userId)
  if (!userData) return []

  return userData.loanApplications
}

// Calculate current balance from transactions
export const calculateBalance = (userId: string): number => {
  const userData = getUserData(userId)
  if (!userData) return 0

  return userData.transactions.reduce((balance, transaction) => {
    if (transaction.status === 'completed') {
      return transaction.type === 'credit' 
        ? balance + transaction.amount 
        : balance - transaction.amount
    }
    return balance
  }, 0)
}
