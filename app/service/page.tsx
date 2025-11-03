import { Code, Smartphone, Cloud, Database, Lock, Rocket, ArrowRight, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices",
    features: ["React & Next.js", "TypeScript", "Responsive Design"]
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: ["React Native", "Swift & Kotlin", "App Store Publishing"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies",
    features: ["AWS & Azure", "DevOps", "Auto-scaling"]
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database architecture and optimization for performance",
    features: ["SQL & NoSQL", "Data Modeling", "Performance Tuning"]
  },
  {
    icon: Lock,
    title: "Security",
    description: "Comprehensive security audits and implementation strategies",
    features: ["Penetration Testing", "Compliance", "Encryption"]
  },
  {
    icon: Rocket,
    title: "Consulting",
    description: "Strategic technology consulting and digital transformation",
    features: ["Tech Strategy", "Architecture Review", "Team Training"]
  }
]

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* HERO — EXACTLY LIKE ABOUT US */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/3.jpg"
            alt="Our Services - MBI Digital Agency"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">
                Our{" "}
                <span className="inline-block px-2 py-1 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl drop-shadow">
                Comprehensive digital solutions tailored to your unique needs — from idea to launch and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED SERVICES GRID */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              Cutting-edge services designed to propel your business into the digital future
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card 
                  key={index} 
                  className="group rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 overflow-hidden"
                >
                  {/* Animated gradient border effect */}
                  <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500"></div>
                  
                  <CardHeader className="space-y-4 pb-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                        >
                          <Check className="mr-3 h-4 w-4 text-purple-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Learn More Link */}
                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <Link 
                        href="#" 
                        className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-300 group/link"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ENHANCED CTA SECTION */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[600px] text-xl text-white/90 md:text-2xl leading-relaxed">
                Let's discuss how we can help bring your vision to life with cutting-edge digital solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                size="lg" 
                className="rounded-2xl bg-white text-purple-600 hover:bg-gray-50 font-bold px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 text-lg"
              >
                <Link href="/quote">
                  Get Started Today
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="rounded-2xl border-2 border-white text-white hover:bg-white/10 font-bold px-10 py-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 text-lg"
              >
                <Link href="/contact">
                  Schedule Call
                </Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}