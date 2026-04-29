'use client'

import { BookOpen, Github, LifeBuoy, ShieldCheck } from 'lucide-react'

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Performance', href: '#performance' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Languages', href: '#languages' },
  { label: 'Pricing', href: '#pricing' },
]

const resourceLinks = [
  { icon: BookOpen, label: 'Documentation', href: '/docs' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: LifeBuoy, label: 'Support', href: '/support' },
  { icon: ShieldCheck, label: 'Privacy', href: '/privacy' },
]

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 pt-24 pb-12 sm:px-10 sm:pt-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[400px]">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Ready to talk faster?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/40">
              Download OiPer and start transcribing privately in under a minute.
              No account required.
            </p>
            <a
              href="/download"
              className="mt-10 inline-flex h-[52px] items-center justify-center rounded bg-white px-8 text-base font-medium text-[#0a0a0a] hover:bg-white/90"
            >
              Download OiPer
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <p className="text-sm font-medium text-white/60">Product</p>
              <ul className="mt-6 space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/35 hover:text-white/80"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-white/60">Resources</p>
              <ul className="mt-6 space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white/80"
                    >
                      <link.icon className="size-4" strokeWidth={1.5} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold tracking-[-0.03em] text-white">
              OiPer
            </span>
            <span className="text-sm text-white/25">
              Private speech transcription.
            </span>
          </div>
          <p className="text-sm text-white/25">© OiPer</p>
        </div>
      </div>
    </footer>
  )
}
