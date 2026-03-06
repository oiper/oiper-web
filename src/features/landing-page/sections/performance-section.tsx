import { Wrapper } from '@/components/wrapper'
import { Gauge, Zap } from 'lucide-react'

const benchmarkRows = [
  { solution: 'OiPer Desktop', time: '1.5s', relative: 'Baseline' },
  { solution: 'Lemonfox API', time: '3.27s', relative: '2.1x slower' },
  {
    solution: 'Python Faster Whisper',
    time: '3.55s',
    relative: '2.4x slower',
  },
  { solution: 'OpenAI Whisper API', time: '6.46s', relative: '4.3x slower' },
]

const performancePoints = [
  'Very low latency',
  'Efficient resource usage',
  'GPU acceleration where available',
]

export function PerformanceSection() {
  return (
    <section className="border-border border-b py-16 sm:py-20">
      <Wrapper className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div>
          <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            Benchmarks
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Numbers that speak.
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            OiPer is built with native code for maximum speed and predictable
            performance.
          </p>

          <ul className="border-border mt-8 space-y-3 border-l pl-4">
            {performancePoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm sm:text-base"
              >
                <Zap className="text-primary size-4" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-muted-foreground text-xs tracking-[0.14em] uppercase">
              30s English audio
            </p>
            <Gauge className="text-primary size-4" />
          </div>

          <table className="border-border w-full border">
            <thead className="bg-secondary/60">
              <tr className="text-left text-xs tracking-[0.12em] uppercase">
                <th className="px-4 py-3 font-medium sm:px-5">Solution</th>
                <th className="px-4 py-3 font-medium sm:px-5">Time</th>
                <th className="px-4 py-3 font-medium sm:px-5">Relative</th>
              </tr>
            </thead>

            <tbody>
              {benchmarkRows.map((row, index) => (
                <tr
                  key={row.solution}
                  className={
                    index === 0
                      ? 'bg-primary text-primary-foreground'
                      : 'border-border border-t'
                  }
                >
                  <td className="px-4 py-3 text-sm sm:px-5">{row.solution}</td>
                  <td className="px-4 py-3 text-sm font-semibold sm:px-5">
                    {row.time}
                  </td>
                  <td className="px-4 py-3 text-sm sm:px-5">{row.relative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </section>
  )
}
