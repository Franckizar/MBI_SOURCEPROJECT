"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react"

// ────────────────────────────────────────────────────────
// 1. BLOG POSTS DATA
// ────────────────────────────────────────────────────────
const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Web Development in 2025",
    slug: "ai-web-development-2025",
    excerpt: "Explore the latest AI tools that are revolutionizing how we build and deploy modern web applications.",
    author: "Sarah Chen",
    date: "November 1, 2025",
    readTime: "5 min",
    category: "Technology",
    tags: ["AI", "Web Dev", "Next.js"],
    image: "/1.jpg",
    // image: "/blog/ai-web.jpg",
    featured: true
  },
  {
    id: 2,
    title: "The Ultimate Guide to Brand Identity in the Digital Age",
    slug: "brand-identity-guide",
    excerpt: "Learn how to create a memorable brand that stands out in a crowded digital marketplace.",
    author: "Michael Torres",
    date: "October 28, 2025",
    readTime: "8 min",
    category: "Branding",
    tags: ["Branding", "Design", "Strategy"],
    // image: "/blog/branding-guide.jpg",
     image: "/1.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Why Your Business Needs a Content Marketing Strategy Now",
    slug: "content-marketing-strategy",
    excerpt: "Discover proven tactics to boost engagement, SEO, and conversions with strategic content.",
    author: "Emma Williams",
    date: "October 25, 2025",
    readTime: "6 min",
    category: "Marketing",
    tags: ["Content", "SEO", "Strategy"],
    // image: "/blog/content-strategy.jpg",
     image: "/1.jpg",
    featured: true
  },
  {
    id: 4,
    title: "React Performance Optimization: Best Practices 2025",
    slug: "react-performance-2025",
    excerpt: "Advanced techniques to make your React apps faster and more efficient.",
    author: "Alex Kim",
    date: "October 20, 2025",
    readTime: "7 min",
    category: "Technology",
    tags: ["React", "Performance", "Frontend"],
    // image: "/blog/react-performance.jpg",
     image: "/1.jpg",
    featured: false
  },
  {
    id: 5,
    title: "From Idea to Launch: Building a Successful SaaS Product",
    slug: "saas-product-launch",
    excerpt: "Step-by-step guide to validating, building, and launching your SaaS product.",
    author: "David Park",
    date: "October 15, 2025",
    readTime: "10 min",
    category: "Startups",
    tags: ["SaaS", "Product", "Launch"],
    // image: "/blog/saas-launch.jpg",
     image: "/1.jpg",
    featured: false
  }
]

// ────────────────────────────────────────────────────────
// 2. CATEGORIES & FILTERS
// ────────────────────────────────────────────────────────
const categories = ["All", "Technology", "Branding", "Marketing", "Startups"]

// ────────────────────────────────────────────────────────
// 3. MAIN BLOG PAGE
// ────────────────────────────────────────────────────────
export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <main className="relative min-h-screen">
      {/* HERO — LIKE ABOUT US */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1.jpg"
            // src="/blog/hero.jpg"
            alt="MBI Digital Blog - Insights & Expertise"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="mb-4" variant="secondary">Latest Insights</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">
                MBI Digital{" "}
                <span className="inline-block px-2 py-1 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl drop-shadow">
                Expert insights on web development, branding, marketing, and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && searchQuery === "" && selectedCategory === "All" && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Badge className="mb-4" variant="secondary">Featured</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                  <span className="font-medium text-purple-600">{featuredPost.author}</span>
                </div>
                <Button asChild>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLOG GRID */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search or category filter.
              </p>
              <Button onClick={() => { setSearchQuery(""); setSelectedCategory("All") }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with MBI Digital
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest insights, tips, and trends delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}