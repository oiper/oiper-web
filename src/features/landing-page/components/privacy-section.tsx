'use client'

import { Cpu, KeyRound } from 'lucide-react'

const items = [
  {
    number: '01',
    icon: Cpu,
    title: 'Your audio never leaves your device',
    description:
      'Transcription runs entirely on your machine. By default, nothing is uploaded, stored, or sent anywhere.',
  },
  {
    number: '02',
    icon: KeyRound,
    title: "You're in complete control",
    description:
      'Use your own API keys for optional AI cleanup. Enable it only when you want it. We never see or store your credentials.',
  },
]

export function PrivacySection() {
  return (
    <section
      id="privacy"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#0c0c0c] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 sm:px-10">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Privacy by design.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/40">
            No cloud required. No compromises made.
          </p>
        </div>

        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
          {items.map((item, i) => {
            const isEven = i % 2 === 0
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`items-center gap-8 sm:flex sm:gap-16 ${isEven ? '' : 'sm:flex-row-reverse'}`}
              >
                <div className="flex flex-1 items-center justify-center">
                  <div className="relative flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_60%)]" />
                    <span className="absolute text-7xl leading-none font-bold text-white/[0.06] sm:text-8xl">
                      {item.number}
                    </span>
                    <Icon
                      className="relative size-10 text-white/80 sm:size-12"
                      strokeWidth={1}
                    />
                  </div>
                </div>

                <div
                  className={`mt-5 flex-1 sm:mt-0 ${isEven ? 'text-center sm:text-left' : 'text-center sm:text-right'}`}
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[400px] text-base leading-relaxed text-white/40 sm:mx-0">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
