"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/Portfolio", label: "Portfolio" },
  { href: "/Blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  // { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{ height: "90px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-all duration-300"
          >
            <Image
              src="/logo.png"
              alt="Site Logo"
              width={150}
              height={50}
              priority
              className="p-5"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 group relative ${
                  (pathname === link.href || (!pathname && link.href === "/"))
                    ? "text-primary text-lg" // Larger font for active route or home by default
                    : "text-muted-foreground text-sm"
                } hover:text-primary-foreground hover:scale-110`} // Scale and color change on hover
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center h-full gap-10">
            <Link href="/Quota">
            <Button size="lg" className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
               Request a quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
             <ThemeToggle />
          </div>
        
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center gap-4 pb-4 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-all duration-300 group relative ${
                (pathname === link.href || (!pathname && link.href === "/"))
                  ? "text-primary text-base" // Slightly larger font for active route or home by default on mobile
                  : "text-muted-foreground text-sm"
              } hover:text-primary-foreground hover:scale-110`} // Same hover effect for mobile
            >
              {link.label}
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}