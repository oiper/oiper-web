'use client'

const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Portuguese',
  'Dutch',
  'Japanese',
  'Chinese',
  'Korean',
  'Russian',
  'Arabic',
  'Hindi',
  'Turkish',
  'Polish',
  'Swedish',
]

export function LanguagesSection() {
  return (
    <section
      id="languages"
      className="relative border-b border-white/[0.06] bg-[#0a0a0a] py-32 sm:py-40"
    >
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
        <div className="max-w-[500px]">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Speak your language.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/40">
            Transcribe in the language you are most comfortable with. More
            languages are added regularly.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {languages.map((language) => (
            <div
              key={language}
              className="flex h-12 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-sm text-white/60"
            >
              {language}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
