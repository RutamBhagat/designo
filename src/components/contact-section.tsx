'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactSectionComponent() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-[#E7816B] text-white rounded-lg p-8 md:p-16 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's talk about your project</h2>
            <p className="text-lg mb-8">
              Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
            </p>
          </div>
          <div className="text-center md:text-right">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/assets/shared/desktop/bg-pattern-call-to-action.svg')] opacity-10 bg-no-repeat bg-center" />
      </div>
    </section>
  )
}