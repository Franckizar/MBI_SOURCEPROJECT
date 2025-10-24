import { Users, Target, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "We prioritize our customers' needs and success above all else"
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Constantly pushing boundaries to deliver cutting-edge solutions"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality in everything we do"
  }
]

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Us
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Building the future, one project at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Story
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                Founded with a vision to transform the digital landscape, we've been at the forefront
                of innovation and excellence. Our journey began with a simple idea: to create solutions
                that make a real difference.
              </p>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                Today, we're proud to serve clients worldwide, delivering exceptional results through
                cutting-edge technology and unwavering dedication to quality. Our team of passionate
                professionals works tirelessly to exceed expectations and drive success.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg"></div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
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
    </main>
  )
}
