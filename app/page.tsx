"use client";
import ChatSection from "@/components/custom/sections/chat";
import Contact from "@/components/custom/sections/contact";
import Edu from "@/components/custom/sections/education";
// import AboutSection from "@/components/custom/sections/about";
import Exp from "@/components/custom/sections/experiance";
import Footer from "@/components/custom/sections/footer";
import LandingSection from "@/components/custom/sections/landing";
import ProjectsSection from "@/components/custom/sections/projects";
import ScrollingSection from "@/components/custom/sections/scrolling";

const Page = () => {
  return (
    <>
      <ChatSection />
      <LandingSection />
      <ScrollingSection />
      <ProjectsSection />
      <Exp />
      <Edu />
      <Contact />
      <Footer />
      {/* <AboutSection /> */}
    </>
  );
};

export default Page;
