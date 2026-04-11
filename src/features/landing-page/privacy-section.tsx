import { cn } from '@/lib/utils'
import { Lock, Shield } from 'lucide-react'

export function PrivacySection() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="bg-success/10 text-success mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
              <Shield className="h-7 w-7" />
            </div>
            <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Privacy First
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              OiPer is designed to keep your data under your control. You decide
              when anything goes online.
            </p>

            <div className="space-y-4">
              {[
                'Transcription runs locally on your machine',
                'Audio never leaves your device by default',
                'Online services are completely optional',
                'Your API keys stay in your control',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="bg-success/10 mt-1 flex h-5 w-5 items-center justify-center rounded-full">
                    <div className="bg-success h-2 w-2 rounded-full" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="from-success/10 to-primary/10 absolute -inset-4 rounded-3xl bg-gradient-to-br via-transparent" />
            <div className="border-border/50 bg-card relative rounded-2xl border p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-xl">
                  <Lock className="text-success h-6 w-6" />
                </div>
                <div>
                  <div className="text-foreground font-semibold">
                    Local Processing
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Your data never leaves your device
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    label: 'Speech Recognition',
                    status: 'Local',
                    active: true,
                  },
                  { label: 'Text Processing', status: 'Local', active: true },
                  {
                    label: 'AI Enhancement',
                    status: 'Optional',
                    active: false,
                  },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="bg-muted/50 flex items-center justify-between rounded-lg px-4 py-3"
                  >
                    <span className="text-foreground text-sm">
                      {feature.label}
                    </span>
                    <span
                      className={cn(
                        'rounded-full px-2 py-1 text-xs font-medium',
                        feature.active
                          ? 'bg-success/10 text-success'
                          : 'bg-muted-foreground/10 text-muted-foreground'
                      )}
                    >
                      {feature.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
