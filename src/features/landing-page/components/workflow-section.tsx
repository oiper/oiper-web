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
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[800px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1000px] px-6 sm:px-10">
        {/* Section header */}
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Three steps. Zero friction.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/30">
            No setup, no learning curve. Just speak and let the magic happen.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Vertical connecting line — desktop */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 lg:block">
            <div className="h-full bg-gradient-to-b from-transparent via-white/[0.1] to-transparent" />
            {/* Animated traveling dot */}
            <motion.div
              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white/80 shadow-[0_0_14px_rgba(255,255,255,0.5)]"
              animate={{ top: ['0%', '100%'] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          {/* Vertical connecting line — mobile, offset to left */}
          <div className="absolute top-0 bottom-0 left-6 w-px lg:hidden">
            <div className="h-full bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
          </div>

          <div className="flex flex-col gap-16 lg:gap-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="relative flex items-start lg:items-center"
                >
                  {/* Desktop zig-zag layout */}
                  <div className="hidden w-full lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
                    {/* Left side */}
                    <div
                      className={`flex ${isLeft ? 'justify-end' : 'justify-start'}`}
                    >
                      {isLeft && (
                        <div className="max-w-[380px] rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                            <Icon
                              className="size-5 text-white/55"
                              strokeWidth={1.5}
                            />
                          </div>
                          <h3 className="mt-6 text-lg font-medium text-white/90">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-white/35">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center step circle */}
                    <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-[#0c0c0c] shadow-[0_0_24px_rgba(255,255,255,0.04)]">
                        <span className="text-sm font-semibold text-white/40">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Right side */}
                    <div
                      className={`flex ${!isLeft ? 'justify-start' : 'justify-end'}`}
                    >
                      {!isLeft && (
                        <div className="max-w-[380px] rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                            <Icon
                              className="size-5 text-white/55"
                              strokeWidth={1.5}
                            />
                          </div>
                          <h3 className="mt-6 text-lg font-medium text-white/90">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-white/35">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile stacked layout */}
                  <div className="flex items-start gap-6 lg:hidden">
                    {/* Step circle on the timeline */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-[#0c0c0c]">
                      <span className="text-sm font-semibold text-white/40">
                        {step.number}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                        <Icon
                          className="size-5 text-white/55"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="mt-5 text-lg font-medium text-white/90">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/35">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
