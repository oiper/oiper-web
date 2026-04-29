'use client'

import { Shield, SlidersHorizontal } from 'lucide-react'
import { Wrapper } from '../../../components/wrapper'

const items = [
  {
    icon: Shield,
    title: 'Your audio never leaves your device',
    description:
      'Transcription runs entirely on your machine. By default, nothing is uploaded, stored, or sent anywhere.',
  },
  {
    icon: SlidersHorizontal,
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

      <Wrapper className="relative">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Privacy by design.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/40">
            No cloud required. No compromises made.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-[900px]">
          {/* Center spine */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent sm:block" />

          {items.map((item, i) => {
            const isEven = i % 2 === 0
            const Icon = item.icon

            return (
              <div key={item.title} className="relative py-10 sm:py-14">
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 hidden size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 sm:block" />

                {/* Mobile */}
                <div className="flex items-start gap-4 sm:hidden">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                    <Icon className="size-5 text-white/50" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white/90">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/40">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Desktop zigzag */}
                <div className="hidden sm:grid sm:grid-cols-2 sm:items-center sm:gap-0">
                  {isEven ? (
                    <>
                      {/* Left side: text first, then icon at inner edge */}
                      <div className="flex justify-end pr-8">
                        <div className="flex max-w-[380px] items-center gap-5 text-right">
                          <div>
                            <h3 className="text-lg font-medium text-white/90">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/40">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                            <Icon
                              className="size-5 text-white/50"
                              strokeWidth={1.5}
                            />
                          </div>
                        </div>
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      {/* Right side: icon at inner edge, then text */}
                      <div className="flex justify-start pl-8">
                        <div className="flex max-w-[380px] items-center gap-5 text-left">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                            <Icon
                              className="size-5 text-white/50"
                              strokeWidth={1.5}
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-white/90">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/40">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </section>
  )
}
