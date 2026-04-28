import { HeroSection } from './components/hero-section'
import { WorkflowSection } from './components/workflow-section'
import { FeaturesSection } from './components/features-section'
import { PerformanceSection } from './components/performance-section'
import { PrivacySection } from './components/privacy-section'
import { DownloadSection } from './components/download-section'
import { FooterSection } from './components/footer-section'

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <HeroSection />
      <WorkflowSection />
      <FeaturesSection />
      <PerformanceSection />
      <PrivacySection />
      <DownloadSection />
      <FooterSection />
    </main>
  )
}
