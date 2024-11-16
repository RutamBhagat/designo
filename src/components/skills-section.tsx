'use client'

import Image from "next/image"

const skills = [
  {
    title: "Passionate",
    description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    imageSrc: "/assets/home/desktop/illustration-passionate.svg",
  },
  {
    title: "Resourceful",
    description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.",
    imageSrc: "/assets/home/desktop/illustration-resourceful.svg",
  },
  {
    title: "Friendly",
    description: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    imageSrc: "/assets/home/desktop/illustration-friendly.svg",
  },
]

export function SkillsSectionComponent() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <Image src={skill.imageSrc} alt={skill.title} fill className="object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}