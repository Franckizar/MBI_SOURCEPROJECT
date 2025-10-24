// app/services/seo-optimization/page.tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { 
  Search, 
  TrendingUp, 
  Target, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Star
} from "lucide-react"

export default function SEOOptimizationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/1.jpg"
          alt="SEO Optimization - Boost your rankings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Badge className="mb-4 bg-green-500 text-white">Most Popular Service</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              SEO Optimization
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl">
              Boost your site's ranking with our expert SEO strategies. 
              Dominate Google, drive organic traffic, and grow your business — 
              without paid ads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-xl shadow-lg">
                <Link href="/quota">
                  Get a Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 font-bold text-lg px-8 py-6 rounded-xl">
                <Link href="#process">See How It Works</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-10">
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                <span className="text-lg font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                <span className="text-lg">500+ Clients Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "300%", label: "Avg. Traffic Growth" },
              { value: "85%", label: "Rank in Top 3" },
              { value: "6 Months", label: "To See Results" },
              { value: "100%", label: "White-Hat SEO" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Optimize</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive SEO covering every ranking factor Google cares about.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Keyword Research", desc: "Find high-volume, low-competition keywords your customers actually search." },
              { icon: Target, title: "On-Page SEO", desc: "Optimize titles, meta, content, images, and structure for maximum relevance." },
              { icon: Zap, title: "Technical SEO", desc: "Fix site speed, mobile issues, crawl errors, schema, and Core Web Vitals." },
              { icon: Globe, title: "Local SEO", desc: "Dominate Google Maps and local pack with GMB optimization and citations." },
              { icon: Shield, title: "Link Building", desc: "Earn high-authority backlinks from real websites — safely and sustainably." },
              { icon: BarChart3, title: "Content Strategy", desc: "Create ranking content that converts visitors into customers." }
            ].map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Our Process */}
      <section id="process" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Proven SEO Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A step-by-step system that delivers results — every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "SEO Audit", desc: "Full technical, content, and backlink audit with 100+ point checklist." },
              { step: 2, title: "Strategy", desc: "Custom roadmap with keywords, content plan, and timeline." },
              { step: 3, title: "Implementation", desc: "We execute everything — on-page, technical, content, and links." },
              { step: 4, title: "Track & Scale", desc: "Monthly reports + adjustments to double down on what works." }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Results for Real Clients</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don’t just take our word for it — see the numbers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { client: "TechFlow", result: "+450% Organic Traffic", time: "in 8 months" },
              { client: "HealthPlus", result: "Top 3 for 50+ Keywords", time: "in 6 months" },
              { client: "ShopLocal", result: "+380% Local Leads", time: "in 5 months" }
            ].map((caseStudy, i) => (
              <Card key={i} className="p-8 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-2">{caseStudy.result}</h3>
                <p className="text-lg font-semibold mb-1">{caseStudy.client}</p>
                <p className="text-muted-foreground">{caseStudy.time}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "How long until I see results?", a: "Most clients see ranking improvements in 3-6 months. Traffic growth follows." },
              { q: "Do you guarantee #1 on Google?", a: "No ethical agency can. We guarantee effort, strategy, and results based on data." },
              { q: "Is your SEO white-hat?", a: "100%. We follow Google’s guidelines strictly — no shortcuts, no risks." },
              { q: "Can you work with my existing site?", a: "Yes! We optimize WordPress, Shopify, custom sites, and more." }
            ].map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground pl-7">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Rank #1?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Get a free SEO audit + custom strategy call. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-xl">
              <Link href="/quota">
                Claim Your Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-xl">
              <Link href="/contact">Call: +237 676 966 081</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}