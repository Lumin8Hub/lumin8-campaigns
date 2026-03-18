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
    <section id="contest" className="bg-white py-24 px-6">
      <SectionReveal className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-headline text-lumin8-black mb-4">
            Win a Starter Website Package
          </h2>
          <p className="text-lumin8-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're giving away a complete Starter website package to one deserving small business or non-profit.
            This isn't a random draw — it's an application.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {/* How to Enter */}
          <div className="rounded-xl p-6 border border-foreground/[0.08]" style={{ backgroundColor: "#2DD4BF" }}>
            <h3 className="font-heading font-bold text-lumin8-black text-lg mb-4">
              How to Enter
            </h3>
            <ul className="space-y-3">
              {howToEnter.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-lumin8-black/85">
                  <span className="font-mono font-bold text-lumin8-black shrink-0">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Win */}
          <div className="rounded-xl p-6 border border-foreground/[0.08]" style={{ backgroundColor: "#ed4c96" }}>
            <h3 className="font-heading font-bold text-white text-lg mb-4">
              What You Win
            </h3>
            <ul className="space-y-2">
              {whatYouWin.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                  <span className="text-white shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contest Details */}
          <div className="rounded-xl p-6 border border-foreground/[0.08]" style={{ backgroundColor: "#fde065" }}>
            <h3 className="font-heading font-bold text-lumin8-black text-lg mb-4">
              Contest Details
            </h3>
            <ul className="space-y-3">
              {contestDetails.map((d) => (
                <li key={d.label} className="text-sm text-lumin8-black/85">
                  <span className="font-semibold text-lumin8-black block">{d.label}</span>
                  {d.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <ContestFormTrigger className="inline-block bg-lumin8-black text-white font-heading font-bold px-10 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300 text-lg">
            Apply Now — It's Free →
          </ContestFormTrigger>

          <p className="mt-4 text-sm text-lumin8-gray-600">
            By entering, you agree to the{" "}
            <Link
              to="/contest-rules"
              className="underline hover:text-lumin8-black transition-colors"
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
