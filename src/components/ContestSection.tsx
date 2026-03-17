import { Link } from "react-router-dom";
import SectionReveal from "./animations/SectionReveal";
import ContestFormTrigger from "@/components/ContestFormTrigger";

const howToEnter = [
  "Fill out the application form (~10 minutes)",
  "Tell us about your business and what you need",
  "We'll pick the winner based on case study potential",
];

const whatYouWin = [
  "Custom 3–5 page React website",
  "AI-drafted copy, human-refined",
  "Mobile-responsive design",
  "GitHub Pages hosting (free forever)",
  "2 rounds of revisions",
  "10 business day delivery",
];

const contestDetails = [
  { label: "Duration", value: "14 days from launch" },
  { label: "Selection", value: "Based on case study potential & community impact" },
  { label: "Requirement", value: "Winner agrees to let us document the process" },
  { label: "Prize value", value: "$750 CAD" },
];

const ContestSection = () => {
  return (
    <section id="contest" className="bg-primary py-24 px-6">
      <SectionReveal className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-headline text-primary-foreground mb-4">
            Win a Starter Website Package
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            We're giving away a complete Starter website package to one deserving small business or non-profit.
            This isn't a random draw — it's an application.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {/* How to Enter */}
          <div className="bg-black/15 rounded-2xl p-6 border-t-4 border-t-[#2DD4BF]">
            <h3 className="font-heading font-bold text-primary-foreground text-lg mb-4">
              How to Enter
            </h3>
            <ul className="space-y-3">
              {howToEnter.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-primary-foreground/80">
                  <span className="font-mono font-bold text-[#2DD4BF] shrink-0">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Win */}
          <div className="bg-black/15 rounded-2xl p-6 border-t-4 border-t-[#ed4c96]">
            <h3 className="font-heading font-bold text-primary-foreground text-lg mb-4">
              What You Win
            </h3>
            <ul className="space-y-2">
              {whatYouWin.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <span className="text-[#ed4c96] shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contest Details */}
          <div className="bg-black/15 rounded-2xl p-6 border-t-4 border-t-[#fde065]">
            <h3 className="font-heading font-bold text-primary-foreground text-lg mb-4">
              Contest Details
            </h3>
            <ul className="space-y-3">
              {contestDetails.map((d) => (
                <li key={d.label} className="text-sm text-primary-foreground/80">
                  <span className="font-semibold text-primary-foreground block">{d.label}</span>
                  {d.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <ContestFormTrigger className="inline-block bg-primary-foreground text-primary font-heading font-bold px-10 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300 text-lg">
            Apply Now — It's Free →
          </ContestFormTrigger>

          <p className="mt-4 text-sm text-primary-foreground/60">
            By entering, you agree to the{" "}
            <Link
              to="/contest-rules"
              className="underline hover:text-primary-foreground/90 transition-colors"
            >
              Official Contest Rules
            </Link>
            .
          </p>
        </div>
      </SectionReveal>
    </section>
  );
};

export default ContestSection;
