'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LocationCardProps {
  name: string
  imageSrc: string
}

export function LocationCardComponent({ name, imageSrc }: LocationCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-[202px] h-[202px] mb-8">
        <Image
          src={imageSrc}
          alt={`${name} office`}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold mb-4 uppercase">{name}</h3>
      <Button asChild variant="secondary">
        <Link href="/locations">See Location</Link>
      </Button>
    </div>
  )
}