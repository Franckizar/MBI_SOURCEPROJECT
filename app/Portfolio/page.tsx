"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, Eye, ArrowRight, Globe, Palette, Megaphone } from "lucide-react"
import Image from "next/image"

// ────────────────────────────────────────────────────────
// 1. PORTFOLIO DATA — ONLY WEB, BRANDING, MARKETING
// ────────────────────────────────────────────────────────
const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    image: "/portfolio/1.jpg",
    video: false,
    description: "AI-powered e-commerce with dynamic pricing and Stripe integration.",
    link: "https://ecommerce.mbidigital.com",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Fintech Startup Branding",
    category: "branding",
    image: "/portfolio/3.jpg",
    video: false,
    description: "Logo, UI kit, pitch deck, and full brand system for fintech.",
    link: "/Portfolio/fintech-branding", // Internal case study
    tags: ["Figma", "Brand Strategy", "Logo", "UI Kit", "Pitch Deck"]
  },
  {
    id: 3,
    title: "Real-Time Analytics Dashboard",
    category: "web",
    image: "/portfolio/4.jpg",
    video: false,
    description: "Live data visualization with user roles and export tools.",
    link: "https://dashboard.mbidigital.com",
    tags: ["React", "Recharts", "Node.js", "Prisma", "WebSockets"]
  },
  {
    id: 4,
    title: "Viral Social Media Campaign",
    category: "marketing",
    image: "/portfolio/5.jpg",
    video: true,
    description: "350% reach boost across TikTok, Instagram, and LinkedIn.",
    // link: "/portfolio/viral-campaign", // Internal case study
    link: "/Portfolio/viral-campaign", // Internal case study
    tags: ["Content Strategy", "Video", "Meta Ads", "UGC", "Analytics"]
  },
  {
    id: 5,
    title: "Corporate Multilingual Site",
    category: "web",
    image: "/portfolio/6.jpg",
    video: false,
    description: "Headless CMS with SEO, forms, and 5-language support.",
    link: "https://corporate.mbidigital.com",
    tags: ["WordPress", "ACF", "WPML", "SEO", "Custom Theme"]
  },
  {
    id: 6,
    title: "SaaS Conversion Landing Page",
    category: "web",
    image: "/portfolio/8.jpg",
    video: false,
    description: "A/B tested landing with email capture and analytics.",
    link: "https://saas.mbidigital.com",
    tags: ["Next.js", "Framer Motion", "ConvertKit", "Hotjar", "A/B"]
  }
]

// ────────────────────────────────────────────────────────
// 2. CATEGORIES — ONLY WEB, BRANDING, MARKETING
// ────────────────────────────────────────────────────────
const categories = [
  { id: "all", label: "All Projects", icon: Globe, color: "bg-purple-600" },
  { id: "web", label: "Web Development", icon: Globe, color: "bg-blue-600" },
  { id: "branding", label: "Branding", icon: Palette, color: "bg-pink-600" },
  { id: "marketing", label: "Digital Marketing", icon: Megaphone, color: "bg-orange-600" }
]

// ────────────────────────────────────────────────────────
// 3. MAIN COMPONENT
// ────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category)
    return cat?.icon || Globe
  }

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category)
    return cat?.color || "bg-gray-600"
  }

  const isInternalLink = (link: string) => link.startsWith("/portfolio/")

  return (
    <main className="relative min-h-screen">
      {/* HERO */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/team/1.jpg"
            alt="Our Portfolio - MBI Digital Agency"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">
                Our{" "}
                <span className="inline-block px-2 py-1 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl drop-shadow">
                Web, branding, and marketing excellence — crafted for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-16 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 py-2 font-semibold flex items-center gap-2 transition-all ${
                    selectedCategory === category.id 
                      ? `${category.color} text-white border-0` 
                      : "border-gray-300"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const CategoryIcon = getCategoryIcon(item.category)
              return (
                <Card 
                  key={item.id} 
                  className="overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0"
                >
                  {/* Image + Video + Category Badge */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.video && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    )}
                    <div className={`absolute top-4 left-4 ${getCategoryColor(item.category)} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
                      <CategoryIcon className="h-3 w-3" />
                      {item.category.toUpperCase()}
                    </div>
                  </div>

                  <CardHeader className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>

                  <CardFooter className="p-6 pt-0">
                    <div className="flex items-center justify-between w-full">
                      {isInternalLink(item.link) ? (
                        <Link 
                          href={item.link} 
                          className="flex items-center gap-2 text-primary hover:underline font-medium"
                        >
                          View Case Study
                          <Eye className="h-4 w-4" />
                        </Link>
                      ) : (
                        <Link 
                          href={item.link} 
                          target="_blank" 
                          className="flex items-center gap-2 text-primary hover:underline font-medium"
                        >
                          View Project
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let’s turn your ideas into reality with cutting-edge digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-50 font-bold text-lg px-10 py-7 rounded-2xl">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}