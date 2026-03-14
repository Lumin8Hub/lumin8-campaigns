import { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { faqs } from "@/data/faq";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQSection = () => {
  const sectionRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = useCallback((index: number) => {
    const content = contentRefs.current[index];
    if (!content) return;

    if (openIndex === index) {
      gsap.to(content, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
      setOpenIndex(null);
    } else {
      if (openIndex !== null && contentRefs.current[openIndex]) {
        gsap.to(contentRefs.current[openIndex]!, { height: 0, opacity: 0, duration: 0.3 });
      }
      gsap.set(content, { height: "auto", opacity: 1 });
      gsap.from(content, { height: 0, opacity: 0, duration: 0.4, ease: "power2.out" });
      setOpenIndex(index);
    }
  }, [openIndex]);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} id="faq" className="bg-lumin8-off-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="section-label text-lumin8-gray-600">// FAQ</span>
        <h2 className="section-headline text-lumin8-black mb-12">Questions? We've got answers.</h2>

        <div className="space-y-0">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-lumin8-black/10">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-heading font-semibold text-lumin8-black pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-lumin8-gray-600 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                ref={(el) => { contentRefs.current[i] = el; }}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <p className="pb-6 text-lumin8-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
