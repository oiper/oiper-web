// CRITICAL DESIGN CONSTRAINT: This section MUST remain center-aligned.
// The title, step circles, and cards are all centered.
// NEVER change the section alignment to left or any other alignment.

'use client'

import { Keyboard, Mic, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: Keyboard,
    title: 'Hold a global hotkey',
    description:
      'Press and hold your chosen hotkey from anywhere — in any app, on any screen.',
  },
  {
    number: '02',
    icon: Mic,
    title: 'Speak naturally',
    description:
      'Talk at your normal pace. The microphone captures everything in real-time.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Release to transcribe',
    description:
      'Let go and watch your words appear instantly, right where your cursor is.',
  },
]

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#0a0a0a] py-32 sm:py-40"
    >
      {/* Subtle radial glow behind the section */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 sm:px-10">
        <h2 className="mx-auto max-w-[500px] text-center text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          Three steps. Zero friction.
        </h2>

        <div className="relative mt-20 grid gap-12 lg:grid-cols-3 lg:gap-6">
          {/* Connecting line between step number circles */}
          <div className="absolute top-6 left-[16.67%] right-[16.67%] hidden h-px overflow-hidden lg:block">
            <div className="h-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
            <motion.div
              className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.35)]"
              animate={{ left: ['0%', '100%'] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number circle */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-[#0f0f0f]">
                <span className="text-xs font-semibold text-white/50">
                  {step.number}
                </span>
              </div>

              {/* Card */}
              <div className="relative mt-8 w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
                {/* Large decorative number */}
                <span className="absolute top-1 right-3 text-[100px] font-bold leading-none text-white/[0.03] select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <step.icon
                      className="size-5 text-white/50"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3 className="relative mt-6 text-lg font-medium text-white/90">
                  {step.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/35">
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
