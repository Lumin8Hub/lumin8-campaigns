import { ShieldCheck } from "lucide-react";
import SectionReveal from "./animations/SectionReveal";

const ComplianceSection = () => {
  return (
    <section id="compliance" className="bg-lumin8-off-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>

          <h2 className="section-headline mb-6 text-foreground">
            Built with election rules in mind.
          </h2>

          <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
            Municipal campaigns are regulated — contribution limits, donor
            records, attribution statements, spending reporting. We build your
            site to <em>support</em> those obligations by default: proper
            disclaimers, donor-information fields, and clean records for your
            financial filing.
          </p>

          <p className="border-t border-foreground/10 pt-6 font-mono text-xs leading-relaxed text-muted-foreground">
            Lumin8 is not a law firm and does not provide legal advice.
            Compliance with election legislation in your province and
            municipality remains the candidate's responsibility — we make it
            easier, and we'll flag what to check with your clerk.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ComplianceSection;
