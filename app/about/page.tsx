import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Award, Heart, Rocket, Zap } from "lucide-react"

// ────────────────────────────────────────────────────────
// TEAM DATA
// ────────────────────────────────────────────────────────
const team = [
  { name: "Sarah Johnson", role: "CEO & Founder", image: "/team/1.jpg" },
  { name: "Michael Chen", role: "CTO", image: "/team/2.jpg" },
  { name: "Emma Davis", role: "Head of Design", image: "/team/3.jpg" },
  { name: "James Wilson", role: "Lead Developer", image: "/team/4.jpg" },
  { name: "Lisa Park", role: "Marketing Director", image: "/team/1.jpg" }
]

const extendedTeam = [...team, ...team.slice(0, 3)]

// ────────────────────────────────────────────────────────
// VALUES DATA
// ────────────────────────────────────────────────────────
const values = [
  { icon: Users, title: "Customer First", description: "We prioritize our customers' needs and success above all else" },
  { icon: Target, title: "Innovation", description: "Constantly pushing boundaries to deliver cutting-edge solutions" },
  { icon: Award, title: "Excellence", description: "Committed to delivering the highest quality in everything we do" },
  { icon: Heart, title: "Passion", description: "We love what we do and it shows in every project" },
  { icon: Rocket, title: "Growth", description: "Helping businesses scale with powerful digital tools" },
  { icon: Zap, title: "Speed", description: "Fast delivery without compromising on quality" }
]

// ────────────────────────────────────────────────────────
// MAIN PAGE
// ────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* HERO */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/team/2.jpg"
            alt="About Us - MBI Digital Agency"
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
                About{" "}
                <span className="inline-block px-2 py-1 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  MBI Digital
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl drop-shadow">
                Building the future, one project at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a vision to transform the digital landscape, we've been at the forefront
                of innovation and excellence. Our journey began with a simple idea: to create solutions
                that make a real difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to serve clients worldwide, delivering exceptional results through
                cutting-edge technology and unwavering dedication to quality. Our team of passionate
                professionals works tirelessly to exceed expectations and drive success.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/team/1.jpg"
                alt="Our Story - MBI Digital Agency"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES — ROTATING 3 CARDS */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Values
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.slice(0, 3).map((value, i) => {
              const Icon = value.icon
              return (
                <Card key={i} className="h-full rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* TEAM SWIPER */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Passionate professionals driving innovation
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${0 * 33.333}%)` }}>
              {team.map((member, i) => (
                <div key={i} className="flex-none w-full md:w-1/3 px-4">
                  <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 overflow-hidden">
                    <div className="relative h-64 w-full bg-gray-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-muted-foreground mt-1">{member.role}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let’s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-50 font-bold text-lg px-10 py-7 rounded-2xl">
              <a href="/contact">
                Get in Touch
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
              <a href="/portfolio">
                View Our Work
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}