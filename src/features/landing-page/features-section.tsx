import { Cpu, Keyboard, Lock, Shield, Sparkles, Zap } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Keyboard,
      title: 'Global Hotkey Recording',
      description:
        'Start recording from anywhere with a customizable global hotkey',
    },
    {
      icon: Zap,
      title: 'Instant Text Injection',
      description:
        'Text appears directly in the app you are using, no copy-paste needed',
    },
    {
      icon: Shield,
      title: 'Local Transcription',
      description: 'Speech processing runs entirely on your machine by default',
    },
    {
      icon: Sparkles,
      title: 'Optional AI Text Cleanup',
      description: 'Improve formatting or grammar using local or online models',
    },
    {
      icon: Cpu,
      title: 'Flexible Models & Backends',
      description:
        'Choose CPU, GPU, or automatic backend selection for optimal performance',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data stays under your control. No cloud required.',
    },
  ]

  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Core Features
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl">
            Everything you need for fast, private voice transcription
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group border-border/50 bg-card hover:border-primary/30 hover:bg-accent/50 rounded-xl border p-6 transition-all"
            >
              <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
