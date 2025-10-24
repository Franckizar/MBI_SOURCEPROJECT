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
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        
        {/* Optional: Add your hero image here */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl text-white space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your unique needs — from idea to launch.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800"
                >
                  <CardHeader className="space-y-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <Check className="mr-2 h-4 w-4 text-purple-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Need a Custom Solution?
            </h2>
            <p className="text-xl md:text-2xl text-white/90">
              Let's discuss how we can help bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-50 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/quote">
                  Get a Free Quote
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-2xl backdrop-blur-sm"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}