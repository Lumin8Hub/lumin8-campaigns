import { Check } from "lucide-react";
import SectionReveal from "./animations/SectionReveal";

const CONTEST_FORM_URL = "#contest"; // PLACEHOLDER

const prizeItems = [
  "Custom 3–5 page React website",
  "AI-drafted copy, human-refined",
  "Mobile-responsive design",
  "GitHub Pages hosting (free forever)",
  "2 rounds of revisions",
  "10 business day delivery",
];

const details = [
  "📅 Contest runs for 14 days from launch",
  "📋 Apply by filling out the application form (takes ~10 minutes)",
  "🏆 Winner selected based on case study potential and community impact",
  "📸 Winner agrees to let us document the entire process for our portfolio",
];

const ContestSection = () => {
  return (
    <section id="contest" className="bg-primary py-24 px-6">
      <SectionReveal className="max-w-4xl mx-auto text-center">
        <h2 className="section-headline text-primary-foreground mb-2">
          Win a Starter website package.
        </h2>
        <h2 className="section-headline text-primary-foreground mb-8">Valued at $750.</h2>

        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          We're giving away a complete Starter website package to one deserving small business or non-profit. This includes a custom-built, mobile-responsive React website with professional copy and hosting — everything you need to get online.
        </p>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          This isn't a random draw — it's an application. Tell us about your business, and we'll choose the winner who can benefit the most and help us create an amazing case study.
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
      </SectionReveal>
    </section>
  );
};

export default ContestSection;
