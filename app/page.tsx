"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
//import Clients from "@/components/Clients";
import SkillsSection from "@/components/SkillsSection";
//import SkillsCarouselFramer from "@/components/SkillsSection";
//import Approach from "@/components/Approach";
import Certification from "@/components/Certification";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/contact";




const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <ResumeSection />
        <RecentProjects />
        <SkillsSection />
        <Experience />
        <Certification />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
