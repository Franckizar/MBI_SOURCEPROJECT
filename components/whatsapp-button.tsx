// ```tsx
"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/237676966081" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <Button
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg transition-all duration-300",
          "bg-green-500 hover:bg-green-600 text-white",
          "dark:bg-green-400 dark:hover:bg-green-500",
          "hover:scale-110 hover:shadow-xl",
          "animate-bounce-subtle"
        )}
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">WhatsApp Chat</span>
      </Button>

      {/* Optional: Tooltip on hover */}
      <span
        className={cn(
          "absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5",
          "text-sm font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900",
          "rounded-lg opacity-0 pointer-events-none transition-opacity duration-200",
          "whitespace-nowrap group-hover:opacity-100"
        )}
      >
        Chat with us!
      </span>
    </Link>
  )
}

// Add subtle bounce animation