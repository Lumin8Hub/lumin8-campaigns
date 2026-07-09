import { Palette, Type, PanelsTopLeft, type LucideIcon } from "lucide-react";

export const candidateDemo = {
  eyebrow: "Try It Live",
  heading: "Don't imagine your website. Play with it.",
  lede: "This is a real, working sample of the campaign sites we build — not a mockup. Use the controls to switch colors, fonts, and layouts and watch the design change instantly. Every option you see here is included in the package.",
  valueParagraph:
    "When you work with Lumin8, this is your starting point — not a blank page. We take a proven site that already handles volunteer sign-ups, compliant donations, and mobile visitors, then shape it around your name, your priorities, and your community, in the languages your voters speak. That's how we launch in days instead of months, at a flat price with no surprises.",
  finePrint:
    "The demo uses a fictional candidate, “Alex Rivera.” Any resemblance to a real campaign is coincidental — yours will be one of a kind.",
  demoUrl: "https://alex.lumin8.agency/",
  widgetScriptUrl: "https://alex.lumin8.agency/widget/campaign-hero-widget.js",
  primaryCta: "Explore the full demo site →",
  secondaryCta: "Get started",
  mobileHint: "On a phone? Open the full demo below to try every option.",
};

export const demoHints: { icon: LucideIcon; heading: string; text: string }[] = [
  {
    icon: Palette,
    heading: "Pick a palette",
    text: "Try Civic Blue or Grassroots Green. Your campaign colors, applied everywhere in one click.",
  },
  {
    icon: Type,
    heading: "Switch the style",
    text: "Flip between fonts and layouts to match your tone: bold and modern, or classic and trusted.",
  },
  {
    icon: PanelsTopLeft,
    heading: "See the whole site",
    text: "This is just the front door. Open the full demo to browse every page — platform, bio, volunteer sign-up, and donations.",
  },
];
