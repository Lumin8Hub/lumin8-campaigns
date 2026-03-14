const footerLinks = [
  { label: "Home", href: "https://lumin8.agency" },
  { label: "Services", href: "https://lumin8.agency/services" },
  { label: "Portfolio", href: "https://lumin8.agency/portfolio" },
  { label: "Contact", href: "https://lumin8.agency/contact" },
  { label: "Starter Tier", href: "#" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/lumin8-digital-agency" },
  { label: "Instagram", href: "https://instagram.com/lumin8.agency" },
  { label: "Facebook", href: "https://facebook.com/lumin8digitalagency" },
];

import lumin8Logo from "@/assets/lumin8-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-foreground/[0.06] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Col 1 */}
        <div>
          <img src={lumin8Logo} alt="LUMIN8" className="h-10 w-auto" />
          <p className="text-lumin8-gray-400 text-sm mt-3 font-serif italic">
            There's light at the end of the funnel.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-lumin8-gray-400 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-foreground/70 text-sm hover:-translate-y-px transition-transform duration-200 inline-block">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-lumin8-gray-400 mb-4">Connect</h4>
          <ul className="space-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-foreground/70 text-sm hover:-translate-y-px transition-transform duration-200 inline-block">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-lumin8-gray-400 mb-4">Contact</h4>
          <a href="mailto:hello@lumin8.agency" className="text-foreground/70 text-sm block mb-2 hover:-translate-y-px transition-transform duration-200">
            hello@lumin8.agency
          </a>
          <a href="https://lumin8.agency" target="_blank" rel="noopener noreferrer" className="text-foreground/70 text-sm hover:-translate-y-px transition-transform duration-200">
            lumin8.agency
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-foreground/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-lumin8-gray-400">
          ©2026 LUMIN8. COPYRIGHTS AND RESERVED. | TERMS & CONDITIONS | PRIVACY POLICY
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lumin8-green animate-pulse" />
          <span className="font-mono text-xs text-lumin8-gray-400">All systems operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
