"use client";

import { ProjectCardComponent } from "./project-card";

export function ProjectsSectionComponent() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCardComponent
          title="Web Design"
          imageSrc="/assets/home/desktop/image-web-design-large.jpg"
          href="/web-design"
          className="md:row-span-2"
        />
        <ProjectCardComponent
          title="App Design"
          imageSrc="/assets/home/desktop/image-app-design.jpg"
          href="/app-design"
        />
        <ProjectCardComponent
          title="Graphic Design"
          imageSrc="/assets/home/desktop/image-graphic-design.jpg"
          href="/graphic-design"
        />
      </div>
    </section>
  );
}
