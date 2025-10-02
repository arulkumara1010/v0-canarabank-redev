// Authentication utilities with dummy data
export interface User {
  id: string
  name: string
  email: string
  accountNumber: string
  accountType: "savings" | "current" | "business"
  balance: number
  phone: string
}

// Dummy users for testing
export const DUMMY_USERS: User[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    accountNumber: "1234567890",
    accountType: "savings",
    balance: 125000,
    phone: "+91 9876543210",
  },
  {
    id: "2",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    accountNumber: "0987654321",
    accountType: "current",
    balance: 250000,
    phone: "+91 8765432109",
  },
  {
    id: "3",
    name: "Amit Business Solutions",
    email: "amit@business.com",
    accountNumber: "5555666677",
    accountType: "business",
    balance: 500000,
    phone: "+91 7654321098",
  },
]

// Dummy credentials for login
export const DUMMY_CREDENTIALS = [
  { email: "rajesh.kumar@email.com", password: "password123" },
  { email: "priya.sharma@email.com", password: "password123" },
  { email: "amit@business.com", password: "password123" },
]

export const authenticateUser = (email: string, password: string): User | null => {
  const credential = DUMMY_CREDENTIALS.find((c) => c.email === email && c.password === password)
  if (credential) {
    return DUMMY_USERS.find((u) => u.email === email) || null
  }
  return null
}

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null
  const userData = localStorage.getItem("currentUser")
  return userData ? JSON.parse(userData) : null
}

export const setCurrentUser = (user: User | null): void => {
  if (typeof window === "undefined") return
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user))
  } else {
    localStorage.removeItem("currentUser")
  }
}

export const logout = (): void => {
  setCurrentUser(null)
}
