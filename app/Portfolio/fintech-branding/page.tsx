import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function FintechBrandingCaseStudy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/portfolio/3.jpg"
        //   src="/portfolio/3.jpg"
          alt="Fintech Branding"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">Fintech Startup Branding</h1>
            <p className="text-xl">Full brand identity for a next-gen finance app</p>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Challenge</h2>
          <p>A fintech startup needed a bold, trustworthy brand to stand out in a crowded market...</p>

          <h2>Solution</h2>
          <p>We created a modern logo, color system, typography, and pitch deck...</p>

          <h2>Results</h2>
          <ul>
            <li>Raised $2.5M in seed funding</li>
            <li>10k+ users in first month</li>
            <li>Featured in TechCrunch</li>
          </ul>
        </div>
      </section>
    </main>
  )
}   