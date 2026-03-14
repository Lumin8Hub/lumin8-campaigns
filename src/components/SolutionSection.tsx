import { Target, Sparkles, Shield } from "lucide-react";
import { useScrollAnimation, useCardStagger } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Target,
    title: "Real Strategy, Not Templates",
    description: "Every Starter site is built by the same strategists who manage $10K/month campaigns. You get a real marketing team thinking about your business — not an algorithm picking a template.",
  },
  {
    icon: Sparkles,
    title: "AI-Accelerated, Human-Refined",
    description: "We leverage cutting-edge AI tools to draft your content and build your site in days, not months. Then our team reviews every pixel, every word, every interaction to make sure it's right.",
  },
  {
    icon: Shield,
    title: "Enterprise Hosting, Zero Monthly Fees",
    description: "Your site runs on the same CDN infrastructure used by Fortune 500 companies — GitHub Pages + Cloudflare. No $30/month hosting bills. No surprise charges. Ever.",
  },
];

const SolutionSection = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useCardStagger(".solution-card");

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} id="solution" className="bg-lumin8-off-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-headline text-lumin8-black mx-auto">
          Agency quality. Startup-friendly pricing.
        </h2>
        <p className="section-subheadline mx-auto text-center text-lumin8-gray-600">
          We use AI to move fast and keep costs low — but every site is reviewed and polished by our team of marketing professionals.
        </p>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="solution-card stagger-card bg-foreground rounded-2xl p-8 text-left shadow-sm border border-lumin8-black/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-lumin8-black mb-3">{f.title}</h3>
              <p className="text-lumin8-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
