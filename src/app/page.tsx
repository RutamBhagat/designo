import { ContactSectionComponent } from "@/components/contact-section";
import { HeroSectionComponent } from "@/components/hero-section";
import { ProjectsSectionComponent } from "@/components/projects-section";
import { SkillsSectionComponent } from "@/components/skills-section";

export default function HomePage() {
  return (
    <>
      <HeroSectionComponent />
      <div className="mx-auto max-w-7xl">
        <ProjectsSectionComponent />
        <SkillsSectionComponent />
        <ContactSectionComponent />
      </div>
    </>
  );
}
