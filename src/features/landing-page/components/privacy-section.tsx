'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { SectionReveal } from './section-reveal'

const privacyItems = [
  'Transcription runs locally',
  'Audio never leaves your device by default',
  'Choose whether to use AI cleanup',
  'Your API keys stay in your control',
]

export function PrivacySection() {
  return (
    <section
      id="privacy"
      className="relative border-b border-white/[0.06] bg-[#0c0c0c] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div>
            <SectionReveal>
              <div className="max-w-[450px]">
                <p className="text-sm font-medium tracking-widest text-white/30 uppercase">
                  Privacy
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                  Your voice stays under your control.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/40">
                  OiPer is designed to keep your data under your control. No cloud required.
                </p>
              </div>
            </SectionReveal>
          </div>

          <div className="grid gap-6">
            {privacyItems.map((item, index) => (
              <SectionReveal key={item} delay={index * 0.08}>
                <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                    <ShieldCheck className="size-4 text-white/50" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-white/70">{item}</p>
                </div>
              </SectionReveal>
            ))}
            <SectionReveal delay={0.4}>
              <p className="pt-2 text-sm font-medium text-white/80">
                You decide. Always and only you decide.
              </p>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
