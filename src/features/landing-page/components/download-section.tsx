'use client'

import { Download, Boxes, Keyboard, Mic } from 'lucide-react'
import { SectionReveal } from './section-reveal'

const steps = [
  { icon: Download, title: 'Download' },
  { icon: Boxes, title: 'Choose model' },
  { icon: Keyboard, title: 'Set hotkey' },
  { icon: Mic, title: 'Start speaking' },
]

export function DownloadSection() {
  return (
    <section
      id="download"
      className="relative border-b border-white/[0.06] bg-[#0a0a0a] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-[800px] px-6 text-center sm:px-10">
        <SectionReveal>
          <p className="text-sm font-medium tracking-widest text-white/30 uppercase">
            Get started
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Ready in minutes.
          </h2>
          <p className="mt-5 text-base text-white/40">
            Free with local models. Get productive in less than one minute.
          </p>
        </SectionReveal>

        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center gap-3 sm:gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-center gap-3 sm:gap-6">
                <SectionReveal delay={index * 0.1}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                      <step.icon className="size-5 text-white/40" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs text-white/50">{step.title}</p>
                  </div>
                </SectionReveal>
                {index < steps.length - 1 && (
                  <div className="hidden h-px w-6 bg-white/[0.08] sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <SectionReveal delay={0.3}>
          <a
            href="/download"
            className="mt-14 inline-flex h-[52px] items-center justify-center rounded bg-white px-10 text-base font-medium text-[#0a0a0a] transition hover:bg-white/90"
          >
            Download OiPer
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}
