import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SectionReveal from "./animations/SectionReveal";

const ComplianceSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="compliance" className="bg-lumin8-off-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <span className="section-label">Election Rules</span>

          <motion.div
            initial={shouldReduceMotion ? false : { scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15"
          >
            <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />
          </motion.div>

          <h2 className="section-headline mb-6 text-foreground">
            Built with election rules in mind.
          </h2>

          <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
            Municipal campaigns are regulated: contribution limits, donor
            records, attribution lines, spending reports. We build your site to
            support those rules from day one.
          </p>

          <p className="border-t border-foreground/10 pt-6 text-sm leading-relaxed text-muted-foreground">
            Lumin8 is not a law firm and does not provide legal advice.
            Following the election rules in your province and municipality
            remains the candidate's responsibility.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ComplianceSection;
