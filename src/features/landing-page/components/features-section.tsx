'use client'

import { Database, Download, Keyboard, Type, Wand2, Zap } from 'lucide-react'

const leftFeatures = [
  {
    icon: Keyboard,
    title: 'Global Hotkey Recording',
    description: 'Start recording anywhere, in any application.',
  },
  {
    icon: Type,
    title: 'Instant Text Injection',
    description: "Text appears instantly in the app you're using.",
  },
  {
    icon: Download,
    title: 'Local Transcription',
    description: 'Speech never leaves your device. Ever.',
  },
]

const rightFeatures = [
  {
    icon: Wand2,
    title: 'Optional AI Text Cleanup',
    description:
      'Improve grammar, fix typos, or refine tone—entirely optional.',
  },
  {
    icon: Database,
    title: 'Flexible Models & Backends',
    description: 'Choose CPU, CUDA, or available cloud models.',
  },
  {
    icon: Zap,
    title: 'Native Performance',
    description: 'Optimized for low latency, efficient resource usage.',
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative border-b border-white/[0.06] bg-[#0c0c0c] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
        <div className="max-w-[500px]">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Everything you need.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/40">
            OiPer is minimal, private, and built for speed. Every feature serves
            a purpose and gets out of your way.
          </p>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="grid gap-10">
            {leftFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                  <feature.icon
                    className="size-4 text-white/50"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-white/90">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/35">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-10">
            {rightFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
                  <feature.icon
                    className="size-4 text-white/50"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-white/90">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/35">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
