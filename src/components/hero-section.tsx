"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSectionComponent() {
  return (
    <section className="relative overflow-hidden bg-[#E7816B] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[url('/assets/shared/desktop/bg-pattern-hero-home.svg')] bg-center bg-no-repeat opacity-10" />
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="mb-6 text-3xl font-bold md:text-5xl">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="mb-8 text-lg opacity-80">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[9/16]">
              <Image
                src="/assets/home/desktop/image-hero-phone.png"
                alt="Phone mockup"
                className="object-cover"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
