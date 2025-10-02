import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl

  // Check if the route is protected (dashboard routes)
  const isProtectedRoute = pathname.startsWith("/dashboard")

  // Check if user is authenticated by looking for user data in cookies
  const userCookie = request.cookies.get("currentUser")
  const isAuthenticated = userCookie?.value && userCookie.value !== ""

  console.log("[v0] Middleware - Path:", pathname, "Auth:", !!isAuthenticated)

  // If trying to access protected route without authentication
  if (isProtectedRoute && !isAuthenticated) {
    console.log("[v0] Redirecting to login - no auth")
    // Redirect to login page
    const loginUrl = new URL("/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  // If authenticated user tries to access login page, redirect to dashboard
  if (pathname === "/login" && isAuthenticated) {
    console.log("[v0] Redirecting to dashboard - already auth")
    const dashboardUrl = new URL("/dashboard", request.url)
    return NextResponse.redirect(dashboardUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
}
