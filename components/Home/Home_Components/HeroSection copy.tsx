"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// 🖼️ Array of background images (add your filenames from /public)
const backgroundImages = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  // "/4.jpeg",
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // ⏳ Auto-scroll background images
  useEffect(() => {
    // Preload images to reduce flickering
    backgroundImages.forEach((image) => {
      const img = new Image()
      img.src = image
    })
    setIsLoading(false)

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // 5 seconds for smooth transitions
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Background Image Container with Subtle Parallax */}
      <div className="absolute inset-0 transform-gpu">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${isLoading ? "bg-gray-200" : ""}`}
            style={{
              backgroundImage: `url(${image})`,
              transform: "translateY(calc(var(--scroll-y, 0) * -0.2))", // Subtle parallax effect
            }}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/50 z-20" /> {/* Darker overlay for contrast */}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white z-30">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-500">
              Connect with{" "}
              <span className="inline-block px-2 py-1 animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 bg-[length:200%_auto] text-transparent bg-clip-text">
                MBI Digital Agency
              </span>{" "}
              in Cameroon
              <span className="block mt-2 text-white/90">
                for Your Next Big Project
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl lg:text-2xl font-light">
              We empower companies and professionals to achieve their fullest potential with innovative digital solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/Quota" aria-label="Request a quotation for services">
              <Button
                size="lg"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about" aria-label="Learn more about MBI Digital Agency">
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white border-white/80 hover:bg-white/20 hover:border-white px-6 py-3 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Discover More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* CSS for Parallax and Gradient Animation */}
      <style jsx>{`
        :root {
          --scroll-y: 0px;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-gradient {
          animation: gradient-move 4s linear infinite;
        }
        section {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  )
}