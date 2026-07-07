import SectionReveal from "./animations/SectionReveal";

const benefits = [
  {
    image: "candidates/benefit-search.png",
    alt: "A laptop and phone showing an abstract campaign website layout",
    heading: "Be findable when voters search",
    text: "Give voters, reporters, donors, and endorsers one clear place to learn who you are and what you stand for.",
  },
  {
    image: "candidates/benefit-volunteers.png",
    alt: "A laptop showing an abstract volunteer signup form",
    heading: "Capture volunteer energy",
    text: "Make it easy for supporters to raise their hand, share their contact info, and join the campaign before momentum cools.",
  },
  {
    image: "candidates/benefit-donations.png",
    alt: "A laptop and phone showing an abstract secure contribution flow",
    heading: "Create a cleaner donation path",
    text: "Guide contributors with donation language, donor-information fields, and compliance-aware prompts.",
  },
  {
    image: "candidates/benefit-launch.png",
    alt: "A laptop showing an abstract launch dashboard and timeline",
    heading: "Launch in 3 business days",
    text: "Once your intake is complete, we build from a focused campaign framework and get your site ready fast.",
  },
  {
    image: "candidates/benefit-pricing.png",
    alt: "A tablet and proposal sheet showing abstract pricing cards",
    heading: "Clear campaign pricing",
    text: "Start with a focused package conversation and understand the scope before work begins.",
  },
  {
    image: "candidates/benefit-ownership.png",
    alt: "A laptop showing abstract folder, key, and data ownership visuals",
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
            Turn attention into action
          </h2>
          <p className="section-subheadline mb-12">
            The essentials are simple: help people find you, understand you,
            trust you, and take the next step.
          </p>
        </SectionReveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <SectionReveal key={benefit.heading} delay={index * 0.05}>
              <article className="h-full overflow-hidden rounded-lg border border-foreground/10 bg-background">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={`${import.meta.env.BASE_URL}${benefit.image}`}
                    alt={benefit.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                    {benefit.heading}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {benefit.text}
                  </p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignBenefitsSection;
