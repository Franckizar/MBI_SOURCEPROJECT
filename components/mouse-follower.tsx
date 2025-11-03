"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let rafId: number

    const handleMouseMove = (event: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY })
        setIsVisible(true)
      })
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
        transform: 'translate(-50%, -50%)',
      }}
      aria-hidden="true"
    >
      <Image
        src="/logo.png"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 drop-shadow-lg animate-pulse"
        priority
      />
    </div>
  )
}