'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const backgroundImages = ["/1.jpg", "/2.jpg", "/3.jpg"] as const

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [animate, setAnimate] = useState(false)

  // Preload + Auto-slide
  useEffect(() => {
    let loadedCount = 0
    const total = backgroundImages.length

    const handleLoad = () => {
      loadedCount++
      if (loadedCount === total) {
        setIsLoaded(true)
        setTimeout(() => setAnimate(true), 100) // Trigger animation after load
      }
    }

    const imgs = backgroundImages.map((src) => {
      const img = new window.Image()
      img.src = src
      img.onload = handleLoad
      img.onerror = handleLoad
      return img
    })

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => {
      clearInterval(interval)
      imgs.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentIndex && isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`MBI Digital - Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

      {/* CENTERED CONTENT WITH SWEET ANIMATIONS */}
      <div className="relative h-full flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl text-center text-white space-y-8">

          {/* Badge — Fade in + Scale */}
          <div
            className={`inline-block transition-all duration-700 ease-out ${
              animate ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-5 py-2 shadow-lg">
              Trusted by 500+ Businesses
            </Badge>
          </div>

          {/* Title — Staggered word animation */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight space-y-2`}>
            <span
              className={`inline-block transition-all duration-700 ease-out ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Connect with
            </span>{" "}
            <span
              className={`inline-block px-2 py-1 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-gradient transition-all duration-800 ease-out ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              MBI Digital
            </span>{" "}
            <span
              className={`inline-block transition-all duration-700 ease-out ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              in Cameroon
            </span>
            <span
              className={`block mt-3 text-white/95 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium transition-all duration-700 ease-out ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              for Your Next Big Project
            </span>
          </h1>

          {/* Description — Fade in */}
          <p
            className={`mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed transition-all duration-700 ease-out ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            We craft high-performance websites, SEO strategies, and digital solutions that drive real business growth.
          </p>

          {/* Buttons — Slide up */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ease-out ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 font-bold text-lg px-9 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[220px]"
            >
              <Link href="/quota">
                Get a Free Quote
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white/10 font-bold text-lg px-9 py-7 rounded-2xl backdrop-blur-sm transition-all duration-300 min-w-[220px]"
            >
              <Link href="/about">
                Discover More
              </Link>
            </Button>
          </div>

          {/* Stats — Slide in from sides */}
          <div
            className={`flex justify-center gap-10 md:gap-16 mt-12 flex-wrap transition-all duration-700 ease-out ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "1400ms" }}
          >
            <div
              className={`flex items-center gap-3 transition-all duration-500 ease-out ${
                animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "1500ms" }}
            >
              <div className="p-2 bg-yellow-400/20 rounded-full">
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-sm text-white/70">Client Rating</div>
              </div>
            </div>

            <div
              className={`flex items-center gap-3 transition-all duration-500 ease-out ${
                animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "1600ms" }}
            >
              <div className="p-2 bg-blue-400/20 rounded-full">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  )
}