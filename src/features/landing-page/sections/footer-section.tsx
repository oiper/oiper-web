import { Wrapper } from '@/components/wrapper'

const footerLinks = [
  { label: 'Documentation', href: '/documentation' },
  { label: 'GitHub', href: '/github' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Support', href: '/support' },
]

export function FooterSection() {
  return (
    <footer className="py-10 sm:py-12">
      <Wrapper className="border-border grid gap-8 border-t pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="text-lg font-semibold tracking-tight">OiPer</p>
          <p className="text-muted-foreground mt-2 max-w-md text-sm leading-relaxed">
            Privacy-first voice transcription built for speed and control.
          </p>
          <p className="text-muted-foreground mt-4 text-xs">(c) OiPer</p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Wrapper>
    </footer>
  )
}
