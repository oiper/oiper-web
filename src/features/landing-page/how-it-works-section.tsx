import { ArrowRight, Keyboard, Mic, Zap } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      icon: Keyboard,
      title: 'Hold hotkey',
      description: 'Press and hold your configured global hotkey from anywhere',
    },
    {
      icon: Mic,
      title: 'Speak',
      description: 'Dictate naturally while holding the hotkey',
    },
    {
      icon: Zap,
      title: 'Release',
      description: 'Let go and watch your words appear instantly',
    },
  ]

  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How OiPer Works
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl">
            A simple workflow designed for speed. No switching apps. No waiting.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group border-border/50 bg-card hover:border-primary/30 relative rounded-2xl border p-8 transition-all hover:shadow-lg"
            >
              <div className="bg-primary/10 text-primary mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                <step.icon className="h-7 w-7" />
              </div>
              <div className="mb-3 flex items-center gap-3">
                <span className="bg-muted text-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold">
                  {index + 1}
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  {step.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 md:block">
                  <ArrowRight className="text-muted-foreground/30 h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
