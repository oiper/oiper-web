'use client'

import { Wrapper } from '@/components/wrapper'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, Cpu, Globe, Lock, Mic, Shield, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const benchmarks = [
  {
    name: 'OiPer Desktop',
    time: '1.5s',
    highlight: true,
    widthClass: 'w-[23.22%]',
  },
  { name: 'Lemonfox API', time: '3.27s', widthClass: 'w-[50.62%]' },
  { name: 'Python Faster-Whisper', time: '3.55s', widthClass: 'w-[54.95%]' },
  { name: 'OpenAI Whisper 1 API', time: '6.46s', widthClass: 'w-full' },
]

const features = [
  {
    icon: Mic,
    title: 'Hold → Speak → Release',
    desc: 'Global hotkey captures audio instantly. Release to transcribe. Text injected into your active app.',
  },
  {
    icon: Shield,
    title: 'Your Machine. Your Data.',
    desc: 'All transcription runs locally. Audio and logs never leave your device unless you explicitly opt in.',
  },
  {
    icon: Zap,
    title: '1.5s for 30s Audio',
    desc: 'Written in native code with GPU acceleration. The fastest local transcription engine available.',
  },
  {
    icon: Lock,
    title: 'Optional Online Services',
    desc: 'Use your own API key for cloud LLMs. Enable or disable at any time — your choice, always.',
  },
  {
    icon: Cpu,
    title: 'Backend Flexibility',
    desc: 'Auto-detect, CPU-only, or GPU acceleration. Choose the model size that fits your hardware.',
  },
  {
    icon: Globe,
    title: 'LLM-Powered Accuracy',
    desc: 'Route audio through Gemini, GPT, or specialized models for ultra-accurate transcription of technical content.',
  },
]

export function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const benchRef = useRef<HTMLDivElement>(null)
  const privacyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title span',
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1,
          ease: 'power4.out',
          delay: 0.2,
        }
      )
      gsap.fromTo(
        '.hero-sub',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 1.1,
          ease: 'back.out(1.7)',
        }
      )
      gsap.fromTo(
        '.hero-scroll',
        { opacity: 0 },
        { opacity: 1, delay: 1.5, duration: 0.5 }
      )
      gsap.to('.hero-scroll', {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
        delay: 2,
      })

      gsap.utils.toArray<HTMLElement>('.feat-card').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('.bench-bar').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      gsap.fromTo(
        '.privacy-block',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.privacy-block', start: 'top 80%' },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-background text-foreground min-h-screen">
      <nav className="border-border bg-background/80 fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-8 py-5 backdrop-blur-md">
        <span className="text-primary text-xl font-black tracking-widest uppercase">
          OiPer
        </span>
        <div className="text-muted-foreground flex gap-6 text-sm font-medium tracking-wide uppercase">
          <a
            href="#features"
            className="hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#performance"
            className="hover:text-foreground transition-colors"
          >
            Speed
          </a>
          <a
            href="#privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy
          </a>
        </div>
      </nav>

      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="hero-title text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-black tracking-tighter uppercase">
          {'VOICE TO TEXT'.split('').map((c, i) => (
            <span key={i} className="inline-block">
              {c === ' ' ? '\u00A0' : c}
            </span>
          ))}
        </h1>
        <p className="hero-sub text-muted-foreground mt-8 max-w-xl text-lg md:text-xl">
          Privacy-first. Blazing fast. Hold a key, speak, release — text appears
          where you need it.
        </p>
        <div className="hero-cta mt-10 flex gap-4">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-3 text-sm font-bold tracking-wider uppercase transition-colors">
            Download Now
          </button>
          <button className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-none border px-8 py-3 text-sm font-bold tracking-wider uppercase transition-colors">
            Learn More
          </button>
        </div>
        <div className="hero-scroll absolute bottom-10">
          <ChevronDown size={28} className="text-muted-foreground" />
        </div>
      </section>

      <section id="features" ref={featuresRef}>
        <Wrapper className="py-32">
          <h2 className="text-primary mb-16 text-4xl font-black tracking-tight uppercase md:text-5xl">
            Built Different
          </h2>

          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
            {features.map((f, i) => (
              <div key={i} className="feat-card border-border border-t py-8">
                <f.icon size={28} className="text-primary mb-4" />
                <h3 className="mb-2 text-xl font-bold tracking-wide uppercase">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      <section id="performance" ref={benchRef}>
        <Wrapper className="py-32 [--max-width:60rem]">
          <h2 className="mb-4 text-4xl font-black tracking-tight uppercase md:text-5xl">
            Raw Speed
          </h2>
          <p className="text-muted-foreground mb-16 text-sm">
            30 seconds of English audio
          </p>
          <div className="space-y-6">
            {benchmarks.map((b, i) => {
              return (
                <div key={i}>
                  <div className="mb-2 flex justify-between font-mono text-sm">
                    <span
                      className={
                        b.highlight
                          ? 'text-primary font-bold'
                          : 'text-muted-foreground'
                      }
                    >
                      {b.name}
                    </span>
                    <span
                      className={
                        b.highlight ? 'text-primary' : 'text-muted-foreground'
                      }
                    >
                      {b.time} {b.highlight && '⭐'}
                    </span>
                  </div>
                  <div className="bg-muted/60 h-3">
                    <div
                      className={`bench-bar h-full origin-left ${b.widthClass} ${b.highlight ? 'bg-primary' : 'bg-secondary'}`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </Wrapper>
      </section>

      <section id="privacy" ref={privacyRef}>
        <Wrapper className="py-32">
          <div className="privacy-block border-border border p-12">
            <Lock size={40} className="text-primary mb-6" />
            <h2 className="mb-6 text-4xl font-black tracking-tight uppercase md:text-5xl">
              Privacy Is Not Optional
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Every transcription runs on your hardware. Your audio never leaves
              your machine. Activity logs stay local. Online services are
              available — but only when you choose, with your own API keys.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Local Transcription',
                  desc: 'Runs entirely on your CPU or GPU',
                },
                {
                  title: 'No Telemetry',
                  desc: 'Zero data collection by default',
                },
                {
                  title: 'Your API Keys',
                  desc: 'Online features use your own credentials',
                },
              ].map((item, i) => (
                <div key={i} className="border-border border-t pt-4">
                  <h4 className="mb-1 text-sm font-bold tracking-wide uppercase">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>

      <footer className="border-border text-muted-foreground border-t px-6 py-12 text-center text-xs">
        OiPer Desktop — Voice to text, your way.
      </footer>
    </div>
  )
}
