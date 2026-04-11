import { Button } from '@/components/ui/button'
import { Download, Globe } from 'lucide-react'

export function DownloadSection() {
  const steps = [
    { step: '1', text: 'Download the application' },
    { step: '2', text: 'Choose a speech model' },
    { step: '3', text: 'Set your hotkey' },
    { step: '4', text: 'Start speaking' },
  ]

  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="from-muted/30 absolute inset-0 bg-gradient-to-b to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Get Started in Minutes
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Download OiPer and start dictating instantly. Voice input should feel
          instant.
        </p>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="border-border/50 bg-card hover:border-primary/30 rounded-xl border p-6 transition-all"
            >
              <div className="text-primary mb-3 text-3xl font-bold">
                {item.step}
              </div>
              <div className="text-muted-foreground text-sm">{item.text}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="h-12 gap-2 px-8">
            <Download className="h-5 w-5" />
            Download for macOS
          </Button>
          <Button variant="outline" size="lg" className="h-12 gap-2 px-8">
            <Globe className="h-5 w-5" />
            Other Platforms
          </Button>
        </div>
      </div>
    </section>
  )
}
