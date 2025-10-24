// ```tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

// IMAGES ARRAY - EDIT HERE
const images = [
  "/1.jpg", // Replace with your actual images
  "/2.jpg",
  "/3.jpg",
  // "/about-4.jpg",
  // "/about-5.jpg",
  // "/about-6.jpg",
  // Add more images here — just add the path
]

export default function AboutUsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 0.5 // Adjust speed

    const animate = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        }
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`
      }
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Scrolling Images */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-4"
              style={{ width: "max-content" }}
            >
              {/* Duplicate images for seamless loop */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  {images.map((src, idx) => (
                    <div
                      key={`${i}-${idx}`}
                      className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-lg flex-shrink-0 overflow-hidden"
                    >
                      <img
                        src={src}
                        alt={`MBI Digital Team ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Gradient fade overlays */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none z-10" />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col items-start space-y-6 text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                About{" "}
                <span className="inline-block px-2 py-1 animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 bg-[length:200%_auto] text-transparent bg-clip-text">
                  MBI Digital
                </span>
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                We are a creative digital agency based in Cameroon, crafting modern, high-performance websites and marketing solutions that help businesses grow online.
              </p>
              <p className="text-muted-foreground">
                From stunning designs to powerful SEO strategies, we bring your vision to life with cutting-edge technology and a passion for excellence.
              </p>
            </div>
            <Link href="/about">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient Animation CSS */}
      <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-gradient {
          animation: gradient-move 4s linear infinite;
        }
      `}</style>
    </section>
  )
}
// ```