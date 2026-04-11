'use client'

import { DownloadSection } from '@/features/landing-page/download-section'
import { FeaturesSection } from '@/features/landing-page/features-section'
import { FooterSection } from '@/features/landing-page/footer-section'
import { Hero } from '@/features/landing-page/hero-section'
import { HowItWorksSection } from '@/features/landing-page/how-it-works-section'
import { PerformanceSection } from '@/features/landing-page/performance-section'
import { PricingSection } from '@/features/landing-page/pricing-section'
import { PrivacySection } from '@/features/landing-page/privacy-section'

export function LandingPage() {
  return (
    <main className="bg-background text-foreground relative min-h-screen overflow-x-hidden">
      <Hero />
      <HowItWorksSection />
      <FeaturesSection />
      <PerformanceSection />
      <PrivacySection />
      <PricingSection />
      <DownloadSection />
      <FooterSection />
    </main>
  )
}
