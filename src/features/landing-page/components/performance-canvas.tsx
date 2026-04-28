'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  life: number
  maxLife: number
  type: 'data' | 'spark' | 'text'
  char?: string
}

interface FreqBar {
  x: number
  height: number
  targetHeight: number
  speed: number
}

export function PerformanceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []
    let freqBars: FreqBar[] = []

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.clientWidth * dpr
      canvas.height = parent.clientHeight * dpr
      canvas.style.width = `${parent.clientWidth}px`
      canvas.style.height = `${parent.clientHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const w = parent.clientWidth
      const barCount = Math.floor(w / 8)
      freqBars = Array.from({ length: barCount }, (_, i) => ({
        x: i * 8 + 1,
        height: 4,
        targetHeight: 4,
        speed: 0.04 + Math.random() * 0.06,
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    const parent = canvas.parentElement!
    const w = parent.clientWidth
    const h = parent.clientHeight
    const centerX = w * 0.62
    const engineWidth = 90

    // Text block area to avoid (left content)
    const textBlock = { x: 0, y: 60, w: Math.min(540, w * 0.5), h: h - 120 }

    const inTextBlock = (x: number, y: number, margin: number = 0) => {
      return (
        x > textBlock.x - margin &&
        x < textBlock.x + textBlock.w + margin &&
        y > textBlock.y - margin &&
        y < textBlock.y + textBlock.h + margin
      )
    }

    const spawnParticle = () => {
      const type =
        Math.random() > 0.95
          ? 'text'
          : Math.random() > 0.88
            ? 'spark'
            : 'data'

      let x: number, y: number, vx: number, vy: number

      if (type === 'text') {
        x = centerX + (Math.random() - 0.5) * 50
        y = h * 0.35 + Math.random() * 120
        vx = (Math.random() - 0.5) * 0.3
        vy = -0.5 - Math.random() * 0.5
      } else {
        const side = Math.random() > 0.35 ? 'left' : 'right'
        x = side === 'left' ? -5 : w + 5
        y = Math.random() * h
        vx = side === 'left' ? 0.6 + Math.random() * 2 : -(0.6 + Math.random() * 2)
        vy = (Math.random() - 0.5) * 0.3

        // If spawned in text block, nudge out or make very subtle
        if (inTextBlock(x, y, 20)) {
          if (Math.random() > 0.7) return // skip
          y = y < h / 2 ? 20 + Math.random() * 40 : h - 60 + Math.random() * 40
        }
      }

      const p: Particle = {
        x,
        y,
        vx,
        vy,
        size: type === 'spark' ? 0.6 + Math.random() * 1.2 : 0.5 + Math.random() * 1.5,
        alpha: type === 'text' ? 0.35 : 0.15 + Math.random() * 0.25,
        life: 0,
        maxLife: type === 'text' ? 90 : 160 + Math.random() * 100,
        type,
      }
      if (type === 'text') {
        const chars = 'aeiostrnld'
        p.char = chars[Math.floor(Math.random() * chars.length)]
      }
      particles.push(p)
    }

    const drawEngine = () => {
      const grad = ctx.createLinearGradient(centerX - engineWidth / 2, 0, centerX + engineWidth / 2, 0)
      grad.addColorStop(0, 'rgba(255,255,255,0)')
      grad.addColorStop(0.2, 'rgba(255,255,255,0.025)')
      grad.addColorStop(0.5, 'rgba(255,255,255,0.065)')
      grad.addColorStop(0.8, 'rgba(255,255,255,0.025)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')

      ctx.fillStyle = grad
      ctx.fillRect(centerX - engineWidth / 2, 0, engineWidth, h)

      const time = Date.now() * 0.001
      const coreAlpha = 0.08 + Math.sin(time) * 0.04
      ctx.shadowBlur = 20
      ctx.shadowColor = `rgba(255,255,255,${coreAlpha})`
      ctx.strokeStyle = `rgba(255,255,255,${coreAlpha + 0.06})`
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.moveTo(centerX, 20)
      ctx.lineTo(centerX, h - 20)
      ctx.stroke()
      ctx.shadowBlur = 0
    }

    const drawFreqBars = () => {
      freqBars.forEach((bar) => {
        bar.targetHeight = 3 + Math.random() * 35
        bar.height += (bar.targetHeight - bar.height) * bar.speed
        const barAlpha = 0.025 + (bar.height / 45) * 0.055
        ctx.fillStyle = `rgba(255,255,255,${barAlpha})`
        ctx.fillRect(bar.x, h - bar.height - 10, 1.5, bar.height)
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      drawEngine()
      drawFreqBars()

      const time = Date.now() * 0.0008

      // Subtle horizontal wave lines at top and bottom (safe zones)
      for (let i = 0; i < 3; i++) {
        const baseY = i === 0 ? 25 : i === 1 ? h - 30 : h - 50
        ctx.strokeStyle = `rgba(255,255,255,${0.02 + Math.sin(time + i) * 0.01})`
        ctx.lineWidth = 0.6
        ctx.beginPath()
        for (let px = 0; px < w; px += 4) {
          const py = baseY + Math.sin(px * 0.015 + time * 2 + i) * 8
          if (px === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }

      // Speed streaks only in safe areas (right side and margins)
      for (let i = 0; i < 4; i++) {
        const sy = 30 + Math.random() * (h - 60)
        if (inTextBlock(w * 0.55, sy)) continue
        const streakAlpha = 0.012 + Math.sin(time * 2 + i * 1.5) * 0.008
        ctx.strokeStyle = `rgba(255,255,255,${Math.max(0, streakAlpha)})`
        ctx.lineWidth = 0.6
        ctx.beginPath()
        const sx = w * 0.45 + Math.random() * w * 0.1
        ctx.moveTo(sx, sy)
        ctx.lineTo(sx + 60 + Math.random() * 80, sy + (Math.random() - 0.5) * 10)
        ctx.stroke()
      }

      // Particles
      for (let idx = particles.length - 1; idx >= 0; idx--) {
        const p = particles[idx]
        p.life++
        const lifeRatio = p.life / p.maxLife
        const overText = inTextBlock(p.x, p.y, 10)

        if (p.type === 'text') {
          p.x += p.vx
          p.y += p.vy
          p.alpha = Math.sin(lifeRatio * Math.PI) * 0.4
          ctx.font = '10px monospace'
          ctx.fillStyle = `rgba(255,255,255,${p.alpha})`
          ctx.fillText(p.char || '', p.x, p.y)
        } else {
          const distToCenter = Math.abs(p.x - centerX)
          const inEngine = distToCenter < engineWidth / 2

          if (inEngine && !overText) {
            p.vx *= 1.03
            p.alpha = Math.min(p.alpha + 0.01, 0.7)
          }

          p.x += p.vx
          p.y += p.vy

          // Motion trail for fast ones
          if (Math.abs(p.vx) > 3 && !overText) {
            ctx.strokeStyle = `rgba(255,255,255,${p.alpha * 0.08})`
            ctx.lineWidth = p.size * 0.35
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3)
            ctx.stroke()
          }

          if (p.x < 30 || p.x > w - 30) {
            p.alpha *= 0.94
          }

          const renderAlpha = overText ? p.alpha * 0.25 : p.alpha * 0.55
          ctx.fillStyle = `rgba(255,255,255,${renderAlpha})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }

        if (p.life > p.maxLife || p.alpha < 0.005) {
          particles.splice(idx, 1)
        }
      }

      // Spawn rate
      if (Math.random() < 0.14) spawnParticle()

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
