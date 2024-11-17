"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export function AboutHeroComponent() {
  return (
    <section className="mx-auto py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-2xl lg:flex-row">
          <Card className="order-2 flex items-center rounded-none bg-[#E7816B] p-8 text-white md:p-12 lg:order-1 lg:w-1/2">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Us
              </h1>
              <p className="text-lg leading-relaxed text-white/90">
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We&apos;ve partnered with many
                startups, corporations, and nonprofits alike to craft designs
                that make real impact. We&apos;re always looking forward to
                creating brands, products, and digital experiences that connect
                with our clients&apos; audiences.
              </p>
            </div>
          </Card>
          <div className="relative order-1 aspect-[4/3] w-full lg:order-2 lg:w-1/2">
            <Image
              src="/assets/about/desktop/image-about-hero.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
