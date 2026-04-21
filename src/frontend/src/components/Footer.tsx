import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { SiTelegram, SiX } from "react-icons/si";

const CA = "3AmTiVi5L4rDuf1CCQLkx8kBEZ52N6Mr7DrZwfDYjizz";
const year = new Date().getFullYear();

export function Footer() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(CA).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <footer
      className="bg-card border-t"
      style={{ borderColor: "oklch(var(--primary) / 0.3)" }}
      data-ocid="footer"
    >
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col items-center gap-6">
        {/* Brand */}
        <div className="text-center">
          <div className="text-2xl font-display font-black text-uppercase-tight neon-green tracking-widest">
            $PIGEON NEST
          </div>
          <div className="text-xs text-foreground/40 font-mono mt-1 text-uppercase-tight">
            THE PIGEON HAS LANDED ON SOLANA
          </div>
        </div>

        {/* CA */}
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 border border-primary/40 rounded font-mono text-xs text-foreground/60 hover:border-primary hover:neon-green transition-smooth max-w-full"
          onClick={handleCopy}
          data-ocid="footer.copy_ca_button"
        >
          <span className="truncate">{CA}</span>
          {copied ? (
            <Check size={12} className="shrink-0 neon-green" />
          ) : (
            <Copy size={12} className="shrink-0" />
          )}
        </button>

        {/* Socials */}
        <div className="flex items-center gap-4" data-ocid="footer.socials">
          <a
            href="https://t.me/tehpegionnest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-primary/30 rounded text-xs font-display font-bold text-uppercase-tight text-foreground/60 hover:neon-green hover:border-primary transition-smooth"
            data-ocid="footer.telegram_link"
          >
            <SiTelegram size={14} />
            TELEGRAM
          </a>
          <a
            href="https://x.com/i/communities/1951776220376400069"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-primary/30 rounded text-xs font-display font-bold text-uppercase-tight text-foreground/60 hover:neon-green hover:border-primary transition-smooth"
            data-ocid="footer.x_link"
          >
            <SiX size={14} />X / TWITTER
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-foreground/30 max-w-2xl leading-relaxed">
          $PIGEON is a meme coin with no intrinsic value or financial return
          expectation. Nothing on this website constitutes financial advice.
          Crypto trading involves significant risk. Do your own research.
        </p>

        {/* Branding */}
        <div className="text-center text-xs text-foreground/25">
          © {year}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground/50 transition-smooth"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
