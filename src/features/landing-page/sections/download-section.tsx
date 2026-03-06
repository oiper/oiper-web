import { Button } from '@/components/ui/button'
import { Wrapper } from '@/components/wrapper'
import { ArrowRight, Download } from 'lucide-react'

const steps = [
  'Download the application',
  'Choose a speech model',
  'Set your hotkey',
  'Start speaking',
]

export function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden py-16 sm:py-24">
      <div className="from-secondary/70 via-background to-background pointer-events-none absolute inset-0 -z-20 bg-gradient-to-t" />

      <Wrapper className="space-y-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
              Get Started
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              Begin your dictation journey.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
              Download OiPer and start dictating instantly. Voice input should
              feel immediate.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Button asChild size="lg" className="rounded-full px-7">
              <a href="/download">
                Download OiPer
                <Download className="size-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-6"
            >
              <a href="/documentation">
                Documentation
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <ol className="border-border grid gap-0 border-y sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step}
              className="border-border space-y-2 border-t px-0 py-5 first:border-t-0 sm:border-t-0 sm:px-4 lg:border-l lg:px-5 lg:first:border-l-0"
            >
              <p className="text-primary text-3xl leading-none font-semibold">
                {index + 1}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </Wrapper>
    </section>
  )
}
