"use client";

import {
  SectionMain,
  SectionProjects,
  SectionTechStack,
  SectionExperience,
  SectionContact,
} from "@/components/homepage";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionMain id="main" />
      <SectionProjects id="projects" />
      <SectionTechStack id="tech-stack" />
      <SectionExperience id="experience" />
      <SectionContact id="contact" />
    </div>
  );
}
