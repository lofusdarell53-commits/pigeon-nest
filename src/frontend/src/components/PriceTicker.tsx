import { formatPrice, useDexScreener } from "@/hooks/useDexScreener";

const TICKER_ITEMS = 8;

export function PriceTicker() {
  const { data } = useDexScreener();

  const price = data?.priceUsd ? formatPrice(data.priceUsd) : "$---";
  const change24h = data?.priceChange?.h24 ?? 0;
  const isPositive = change24h >= 0;
  const changeStr = `${isPositive ? "+" : ""}${change24h.toFixed(2)}%`;

  const tickerLabels = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const tickerContent = tickerLabels.slice(0, TICKER_ITEMS).map((id) => (
    <span key={id} className="inline-flex items-center gap-3 mx-8">
      <span className="text-uppercase-tight font-mono text-xs font-bold text-foreground/60">
        $PIGEON
      </span>
      <span
        className="font-mono text-sm font-bold neon-green"
        data-ocid="ticker.price"
      >
        {price}
      </span>
      <span
        className={`font-mono text-xs font-bold ${isPositive ? "text-green-400" : "text-red-400"}`}
        data-ocid="ticker.change"
      >
        {changeStr}
      </span>
      <span className="text-foreground/20">|</span>
    </span>
  ));

  return (
    <div
      className="w-full bg-card border-b border-primary/30 overflow-hidden py-1.5"
      data-ocid="ticker.section"
      style={{ borderTop: "1px solid oklch(var(--primary) / 0.2)" }}
    >
      <div
        className="flex whitespace-nowrap animate-ticker"
        style={{ width: "200%" }}
      >
        <div className="flex shrink-0">{tickerContent}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {tickerContent}
        </div>
      </div>
    </div>
  );
}
