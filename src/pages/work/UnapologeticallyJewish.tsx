import { Globe, Megaphone, Shield, Smartphone, Users, Wrench } from "lucide-react";
import CaseStudyLayout from "@/components/casestudy/CaseStudyLayout";
import BrowserMockup from "@/components/casestudy/BrowserMockup";
import StatsBar from "@/components/casestudy/StatsBar";
import FeatureGrid from "@/components/casestudy/FeatureGrid";
import Timeline from "@/components/casestudy/Timeline";
import TestimonialBand from "@/components/casestudy/TestimonialBand";
import ProseSection from "@/components/casestudy/ProseSection";
import PullQuote from "@/components/casestudy/PullQuote";
import SectionReveal from "@/components/animations/SectionReveal";

const ACCENT = "#79CAC1";
const ACCENT_DARK = "#0D0D0D";

const stats = [
  { value: "10", label: "Days to launch" },
  { value: "5x", label: "Engagement increase" },
  { value: "100%", label: "Mobile responsive" },
  { value: "24/7", label: "Always online" },
];

const features = [
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Fighter's Voice & Media Hub",
    description:
      "Matt's brand language front and centre — video embeds from CPAC appearances, X clips, and National Post op-eds surfaced in one scroll.",
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Action Toolkit",
    description:
      "Click-and-send email campaigns targeting RCMP and politicians, Donorbox fundraising, Eventbrite event flows, and Tally intake forms — all one tap away.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community Mobilization Hub",
    description:
      "Event listings, legal-push sign-ups, and rapid-response callouts that turn followers into foot soldiers when the next crisis hits.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Secure & Lightning-Fast",
    description:
      "Static React build with zero server dependencies. No databases to breach, no downtime to exploit. The site stays up when it matters most.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "SEO & Organic Reach",
    description:
      "Search-optimized so allies — and critics — discover the uncomfortable truths Matt publishes. Every page structured for Google visibility.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile-First Merch & Pride",
    description:
      "Shopify storefront integration with seamless redirects. Supporters grab UJ merch on their phones between scrolling Matt's latest posts.",
  },
];

const timeline = [
  {
    phase: "Phase 1 — Discovery",
    title: "Understanding the Fighter",
    description:
      "Deep dive into Matt's world: his X presence, CPAC clips, police-accountability campaigns, and the Known to the Police project. We mapped every action a visitor should take.",
  },
  {
    phase: "Phase 2 — Design Sprint",
    title: "Brutalism With a Purpose",
    description:
      "Red, black, white. Oswald uppercase. No soft edges. We designed a visual system that mirrors Matt's personality — every screen reviewed over WhatsApp while Matt was in Israel.",
  },
  {
    phase: "Phase 3 — Build & Iterate",
    title: "Rapid Cycles, Real Activist",
    description:
      "Matt hunts, travels, and battles community in-fighting simultaneously. We shipped working builds daily so he could review between flights and court dates. Flexibility was non-negotiable.",
  },
  {
    phase: "Phase 4 — Launch",
    title: "Live in 10 Days",
    description:
      "Two revision rounds, Lighthouse performance sweep, and deployment. The site launched to immediate community traction and Matt's trademark X announcement.",
  },
];

