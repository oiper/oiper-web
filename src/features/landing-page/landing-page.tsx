import { CoreFeaturesSection } from './sections/core-features-section'
import { DownloadSection } from './sections/download-section'
import { FooterSection } from './sections/footer-section'
import { HeroSection } from './sections/hero-section'
import { HowItWorksSection } from './sections/how-it-works-section'
import { PerformanceSection } from './sections/performance-section'
import { PrivacySection } from './sections/privacy-section'

export function LandingPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <HowItWorksSection />
      <CoreFeaturesSection />
      <PerformanceSection />
      <PrivacySection />
      <DownloadSection />
      <FooterSection />
    </main>
  )
}
