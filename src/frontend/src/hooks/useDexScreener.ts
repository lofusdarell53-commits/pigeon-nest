import { useQuery } from "@tanstack/react-query";

const CA = "3AmTiVi5L4rDuf1CCQLkx8kBEZ52N6Mr7DrZwfDYjizz";
const DEX_API = `https://api.dexscreener.com/latest/dex/tokens/${CA}`;

export interface DexTokenData {
  priceUsd: string;
  priceChange: {
    h1: number;
    h6: number;
    h24: number;
  };
  volume: {
    h24: number;
  };
  marketCap: number;
  fdv: number;
  liquidity: {
    usd: number;
  };
  txns: {
    h24: {
      buys: number;
      sells: number;
    };
  };
  pairAddress: string;
}

export function useDexScreener() {
  return useQuery<DexTokenData | null>({
    queryKey: ["dexscreener", CA],
    queryFn: async () => {
      const res = await fetch(DEX_API);
      if (!res.ok) return null;
      const json = await res.json();
      const pairs = json.pairs;
      if (!pairs || pairs.length === 0) return null;
      // Get the pair with highest liquidity
      const best = pairs.reduce(
        (
          a: DexTokenData & { liquidity: { usd: number } },
          b: DexTokenData & { liquidity: { usd: number } },
        ) => ((b.liquidity?.usd ?? 0) > (a.liquidity?.usd ?? 0) ? b : a),
      );
      return best as DexTokenData;
    },
    refetchInterval: 5000,
    staleTime: 4000,
  });
}

export function formatPrice(price: string | undefined): string {
  if (!price) return "$0.00";
  const num = Number.parseFloat(price);
  if (num < 0.0001) return `$${num.toExponential(4)}`;
  if (num < 1) return `$${num.toFixed(6)}`;
  return `$${num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
}

export function formatLargeNum(num: number | undefined): string {
  if (!num) return "N/A";
  if (num >= 1_000_000_000) return `$${(num / 1_000_000_000).toFixed(2)}B`;
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(2)}M`;
  if (num >= 1_000) return `$${(num / 1_000).toFixed(2)}K`;
  return `$${num.toFixed(2)}`;
}
