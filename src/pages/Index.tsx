import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PricingSection from "@/components/PricingSection";
import AddOnsSection from "@/components/AddOnsSection";
import ProcessSection from "@/components/ProcessSection";
import ContestSection from "@/components/ContestSection";
import NonWinnersSection from "@/components/NonWinnersSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <AddOnsSection />
      <ProcessSection />
      <ContestSection />
      <NonWinnersSection />
      <FAQSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
