import { FeaturesSection } from './components/features-section'
import { FooterSection } from './components/footer-section'
import { HeroSection } from './components/hero-section'
import { PerformanceSection } from './components/performance-section'
import { PricingSection } from './components/pricing-section'
import { PrivacySection } from './components/privacy-section'

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <HeroSection />
      <FeaturesSection /> {/* CENTER ALIGNED SECTION */}
      <PerformanceSection /> {/* LEFT ALIGNED SECTION */}
      <PrivacySection /> {/* CENTER ALIGNED SECTION */}
      LANGUAGES SECTION {/* LEFT ALIGNED SECTION */}
      TESTIMONIALS SECTION {/* CENTER ALIGNED SECTION */}
      <PricingSection /> {/* NO SECTION TITLES, just the pricing cards */}
      <FooterSection />
    </main>
  )
}
