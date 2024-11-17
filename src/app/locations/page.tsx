import { ContactSectionComponent } from "@/components/contact-section";
import Image from "next/image";

interface LocationCardProps {
  title: string;
  officeName: string;
  address: string[];
  phone: string;
  email: string;
  mapImage: string;
  reverse?: boolean;
}

function LocationCard({
  title,
  officeName,
  address,
  phone,
  email,
  mapImage,
  reverse = false,
}: LocationCardProps) {
  return (
    <div className="mb-8 grid items-stretch gap-8 md:grid-cols-3 lg:mb-12">
      <div
        className={`flex flex-col justify-center rounded-2xl bg-[#FDF3F0] p-8 md:col-span-2 md:p-12 ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <h2 className="mb-6 text-4xl font-medium text-[#E7816B]">{title}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xl font-bold text-[#333136]">
              {officeName}
            </p>
            <p className="text-[#333136]">
              {address.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div>
            <p className="mb-2 text-xl font-bold text-[#333136]">Contact</p>
            <p className="text-[#333136]">
              <span className="block">P : {phone}</span>
              <span className="block">M : {email}</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`relative aspect-square w-full overflow-hidden rounded-2xl ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <Image
          src={mapImage}
          alt={`${title} office location map`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
}

const locations = [
  {
    title: "Canada",
    officeName: "Designo Central Office",
    address: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    mapImage: "/assets/locations/desktop/image-map-canada.png",
    reverse: true,
  },
  {
    title: "Australia",
    officeName: "Designo AU Office",
    address: ["19 Balonne Street", "New South Wales 2443"],
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
    mapImage: "/assets/locations/desktop/image-map-australia.png",
  },
  {
    title: "United Kingdom",
    officeName: "Designo UK Office",
    address: ["13 Colorado Way", "Rhyd-y-fro SA8 9GA"],
    phone: "078 3115 1400",
    email: "contact@designo.uk",
    mapImage: "/assets/locations/desktop/image-map-united-kingdom.png",
    reverse: true,
  },
];

export default function LocationsPage() {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="container px-6 py-16">
        {locations.map((location) => (
          <LocationCard key={location.title} {...location} />
        ))}
      </div>
      <ContactSectionComponent />
    </main>
  );
}
