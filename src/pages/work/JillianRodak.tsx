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
  { value: "$100", label: "Total Project Cost" },
  { value: "8", label: "Weeks, First Contact to Launch" },
  { value: "3", label: "Clients Booked in Week 1" },
  { value: "1", label: "Fully Independent Owner" },
];

const discoveryFeatures = [
  {
    icon: <span className="text-lg">🧭</span>,
    title: "Personal Brand Strategy",
    description:
      "Jillian was considering launching under 'JR Career Studio' — a separate brand name. Lumin8 advised against it: as a solo practitioner, building a personal brand under her own name (jillianrodak.com) would be more authentic, more discoverable, and wouldn't require the overhead of brand-building for a fictional entity. This simple strategic decision saved time, money, and confusion.",
  },
  {
    icon: <span className="text-lg">🔍</span>,
    title: "Competitor & Design Research",
    description:
      "Rather than asking Jillian to describe her ideal design in the abstract, Lumin8 pointed her to Dribbble for professional design inspiration and conducted competitor research across real coaching websites (maryblalock.com, shereenhoban.com, luisazhou.com, melrobbins.com). Jillian identified two sites she liked, and those became the concrete design references — making the creative brief tangible, not theoretical.",
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
    phase: "Nov 4",
    title: "First Draft in Hours",
    description:
      "Dan generated an initial site mockup using AI tools and deployed it to a GitHub Pages staging URL (flattorama.github.io/jillianrodak) within hours of receiving Jillian's copy. The design direction was guided by competitor examples Jillian had selected from Dribbble, not abstract wireframes.",
  },
  {
    phase: "Nov 26",
    title: "Design Pivot",
    description:
      "Jillian reviewed the second major iteration and gave honest feedback: \"Tbh I don't love the feel of this.\" Rather than push the existing direction, Lumin8 pivoted — researching real coaching websites as new references. Within two hours, a new version was live, drawing heavily from shereenhoban.com. Jillian's response: \"Definitely more in line with what I'm hoping for!\"",
  },
  {
    phase: "Nov–Dec",
    title: "Ruttl Feedback Loop",
    description:
      "Lumin8 introduced Ruttl — a visual feedback tool that lets clients leave comments directly on the live site. Jillian and her partner Shane used it to provide detailed copy and design feedback across multiple rounds. Lumin8 compiled all comments into a shared Google Sheet for tracking, resolved each one, and published updated versions.",
  },
  {
    phase: "Dec 17",
    title: "V2 — Copy, Layout & Photo Styling",
    description:
      "All of Jillian's Ruttl feedback was implemented in a single pass. Dan experimented with photo frame treatments (oval, faded, rectangular) and presented layout options for Jillian to choose between. The contact form was configured to route to her new professional email.",
  },
  {
    phase: "Dec 29–31",
    title: "Google Workspace & Final Polish",
    description:
      "A live screen-share session configured Google Workspace, DNS records, and domain email. Shane's final copy edits arrived via Ruttl. Dan presented two layout options for the story section; Jillian picked Layout 2. The site was finalized on New Year's Eve.",
  },
  {
    phase: "Jan 2",
    title: "Launch & Payment",
    description:
      "Total project cost: $100. Jillian received step-by-step instructions to create GitHub and Replit accounts for site ownership transfer.",
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
      "On a Sunday afternoon, Dan walked Jillian through using Replit's AI agent to make changes to her own site. The concept is simple: describe what you want in plain English, and the AI builds it. No code knowledge required. Jillian made her first independent change that same day.",
  },
  {
    icon: <span className="text-lg">🚀</span>,
    title: "Independent Launch Momentum",
    description:
      "Within one week of taking ownership, Jillian had independently added a full testimonial section, implemented a mobile swipeable carousel (following Dan's coaching on how to prompt the AI), booked three consultation meetings, and converted her first paying client. She later used Replit to identify her site's fonts for designing matching business cards — without asking Lumin8 for help.",
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
              From "Totally Lost" to{" "}
              <em style={{ color: P.primary }}>Fully Empowered</em>
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
              How Lumin8 helped a career coach launch her professional website
              for $100, then handed her the keys to manage it herself using
              AI-powered vibe coding tools.
            </p>
          </SectionReveal>

          {/* Tags */}
          <SectionReveal delay={0.5}>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Personal Brand",
                "Solopreneur",
                "AI Handoff",
                "$100 Budget",
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
          "Jillian Rodak is a career strategist and professional coach based in the Greater Toronto Area. After years working in human resources and career development, she was ready to launch her own coaching practice — helping professionals navigate pivotal career transitions, prepare for interviews, and build compelling resumes and cover letters.",
          'Jillian knew she needed a website. But as she put it: she hadn\'t built one "since WordPress in 2010." She didn\'t have a brand identity, hadn\'t bought a domain, wasn\'t sure what platform to use, and had a modest budget. She reached out to Dan at Lumin8 with a simple question: where do I even start?',
        ]}
      />

      <GradientDivider />

      {/* ── The Challenge ────────────────────────────── */}
      <ProseSection
        label="THE CHALLENGE"
        heading="More Than a Build — A Business Launch"
        labelColor={P.primaryLight}
        labelFont={FONT_DISPLAY}
        headingFont={FONT_DISPLAY}
        mutedColor={P.textMuted}
        bgColor={P.gradientFrom}
        paragraphs={[
          "Jillian's challenge wasn't just technical — it was existential. She wasn't looking to refresh an existing website. She was launching a business from scratch, part-time, while working a full-time job and raising young children. Every decision — from domain name to design direction to copy tone — needed to be made for the first time.",
          "The budget was tight: roughly $100 for the entire project. The timeline was flexible but fragile — Jillian had limited evening hours to dedicate to \"business building\" tasks, and without momentum, projects like these tend to stall. Lumin8 needed to deliver a professional result at an accessible price point, but equally important was ensuring Jillian could own and evolve the site independently after handoff. A beautiful website she couldn't touch would be a dead end.",
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
              Before a single line of code was written, Lumin8 spent weeks in a
              strategic consulting role — helping Jillian make foundational
              decisions that would shape her entire business presence.
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
              Designed by Committee of Two, Built by AI
            </h2>
            <p
              className="leading-relaxed max-w-3xl mb-12"
              style={{ color: P.textMuted }}
            >
              The build process was deliberately informal and asynchronous —
              driven by WhatsApp messages, Ruttl feedback sessions, and quick
              layout options shared as screenshots. Lumin8 used AI coding tools
              to generate the site, then iterated based on Jillian's visual
              preferences and copy feedback.
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
        quote="Thank you for everything. I couldn't have done this without you, truly! I'm so happy with it."
        author="Jillian Rodak"
        role="Career Strategist & Professional Coach"
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
              For most agencies, launch day is the end of the story. For
              Lumin8's Starter Tier, it's the beginning of the client's
              independence. The entire Starter model is designed around a
              handoff: we build it, you own it, and you learn to evolve it
              yourself.
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
              From Side Project to Paying Practice
            </h2>
            <div className="space-y-5 max-w-3xl">
              <p className="leading-relaxed" style={{ color: P.textMuted }}>
                Within days of the site going live, Jillian was receiving
                compliments on the website from colleagues and prospects. She
                booked three consultations in her first week — one of whom
                became a paying client immediately. She independently added
                features to the site, designed matching business cards, and
                began building a professional digital presence that she fully
                controlled.
              </p>
              <PullQuote
                quote="I just made my first change all by myself!"
                attribution="Jillian Rodak, one day after ownership transfer"
                borderColor={P.primary}
                bgColor={`${P.primary}08`}
                attributionColor={P.primaryLight}
                font={FONT_DISPLAY}
              />
              <p className="leading-relaxed" style={{ color: P.textMuted }}>
                Weeks after launch, Jillian messaged Dan: "I am getting a
                million compliments on my website. Should we add your name or
                logo to the bottom? I feel like we should." The Lumin8 logo now
                sits in the footer of jillianrodak.com — placed there by the
                client, not the agency.
              </p>
              <PullQuote
                quote="I do feel so empowered! And so happy I won't have to bug you until I've tried and failed a few times."
                attribution="Jillian Rodak, after her first solo edit"
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
        heading="The Starter Tier in Action"
        labelColor={P.primaryLight}
        labelFont={FONT_DISPLAY}
        headingFont={FONT_DISPLAY}
        mutedColor={P.textMuted}
        bgColor={P.bgSection}
        paragraphs={[
          "Jillian's project is the blueprint for Lumin8's Starter Tier. It demonstrates every principle the tier is built on: agency-quality results at an accessible price point, AI-accelerated development that compresses weeks into hours, visual feedback tools that make iteration feel effortless for non-technical clients, and a deliberate handoff process that creates independent owners — not permanent dependents.",
          "For solopreneurs and small business owners launching their first professional website, this is what the process looks like: you bring the vision and the content, we bring the strategy, the design eye, the AI tools, and the teaching. And when we're done, it's yours.",
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
              Ready to Launch Your Website?
            </h2>
            <p
              className="max-w-[500px] mx-auto mb-8 leading-relaxed"
              style={{ color: P.textMuted }}
            >
              Professional website. Personal brand strategy. AI-powered tools
              you can manage yourself. Starting at $750.
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
