"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ContactSectionComponent({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "container mx-auto max-w-7xl translate-y-16 px-4",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-lg bg-[#E7816B] p-8 text-white md:p-16">
        <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mb-8 text-lg">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="text-center md:text-right">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/assets/shared/desktop/bg-pattern-call-to-action.svg')] bg-center bg-no-repeat opacity-10" />
      </div>
    </section>
  );
}
