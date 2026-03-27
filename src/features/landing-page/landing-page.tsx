/* eslint-disable max-lines */
'use client'

import { motion } from 'framer-motion'
import {
  ChevronRight,
  Cpu,
  Globe,
  Headphones,
  Mic,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { WaveformVisual } from './waveform-visual'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

const sections = ['Hero', 'Features', 'Privacy', 'Performance', 'Download']

export function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const ids = ['hero', 'features', 'privacy', 'performance', 'download']
      const y = window.scrollY + window.innerHeight / 3
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= y) {
          setActiveSection(i)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#171717]">
      {/* Sidebar nav */}
      <nav className="fixed top-0 left-0 z-50 hidden h-full w-16 flex-col items-center justify-center gap-6 border-r border-[#e5e5e5] bg-white lg:flex">
        <Link className="absolute top-6" href="/">
          <div className="flex h-9 w-9 items-center justify-center bg-[#171717] text-white">
            <Mic size={16} strokeWidth={1.5} />
          </div>
        </Link>
        <div className="flex flex-col gap-3">
          {sections.map((s, i) => (
            <motion.button
              key={i}
              className={`w-2 rounded-full transition-all duration-500 ${
                activeSection === i
                  ? 'h-6 bg-[#171717]'
                  : 'h-2 bg-[#d4d4d4] hover:bg-[#525252]'
              }`}
              onClick={() =>
                document
                  .getElementById(s.toLowerCase())
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              whileHover={{ scale: 1.2 }}
              layout
            />
          ))}
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[#e5e5e5] bg-white/95 backdrop-blur-sm lg:hidden">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
          <Link className="flex items-center gap-2.5" href="/">
            <div className="flex h-8 w-8 items-center justify-center bg-[#171717] text-white">
              <Mic size={14} strokeWidth={1.5} />
            </div>
            <span className="text-sm font-semibold tracking-tight">OiPer</span>
          </Link>
          <Link
            className="bg-[#171717] px-4 py-1.5 text-xs font-medium text-white"
            href="#download"
          >
            Download
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen pt-14 lg:pt-0" id="hero">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-5 lg:pl-20">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-8">
              <motion.p
                className="text-[11px] font-semibold tracking-[0.15em] text-[#a3a3a3] uppercase"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
              >
                Upcoming
              </motion.p>
              <motion.h1
                className="text-5xl leading-[1.05] font-bold tracking-tight lg:text-7xl"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
              >
                Voice to text.
                <br />
                <span className="text-[#a3a3a3]">Instantly.</span>
              </motion.h1>
              <motion.p
                className="max-w-sm text-base leading-relaxed text-[#737373]"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
              >
                Hold a hotkey, speak, release. Your words appear instantly in
                any application. Fully local. Fully private.
              </motion.p>
              <motion.div
                className="flex items-center gap-6"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
              >
                <Link
                  className="inline-flex items-center gap-2 bg-[#171717] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#262626]"
                  href="#download"
                >
                  Download
                  <ChevronRight size={16} />
                </Link>
                <span className="text-xs text-[#a3a3a3]">
                  macOS · Windows · Linux
                </span>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <WaveformVisual />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 shadow-lg">
                <p className="text-3xl font-bold tracking-tight">1.5s</p>
                <p className="text-[10px] font-medium tracking-wider text-[#a3a3a3] uppercase">
                  Transcription
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-[#f5f5f5] bg-[#fafafa] py-24">
        <div className="mx-auto max-w-5xl px-5 lg:pl-20">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <p className="mb-3 text-[11px] font-semibold tracking-[0.15em] text-[#a3a3a3] uppercase">
              How it works
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Three steps. That&apos;s it.
            </h2>
          </motion.div>
          <motion.div
            className="grid gap-0 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
          >
            {[
              {
                step: '01',
                title: 'Hold',
                desc: 'Press your global hotkey from anywhere on your system.',
              },
              {
                step: '02',
                title: 'Speak',
                desc: 'Talk naturally. OiPer captures your voice in real time.',
              },
              {
                step: '03',
                title: 'Release',
                desc: 'Let go. Your words appear instantly in the active app.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="border-l border-[#e5e5e5] py-6 pl-6 first:border-l-0 md:first:border-l md:first:pl-6"
                style={{ borderLeftColor: i === 0 ? 'transparent' : undefined }}
                variants={staggerItem}
              >
                <span className="mb-3 block text-[11px] font-semibold tracking-wider text-[#d4d4d4]">
                  {item.step}
                </span>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#737373]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24" id="features">
        <div className="mx-auto max-w-5xl px-5 lg:pl-20">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <p className="mb-3 text-[11px] font-semibold tracking-[0.15em] text-[#a3a3a3] uppercase">
              Features
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Built for speed and privacy
            </h2>
          </motion.div>
          <motion.div
            className="grid gap-px bg-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Zap,
                title: 'Instant Activation',
                desc: 'Global hotkey works anywhere. Press, speak, release.',
              },
              {
                icon: Cpu,
                title: 'Native Performance',
                desc: 'Written in native code for speed and minimal resources.',
              },
              {
                icon: Shield,
                title: 'Privacy First',
                desc: 'Everything runs locally. Your voice never leaves your device.',
              },
              {
                icon: Headphones,
                title: 'Model Flexibility',
                desc: 'Support for various model sizes. Pick what fits your needs.',
              },
              {
                icon: Sparkles,
                title: 'Smart Cleanup',
                desc: 'Optional text optimization with your own API key.',
              },
              {
                icon: Globe,
                title: 'Universal',
                desc: 'Native builds for macOS, Windows, and Linux.',
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                className="group relative bg-white p-8 transition-colors hover:bg-[#fafafa]"
                variants={staggerItem}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center border border-[#e5e5e5] transition-colors group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
                  <f.icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#737373]">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Privacy */}
      <section
        className="border-t border-[#f5f5f5] bg-[#fafafa] py-24"
        id="privacy"
      >
        <div className="mx-auto max-w-5xl px-5 lg:pl-20">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
              >
                <p className="mb-3 text-[11px] font-semibold tracking-[0.15em] text-[#a3a3a3] uppercase">
                  Privacy
                </p>
                <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  Your voice stays yours
                </h2>
              </motion.div>
            </div>
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
            >
              {[
                {
                  title: 'Local Processing',
                  desc: 'Transcription runs on your device. No cloud required.',
                },
                {
                  title: 'On-Device Storage',
                  desc: 'Audio and logs stay on your machine. Nowhere else.',
                },
                {
                  title: 'Optional Cloud',
                  desc: 'Online features only with your explicit API key.',
                },
                {
                  title: 'Zero Tracking',
                  desc: 'No analytics, no telemetry, no data collection.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="space-y-2"
                  variants={staggerItem}
                >
                  <div className="h-[3px] w-8 bg-[#171717]" />
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#737373]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-24" id="performance">
        <div className="mx-auto max-w-5xl px-5 lg:pl-20">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <p className="mb-3 text-[11px] font-semibold tracking-[0.15em] text-[#a3a3a3] uppercase">
              Performance
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              The fastest transcription
            </h2>
            <p className="mt-3 text-sm text-[#737373]">
              30 seconds of English audio. Lower is better.
            </p>
          </motion.div>
          <motion.div
            className="border border-[#e5e5e5]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-12 gap-4 border-b border-[#e5e5e5] bg-[#fafafa] px-6 py-3 text-[11px] font-semibold tracking-wider text-[#a3a3a3] uppercase">
              <div className="col-span-5">Solution</div>
              <div className="col-span-3">Time</div>
              <div className="col-span-4">Relative</div>
            </div>
            {[
              {
                name: 'OiPer Desktop',
                time: '1.5s',
                rel: 'Baseline',
                win: true,
                pct: 23,
              },
              {
                name: 'Lemonfox API',
                time: '3.27s',
                rel: '2.2\u00d7 slower',
                win: false,
                pct: 51,
              },
              {
                name: 'Python Faster-Whisper',
                time: '3.55s',
                rel: '2.4\u00d7 slower',
                win: false,
                pct: 55,
              },
              {
                name: 'OpenAI Whisper API',
                time: '6.46s',
                rel: '4.3\u00d7 slower',
                win: false,
                pct: 100,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`group grid grid-cols-12 gap-4 border-b border-[#e5e5e5] px-6 transition-colors last:border-b-0 hover:bg-[#fafafa] ${item.win ? 'py-8' : 'py-5'}`}
                variants={staggerItem}
              >
                <div className="col-span-5 flex items-center">
                  <span
                    className={`text-sm font-semibold ${item.win ? 'text-[#171717]' : ''}`}
                  >
                    {item.name}
                  </span>
                  {item.win && (
                    <span className="ml-2 bg-[#171717] px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      FASTEST
                    </span>
                  )}
                </div>
                <div
                  className={`col-span-3 flex items-center ${item.win ? 'text-2xl font-bold tracking-tight' : 'text-sm font-medium text-[#525252]'}`}
                >
                  {item.time}
                </div>
                <div className="col-span-4 flex items-center gap-3">
                  <span className="text-sm text-[#737373]">{item.rel}</span>
                  <div className="hidden h-1.5 flex-1 overflow-hidden bg-[#f5f5f5] sm:block">
                    <motion.div
                      className="h-full"
                      style={{
                        backgroundColor: item.win ? '#171717' : '#d4d4d4',
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.12,
                        ease: 'easeOut',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Configuration */}
      <section className="border-t border-[#f5f5f5] bg-[#fafafa] py-24">
        <div className="mx-auto max-w-5xl px-5 lg:pl-20">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <p className="mb-3 text-[11px] font-semibold tracking-[0.15em] text-[#a3a3a3] uppercase">
              Configuration
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Full control
            </h2>
          </motion.div>
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {[
              {
                title: 'Speech Models',
                items: ['Multiple sizes', 'Easy download', 'Custom support'],
              },
              {
                title: 'Backend',
                items: ['Auto detection', 'CPU mode', 'GPU acceleration'],
              },
              {
                title: 'Providers',
                items: ['Custom URLs', 'API keys', 'Model selection'],
              },
              {
                title: 'Advanced',
                items: ['LLM options', 'Gemini Flash', 'Specialized models'],
              },
            ].map((s, i) => (
              <motion.div key={i} className="space-y-4" variants={staggerItem}>
                <h3 className="border-b border-[#e5e5e5] pb-3 text-sm font-semibold">
                  {s.title}
                </h3>
                <ul className="space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="text-sm text-[#737373]">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download */}
      <section className="py-24" id="download">
        <div className="mx-auto max-w-5xl px-5 lg:pl-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              <p className="text-[11px] font-semibold tracking-[0.15em] text-[#a3a3a3] uppercase">
                Download
              </p>
              <h2 className="text-4xl leading-[1.05] font-bold tracking-tight lg:text-5xl">
                Start speaking
              </h2>
              <p className="max-w-sm text-base leading-relaxed text-[#737373]">
                Free and open source. Download OiPer and start dictating in
                under a minute.
              </p>
            </motion.div>
            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
            >
              {[
                {
                  platform: 'macOS',
                  version: 'Universal Binary',
                  size: '45 MB',
                },
                {
                  platform: 'Windows',
                  version: '64-bit Installer',
                  size: '42 MB',
                },
                { platform: 'Linux', version: 'AppImage', size: '48 MB' },
              ].map((os, i) => (
                <motion.button
                  key={i}
                  className="group flex w-full items-center justify-between border border-[#e5e5e5] bg-white p-5 transition-all hover:border-[#171717]"
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-lg font-bold">{os.platform}</span>
                    <div className="text-xs text-[#a3a3a3]">
                      <p>{os.version}</p>
                      <p>{os.size}</p>
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-[#d4d4d4] transition-all group-hover:text-[#171717]"
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e5] py-10">
        <div className="mx-auto max-w-5xl px-5 lg:pl-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Link className="flex items-center gap-2.5" href="/">
              <div className="flex h-8 w-8 items-center justify-center bg-[#171717] text-white">
                <Mic size={14} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold">OiPer</span>
            </Link>
            <p className="text-xs text-[#a3a3a3]">
              &copy; 2026 OiPer. Privacy-first voice transcription.
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'GitHub'].map((item) => (
                <Link
                  key={item}
                  className="text-xs text-[#737373] transition-colors hover:text-[#171717]"
                  href="#"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
