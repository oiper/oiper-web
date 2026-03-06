import { Wrapper } from '@/components/wrapper'
import { Cpu, Globe, Keyboard, Sparkles, TextCursorInput } from 'lucide-react'

const features = [
  {
    title: 'Global Hotkey Recording',
    description: 'Start recording from anywhere.',
    icon: Keyboard,
  },
  {
    title: 'Instant Text Injection',
    description: 'Text appears directly in the app you are using.',
    icon: TextCursorInput,
  },
  {
    title: 'Local Transcription',
    description: 'Speech processing runs on your machine.',
    icon: Cpu,
  },
  {
    title: 'Optional AI Text Cleanup',
    description: 'Improve grammar and formatting with local or online models.',
    icon: Sparkles,
  },
  {
    title: 'Flexible Models and Backends',
    description: 'Choose CPU, GPU, or automatic backend selection.',
    icon: Globe,
  },
]

export function CoreFeaturesSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-20">
      <Wrapper className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="text-primary-foreground/70 font-mono text-xs tracking-[0.2em] uppercase">
            Core Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Flow is made for fast thinking.
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-md text-base leading-relaxed">
            Every capability is designed to reduce friction between your voice
            and the words on screen.
          </p>
        </div>

        <div className="divide-primary-foreground/20 border-primary-foreground/20 divide-y border-y">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className="grid gap-4 py-6 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-5 sm:py-7"
              >
                <Icon className="mt-1 size-4" />

                <div>
                  <h3 className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/78 mt-2 text-sm leading-relaxed sm:text-base">
                    {feature.description}
                  </p>
                </div>

                <span className="text-primary-foreground/70 font-mono text-xs tracking-[0.14em] uppercase">
                  0{index + 1}
                </span>
              </article>
            )
          })}
        </div>
      </Wrapper>
    </section>
  )
}
