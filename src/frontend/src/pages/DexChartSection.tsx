const CA = "3AmTiVi5L4rDuf1CCQLkx8kBEZ52N6Mr7DrZwfDYjizz";
const DEX_PAIR =
  "https://dexscreener.com/solana/3AmTiVi5L4rDuf1CCQLkx8kBEZ52N6Mr7DrZwfDYjizz";

export function DexChartSection() {
  return (
    <section
      id="dex-chart"
      className="py-20 bg-muted/20 border-y"
      style={{ borderColor: "oklch(var(--primary) / 0.15)" }}
      data-ocid="dex_chart.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="text-xs font-mono neon-cyan text-uppercase-tight tracking-widest mb-3">
            REAL-TIME CHART
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-uppercase-tight text-foreground">
            DEX <span className="neon-green">SCREENER</span>
          </h2>
        </div>

        {/* Full width DEX Screener embed */}
        <div
          className="w-full border border-primary/30 rounded overflow-hidden"
          style={{ height: "clamp(400px, 60vh, 700px)" }}
          data-ocid="dex_chart.embed"
        >
          <iframe
            title="$PIGEON DEX Screener Chart"
            src={`https://dexscreener.com/solana/${CA}?embed=1&theme=dark&trades=0&info=0`}
            className="w-full h-full"
            style={{ border: "none" }}
            allow="clipboard-write"
          />
        </div>

        <div className="mt-4 text-center">
          <a
            href={DEX_PAIR}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono neon-cyan hover:underline text-uppercase-tight tracking-wider"
            data-ocid="dex_chart.external_link"
          >
            VIEW FULL CHART ON DEXSCREENER →
          </a>
        </div>
      </div>
    </section>
  );
}
