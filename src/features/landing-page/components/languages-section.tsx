'use client'

const languages = [
  { name: 'English', native: 'English', code: 'gb' },
  { name: 'Spanish', native: 'Español', code: 'es' },
  { name: 'French', native: 'Français', code: 'fr' },
  { name: 'German', native: 'Deutsch', code: 'de' },
  { name: 'Italian', native: 'Italiano', code: 'it' },
  { name: 'Portuguese', native: 'Português', code: 'pt' },
  { name: 'Dutch', native: 'Nederlands', code: 'nl' },
  { name: 'Japanese', native: '日本語', code: 'jp' },
  { name: 'Chinese', native: '中文', code: 'cn' },
  { name: 'Korean', native: '한국어', code: 'kr' },
  { name: 'Russian', native: 'Русский', code: 'ru' },
  { name: 'Arabic', native: 'العربية', code: 'sa' },
  { name: 'Hindi', native: 'हिन्दी', code: 'in' },
  { name: 'Turkish', native: 'Türkçe', code: 'tr' },
  { name: 'Polish', native: 'Polski', code: 'pl' },
  { name: 'Swedish', native: 'Svenska', code: 'se' },
]

export function LanguagesSection() {
  return (
    <section
      id="languages"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#0a0a0a] py-32 sm:py-40"
    >
      <img
        src="/undraw_world_bdnk.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 hidden h-[520px] w-auto translate-x-1/4 -translate-y-1/2 opacity-[0.1] select-none lg:block"
      />

      <div className="relative mx-auto max-w-[1100px] px-6 sm:px-10">
        <div className="max-w-[520px]">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Speak your language.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/40">
            Transcribe in the language you are most comfortable with. More
            languages are added regularly.
          </p>
        </div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-white/[0.1] via-white/[0.04] to-transparent sm:mt-20" />

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:mt-16 lg:grid-cols-4">
          {languages.map((language) => (
            <div key={language.name} className="flex items-center gap-3">
              <div className="relative h-4 w-6 shrink-0 overflow-hidden">
                <img
                  src={`https://flagcdn.com/${language.code}.svg`}
                  alt={language.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-medium tracking-tight text-white">
                  {language.native}
                </span>
                <span className="text-xs text-white/30">{language.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
