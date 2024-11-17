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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid place-items-center gap-12 md:grid-cols-3">
          {locations.map((location) => (
            <LocationCardComponent key={location.name} {...location} />
          ))}
        </div>
      </div>
    </section>
  );
}
