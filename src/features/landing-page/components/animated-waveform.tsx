'use client'

import { motion } from 'framer-motion'

export function AnimatedWaveform() {
  const bars = [
    10, 18, 12, 24, 16, 28, 22, 36, 18, 42, 25, 51, 20, 35, 58, 26, 19, 42,
    22, 16, 48, 20, 13, 36, 17, 9,
  ]
  return (
    <div className="flex h-10 flex-1 items-center justify-center gap-[3px] overflow-hidden">
      {bars.map((height, index) => (
        <motion.span
          key={`${height}-${index}`}
          className="w-[3px] shrink-0 rounded-full bg-white/70"
          animate={{
            height: [height * 0.4, height * 1.1, height * 0.5, height * 0.9, height * 0.6],
          }}
          transition={{
            duration: 1.2,
            delay: index * 0.04,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
