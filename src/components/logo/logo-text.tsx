import { cn } from '@/lib/utils'
import { Lemonada } from 'next/font/google'
import { ComponentProps } from 'react'
import { OiPerLogoSquare } from './logo-square'

export const FONT_LEMONADA = Lemonada({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--next-font-lemonada',
})

export function OiPerLogoText({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span className={cn('flex items-center gap-2', className)} {...props}>
      <OiPerLogoSquare className="block size-[1em]" />
      <span
        className="block overflow-hidden text-[.85em] !leading-[1]"
        style={{ fontFamily: FONT_LEMONADA.style.fontFamily }}
      >
        OiPer
      </span>
    </span>
  )
}
