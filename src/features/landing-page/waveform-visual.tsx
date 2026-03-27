'use client'

import { motion } from 'framer-motion'

const bars = Array.from({ length: 40 }, (_, i) => {
  const center = 19.5
  const dist = Math.abs(i - center) / center
  const baseHeight = 0.12 + (1 - dist * dist) * 0.88
  return {
    height: baseHeight,
    delay: i * 0.04,
    isAccent: i % 5 === 0,
  }
})

export function WaveformVisual() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden border border-[#e5e5e5] bg-[#fafafa]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-56 items-end gap-[2px]">
          {bars.map((bar, i) => (
            <motion.div
              key={i}
              className="w-[3px]"
              style={{
                backgroundColor: bar.isAccent ? '#a3a3a3' : '#171717',
              }}
              initial={{ height: `${bar.height * 100}%` }}
              animate={{
                height: [
                  `${bar.height * 100}%`,
                  `${bar.height * 25 + 8}%`,
                  `${bar.height * 65 + 12}%`,
                  `${bar.height * 100}%`,
                ],
              }}
              transition={{
                duration: 1.8 + bar.delay * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: bar.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute right-6 bottom-6 left-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#e5e5e5]" />
        <span className="text-[10px] font-medium tracking-widest text-[#a3a3a3] uppercase">
          Listening
        </span>
        <div className="h-px flex-1 bg-[#e5e5e5]" />
      </div>

      <div className="absolute top-6 right-6 flex items-center gap-1.5">
        <motion.div
          className="h-1.5 w-1.5 bg-[#171717]"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-[10px] font-medium tracking-wider text-[#a3a3a3]">
          Active
        </span>
      </div>
    </div>
  )
}
