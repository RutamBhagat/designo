import { CTASection } from "@/components/cta-section";
import Image from "next/image";

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

interface LocationCardProps {
  title: string;
  officeName: string;
  address: string[];
  phone: string;
  email: string;
  mapImage: string;
  reverse?: boolean;
}

export function LocationCard({
  title,
  officeName,
  address,
  phone,
  email,
  mapImage,
  reverse = false,
}: LocationCardProps) {
  return (
    <div className="mb-12 grid items-stretch gap-6 sm:mb-16 md:mb-24 md:grid-cols-2 lg:mb-32 lg:gap-8">
      <div
        className={`flex flex-col justify-center rounded-2xl bg-[#FDF3F0] p-6 sm:p-8 md:p-10 lg:p-12 ${
          reverse ? "order-2 md:order-1" : ""
        }`}
      >
        <h2 className="mb-4 text-3xl text-[#E7816B] sm:text-3xl md:mb-6 md:text-4xl">
          {title}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div>
            <p className="mb-2 font-bold">{officeName}</p>
            <p className="text-[#333136]">
              {address.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div>
            <p className="mb-2 font-bold">Contact</p>
            <p className="text-[#333136]">
              P : {phone}
              <br />M : {email}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`relative aspect-[3/2] w-full overflow-hidden rounded-2xl sm:aspect-[4/3] ${
          reverse ? "order-1 md:order-2" : ""
        }`}
      >
        <Image
          src={mapImage}
          alt={`${title} office location map`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export default function page() {
  return (
    <main className="mx-auto max-w-7xl flex-1">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          {locations.map((location) => (
            <LocationCard key={location.title} {...location} />
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
