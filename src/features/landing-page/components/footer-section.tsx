'use client'

import { BookOpen, Github, LifeBuoy, ShieldCheck } from 'lucide-react'

const links = [
  { icon: BookOpen, label: 'Documentation', href: '/docs' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: ShieldCheck, label: 'Privacy', href: '/privacy' },
  { icon: LifeBuoy, label: 'Support', href: '/support' },
]

export function FooterSection() {
  return (
    <footer className="bg-[#0a0a0a] px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-semibold tracking-[-0.03em] text-white">
              OiPer
            </p>
            <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-white/30">
              Private speech transcription built for speed and control.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/40">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <link.icon className="size-4" strokeWidth={1.5} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <p className="text-sm text-white/25">© OiPer</p>
        </div>
      </div>
    </footer>
  )
}
