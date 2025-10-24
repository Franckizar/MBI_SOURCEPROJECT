"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

const services = [
  { id: "seo", label: "SEO Optimization", description: "Improve search engine rankings" },
  { id: "social", label: "Social Media Marketing", description: "Engage audiences on platforms" },
  { id: "ppc", label: "PPC Advertising", description: "Targeted paid campaigns" },
  { id: "content", label: "Content Creation", description: "Blogs, videos, and graphics" },
  { id: "email", label: "Email Marketing", description: "Nurture leads via newsletters" },
  { id: "web", label: "Web Design/Development", description: "Custom websites and UX" },
]

export default function QuotePage() {
  const router = useRouter()
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    company: string;
    budget: string;
    timeline: string;
    services: string[];
    message: string;
  }>({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    services: [],
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.services.length === 0) {
      toast.error("Please select at least one service.")
      return
    }
    setLoading(true)
    try {
      // Simulate API call (replace with your backend endpoint)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success("Quote request sent successfully! We'll contact you within 24-48 hours.")
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        timeline: "",
        services: [],
        message: "",
      })
      setTimeout(() => router.push("/"), 3000) // Redirect to home after 3 seconds
    } catch (error) {
      toast.error("Failed to send request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-950 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              Request Your{" "}
              <span className="inline-block px-2 py-1 animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 bg-[length:200%_auto] text-transparent bg-clip-text">
                Custom Quote
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Let MBI Digital Agency craft a tailored digital marketing strategy to elevate your brand.
            </p>
            <Button
              variant="outline"
              asChild
              className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Link href="/services">
                View Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {submitted ? (
            <Card className="mx-auto max-w-md bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Quote Request Sent!</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Thank you! We'll review your details and get back to you within 24-48 hours with a personalized quote.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-2xl"
                >
                  <Link href="/">Back to Home</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Info */}
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Contact Information</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Provide your details so we can reach you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe"
                        aria-required="true"
                        className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="example@company.com"
                        aria-required="true"
                        className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        placeholder="Your Company"
                        className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        Estimated Budget
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}>
                        <SelectTrigger className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-800">
                          <SelectItem value="<5000">Under $5,000</SelectItem>
                          <SelectItem value="5000-20000">$5,000 - $20,000</SelectItem>
                          <SelectItem value="20000-50000">$20,000 - $50,000</SelectItem>
                          <SelectItem value="50000+">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Project Timeline</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    When do you want to start?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Select value={formData.timeline} onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800">
                      <SelectItem value="immediate">ASAP</SelectItem>
                      <SelectItem value="1-3">1-3 months</SelectItem>
                      <SelectItem value="3-6">3-6 months</SelectItem>
                      <SelectItem value="6+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Services Interested In</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Select at least one service <span className="text-red-500">*</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Card
                        key={service.id}
                        className="p-4 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={() => handleServiceToggle(service.id)}
                            aria-label={`Select ${service.label}`}
                            className="border-gray-300 dark:border-gray-500"
                          />
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{service.label}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Message */}
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Project Details</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Share your project goals and requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    id="message"
                    placeholder="Describe your project goals, target audience, current challenges, or any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    rows={6}
                    className="resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                  />
                </CardContent>
              </Card>

              <Button
                type="submit"
                className="w-full lg:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                disabled={formData.services.length === 0 || loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Request Quote
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>

     
      {/* CSS for Gradient Animation */}
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
    </div>
  )
}