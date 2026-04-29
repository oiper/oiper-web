'use client'

import { Cpu, KeyRound } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'Your audio never leaves your device',
    description:
      'Transcription runs entirely on your machine. By default, nothing is uploaded, stored, or sent anywhere.',
  },
  {
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
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#0c0c0c] py-32 sm:py-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 sm:px-10">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Privacy by design.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/40">
            No cloud required. No compromises made.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-[640px]">
          {items.map((item, i) => {
            const Icon = item.icon
            const isLast = i === items.length - 1

            return (
              <div key={item.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                    <Icon className="size-5 text-white/50" strokeWidth={1.5} />
                  </div>
                  {!isLast && (
                    <div className="mt-4 w-px flex-1 bg-gradient-to-b from-white/[0.08] to-transparent" />
                  )}
                </div>

                <div className={`${isLast ? '' : 'pb-16'}`}>
                  <h3 className="text-lg font-medium text-white/90">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">
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
