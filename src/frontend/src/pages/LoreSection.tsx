export function LoreSection() {
  return (
    <section
      id="lore"
      className="py-20 bg-muted/30 border-y"
      style={{ borderColor: "oklch(var(--primary) / 0.15)" }}
      data-ocid="lore.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded opacity-20 blur-lg"
                style={{ background: "oklch(var(--accent))" }}
              />
              <img
                src="/assets/images/pigeon-lore.jpg"
                alt="$PIGEON origin lore"
                className="relative rounded border border-accent/30 w-full object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <div className="text-xs font-mono neon-cyan text-uppercase-tight tracking-widest mb-3">
                THE ORIGIN STORY
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-uppercase-tight text-foreground leading-tight">
                LORE OF THE <span className="neon-green">PIGEON</span>
              </h2>
            </div>

            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                In the neon-drenched alleys of Crypto City, where digital dreams
                take flight and rug pulls lurk in every shadow, one bird rose
                above the chaos. Not an eagle. Not a hawk. A pigeon.
              </p>
              <p>
                Born from the streets, hardened by the bear markets, and fueled
                by nothing but pure degeneracy,
                <span className="neon-green font-bold"> $PIGEON</span> emerged
                from a Solana dumpster dive on a cold winter night. The CTO
                (Chief Territorial Officer) gathered the flock on Telegram and
                declared:
                <span className="text-foreground/90 italic">
                  {" "}
                  "We are not rats. We are pigeons. And we COO."
                </span>
              </p>
              <p>
                The airdropper took to the skies, dropping bags on every based
                degen who believed. The nest was built not on VCs or influencer
                deals — but on raw meme energy, community conviction, and
                absolutely unhinged tokenomics.
              </p>
              <p className="font-display font-bold text-uppercase-tight text-foreground/90 tracking-wide">
                The pigeons are here. The nest is live. The COO echoes across
                Solana.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 border border-primary/30 rounded bg-primary/5">
                <div className="text-xs font-mono text-foreground/40 text-uppercase-tight mb-1">
                  CHAIN
                </div>
                <div className="font-display font-bold text-uppercase-tight neon-green">
                  SOLANA
                </div>
              </div>
              <div className="p-4 border border-accent/30 rounded bg-accent/5">
                <div className="text-xs font-mono text-foreground/40 text-uppercase-tight mb-1">
                  TYPE
                </div>
                <div className="font-display font-bold text-uppercase-tight neon-cyan">
                  MEME COIN
                </div>
              </div>
              <div className="p-4 border border-border rounded col-span-2">
                <div className="text-xs font-mono text-foreground/40 text-uppercase-tight mb-1">
                  ORIGIN
                </div>
                <div className="font-display font-bold text-uppercase-tight text-foreground/70">
                  COMMUNITY CTO DROP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
