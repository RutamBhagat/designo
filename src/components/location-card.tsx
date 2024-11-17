import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface LocationCardProps {
  name: string;
  imageSrc: string;
}

export function LocationCardComponent({ name, imageSrc }: LocationCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-12 h-[202px] w-[202px]">
        <div className="absolute inset-0 rounded-full bg-[#FDF3F0]" />
        <Image
          src={imageSrc}
          alt={`${name} office`}
          fill
          className="object-contain p-4"
        />
      </div>
      <h3 className="mb-8 text-xl font-medium uppercase tracking-wide">
        {name}
      </h3>
      <Button
        asChild
        className="h-14 rounded-lg bg-[#E7816B] px-6 uppercase text-white hover:bg-[#FFAD9B]"
      >
        <Link href="/locations">See Location</Link>
      </Button>
    </div>
  );
}
