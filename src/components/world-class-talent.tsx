"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export function WorldClassTalentComponent() {
  return (
    <section className="mx-auto py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-2xl lg:flex-row">
          <div className="relative aspect-[4/3] w-full lg:w-1/2">
            <Image
              src="/assets/about/desktop/image-world-class-talent.jpg"
              alt="Creative workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <Card className="flex items-center rounded-none bg-[#FDF3F0] p-8 md:p-12 lg:w-1/2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-[#E7816B] sm:text-4xl">
                World-class talent
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We are a crew of strategists, problem-solvers, and
                  technologists. Every design is thoughtfully crafted from
                  concept to launch, ensuring success in its given market. We
                  are constantly updating our skills in a myriad of platforms.
                </p>
                <p className="leading-relaxed">
                  Our team is multi-disciplinary and we are not merely
                  interested in form — content and meaning are just as
                  important. We give great importance to craftsmanship, service,
                  and prompt delivery. Clients have always been impressed with
                  our high-quality outcomes that encapsulates their brand&apos;s
                  story and mission.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
