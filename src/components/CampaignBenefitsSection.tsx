import {
  BadgeDollarSign,
  Clock3,
  HandCoins,
  KeyRound,
  Search,
  UsersRound,
} from "lucide-react";
import SectionReveal from "./animations/SectionReveal";

const benefits = [
  {
    icon: Search,
    heading: "Be findable when voters search",
    text: "Give voters, reporters, donors, and endorsers one clear place to learn who you are and what you stand for.",
  },
  {
    icon: UsersRound,
    heading: "Capture volunteer energy",
    text: "Make it easy for supporters to raise their hand, share their contact info, and join the campaign before momentum cools.",
  },
  {
    icon: HandCoins,
    heading: "Create a cleaner donation path",
    text: "Guide contributors with donation language, donor-information fields, and compliance-aware prompts.",
  },
  {
    icon: Clock3,
    heading: "Launch in 3 business days",
    text: "Once your intake is complete, we build from a focused campaign framework and get your site ready fast.",
  },
  {
    icon: BadgeDollarSign,
    heading: "$1,000 CAD flat package",
    text: "No open-ended hourly billing. You know the core website cost before the work begins.",
  },
  {
    icon: KeyRound,
    heading: "100% yours",
    text: "Your domain, your content, and your data stay with your campaign after launch.",
  },
];

const CampaignBenefitsSection = () => {
  return (
    <section id="benefits" className="bg-lumin8-off-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="section-label">What Your Website Does</span>
          <h2 className="section-headline max-w-3xl text-foreground">
            A campaign website should turn attention into action.
          </h2>
          <p className="section-subheadline mb-12">
            The essentials are simple: help people find you, understand you,
            trust you, and take the next step.
          </p>
        </SectionReveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <SectionReveal key={benefit.heading} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-foreground/10 bg-background p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                  {benefit.heading}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {benefit.text}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignBenefitsSection;
