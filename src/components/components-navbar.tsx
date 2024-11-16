"use client"

import { Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold">Designo</span>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg font-semibold transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Our Company
              </Link>
              <Link
                href="/locations"
                className="text-lg font-semibold transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/contact"
                className="text-lg font-semibold transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Our Company
          </Link>
          <Link href="/locations" className="text-sm font-medium transition-colors hover:text-primary">
            Locations
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}