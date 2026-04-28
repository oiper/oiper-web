'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SectionReveal } from './section-reveal'

const benchmarks = [
  ['OiPer (Local)', '1x', '30%'],
  ['Whisper.cpp (CPU)', '1.87x', '72%'],
  ['Whisper.cpp (GPU)', '1.49x', '76%'],
  ['Cloud API (Major API)', '3.46x', '90%'],
]

const highlights = [
  'Very low latency',
  'GPU acceleration where available',
  'Efficient resource usage',
]

export function PerformanceSection() {
  return (
    <section
      id="performance"
      className="relative border-b border-white/[0.06] bg-[#0a0a0a] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-[1000px] px-6 sm:px-10">
        <SectionReveal>
          <div className="max-w-[500px]">
            <p className="text-sm font-medium tracking-widest text-white/30 uppercase">
              Performance
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Speed that feels instant.
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-20">
          <div>
            <SectionReveal>
              <p className="text-sm text-white/30">Benchmark: 30s English Audio</p>
            </SectionReveal>
            <div className="mt-8 grid gap-5">
              {benchmarks.map(([name, value, width], index) => (
                <SectionReveal key={name} delay={index * 0.08}>
                  <div className="grid grid-cols-[1fr_80px] items-center gap-4 sm:grid-cols-[200px_1fr_60px]">
                    <p className="text-sm text-white/60">{name}</p>
                    <div className="order-3 h-1.5 rounded-full bg-white/[0.06] sm:order-none">
                      <motion.div
                        className={
                          name === 'OiPer (Local)'
                            ? 'h-full rounded-full bg-white/70'
                            : 'h-full rounded-full bg-white/20'
                        }
                        initial={{ width: 0 }}
                        whileInView={{ width }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.12 + 0.3,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                    <p className="text-right text-sm text-white/40">{value}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/[0.06] pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
            {highlights.map((item, index) => (
              <SectionReveal key={item} delay={index * 0.08}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-4 shrink-0 text-white/40" strokeWidth={1.5} />
                  <p className="text-sm text-white/60">{item}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
