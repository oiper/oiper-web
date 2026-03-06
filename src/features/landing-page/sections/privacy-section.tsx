import { Wrapper } from '@/components/wrapper'
import { KeyRound, Lock, ShieldCheck } from 'lucide-react'

const privacyPoints = [
  'Transcription runs locally',
  'Audio never leaves your device by default',
  'Online services are optional',
  'Your API keys stay in your control',
]

export function PrivacySection() {
  return (
    <section className="border-border border-b py-16 sm:py-20">
      <Wrapper className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            Data Sovereignty
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Your voice belongs to you.
          </h2>
        </div>

        <div className="space-y-8">
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
            Privacy is built into the core of OiPer. By default, everything
            happens on your machine, including your recordings and activity
            logs.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {privacyPoints.map((point, index) => (
              <div key={point} className="border-border border-l pl-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium tracking-tight">
                  {index < 2 ? (
                    <Lock className="text-primary size-4" />
                  ) : index === 2 ? (
                    <ShieldCheck className="text-primary size-4" />
                  ) : (
                    <KeyRound className="text-primary size-4" />
                  )}
                  <span>{point}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {index === 0 && 'All core transcription processing is local.'}
                  {index === 1 && 'No uploads unless you enable them yourself.'}
                  {index === 2 && 'Use cloud cleanup only when you choose to.'}
                  {index === 3 &&
                    'Credentials are managed by you at all times.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
