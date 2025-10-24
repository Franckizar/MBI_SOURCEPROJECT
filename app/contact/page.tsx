"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@example.com"
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+1 (555) 123-4567"
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "San Francisco, CA"
  }
]

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Get in Touch
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have a question or want to work together? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index} className="rounded-2xl shadow-md transition-all duration-300">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold">{info.title}</p>
                          <p className="text-sm text-muted-foreground">{info.detail}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your project..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
