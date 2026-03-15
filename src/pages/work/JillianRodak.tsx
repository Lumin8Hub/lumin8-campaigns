import { useEffect } from "react";
import CaseStudyLayout from "@/components/casestudy/CaseStudyLayout";
import BrowserMockup from "@/components/casestudy/BrowserMockup";
import StatsBar from "@/components/casestudy/StatsBar";
import FeatureGrid from "@/components/casestudy/FeatureGrid";
import Timeline from "@/components/casestudy/Timeline";
import TestimonialBand from "@/components/casestudy/TestimonialBand";
import ProseSection from "@/components/casestudy/ProseSection";
import PullQuote from "@/components/casestudy/PullQuote";
import SectionReveal from "@/components/animations/SectionReveal";

// ─── Palette ────────────────────────────────────────────
const P = {
  primary: "#C07D2B",
  primaryLight: "#D4973F",
  primaryDark: "#9A6420",
  accent: "#2C2C2C",
  cream: "#FAF7F2",
  gradientFrom: "#0a0a0a",
  gradientTo: "#1a1208",
  bgSection: "#0e0c08",
  bgCard: "#171310",
  border: "rgba(192,125,43,0.15)",
  borderHover: "rgba(192,125,43,0.4)",
  textMuted: "#a89880",
  glow: "rgba(192,125,43,0.08)",
};

const FONT_DISPLAY = "'Playfair Display', Georgia, serif";

// ─── Data ───────────────────────────────────────────────
const stats = [
  { value: "1", label: "Solopreneur Launched" },
  { value: "3", label: "Clients Booked in Week 1" },
  { value: "0", label: "Ongoing Agency Dependency" },
  { value: "100%", label: "Client-Owned & Managed" },
];

const discoveryFeatures = [
  {
    icon: <span className="text-lg">🧭</span>,
    title: "Personal Brand Strategy",
    description:
      "Jillian was weighing whether to launch under a studio brand name or her own identity. Lumin8 recommended building under jillianrodak.com — as a solo practitioner, a personal brand would be more authentic, more discoverable, and wouldn't require the overhead of building recognition for a separate entity. A simple strategic call that set the right foundation from day one.",
  },
  {
    icon: <span className="text-lg">🔍</span>,
    title: "Competitor & Design Research",
    description:
      "Rather than working from abstract descriptions, Lumin8 guided Jillian through real-world design inspiration — pointing her to curated examples on Dribbble and conducting competitor research across established coaching websites. Jillian identified two sites that matched her aesthetic, and those became the concrete design references. The creative direction was grounded in what she responded to, not what the agency assumed.",
  },
  {
    icon: <span className="text-lg">📧</span>,
    title: "Professional Email Setup",
    description:
      "Lumin8 helped Jillian set up Google Workspace so she could use a professional email address (careerstudio@jillianrodak.com) instead of a personal Gmail. This included a live screen-share session to configure DNS records, MX records, and domain verification in Bluehost — technical work that Jillian couldn't have done alone.",
  },
  {
    icon: <span className="text-lg">🌐</span>,
    title: "Domain Registration & Hosting",
    description:
      "Lumin8 secured the jillianrodak.com domain and initially hosted it on their own infrastructure — removing the burden of hosting costs and technical management during the launch phase. This let Jillian focus on content and design without worrying about servers.",
  },
];

const buildTimeline = [
  {
    phase: "Kickoff",
    title: "First Draft, Same Day",
    description:
      "Lumin8 generated an initial site mockup using AI development tools and deployed it to a staging URL within hours of receiving Jillian's content brief. The design was guided by the competitor examples she had selected — not abstract wireframes.",
  },
  {
    phase: "Iteration",
    title: "Honest Feedback, Fast Pivots",
    description:
      "When the first design direction didn't feel right, Jillian said so — and Lumin8 pivoted immediately. New coaching-industry references were researched, a fresh direction was established, and an updated version was live within two hours. The process rewarded honesty, not politeness.",
  },
  {
    phase: "Feedback",
    title: "Visual Commenting on the Live Site",
    description:
      "Jillian and her partner used a visual feedback tool to leave comments directly on the site itself — clicking on a headline, a photo, a section, and typing exactly what they wanted. Lumin8 compiled all feedback, resolved each comment, and published updated versions. Multiple rounds of refinement happened without a single formal meeting.",
  },
  {
    phase: "Polish",
    title: "Copy, Layout Options & Photo Styling",
    description:
      "Lumin8 presented layout alternatives as side-by-side screenshots for quick client decisions. Photo frame treatments were tested and iterated based on Jillian's preferences. The contact form was configured to route to her new professional domain email.",
  },
  {
    phase: "Config",
    title: "Professional Email & Domain Setup",
    description:
      "A live screen-share session configured Google Workspace, DNS records, and domain email — technical infrastructure that Jillian needed but shouldn't have had to figure out alone. The result: a professional email address on her own domain, ready for client communication.",
  },
  {
    phase: "Launch",
    title: "Live & Ready for Clients",
    description:
      "The site launched with all content finalized, contact forms active, and Calendly integration in place. Jillian was immediately ready to start booking consultations.",
  },
];

