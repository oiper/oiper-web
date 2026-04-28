'use client'

import { Check } from 'lucide-react'

const freeFeatures = [
  'Unlimited local transcription',
  'Global hotkey support',
  'All core features',
  'Offline usage',
]

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative border-b border-white/[0.06] bg-[#0a0a0a] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-[800px] px-6 sm:px-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Simple pricing.
          </h2>
          <p className="mx-auto mt-5 max-w-[440px] text-base leading-relaxed text-white/40">
            Free to use with local models. No subscriptions, no limits.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-[400px]">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
            <div className="text-center">
              <p className="text-sm text-white/40">Free</p>
              <p className="mt-2 text-5xl font-semibold tracking-[-0.03em] text-white">
                $0
              </p>
              <p className="mt-2 text-sm text-white/30">
                Forever
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {freeFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="size-4 shrink-0 text-white/40" strokeWidth={1.5} />
                  <p className="text-sm text-white/60">{feature}</p>
                </div>
              ))}
            </div>

            <a
              href="/download"
              className="mt-8 flex h-[48px] items-center justify-center rounded bg-white text-sm font-medium text-[#0a0a0a] hover:bg-white/90"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
