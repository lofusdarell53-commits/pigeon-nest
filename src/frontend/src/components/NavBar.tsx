import { Check, Copy, Menu, X } from "lucide-react";
import { useState } from "react";

const CA = "3AmTiVi5L4rDuf1CCQLkx8kBEZ52N6Mr7DrZwfDYjizz";
const SHORT_CA = `${CA.slice(0, 6)}...${CA.slice(-4)}`;

const NAV_LINKS = [
  { label: "LORE", href: "#lore" },
  { label: "TOKENOMICS", href: "#tokenomics" },
  { label: "HOW TO BUY", href: "#how-to-buy" },
  { label: "GALLERY", href: "#gallery" },
  { label: "COMMUNITY", href: "#community" },
  { label: "FAQs", href: "#faqs" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(CA).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleNavClick(href: string) {
    scrollToSection(href);
    setOpen(false);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-card border-b"
      style={{ borderColor: "oklch(var(--primary) / 0.3)" }}
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2 shrink-0"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          data-ocid="navbar.logo_link"
        >
          <span className="text-lg font-display font-black text-uppercase-tight neon-green tracking-wide">
            $PIGEON
          </span>
          <span className="hidden sm:inline text-xs font-display text-foreground/50 text-uppercase-tight font-bold">
            NEST
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-5"
          data-ocid="navbar.desktop_nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-display font-bold text-uppercase-tight text-foreground/60 hover:neon-green transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              data-ocid={`navbar.link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CA Copy */}
        <button
          type="button"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-primary/40 rounded text-xs font-mono text-primary hover:border-primary transition-smooth"
          onClick={handleCopy}
          data-ocid="navbar.copy_ca_button"
          title="Copy Contract Address"
        >
          <span className="text-foreground/50 font-mono text-xs">
            {SHORT_CA}
          </span>
          {copied ? (
            <Check size={12} className="neon-green" />
          ) : (
            <Copy size={12} />
          )}
        </button>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground/70 hover:neon-green transition-smooth"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          data-ocid="navbar.hamburger_button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden bg-card border-t"
          style={{ borderColor: "oklch(var(--primary) / 0.3)" }}
          data-ocid="navbar.mobile_menu"
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-sm font-display font-bold text-uppercase-tight text-foreground/70 hover:neon-green hover:bg-primary/5 rounded transition-smooth"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                data-ocid={`navbar.mobile_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                {link.label}
              </a>
            ))}
            {/* Mobile CA Copy */}
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2.5 mt-2 border border-primary/40 rounded text-xs font-mono text-primary hover:border-primary transition-smooth"
              onClick={handleCopy}
              data-ocid="navbar.mobile_copy_ca_button"
            >
              <span>CA: {SHORT_CA}</span>
              {copied ? (
                <Check size={12} className="neon-green" />
              ) : (
                <Copy size={12} />
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
