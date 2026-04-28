'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Boxes, Mic } from 'lucide-react'
import { LightningBase } from './lightning-base'
import { AnimatedWaveform } from './animated-waveform'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const springY = useSpring(heroY, { stiffness: 100, damping: 30 })

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#0a0a0a]"
    >
      <motion.div className="absolute inset-0" style={{ opacity: heroOpacity }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(255,255,255,0.03),transparent_40%),radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.02),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:120px_120px]" />
        <div
          className="pointer-events-none absolute h-[500px] w-[500px] rounded-full transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)',
            left: mousePos.x - 250,
            top: mousePos.y - 250,
          }}
        />
        <LightningBase />
      </motion.div>

      <nav className="relative z-10 mx-auto flex h-[80px] max-w-[1200px] items-center justify-between px-6 sm:px-10">
        <motion.a
          href="/"
          className="text-2xl font-semibold tracking-[-0.04em] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          OiPer
        </motion.a>

        <motion.div
          className="hidden items-center gap-10 text-sm text-white/60 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#performance" className="transition hover:text-white">Performance</a>
          <a href="#privacy" className="transition hover:text-white">Privacy</a>
          <a href="#download" className="transition hover:text-white">Downloads</a>
          <a href="/docs" className="transition hover:text-white">Docs</a>
        </motion.div>

        <motion.a
          href="/download"
          className="inline-flex h-10 items-center justify-center rounded border border-white/20 bg-white/5 px-5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Download
        </motion.a>
      </nav>

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-16 px-6 pt-20 pb-36 sm:px-10 lg:min-h-[620px] lg:grid-cols-[0.5fr_0.5fr] lg:pt-16"
        style={{ y: springY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
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
              className="inline-flex h-[52px] items-center justify-center rounded bg-white px-8 text-base font-medium text-[#0a0a0a] transition hover:bg-white/90"
            >
              Download OiPer
            </a>
            <a
              href="#workflow"
              className="inline-flex h-[52px] items-center justify-center rounded border border-white/15 px-8 text-base font-medium text-white transition hover:border-white/30 hover:bg-white/5"
            >
              See how it works
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[340px] sm:min-h-[400px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
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
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                Meeting notes from today.
              </motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
                We&apos;ll launch the new feature next week
              </motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                and focus on performance improvements.
                <motion.span
                  className="ml-1 inline-block h-6 w-px bg-white/50"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.p>
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
        </motion.div>
      </motion.div>
    </section>
  )
}