const empowermentFeatures = [
  {
    icon: <span className="text-lg">🔑</span>,
    title: "Ownership Transfer",
    description:
      "Lumin8 created step-by-step instructions for Jillian to set up GitHub (the vault where her site files live) and Replit (the AI-powered editor). Once her accounts were ready, the full codebase was transferred — giving Jillian complete ownership of her website, no ongoing dependency on Lumin8 required.",
  },
  {
    icon: <span className="text-lg">🤖</span>,
    title: "Vibe Coding Training",
    description:
      "Lumin8 walked Jillian through the AI-powered editing environment in a single session. The concept: describe what you want in plain English, and the AI implements it. Want to add a testimonial section? Just tell it. Want a mobile carousel? Describe the behavior. Jillian made her first independent change the same day she received access.",
  },
  {
    icon: <span className="text-lg">🚀</span>,
    title: "Independent Launch Momentum",
    description:
      "Within one week of taking ownership, Jillian had independently added a full testimonial section to her site, implemented a mobile-friendly swipeable carousel, booked three consultation meetings, and converted her first paying client. Weeks later, she used the AI editor to identify her site's font families for designing matching business cards — without asking Lumin8 for help.",
  },
];

// ─── Local decorative components ────────────────────────
const GradientDivider = () => (
  <div className="max-w-5xl mx-auto px-6">
    <div
      className="h-px w-full"
      style={{
        background: `linear-gradient(90deg, ${P.primaryDark}, ${P.primary}, transparent)`,
      }}
    />
  </div>
);

