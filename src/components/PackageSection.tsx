import { Check } from "lucide-react";
import { candidatePackage } from "@/data/candidatePackage";
import SectionReveal from "./animations/SectionReveal";
import GlowCard from "./animations/GlowCard";
import { openCandidateForm } from "@/lib/tally";

const PackageSection = () => {
  return (
    <section id="package" className="bg-lumin8-off-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <span className="section-label">Core Package</span>
          <h2 className="section-headline mb-4 text-foreground">
            The Quick Launch package — $1,000 CAD
          </h2>
          <p className="section-subheadline mb-12">{candidatePackage.tagline}</p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <GlowCard
            glowColor="rgba(121, 202, 193, 0.12)"
            className="rounded-lg border-2 border-primary bg-background p-8 md:p-12"
          >
            <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h3 className="font-heading text-3xl font-bold text-foreground">
                {candidatePackage.name}
              </h3>
              <div>
                <span className="text-lg text-muted-foreground">$</span>
                <span className="font-heading text-5xl font-extrabold text-foreground">
                  {candidatePackage.price.toLocaleString()}
                </span>
                <span className="ml-2 font-mono text-xs text-muted-foreground">CAD</span>
              </div>
            </div>

            <ul className="mb-8 grid gap-x-8 gap-y-3 md:grid-cols-2">
              {candidatePackage.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-lg text-foreground/80">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={openCandidateForm}
              className="block w-full rounded-full bg-primary px-10 py-4 text-center font-heading font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] md:w-auto"
            >
              {candidatePackage.cta}
            </button>

            <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
              {candidatePackage.microcopy}
            </p>
          </GlowCard>
        </SectionReveal>
      </div>
    </section>
  );
};

export default PackageSection;
