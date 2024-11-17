import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

export function CTASection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#E7816B] p-8 text-center text-white md:p-12 lg:p-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mb-8 text-lg opacity-80">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
            <Link href="/contact">
              <Button className="bg-white px-6 py-4 font-bold text-black hover:bg-white/90">
                GET IN TOUCH
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
