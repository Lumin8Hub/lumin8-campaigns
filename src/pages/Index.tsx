import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CandidatesNavbar from "@/components/CandidatesNavbar";
import CandidatesHero from "@/components/CandidatesHero";
import CampaignBenefitsSection from "@/components/CampaignBenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PackageSection from "@/components/PackageSection";
import CampaignAddOnsSection from "@/components/CampaignAddOnsSection";
import ComplianceSection from "@/components/ComplianceSection";
import CandidatesFAQ from "@/components/CandidatesFAQ";
import FinalCTABand from "@/components/FinalCTABand";
import CandidatesFooter from "@/components/CandidatesFooter";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="min-h-screen">
        <CandidatesNavbar />
        <CandidatesHero />
        <CampaignBenefitsSection />
        <HowItWorksSection />
        <PackageSection />
      <CampaignAddOnsSection />
      <ComplianceSection />
      <CandidatesFAQ />
      <FinalCTABand />
      <CandidatesFooter />
    </div>
  );
};

export default Index;
