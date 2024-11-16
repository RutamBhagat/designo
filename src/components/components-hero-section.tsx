'use client'

import { Button } from "@/components/ui/button"

export function HeroSectionComponent() {
  return (
    <section className="relative overflow-hidden bg-[#E7816B] px-4 py-16 md:py-24">
      <div className="container relative z-10 mx-auto grid gap-8 text-white md:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-lg opacity-90">
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and
            engaging brand experiences. Find out more about our services.
          </p>
          <Button size="lg" variant="secondary">
            Learn More
          </Button>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[9/16]">
            <div className="absolute inset-0 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-2 overflow-hidden rounded-lg bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800">
                  <div className="absolute inset-0 opacity-50 mix-blend-overlay">
                    <Image
                      src="https://dummyimage.com/720x400"
                      alt="Phone mockup"
                      className="object-cover"
                      fill
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10" />
    </section>
  )
}