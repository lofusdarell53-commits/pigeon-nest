import {
  formatLargeNum,
  formatPrice,
  useDexScreener,
} from "@/hooks/useDexScreener";

interface StatCardProps {
  label: string;
  value: string;
  accent?: "green" | "cyan" | "default";
}

function StatCard({ label, value, accent = "default" }: StatCardProps) {
  const colorClass =
    accent === "green"
      ? "neon-green"
      : accent === "cyan"
        ? "neon-cyan"
        : "text-foreground";
  const borderClass =
    accent === "green"
      ? "border-primary/40 bg-primary/5"
      : accent === "cyan"
        ? "border-accent/40 bg-accent/5"
        : "border-border bg-card";

  return (
    <div className={`p-5 border rounded ${borderClass}`}>
      <div className="text-xs font-mono text-foreground/40 text-uppercase-tight mb-2">
        {label}
      </div>
      <div
        className={`text-2xl sm:text-3xl font-mono font-black ${colorClass}`}
      >
        {value}
      </div>
    </div>
  );
}

export function TokenomicsSection() {
  const { data, isLoading } = useDexScreener();

  const stats = [
    {
      label: "PRICE",
      value: isLoading ? "..." : formatPrice(data?.priceUsd),
      accent: "green" as const,
    },
    {
      label: "MARKET CAP",
      value: isLoading ? "..." : formatLargeNum(data?.marketCap),
      accent: "cyan" as const,
    },
    {
      label: "FDV",
      value: isLoading ? "..." : formatLargeNum(data?.fdv),
      accent: "default" as const,
    },
    {
      label: "24H VOLUME",
      value: isLoading ? "..." : formatLargeNum(data?.volume?.h24),
      accent: "default" as const,
    },
    {
      label: "LIQUIDITY",
      value: isLoading ? "..." : formatLargeNum(data?.liquidity?.usd),
      accent: "green" as const,
    },
    {
      label: "24H BUYS/SELLS",
      value: isLoading
        ? "..."
        : `${data?.txns?.h24?.buys ?? 0} / ${data?.txns?.h24?.sells ?? 0}`,
      accent: "cyan" as const,
    },
  ];

  const change1h = data?.priceChange?.h1 ?? 0;
  const change6h = data?.priceChange?.h6 ?? 0;
  const change24h = data?.priceChange?.h24 ?? 0;

  return (
    <section
      id="tokenomics"
      className="py-20 bg-background"
      data-ocid="tokenomics.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-mono neon-green text-uppercase-tight tracking-widest mb-3">
            LIVE DATA — UPDATES EVERY 5 SECONDS
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-uppercase-tight text-foreground">
            TOKENOMICS
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-4"
            style={{ background: "oklch(var(--primary))" }}
          />
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8"
          data-ocid="tokenomics.stats_grid"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Price Changes */}
        <div
          className="p-5 border border-border rounded bg-card"
          data-ocid="tokenomics.price_changes"
        >
          <div className="text-xs font-mono text-foreground/40 text-uppercase-tight mb-4">
            PRICE CHANGE
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "1H", value: change1h },
              { label: "6H", value: change6h },
              { label: "24H", value: change24h },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-xs font-mono text-foreground/40 mb-1">
                  {item.label}
                </div>
                <div
                  className={`text-xl font-mono font-bold ${item.value >= 0 ? "text-green-400" : "text-red-400"}`}
                >
                  {isLoading
                    ? "..."
                    : `${item.value >= 0 ? "+" : ""}${item.value.toFixed(2)}%`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DexScreener Attribution */}
        <div className="mt-4 text-center">
          <span className="text-xs text-foreground/30 font-mono">
            Live data from DexScreener · CA:{" "}
            <a
              href="https://dexscreener.com/solana/3AmTiVi5L4rDuf1CCQLkx8kBEZ52N6Mr7DrZwfDYjizz"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-cyan hover:underline"
            >
              3AmTiVi5...jizz
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
