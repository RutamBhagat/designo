"use client";

import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto max-w-7xl px-4 py-8">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/shared/desktop/logo-dark.png"
            alt="Designo logo"
            width={202}
            height={27}
          />
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              {isOpen ? <X /> : <Menu />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="mt-8 flex flex-col gap-4">
              <Link
                href="/about"
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Our Company
              </Link>
              <Link
                href="/locations"
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <ul className="hidden space-x-8 md:flex">
          <li>
            <Link href="/about" className="text-sm font-medium hover:underline">
              Our Company
            </Link>
          </li>
          <li>
            <Link
              href="/locations"
              className="text-sm font-medium hover:underline"
            >
              Locations
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
