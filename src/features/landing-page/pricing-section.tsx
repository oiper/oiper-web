import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function PricingSection() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Simple Pricing
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Free to use with local models. Optional online features are
          pay-as-you-go.
        </p>

        <div className="border-border/50 bg-card rounded-2xl border p-8 sm:p-12">
          <div className="mb-6">
            <span className="text-foreground text-5xl font-bold">Free</span>
            <span className="text-muted-foreground"> / forever</span>
          </div>

          <div className="mb-8 space-y-3 text-left sm:mx-auto sm:max-w-sm">
            {[
              'Unlimited local transcription',
              'No usage restrictions',
              'All core features included',
              'Optional online AI features (pay-as-you-go)',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="bg-success/10 flex h-5 w-5 items-center justify-center rounded-full">
                  <div className="bg-success h-2 w-2 rounded-full" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="h-12 px-8">
            <Download className="mr-2 h-5 w-5" />
            Download OiPer
          </Button>
        </div>
      </div>
    </section>
  )
}
