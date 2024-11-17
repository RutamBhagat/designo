import { AboutHeroComponent } from "@/components/about-hero";
import React from "react";
import { RealDealComponent } from "@/components/real-deal";
import { WorldClassTalentComponent } from "@/components/world-class-talent";

export default function page() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl">
      <AboutHeroComponent />
      <WorldClassTalentComponent />
      <RealDealComponent />
    </main>
  );
}
