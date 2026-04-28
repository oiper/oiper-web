'use client'

const testimonials = [
  {
    quote:
      'OiPer replaced three separate tools I was using. The local transcription is incredibly accurate and feels instant.',
    author: 'Sarah Chen',
    role: 'Product Manager',
  },
  {
    quote:
      'I write thousands of words a day. Being able to dictate privately without sending audio to the cloud is a game changer.',
    author: 'Marcus Okafor',
    role: 'Technical Writer',
  },
  {
    quote:
      'The hotkey workflow is seamless. I hold a key, speak, and my words appear exactly where my cursor is. Zero friction.',
    author: 'Elena Rossi',
    role: 'Software Engineer',
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative border-b border-white/[0.06] bg-[#0c0c0c] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Loved by users.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/40">
            Here is what people are saying about using OiPer every day.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
            >
              <p className="text-sm leading-relaxed text-white/60">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-white/90">
                  {testimonial.author}
                </p>
                <p className="text-sm text-white/35">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
