"use client";
import AboutSection from "@/components/custom/sections/about";
import LandingSection from "@/components/custom/sections/landing";
import ProjectsSection from "@/components/custom/sections/projects";
import ScrollingSection from "@/components/custom/sections/scrolling";

const Page = () => {
  return (
    <>
      <LandingSection />
      <ScrollingSection />
      <ProjectsSection />
      <AboutSection />
    </>
  );
};

export default Page;
