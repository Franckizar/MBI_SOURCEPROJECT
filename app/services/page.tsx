import { Code, Smartphone, Cloud, Database, Lock, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive solutions tailored to your unique needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="mr-2">•</span>
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

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Need a Custom Solution?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Let's discuss how we can help bring your vision to life
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
