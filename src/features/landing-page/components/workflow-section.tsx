'use client'

import { Keyboard, Mic, Zap } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Keyboard,
    title: 'Hold a global hotkey',
    description: 'Press and hold your chosen hotkey from anywhere — in any app, on any screen.',
  },
  {
    number: '02',
    icon: Mic,
    title: 'Speak naturally',
    description: 'Talk at your normal pace. The microphone captures everything in real-time.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Release to transcribe',
    description: 'Let go and watch your words appear instantly, right where your cursor is.',
  },
]

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative border-b border-white/[0.06] bg-[#0a0a0a] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
        <h2 className="mx-auto max-w-[500px] text-center text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          Three steps. Zero friction.
        </h2>

        <div className="relative mt-20 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] hidden h-px bg-white/[0.08] lg:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-[#0f0f0f]">
                  <span className="text-xs font-semibold text-white/50">{step.number}</span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
                <step.icon className="size-6 text-white/40" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-medium text-white/90">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/35">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
