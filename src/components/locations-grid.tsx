"use client";

import { LocationCardComponent } from "@/components/location-card";

const locations = [
  {
    name: "Canada",
    imageSrc: "/assets/shared/desktop/illustration-canada.svg",
  },
  {
    name: "Australia",
    imageSrc: "/assets/shared/desktop/illustration-australia.svg",
  },
  {
    name: "United Kingdom",
    imageSrc: "/assets/shared/desktop/illustration-united-kingdom.svg",
  },
];

export function LocationsGridComponent() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {locations.map((location) => (
          <LocationCardComponent key={location.name} {...location} />
        ))}
      </div>
    </section>
  );
}
