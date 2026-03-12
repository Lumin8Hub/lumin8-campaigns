import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CONTEST_FORM_URL = "#contest"; // PLACEHOLDER

const prizeItems = [
  "Custom 3–5 page React website",
  "SEO Foundation Package",
  "Google Analytics & conversion tracking",
  "Google Business Profile setup",
  "Lead capture + HubSpot CRM integration",
  "Branded email setup",
  "Brand Starter Kit (logo, colors, typography, Canva kit)",
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
          Win a complete Starter Tier package.
        </h2>
        <h2 className="section-headline text-primary-foreground mb-8">Valued at $1,400.</h2>

        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          We're giving away a full "Brand New Business" package to one deserving small business or non-profit. This includes a custom-built website, SEO foundation, analytics, lead capture, branded email, AND a complete brand starter kit.
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
          className="inline-block bg-primary-foreground text-primary font-heading font-bold px-10 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300 text-lg mb-6"
        >
          Apply Now — It's Free →
        </a>

        <p className="text-primary-foreground/60 text-sm max-w-xl mx-auto">
          Not the winner? Every applicant receives an exclusive $500 discount on any Starter Tier package — that's $500 for a Launch Ready setup. Only available through this contest.
        </p>
      </div>
    </section>
  );
};

export default ContestSection;
