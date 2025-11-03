'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/Portfolio", label: "Portfolio" },
  { href: "/Blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{ height: "130px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/long logo.png"
              alt="MBI Digital Logo"
              width={300}
              height={300}
              priority
              className="p-5"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (!pathname && link.href === "/")
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative font-medium text-lg transition-all duration-300
                    ${isActive ? 'text-white' : 'text-white/80'}
                    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400
                  `}
                >
                  {link.label}

                  {/* Gradient Underline */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 w-full h-0.5 origin-left transition-transform duration-300
                      bg-gradient-to-r from-purple-400 to-blue-400
                      ${isActive ? 'scale-x-100' : 'scale-x-0'}
                      group-hover:scale-x-100
                    `}
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA + Theme Toggle */}
          <div className="flex items-center gap-6">
            <Link href="/Quota">
           <Button
  size="lg"
  className="rounded-2xl bg-white text-primary hover:bg-gray-50 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
>
  Request a Quote
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
            </Link>
            {/* <ThemeToggle /> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex flex-wrap items-center justify-center gap-4 pt-3 pb-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (!pathname && link.href === "/")
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative font-medium text-base transition-all duration-300
                  ${isActive ? 'text-white' : 'text-white/80'}
                  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400
                `}
              >
                {link.label}

                {/* Gradient Underline */}
                <span
                  className={`
                    absolute -bottom-1 left-0 w-full h-0.5 origin-left transition-transform duration-300
                    bg-gradient-to-r from-purple-400 to-blue-400
                    ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    group-hover:scale-x-100
                  `}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}