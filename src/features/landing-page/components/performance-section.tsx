'use client'

import { CheckCircle2 } from 'lucide-react'

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
        <h2 className="mx-auto max-w-[500px] text-center text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          Speed that feels instant.
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-20">
          <div>
            <p className="text-sm text-white/30">
              Benchmark: 30s English Audio
            </p>
            <div className="mt-8 grid gap-5">
              {benchmarks.map(([name, value, width]) => (
                <div
                  key={name}
                  className="grid grid-cols-[1fr_80px] items-center gap-4 sm:grid-cols-[200px_1fr_60px]"
                >
                  <p className="text-sm text-white/60">{name}</p>
                  <div className="order-3 h-1.5 rounded-full bg-white/[0.06] sm:order-none">
                    <div
                      className={
                        name === 'OiPer (Local)'
                          ? 'h-full rounded-full bg-white/70'
                          : 'h-full rounded-full bg-white/20'
                      }
                      style={{ width }}
                    />
                  </div>
                  <p className="text-right text-sm text-white/40">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/[0.06] pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2
                  className="size-4 shrink-0 text-white/40"
                  strokeWidth={1.5}
                />
                <p className="text-sm text-white/60">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
