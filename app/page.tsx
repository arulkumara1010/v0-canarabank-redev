import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QuickAccessPanel } from "@/components/quick-access-panel"
import { FeaturedProducts } from "@/components/featured-products"
import { InteractiveTools } from "@/components/interactive-tools"
import { TrustSecurity } from "@/components/trust-security"
import { BranchLocator } from "@/components/branch-locator"
import { Footer } from "@/components/footer"
import { FloatingChat } from "@/components/floating-chat"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <QuickAccessPanel />
        <FeaturedProducts />
        <InteractiveTools />
        <TrustSecurity />
        <BranchLocator />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
