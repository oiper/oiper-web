'use client'

const privacyItems = [
  'Transcription runs locally',
  'Audio never leaves your device by default',
  'Choose whether to use AI cleanup',
  'Your API keys stay in your control',
]

export function PrivacySection() {
  return (
    <section
      id="privacy"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#0c0c0c] py-36 sm:py-52"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[900px] px-6 text-center sm:px-10">
        <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
          Your voice stays under your control.
        </h2>

        <p className="mx-auto mt-6 max-w-[480px] text-base leading-relaxed text-white/40">
          OiPer is designed to keep your data under your control. No cloud
          required, no compromises.
        </p>

        <div className="mx-auto mt-20 h-px w-16 bg-white/10" />

        <div className="mt-20">
          {privacyItems.map((item, i) => (
            <p
              key={item}
              className={`text-xl font-medium tracking-tight text-white/70 sm:text-2xl ${i > 0 ? 'mt-16' : ''}`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-20 h-px w-16 bg-white/10" />

        <p className="mt-16 text-lg font-semibold tracking-wide text-white/90">
          You decide. Always and only you decide.
        </p>
      </div>
    </section>
  )
}
