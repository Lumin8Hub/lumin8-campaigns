import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CONTEST_FORM_URL = "#contest"; // PLACEHOLDER

const prizeItems = [
  "Custom React-based Landing Page",
  "Mobile-Responsive Design",
  "Basic SEO Setup",
  "Contact Form Integration",
];

const details = [
  "📅 Contest runs for 14 days from launch",
  "📋 Apply by filling out the application form (takes ~10 minutes)",
  "🏆 Winner selected based on case study potential and community impact",
  "📸 Winner agrees to let us document the entire process for our portfolio",
];

const ContestSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} id="contest" className="bg-primary py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="section-label text-primary-foreground/60">// FREE WEBSITE CONTEST</span>
        <h2 className="section-headline text-primary-foreground mb-2">
          Win a custom Starter Website.
        </h2>
        <h2 className="section-headline text-primary-foreground mb-8">Valued at $750 CAD.</h2>

        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          We're giving away a custom-built website to one deserving small business or community organization. Tell us about your business, and we'll choose the winner who can benefit the most and help us create an amazing case study.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-lg mx-auto mb-10 text-left">
          {prizeItems.map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-primary-foreground">
              <Check className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 mb-10 text-sm text-primary-foreground/70">
          {details.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        <a
          href={CONTEST_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-foreground text-primary font-heading font-bold px-10 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300 text-lg"
        >
          Apply Now — It's Free →
        </a>
      </div>
    </section>
  );
};

export default ContestSection;
