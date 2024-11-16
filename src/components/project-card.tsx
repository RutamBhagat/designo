'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  imageSrc: string
  href: string
  className?: string
}

export function ProjectCardComponent({ title, imageSrc, href, className }: ProjectCardProps) {
  return (
    <Link href={href} className={`relative overflow-hidden rounded-lg group ${className}`}>
      <Image src={imageSrc} alt={title} width={720} height={400} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-70" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
        <h2 className="text-3xl font-bold mb-4 uppercase">{title}</h2>
        <p className="flex items-center text-lg font-medium">
          View Projects <ArrowRight className="ml-2" />
        </p>
      </div>
    </Link>
  )
}