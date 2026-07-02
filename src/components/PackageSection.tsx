import { Check } from "lucide-react";
import { candidatePackage } from "@/data/candidatePackage";
import SectionReveal from "./animations/SectionReveal";
import GlowCard from "./animations/GlowCard";
import { openCandidateForm } from "@/lib/tally";

const PackageSection = () => {
  return (
    <section id="package" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-lavender w-40 h-40 -top-10 -right-10 opacity-25 blur-[70px]" />
      <div className="blob blob-green w-32 h-32 bottom-20 -left-10 opacity-20 blur-[60px]" />

      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-4">
            The Quick Launch package — $1,000 CAD
          </h2>
          <p className="section-subheadline mb-12">{candidatePackage.tagline}</p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <GlowCard
            glowColor="rgba(179, 157, 255, 0.08)"
            className="rounded-3xl p-8 md:p-12 border-2 border-primary"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-8">
              <h3 className="font-heading font-bold text-2xl text-foreground">
                {candidatePackage.name}
              </h3>
              <div>
                <span className="text-lumin8-gray-400 text-lg">$</span>
                <span className="text-foreground font-heading font-extrabold text-5xl">
                  {candidatePackage.price.toLocaleString()}
                </span>
                <span className="font-mono text-xs text-lumin8-gray-400 ml-2">CAD</span>
              </div>
            </div>

            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {candidatePackage.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground/80">
                  <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={openCandidateForm}
              className="block w-full md:w-auto text-center bg-primary text-primary-foreground font-heading font-semibold px-10 py-4 rounded-full hover:scale-[1.02] transition-transform duration-300"
            >
              {candidatePackage.cta}
            </button>

            <p className="font-mono text-xs text-lumin8-gray-400 mt-4">
              {candidatePackage.microcopy}
            </p>
          </GlowCard>
        </SectionReveal>
      </div>
    </section>
  );
};

export default PackageSection;
