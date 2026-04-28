'use client'

import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'Free forever',
    description: 'For personal use. No limits, no cost.',
    features: [
      'Unlimited local transcription',
      'Global hotkey support',
      'All core features',
      'Offline usage',
      'Community support',
    ],
    cta: 'Download',
    href: '/download',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'Per month',
    description: 'More speed, more control, more flexibility.',
    features: [
      'Everything in Starter',
      'Priority GPU acceleration',
      'Custom vocabulary training',
      'Advanced export formats',
      'Cloud sync across devices',
      'Priority email support',
    ],
    cta: 'Get Pro',
    href: '/checkout/pro',
    featured: true,
  },
  {
    name: 'Business',
    price: '$39',
    period: 'Per month',
    description: 'For teams that need power and scale.',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'SSO and admin controls',
      'Audit logs and analytics',
      'API access',
      'Dedicated support',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative border-b border-white/[0.06] bg-[#0a0a0a] py-32 sm:py-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.018),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1160px] px-6 sm:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.featured
                  ? 'border border-white/[0.12] bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-[0_0_40px_-12px_rgba(255,255,255,0.06)]'
                  : 'border border-white/[0.06] bg-white/[0.015]'
              }`}
            >
              {plan.featured && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              )}

              <div>
                <p
                  className={`text-sm font-medium ${
                    plan.featured ? 'text-white/60' : 'text-white/40'
                  }`}
                >
                  {plan.name}
                </p>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <p className="text-[2.75rem] leading-none font-semibold tracking-[-0.03em] text-white">
                    {plan.price}
                  </p>
                  <p className="text-sm text-white/30">{plan.period}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/40">
                  {plan.description}
                </p>
              </div>

              <div className="mt-8 flex-1 border-t border-white/[0.06] pt-8">
                <div className="grid gap-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${
                          plan.featured ? 'text-white/50' : 'text-white/30'
                        }`}
                        strokeWidth={1.5}
                      />
                      <p className="text-sm leading-relaxed text-white/55">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={plan.href}
                className={`mt-10 flex h-[46px] items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  plan.featured
                    ? 'bg-white text-[#0a0a0a] hover:bg-white/90'
                    : 'border border-white/[0.10] text-white hover:border-white/25 hover:bg-white/[0.04]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
