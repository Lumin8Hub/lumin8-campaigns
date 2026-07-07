import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { candidateFaq } from "@/data/candidateFaq";
import SectionReveal from "./animations/SectionReveal";

const CandidatesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <span className="section-label">FAQ</span>
          <h2 className="section-headline mb-12 text-foreground">
            Questions? We've got answers.
          </h2>
        </SectionReveal>

        <div className="space-y-0">
          {candidateFaq.map((item, i) => (
            <div key={i} className="border-b border-foreground/10">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between py-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 font-heading text-xl font-semibold text-foreground">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-lg leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidatesFAQ;
