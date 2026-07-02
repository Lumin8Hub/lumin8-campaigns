import lumin8Logo from "@/assets/lumin8-logo.png";

const CandidatesFooter = () => {
  return (
    <footer className="bg-background border-t border-foreground/[0.06] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <a href="https://lumin8.agency" target="_blank" rel="noopener noreferrer">
            <img src={lumin8Logo} alt="LUMIN8" className="h-10 w-auto" />
          </a>
          <p className="text-lumin8-gray-400 text-sm mt-3 font-serif italic">
            There's light at the end of the funnel.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-lumin8-gray-400 mb-4">
            Contact
          </h4>
          <a
            href="mailto:hello@lumin8.agency"
            className="text-foreground/70 text-sm block mb-2 hover:-translate-y-px transition-transform duration-200"
          >
            hello@lumin8.agency
          </a>
          <a
            href="https://lumin8.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 text-sm hover:-translate-y-px transition-transform duration-200"
          >
            lumin8.agency
          </a>
        </div>

        {/* Proof */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-lumin8-gray-400 mb-4">
            Live campaign work
          </h4>
          <a
            href="https://dorit4trustee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 text-sm hover:-translate-y-px transition-transform duration-200"
          >
            dorit4trustee.com
          </a>
        </div>
      </div>

      {/*
        TODO (CASL): add full legal name, mailing address, phone, and an
        unsubscribe/contact-preferences link before this page is used as a
        cold-email landing target.
      */}

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-foreground/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-lumin8-gray-400">
          ©2026 LUMIN8. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-xs text-lumin8-gray-400">
          LUMIN8 FOR CANDIDATES · CAMPAIGNS.LUMIN8.AGENCY
        </p>
      </div>
    </footer>
  );
};

export default CandidatesFooter;