const UnapologeticallyJewish = () => (
  <CaseStudyLayout accentColor={ACCENT}>
    {/* Hero */}
    <section className="px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div
            className="text-xs font-mono uppercase tracking-wider mb-4"
            style={{ color: ACCENT }}
          >
            Case Study
          </div>
          <h1
            className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight tracking-tight text-white"
          >
            Unapologetically Jewish: A Digital Weapon for a Fighter Who Demands Change
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-body">
            Matt Taub doesn't ask for permission. When antisemitism surged across Toronto,
            he built a movement on X, CPAC, and the streets. We gave that movement a digital
            home as uncompromising as the man behind it.
          </p>
        </SectionReveal>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-8">
          {["Activist Platform", "Brutalist Design", "Rapid Deployment", "Action Toolkit"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1.5 rounded-full border"
              style={{ borderColor: `${ACCENT}40`, color: ACCENT }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Browser Mockup */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal delay={0.2}>
          <BrowserMockup url="unapologeticallyjewish.com" accentColor={ACCENT}>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            >
              <source src={`${import.meta.env.BASE_URL}videos/uj-scroll.mp4`} type="video/mp4" />
            </video>
            {/* Fallback if video fails to load */}
            <div
              className="absolute inset-0 items-center justify-center bg-black/40"
              style={{ display: "none" }}
            >
              <div className="text-center px-8">
                <div
                  className="text-5xl md:text-7xl font-heading font-bold mb-4 opacity-30"
                  style={{ color: ACCENT }}
                >
                  UJ
                </div>
                <div className="text-sm text-white/30 font-mono uppercase tracking-widest">
                  Proud · Bold · Together
                </div>
              </div>
            </div>
          </BrowserMockup>
        </SectionReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <StatsBar stats={stats} accentColor={ACCENT} />
      </div>
    </section>

    {/* Meet the Fighter */}
    <ProseSection
      label="Meet the Fighter"
      heading="Matt Taub — The Man Behind the Movement"
      paragraphs={[
        "Matt Taub is not a committee. He's not a federation. He's a Toronto father and entrepreneur who decided that polite advocacy was a losing strategy. When antisemitic incidents exploded after October 7, Matt didn't wait for institutional permission — he grabbed a camera, opened X, and started fighting.",
        "His targets are specific: police catch-and-release of hate-crime suspects, doxxing websites that publish Jewish home addresses, and community organizations too timid to name the problem. His tools are blunt — email blitzes to RCMP leadership and politicians, legal pushes to de-platform doxxing sites, viral video confrontations, and op-eds in the National Post.",
        "He founded Known to the Police to track repeat antisemitic offenders that the justice system releases. He's appeared on CPAC, debated critics on live radio, and organized rallies that fill city squares. Unapologetically Jewish is the digital centre of gravity for all of it.",
      ]}
      labelColor={ACCENT}
    />

    {/* Pull Quote */}
    <section className="px-6 pb-12">
      <div className="max-w-5xl mx-auto">
        <PullQuote
          quote="I'm not waiting for permission. The Jewish community has been polite for too long."
          attribution="Matt Taub, Founder"
          borderColor={ACCENT}
          attributionColor={ACCENT}
        />
      </div>
    </section>

    {/* The Challenge */}
    <ProseSection
      label="The Challenge"
      heading="Post-October 7 Toronto: A City Failing Its Jews"
      paragraphs={[
        "After October 7, Toronto became ground zero for open antisemitism in Canada. Hate incidents surged. Protesters blockaded synagogues. Jewish businesses were vandalized. Doxxing sites published home addresses of community members. Police arrested suspects and released them within hours.",
        "Existing community organizations issued carefully worded statements and formed committees. Matt Taub threw his phone against the wall and started recording. He needed a digital hub as bold as his X rants — a central platform that could aggregate his campaigns, drive real political pressure, and mobilize a community tired of being told to wait.",
        "The challenge was clear: build something fast, build it loud, and build it to withstand the scrutiny that comes when you refuse to be polite.",
      ]}
      labelColor={ACCENT}
    />

    {/* The Solution */}
    <ProseSection
      label="The Solution"
      heading="The Brutalist Solution: A Site That Hits Like His Videos"
      paragraphs={[
        "We built a website that is a visual mirror of Matt Taub's personality. Stark red on black. Oswald uppercase headlines that feel like they're yelling at you — because they are. No corporate gloss, no stock photography, no committee-approved softness.",
        "High-contrast CTAs drive real action: email your MP, donate to the legal fund, sign the petition, show up at the rally. Every page is built to convert passive scrollers into active participants. The Shopify merch store is one tap away. Donorbox and Tally forms are embedded inline. Eventbrite flows handle registration without leaving the site.",
        "The result is a digital command centre for an activist who operates at the speed of outrage — and a design system bold enough to match.",
      ]}
      labelColor={ACCENT}
    />

    {/* Features */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-2xl font-heading font-bold mb-8 text-white">
            What We Delivered
          </h2>
        </SectionReveal>
        <FeatureGrid features={features} accentColor={ACCENT} />
      </div>
    </section>

    {/* Testimonial */}
    <section className="mx-6 rounded-xl mb-20 overflow-hidden">
      <TestimonialBand
        quote="Lumin8 didn't flinch. They understood the assignment — build something that fights as hard as I do. This isn't a website. It's a weapon."
        author="Matt Taub"
        role="Founder, Unapologetically Jewish"
        accentColor="#fff"
        background={`linear-gradient(135deg, ${ACCENT_DARK}, #1a3a36)`}
      />
    </section>

    {/* Timeline */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-2xl font-heading font-bold mb-10 text-white">
            Project Timeline
          </h2>
        </SectionReveal>
        <Timeline steps={timeline} accentColor={ACCENT} />
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto text-center">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
            Ready to Stand Unapologetically?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Matt Taub trusted us with his fight — who's next? Starting at $750 CAD.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-8 py-3 rounded-full transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: ACCENT, color: ACCENT_DARK }}
          >
            View Packages →
          </a>
        </SectionReveal>
      </div>
    </section>
  </CaseStudyLayout>
);

export default UnapologeticallyJewish;
