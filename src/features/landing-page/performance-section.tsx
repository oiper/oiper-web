import { cn } from '@/lib/utils'

export function PerformanceSection() {
  const benchmarks = [
    { name: 'OiPer Desktop', time: '1s', highlight: true },
    { name: 'Lemonfox API', time: '3.27s', highlight: false },
    { name: 'Python Faster Whisper', time: '3.55s', highlight: false },
    { name: 'OpenAI Whisper API', time: '6.46s', highlight: false },
  ]

  const maxTime = 6.46

  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="from-muted/50 to-muted/50 absolute inset-0 bg-gradient-to-b via-transparent" />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Speed
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl">
            OiPer is built with native code for maximum speed. Experience
            extremely low latency with efficient resource usage.
          </p>
        </div>

        <div className="border-border/50 bg-card rounded-2xl border p-8">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-muted-foreground text-sm font-medium">
              Benchmark: 30s English Audio
            </span>
            <span className="text-muted-foreground text-xs">
              Lower is better
            </span>
          </div>

          <div className="space-y-4">
            {benchmarks.map((item) => (
              <div key={item.name} className="relative">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={cn(
                      'font-medium',
                      item.highlight ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {item.name}
                    {item.highlight && (
                      <span className="text-chart-2 ml-2 text-xs">*</span>
                    )}
                  </span>
                  <span
                    className={cn(
                      'font-mono text-sm',
                      item.highlight
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.time}
                  </span>
                </div>
                <div className="bg-muted h-2 w-full rounded-full">
                  <div
                    className={cn(
                      'h-full rounded-full transition-all duration-1000',
                      item.highlight
                        ? 'from-primary to-chart-2 bg-gradient-to-r'
                        : 'bg-muted-foreground/30'
                    )}
                    style={{
                      width: `${(parseFloat(item.time) / maxTime) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Very low latency', value: '< 100ms' },
            { label: 'Efficient resource usage', value: 'Minimal CPU' },
            { label: 'GPU acceleration', value: 'Where available' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-border/50 bg-card rounded-xl border p-4 text-center"
            >
              <div className="text-primary text-lg font-semibold">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
