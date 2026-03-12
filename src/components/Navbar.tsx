import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/lumin8-logo.png";

const CONTEST_FORM_URL = "#contest"; // PLACEHOLDER — replace with actual form URL before launch

const navLinks = [
  { label: "Services", href: "#solution" },
  { label: "What You Get", href: "#pricing" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-lumin8-black/60 backdrop-blur-xl border border-foreground/[0.08]"
          : "bg-transparent"
      }`}
    >
      <img src={logo} alt="Lumin8" className="h-8 w-auto" />

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleClick(link.href)}
            className="text-sm font-body text-foreground/80 hover:-translate-y-px transition-transform duration-300"
          >
            {link.label}
          </button>
        ))}
      </div>

      <a
        href={CONTEST_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2 rounded-full hover:scale-[1.03] transition-transform duration-300"
      >
        Enter the Contest
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-lumin8-black/95 backdrop-blur-xl rounded-2xl border border-foreground/[0.08] p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="text-left text-foreground font-body py-2"
            >
              {link.label}
            </button>
          ))}
          <a
            href={CONTEST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-3 rounded-full text-center hover:scale-[1.03] transition-transform duration-300"
          >
            Enter the Contest
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
