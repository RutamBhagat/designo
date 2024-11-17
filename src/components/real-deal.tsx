"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export function RealDealComponent() {
  return (
    <section className="mx-auto py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-2xl lg:flex-row">
          <Card className="flex items-center rounded-none bg-[#FDF3F0] p-8 md:p-12 lg:w-1/2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-[#E7816B] sm:text-4xl">
                The real deal
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  As strategic partners in our clients&apos; businesses, we are
                  ready to take on any challenge as our own. Solving real
                  problems require empathy and collaboration, and we strive to
                  bring a fresh perspective to every opportunity. We make design
                  and technology more accessible and give you tools to measure
                  success.
                </p>
                <p className="leading-relaxed">
                  We are visual storytellers in appealing and captivating ways.
                  By combining business and marketing strategies, we inspire
                  audiences to take action and drive real results.
                </p>
              </div>
            </div>
          </Card>
          <div className="relative aspect-[4/3] w-full lg:w-1/2">
            <Image
              src="/assets/about/desktop/image-real-deal.jpg"
              alt="Creative process"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
