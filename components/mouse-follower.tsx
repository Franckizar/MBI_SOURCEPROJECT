"use client"

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

type EffectType = 'default' | 'magnetic' | 'trail' | 'particles' | 'hologram'

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [effect, setEffect] = useState<EffectType>('default')

  const lastMousePosition = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>()

  useEffect(() => {
    const smoothing = 0.15

    const handleMouseMove = (event: MouseEvent) => {
      rafId.current = requestAnimationFrame(() => {
        const currentX = event.clientX
        const currentY = event.clientY

        const smoothedX = lastMousePosition.current.x + (currentX - lastMousePosition.current.x) * smoothing
        const smoothedY = lastMousePosition.current.y + (currentY - lastMousePosition.current.y) * smoothing

        setMousePosition({ x: smoothedX, y: smoothedY })
        lastMousePosition.current = { x: smoothedX, y: smoothedY }
        setIsVisible(true)
      })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case '1': setEffect('default'); break
          case '2': setEffect('magnetic'); break
          case '3': setEffect('trail'); break
          case '4': setEffect('particles'); break
          case '5': setEffect('hologram'); break
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('keydown', handleKeyPress)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* LOGO ONLY */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Image
          src="/logo.png"
          alt=""
          width={48}
          height={48}
          className={`drop-shadow-2xl transition-all duration-200 ${
            isClicking ? 'scale-90 rotate-12' : 'scale-100'
          } ${
            effect === 'hologram' ? 'animate-pulse brightness-125' :
            effect === 'particles' ? 'animate-bounce' : ''
          }`}
          priority
        />
      </div>

      {/* Effect Indicator */}
      <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm">
        Effect: {effect}
        <span className="text-xs opacity-70 block">Ctrl+1-5 to change</span>
      </div>
    </>
  )
}