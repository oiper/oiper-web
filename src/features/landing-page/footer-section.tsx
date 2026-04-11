export function FooterSection() {
  const links = [
    { label: 'Documentation', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Support', href: '#' },
  ]

  return (
    <footer className="border-border/50 border-t px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-2 text-sm">
            Privacy-first voice transcription built for speed and control.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Copyright {new Date().getFullYear()} OiPer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
