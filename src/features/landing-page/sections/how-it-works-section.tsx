import { Wrapper } from '@/components/wrapper'
import { ArrowRight, Keyboard, Mic, MousePointerClick } from 'lucide-react'

const steps = [
  {
    title: 'Hold a global hotkey',
    detail: 'Start recording from anywhere.',
    icon: Keyboard,
  },
  {
    title: 'Speak',
    detail: 'Dictate naturally while OiPer captures your voice.',
    icon: Mic,
  },
  {
    title: 'Release the hotkey',
    detail: 'Your speech is instantly inserted into the active app.',
    icon: MousePointerClick,
  },
]

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="border-border border-b py-16 sm:py-20"
    >
      <Wrapper className="space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            How OiPer Works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Press. Talk. Release.
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            No switching apps. No waiting.
          </p>
        </div>

        <ol className="border-border relative grid border-y md:grid-cols-3">
          <div className="bg-border pointer-events-none absolute top-1/2 right-1/6 left-1/6 hidden h-px -translate-y-1/2 md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <li
                key={step.title}
                className="relative space-y-4 px-0 py-7 md:px-7 md:py-10"
              >
                {index > 0 && (
                  <div className="bg-border absolute top-8 left-0 hidden h-24 w-px md:block" />
                )}

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase">
                    0{index + 1}
                  </span>
                  <Icon className="text-primary size-4" />
                </div>

                <h3 className="text-xl leading-tight font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                  {step.detail}
                </p>

                {index < steps.length - 1 && (
                  <p className="text-muted-foreground inline-flex items-center gap-2 text-xs md:hidden">
                    Next
                    <ArrowRight className="size-3.5" />
                  </p>
                )}
              </li>
            )
          })}
        </ol>
      </Wrapper>
    </section>
  )
}