// ─── Component ──────────────────────────────────────────
const JillianRodak = () => {
  // Conditional Playfair Display loading
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <CaseStudyLayout accentColor={P.primary} bgColor={P.gradientFrom}>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        className="relative px-6 pb-24"
        style={{
          background: `linear-gradient(165deg, ${P.gradientFrom} 0%, ${P.gradientTo} 50%, ${P.bgSection} 100%)`,
        }}
      >
        {/* Warm noise texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Soft radial amber glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 80% 70%, ${P.primary}15, transparent 70%)`,
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: `linear-gradient(to bottom, transparent, ${P.bgSection})`,
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <SectionReveal>
            <div
              className="text-[11px] font-semibold uppercase tracking-[3px] mb-4"
              style={{ color: P.primaryLight, fontFamily: FONT_DISPLAY }}
            >
              Case Study
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <h1
              className="font-bold mb-6 leading-tight"
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                letterSpacing: "-0.3px",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              A Career Coach's Website,
              <br />
              <em style={{ color: P.primary }}>Built to Hand Over</em>
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <p
              className="max-w-[600px] leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.05rem",
                fontWeight: 300,
              }}
            >
              How Lumin8 guided an independent career strategist from first
              concept to live website — then transferred full ownership so she
              could evolve it on her own terms.
            </p>
          </SectionReveal>

          {/* Tags */}
          <SectionReveal delay={0.5}>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Personal Brand",
                "Solopreneur",
                "AI Handoff",
                "Full Ownership",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: P.border,
                    color: P.primaryLight,
                    fontFamily: FONT_DISPLAY,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section className="px-6 -mt-12 relative z-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <StatsBar stats={stats} accentColor={P.primary} variant="dark" />
        </div>
      </section>

      <GradientDivider />

      {/* ── The Client ───────────────────────────────── */}
      <ProseSection
        label="THE CLIENT"
        heading="A Career Coach Ready to Launch"
        labelColor={P.primaryLight}
        labelFont={FONT_DISPLAY}
        headingFont={FONT_DISPLAY}
        mutedColor={P.textMuted}
        bgColor={P.bgSection}
        paragraphs={[
          "Jillian Rodak is a career strategist and professional coach based in the Greater Toronto Area. After years in career development, she was ready to launch her own coaching practice — helping professionals navigate pivotal career transitions, prepare for interviews, and build compelling resumes and cover letters.",
          "Jillian had the expertise, the client pipeline starting to form, and the drive to build something of her own. What she needed was a partner who could translate her vision into a professional digital presence — quickly, affordably, and without locking her into an ongoing dependency on an agency to make every future update.",
        ]}
      />

      <GradientDivider />

      {/* ── The Challenge ────────────────────────────── */}
      <ProseSection
        label="THE CHALLENGE"
        heading="Building a Practice, Not Just a Page"
        labelColor={P.primaryLight}
        labelFont={FONT_DISPLAY}
        headingFont={FONT_DISPLAY}
        mutedColor={P.textMuted}
        bgColor={P.gradientFrom}
        paragraphs={[
          "Jillian wasn't refreshing an existing website — she was launching a business. Every foundational decision still needed to be made: brand positioning, domain name, design direction, copy tone, and the right technology to build on. And as a working professional with a young family, she needed a process that respected her time — no drawn-out discovery phases, no endless revision cycles, no jargon.",
          "Equally important was what came after launch. Jillian wanted to be self-sufficient. A beautiful website she couldn't update herself would become a liability — every small text change or new testimonial would mean going back to an agency and waiting. The right solution needed to be something she could own, understand, and evolve independently.",
        ]}
      />

      {/* ── Browser Mockup ───────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="max-w-[800px] mx-auto">
          <SectionReveal>
            <BrowserMockup
              url="jillianrodak.com"
              accentColor={P.primary}
              frameVariant="light-rounded"
              dotColors={[P.primary, P.textMuted, P.primaryLight]}
              chromeBg={P.cream}
            >
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: P.cream }}
              >
                <div className="text-center px-8">
                  <div
                    className="text-5xl md:text-7xl mb-4 opacity-25"
                    style={{
                      fontFamily: FONT_DISPLAY,
                      color: P.primary,
                      fontWeight: 500,
                    }}
                  >
                    Jillian Rodak
                  </div>
                  <div
                    className="text-sm font-mono opacity-40"
                    style={{ color: P.accent }}
                  >
                    Career Strategist · Professional Coach
                  </div>
                </div>
              </div>
            </BrowserMockup>
          </SectionReveal>
        </div>
      </section>

      <GradientDivider />

      {/* ── Act 1 — Discovery ────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: P.bgSection }}>
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div
              className="text-[11px] font-semibold uppercase tracking-[3px] mb-4"
              style={{ color: P.primaryLight, fontFamily: FONT_DISPLAY }}
            >
              ACT 1 · DISCOVERY
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 500 }}
            >
              Building the Brand Before the Website
            </h2>
            <p
              className="leading-relaxed max-w-3xl mb-12"
              style={{ color: P.textMuted }}
            >
              Before a single line of code was written, Lumin8 worked closely
              with Jillian to make the foundational strategic decisions that
              would shape her entire professional presence.
            </p>
          </SectionReveal>
          <FeatureGrid
            features={discoveryFeatures}
            accentColor={P.primary}
            accentGradient={`linear-gradient(135deg, ${P.primary}, ${P.primaryDark})`}
            cardBg={P.bgCard}
            cardBorder={P.border}
            cardBorderHover={P.borderHover}
            cardGlow={P.glow}
            cardRadius="12px"
          />
        </div>
      </section>

      <GradientDivider />

      {/* ── Act 2 — Build ────────────────────────────── */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: P.gradientFrom }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div
              className="text-[11px] font-semibold uppercase tracking-[3px] mb-4"
              style={{ color: P.primaryLight, fontFamily: FONT_DISPLAY }}
            >
              ACT 2 · BUILD
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 500 }}
            >
              A Responsive, Low-Friction Build Process
            </h2>
            <p
              className="leading-relaxed max-w-3xl mb-4"
              style={{ color: P.textMuted }}
            >
              The build process was designed around Jillian's schedule, not the
              agency's. Communication happened asynchronously over messaging.
              Lumin8 used an intuitive visual feedback tool that let Jillian
              leave comments directly on the live site — clicking on any element
              and typing what she wanted changed. No spreadsheets, no email
              chains, no decoding design jargon.
            </p>
            <p
              className="leading-relaxed max-w-3xl mb-12"
              style={{ color: P.textMuted }}
            >
              Lumin8 used AI-powered development tools to generate and iterate
              on the site rapidly, meaning design pivots that would normally take
              days happened in hours.
            </p>
          </SectionReveal>
          <Timeline
            steps={buildTimeline}
            accentColor={P.primary}
            variant="dots"
            phaseFont={FONT_DISPLAY}
            titleFont={FONT_DISPLAY}
            mutedColor={P.textMuted}
          />
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────── */}
      <TestimonialBand
        quote="I couldn't have done this without you, truly. I'm so happy with it — and of course I will spread the word."
        author="Jillian Rodak"
        role="Career Strategist & Coach, jillianrodak.com"
        accentColor="#fff"
        background={`linear-gradient(135deg, ${P.primary} 0%, ${P.primaryDark} 100%)`}
        quoteFont={FONT_DISPLAY}
        authorFont={FONT_DISPLAY}
      />

      <GradientDivider />

      {/* ── Act 3 — Empowerment ──────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: P.bgSection }}>
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div
              className="text-[11px] font-semibold uppercase tracking-[3px] mb-4"
              style={{ color: P.primaryLight, fontFamily: FONT_DISPLAY }}
            >
              ACT 3 · EMPOWERMENT
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 500 }}
            >
              Handing Over the Keys
            </h2>
            <p
              className="leading-relaxed max-w-3xl mb-12"
              style={{ color: P.textMuted }}
            >
              Most agencies build websites that clients can look at but can't
              touch. Lumin8's Starter Tier is designed differently: every site is
              built to be handed over. The client gets full ownership of the
              codebase, a simple AI-powered editing environment, and a
              walkthrough of how to use it. No ongoing retainer. No
              gatekeeping.
            </p>
          </SectionReveal>
          <FeatureGrid
            features={empowermentFeatures}
            accentColor={P.primary}
            accentGradient={`linear-gradient(135deg, ${P.primary}, ${P.primaryDark})`}
            cardBg={P.bgCard}
            cardBorder={P.border}
            cardBorderHover={P.borderHover}
            cardGlow={P.glow}
            cardRadius="12px"
          />
        </div>
      </section>

      <GradientDivider />

      {/* ── The Results ──────────────────────────────── */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: P.gradientFrom }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div
              className="text-[11px] font-semibold uppercase tracking-[3px] mb-4"
              style={{ color: P.primaryLight, fontFamily: FONT_DISPLAY }}
            >
              THE IMPACT
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-8"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 500 }}
            >
              Launched, Booked, and Fully Independent
            </h2>
            <div className="space-y-5 max-w-3xl">
              <p className="leading-relaxed" style={{ color: P.textMuted }}>
                Within days of the site going live, Jillian was receiving
                unsolicited compliments on the design from colleagues and
                prospective clients. She booked three consultations in her first
                week, one of whom converted to a paying engagement immediately.
              </p>
              <PullQuote
                quote="I just made my first change all by myself!"
                attribution="Jillian, after her first solo edit"
                borderColor={P.primary}
                bgColor={`${P.primary}08`}
                attributionColor={P.primaryLight}
                font={FONT_DISPLAY}
              />
              <p className="leading-relaxed" style={{ color: P.textMuted }}>
                But the real proof of the Starter Tier model wasn't the launch —
                it was what happened after. Jillian independently added new
                sections, refined her mobile experience, extended her brand to
                print materials, and continued evolving the site without any
                agency involvement. When she decided the site deserved a Lumin8
                credit, she added the logo to the footer herself.
              </p>
              <PullQuote
                quote="I do feel so empowered!"
                attribution="Jillian, on taking ownership of her site"
                borderColor={P.primary}
                bgColor={`${P.primary}08`}
                attributionColor={P.primaryLight}
                font={FONT_DISPLAY}
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      <GradientDivider />

      {/* ── The Model ────────────────────────────────── */}
      <ProseSection
        label="THE MODEL"
        heading="What the Starter Tier Looks Like in Practice"
        labelColor={P.primaryLight}
        labelFont={FONT_DISPLAY}
        headingFont={FONT_DISPLAY}
        mutedColor={P.textMuted}
        bgColor={P.bgSection}
        paragraphs={[
          "Jillian's project is a blueprint for Lumin8's Starter Tier. It demonstrates every principle the service is built on: agency-quality design at an accessible price point, AI-accelerated development that compresses timelines without compromising quality, visual feedback tools that make the revision process intuitive for any client, and a deliberate ownership transfer that creates confident independent operators — not permanent agency dependents.",
          "For independent professionals launching their first website, this is what the experience looks like: you bring the vision and the content, we bring the brand strategy, the design expertise, the AI tools, and the teaching. When we're done, the site is yours — and you know how to use it.",
        ]}
      />

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        className="px-6 py-24"
        style={{ backgroundColor: P.gradientFrom }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <SectionReveal>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 500 }}
            >
              Ready to Launch Your Practice Online?
            </h2>
            <p
              className="max-w-[500px] mx-auto mb-8 leading-relaxed"
              style={{ color: P.textMuted }}
            >
              Professional website. Personal brand strategy. Full ownership and
              the tools to manage it yourself.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center gap-2 font-semibold text-sm px-11 py-4 text-white transition-all duration-300 hover:-translate-y-px"
              style={{
                backgroundColor: P.primary,
                borderRadius: "10px",
                fontFamily: FONT_DISPLAY,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  P.primaryLight;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  P.primary;
              }}
            >
              Start Your Project →
            </a>
          </SectionReveal>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default JillianRodak;
