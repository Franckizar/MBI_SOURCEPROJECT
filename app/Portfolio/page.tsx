"use client"

import { Montserrat } from "next/font/google";
// import HeroHeader from "./components/Portfolio/HeroHeader";
// import MarketingSection from "./components/MarketingSection";
// import ShortsVideosSection from "./components/ShortsVideosSection";
// import LongFormVideosSection from "./components/LongFormVideosSection";

import HeroHeader from "@/components/Portfolio/HeroHeader";
import MarketingSection from "@/components/Portfolio/MarketingSection";
import ShortsVideosSection from "@/components/Portfolio/ShortsVideosSection";
import LongFormVideosSection from "@/components/Portfolio/LongFormVideosSection";
import DesignPortfolioSection from "@/components/Portfolio/DesignPortfolioSection";
// import ProjectShowcase
import ProjectShowcase from './../../components/Portfolio/ProjectShowcase';
// import SoftwareExpertiseSection
import SoftwareExpertiseSection from './../../components/Portfolio/SoftwareExpertiseSection';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function PortfolioPage() {
  return (
    <div className={`min-h-screen ${montserrat.className}`}>
      <HeroHeader />
      <MarketingSection />
      <ShortsVideosSection />
      <LongFormVideosSection />
       <DesignPortfolioSection />
       <ProjectShowcase/>
       <ProjectShowcase/>
       <ProjectShowcase/>
       <SoftwareExpertiseSection/>

    </div>
  );
}