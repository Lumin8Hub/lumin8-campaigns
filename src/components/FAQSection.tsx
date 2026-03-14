import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { faqItems } from "@/data/faq";
import SectionReveal from "./animations/SectionReveal";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-lumin8-off-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-lumin8-black mb-12">Questions? We've got answers.</h2>
        </SectionReveal>

        <div className="space-y-0">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-lumin8-black/10">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-heading font-semibold text-lumin8-black pr-4">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-lumin8-gray-600 shrink-0" />
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
                    <p className="pb-6 text-lumin8-gray-600 leading-relaxed">{item.answer}</p>
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

export default FAQSection;
