import { ShieldCheck } from "lucide-react";
import SectionReveal from "./animations/SectionReveal";

const ComplianceSection = () => {
  return (
    <section id="compliance" className="bg-lumin8-off-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
            <ShieldCheck className="w-6 h-6 text-lumin8-black" />
          </div>

          <h2 className="section-headline text-lumin8-black mb-6">
            Built with election rules in mind.
          </h2>

          <p className="text-lumin8-gray-600 text-lg leading-relaxed mb-10">
            Municipal campaigns are regulated — contribution limits, donor
            records, attribution statements, spending reporting. We build your
            site to <em>support</em> those obligations by default: proper
            disclaimers, donor-information fields, and clean records for your
            financial filing.
          </p>

          <p className="font-mono text-xs text-lumin8-gray-600 leading-relaxed border-t border-lumin8-black/10 pt-6">
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
