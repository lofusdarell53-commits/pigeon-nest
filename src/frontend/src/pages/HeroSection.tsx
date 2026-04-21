import {
  formatLargeNum,
  formatPrice,
  useDexScreener,
} from "@/hooks/useDexScreener";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const CA = "3AmTiVi5L4rDuf1CCQLkx8kBEZ52N6Mr7DrZwfDYjizz";

export function HeroSection() {
  const { data, isLoading } = useDexScreener();
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(CA).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const price = data?.priceUsd ? formatPrice(data.priceUsd) : "$---";
  const change = data?.priceChange?.h24 ?? 0;
  const isPositive = change >= 0;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      data-ocid="hero.section"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Neon glow blobs */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "oklch(var(--primary))" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "oklch(var(--accent))" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/40 rounded w-fit">
              <span
                className="w-2 h-2 rounded-full animate-pulse-neon"
                style={{ background: "oklch(var(--primary))" }}
              />
              <span className="text-xs font-mono text-foreground/60 text-uppercase-tight">
                LIVE ON SOLANA
              </span>
            </div>

            <h1 className="font-display font-black leading-none">
              <span className="block text-5xl sm:text-6xl lg:text-7xl neon-green text-uppercase-tight">
                $PIGEON
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-foreground text-uppercase-tight">
                NEST
              </span>
              <span className="block text-xl sm:text-2xl font-bold text-foreground/50 mt-2 tracking-widest">
                IS HERE
              </span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/60 max-w-md leading-relaxed">
              The most based pigeon meme coin on Solana. The flock has landed.
              Get ready to COO your way to the moon. 🐦
            </p>

            {/* Live Price Display */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="px-4 py-3 border border-primary/40 rounded bg-primary/5">
                <div className="text-xs font-mono text-foreground/40 text-uppercase-tight mb-1">
                  PRICE
                </div>
                <div
                  className="text-2xl font-mono font-bold neon-green"
                  data-ocid="hero.price"
                >
                  {isLoading ? "..." : price}
                </div>
              </div>
              <div
                className={`px-4 py-3 border rounded ${isPositive ? "border-green-500/40 bg-green-500/5" : "border-red-500/40 bg-red-500/5"}`}
              >
                <div className="text-xs font-mono text-foreground/40 text-uppercase-tight mb-1">
                  24H
                </div>
                <div
                  className={`text-2xl font-mono font-bold ${isPositive ? "text-green-400" : "text-red-400"}`}
                  data-ocid="hero.change_24h"
                >
                  {isLoading
                    ? "..."
                    : `${isPositive ? "+" : ""}${change.toFixed(2)}%`}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="px-6 py-3 bg-primary font-display font-black text-primary-foreground text-uppercase-tight tracking-widest text-sm rounded hover:opacity-90 transition-smooth"
                onClick={() =>
                  document
                    .getElementById("how-to-buy")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid="hero.buy_button"
              >
                BUY $PIGEON
              </button>
              <a
                href="https://t.me/tehpegionnest"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary/40 font-display font-bold text-foreground/70 text-uppercase-tight tracking-widest text-sm rounded hover:border-primary hover:neon-green transition-smooth"
                data-ocid="hero.telegram_button"
              >
                JOIN NEST
              </a>
            </div>

            {/* CA */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-foreground/30 font-mono">CA:</span>
              <button
                type="button"
                className="flex items-center gap-1.5 text-xs font-mono text-foreground/50 hover:neon-green transition-smooth min-w-0"
                onClick={handleCopy}
                data-ocid="hero.copy_ca_button"
              >
                <span className="truncate max-w-[200px] sm:max-w-none">
                  {CA}
                </span>
                {copied ? (
                  <Check size={12} className="neon-green shrink-0" />
                ) : (
                  <Copy size={12} className="shrink-0" />
                )}
              </button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div
                className="absolute inset-0 rounded blur-2xl opacity-20"
                style={{ background: "oklch(var(--primary))" }}
              />
              <img
                src="/assets/images/pigeon-hero.jpg"
                alt="$PIGEON Nest mascot — the pigeon has landed"
                className="relative rounded border border-primary/30 w-full object-cover animate-float"
                style={{ maxHeight: "480px" }}
              />
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm border border-primary/30 rounded p-3 grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-xs font-mono text-foreground/40 text-uppercase-tight">
                    MCap
                  </div>
                  <div className="text-sm font-mono font-bold neon-green">
                    {isLoading ? "..." : formatLargeNum(data?.marketCap)}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-mono text-foreground/40 text-uppercase-tight">
                    VOL 24H
                  </div>
                  <div className="text-sm font-mono font-bold neon-cyan">
                    {isLoading ? "..." : formatLargeNum(data?.volume?.h24)}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-mono text-foreground/40 text-uppercase-tight">
                    FDV
                  </div>
                  <div className="text-sm font-mono font-bold text-foreground/70">
                    {isLoading ? "..." : formatLargeNum(data?.fdv)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
