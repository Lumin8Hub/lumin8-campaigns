import lumin8Logo from "@/assets/lumin8-logo.png";

const CandidatesFooter = () => {
  return (
    <footer className="border-t border-foreground/10 bg-background px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <a href="https://lumin8.agency" target="_blank" rel="noopener noreferrer">
            <img src={lumin8Logo} alt="LUMIN8" className="h-10 w-auto" />
          </a>
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            There's light at the end of the funnel.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-primary">
            Contact
          </h4>
          <a
            href="mailto:hello@lumin8.agency"
            className="mb-2 block text-sm text-foreground/70 transition-transform duration-200 hover:-translate-y-px"
          >
            hello@lumin8.agency
          </a>
          <a
            href="https://lumin8.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/70 transition-transform duration-200 hover:-translate-y-px"
          >
            lumin8.agency
          </a>
        </div>

        {/* Offer */}
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-primary">
            For Candidates
          </h4>
          <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
            Quick Launch campaign websites start at $1,000 CAD, with optional
            add-ons for donations, print, care, rush delivery, and post-election
            conversion.
          </p>
        </div>
      </div>

      {/*
        TODO (CASL): add full legal name, mailing address, phone, and an
        unsubscribe/contact-preferences link before this page is used as a
        cold-email landing target.
      */}

      {/* Bottom bar */}
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-6 md:flex-row">
        <p className="text-xs font-semibold text-muted-foreground">
          ©2026 LUMIN8. ALL RIGHTS RESERVED.
        </p>
        <p className="text-xs font-semibold text-muted-foreground">
          LUMIN8 FOR CANDIDATES · CAMPAIGNS.LUMIN8.AGENCY
        </p>
      </div>
    </footer>
  );
};

export default CandidatesFooter;
