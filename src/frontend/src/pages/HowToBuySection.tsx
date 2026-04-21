const CA = "3AmTiVi5L4rDuf1CCQLkx8kBEZ52N6Mr7DrZwfDYjizz";

const STEPS = [
  {
    number: "01",
    title: "GET A WALLET",
    description:
      "Download Phantom or Solflare wallet. Create your Solana wallet and secure your seed phrase somewhere safe — not your notes app.",
  },
  {
    number: "02",
    title: "FUND WITH SOL",
    description:
      "Buy SOL on any exchange (Binance, Coinbase, Kraken). Send it to your Phantom wallet address. You need SOL for gas fees + the swap.",
  },
  {
    number: "03",
    title: "BUY $PIGEON",
    description:
      "Use the Jupiter swap below or go to Jupiter.ag. Paste the CA, set slippage to 5-10%, and execute your swap. Welcome to the nest.",
  },
];

export function HowToBuySection() {
  return (
    <section
      id="how-to-buy"
      className="py-20 bg-background"
      data-ocid="how_to_buy.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-mono neon-green text-uppercase-tight tracking-widest mb-3">
            GET IN THE NEST
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-uppercase-tight text-foreground">
            HOW TO <span className="neon-green">BUY</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-4"
            style={{ background: "oklch(var(--primary))" }}
          />
        </div>

        {/* Steps */}
        <div
          className="grid md:grid-cols-3 gap-4 mb-12"
          data-ocid="how_to_buy.steps_list"
        >
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="p-6 border border-primary/30 rounded bg-card relative overflow-hidden"
              data-ocid={`how_to_buy.step.${idx + 1}`}
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: "oklch(var(--primary))" }}
              />
              <div className="text-5xl font-display font-black neon-green opacity-20 mb-3">
                {step.number}
              </div>
              <h3 className="text-lg font-display font-black text-uppercase-tight text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CA Display */}
        <div
          className="p-6 border border-primary/40 rounded bg-primary/5 text-center"
          data-ocid="how_to_buy.ca_display"
        >
          <div className="text-xs font-mono text-foreground/40 text-uppercase-tight mb-3">
            CONTRACT ADDRESS
          </div>
          <div className="font-mono text-sm sm:text-base font-bold neon-green break-all">
            {CA}
          </div>
          <div className="text-xs text-foreground/30 font-mono mt-2 text-uppercase-tight">
            ⚠️ ALWAYS VERIFY THE CONTRACT ADDRESS BEFORE BUYING
          </div>
        </div>

        {/* Jupiter Swap Embed */}
        <div className="mt-12" id="swap" data-ocid="how_to_buy.swap_section">
          <div className="text-center mb-6">
            <div className="text-xs font-mono neon-cyan text-uppercase-tight tracking-widest mb-2">
              SWAP RIGHT HERE
            </div>
            <h3 className="text-2xl font-display font-black text-uppercase-tight text-foreground">
              JUPITER SWAP
            </h3>
          </div>
          <div className="flex justify-center">
            <div
              className="w-full max-w-md border border-accent/30 rounded overflow-hidden"
              style={{ height: "500px" }}
              data-ocid="how_to_buy.jupiter_embed"
            >
              <iframe
                title="Jupiter Swap $PIGEON"
                src={`https://jup.ag/swap/SOL-${CA}?inAmount=0.1&slippageBps=500&platformFeeAndAccounts=undefined`}
                className="w-full h-full"
                style={{ border: "none" }}
                allow="clipboard-write"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
