import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, Users, PlayCircle, Globe, Instagram, Linkedin, Share2, ArrowRight } from "lucide-react"

export default function ViralCampaignCaseStudy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/portfolio/5.jpg"
          alt="Viral Social Media Campaign"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-5xl text-white space-y-6">
            <Badge className="mb-4 bg-orange-600">Digital Marketing</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Viral Campaign That{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Boosted Reach 350%
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Multi-platform social media strategy across Instagram, TikTok, and LinkedIn
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Instagram className="h-5 w-5 mr-2" />
                2.1M+ Views
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <TrendingUp className="h-5 w-5 mr-2" />
                350% Reach
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Users className="h-5 w-5 mr-2" />
                48K Engagements
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* BACK BUTTON */}
      <section className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" size="lg" className="group">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </Button>
      </section>

      {/* CHALLENGE */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                The Challenge
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                A growing SaaS startup needed to break through the noise in a saturated market. 
                Traditional ads were expensive and underperforming. They needed a <strong>low-cost, high-impact</strong> strategy to reach 100K+ users in 30 days.
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Limited budget ($5K total)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Competitors dominated paid ads</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Needed viral organic growth</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/portfolio/campaign-challenge.jpg"
                alt="Campaign challenge"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-2xl font-bold">Budget: $5,000</p>
                <p className="text-lg">Goal: 100K Reach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Strategy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PlayCircle,
                title: "UGC Video Challenge",
                desc: "Launched a 15-second 'hack' challenge on TikTok & Instagram Reels"
              },
              {
                icon: Share2,
                title: "Cross-Platform Seeding",
                desc: "Shared top entries on LinkedIn, Twitter, and YouTube Shorts"
              },
              {
                icon: Globe,
                title: "Influencer Amplification",
                desc: "Partnered with 12 micro-influencers (5K–50K followers)"
              }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justific-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 text-white mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-pink-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Explosive Results
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2.1M+", label: "Total Views", icon: PlayCircle },
              { value: "350%", label: "Reach Growth", icon: TrendingUp },
              { value: "48K", label: "Engagements", icon: Users },
              { value: "$0.02", label: "Cost per View", icon: Globe }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <stat.icon className="h-10 w-10 mx-auto text-white/80" />
                <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Campaign in Action
          </h2>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
              <PlayCircle className="h-24 w-24 text-gray-400" />
            </div>
            {/* Replace with real video later */}
            {/* <video src="/videos/campaign.mp4" controls className="w-full h-full" /> */}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl">
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-6">
                “MBI Digital turned $5K into 2.1M views. Our user base grew 300% in 30 days.”
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full" />
                <div>
                  <p className="font-bold text-lg">Jessica Chen</p>
                  <p className="text-gray-600 dark:text-gray-400">CEO, GrowthFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready for Your Viral Moment?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let’s create a campaign that breaks the internet — and your growth records.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-50 font-bold text-lg px-10 py-7 rounded-2xl">
              <Link href="/contact">
                Start Your Campaign
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">
              <Link href="/portfolio">
                View More Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}