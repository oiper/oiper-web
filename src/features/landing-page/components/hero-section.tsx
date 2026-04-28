'use client'

import { Boxes, Mic } from 'lucide-react'
import { AnimatedWaveform } from './animated-waveform'
import { LightningBase } from './lightning-base'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(255,255,255,0.03),transparent_40%),radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.02),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:120px_120px]" />
        <LightningBase />
      </div>

      <nav className="relative z-10 mx-auto flex h-[80px] max-w-[1200px] items-center justify-between px-6 sm:px-10">
        <a
          href="/"
          className="text-2xl font-semibold tracking-[-0.04em] text-white"
        >
          OiPer
        </a>

        <div className="hidden items-center gap-10 text-sm text-white/60 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#performance" className="hover:text-white">
            Performance
          </a>
          <a href="#privacy" className="hover:text-white">
            Privacy
          </a>
          <a href="#languages" className="hover:text-white">
            Languages
          </a>
          <a href="#testimonials" className="hover:text-white">
            Testimonials
          </a>
          <a href="#download" className="hover:text-white">
            Downloads
          </a>
          <a href="/docs" className="hover:text-white">
            Docs
          </a>
        </div>

        <a
          href="/download"
          className="inline-flex h-10 items-center justify-center rounded border border-white/20 bg-white/5 px-5 text-sm font-medium text-white hover:border-white/40 hover:bg-white/10"
        >
          Download
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid min-h-[min(100vh,56rem)] max-w-[1200px] items-center gap-16 px-6 pt-20 pb-36 sm:px-10 lg:grid-cols-[0.5fr_0.5fr] lg:pt-16">
        <div>
          <h1 className="max-w-[520px] text-[3.5rem] leading-[1.05] font-semibold tracking-[-0.04em] text-white sm:text-[4.5rem]">
            Voice to Text.
            <span className="block">Instantly.</span>
            <span className="block text-white/50">Privately.</span>
          </h1>
          <p className="mt-8 max-w-[440px] text-lg leading-relaxed text-white/50">
            Hold a hotkey, speak, and release — your words appear instantly in
            any app, offline.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/download"
              className="inline-flex h-[52px] items-center justify-center rounded bg-white px-8 text-base font-medium text-[#0a0a0a] hover:bg-white/90"
            >
              Download OiPer
            </a>
            <a
              href="#workflow"
              className="inline-flex h-[52px] items-center justify-center rounded border border-white/15 px-8 text-base font-medium text-white hover:border-white/30 hover:bg-white/5"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="relative min-h-[340px] sm:min-h-[400px]">
          <div className="absolute top-0 right-0 left-0 rounded-xl border border-white/[0.08] bg-[#111111]/90 p-6 backdrop-blur-md sm:left-8">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-white/10" />
                <span className="size-3 rounded-full bg-white/10" />
                <span className="size-3 rounded-full bg-white/10" />
              </div>
              <Boxes className="size-4 text-white/10" />
            </div>
            <div className="min-h-[180px] pt-8 text-xl leading-relaxed tracking-[-0.02em] text-white/80 sm:text-2xl">
              <p>Meeting notes from today.</p>
              <p>We&apos;ll launch the new feature next week</p>
              <p>
                and focus on performance improvements.
                <span className="ml-1 inline-block h-6 w-px bg-white/50" />
              </p>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 rounded-xl border border-white/[0.08] bg-[#0f0f0f]/95 p-5 backdrop-blur-md sm:left-[-40px]">
            <div className="flex items-center gap-4">
              <div className="grid size-11 shrink-0 place-items-center rounded-full bg-white/[0.06]">
                <Mic className="size-5 text-white/80" />
              </div>
              <AnimatedWaveform />
              <p className="w-16 text-right text-sm font-medium text-white/70">
                00:03
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
