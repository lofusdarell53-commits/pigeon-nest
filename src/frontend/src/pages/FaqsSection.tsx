import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "What is $PIGEON NEST?",
    a: "$PIGEON NEST is a community-driven meme coin on the Solana blockchain. It was community-taken-over (CTO'd) by the Airdropper and the flock, transforming it from a forgotten token into a based meme movement.",
  },
  {
    q: "What is the contract address?",
    a: "The official $PIGEON contract address on Solana is: 3AmTiVi5L4rDuf1CCQLkx8kBEZ52N6Mr7DrZwfDYjizz — always verify this before purchasing. Never buy tokens from unofficial sources.",
  },
  {
    q: "Where can I buy $PIGEON?",
    a: "You can buy $PIGEON using Jupiter Swap (jup.ag) or Raydium on the Solana network. Use the embedded swap widget on this page or search for the contract address on any Solana DEX aggregator.",
  },
  {
    q: "Is $PIGEON a safe investment?",
    a: "$PIGEON is a meme coin with no guarantee of returns. Crypto trading carries extreme risk. Only invest what you can afford to lose completely. DYOR and never ape your life savings into any meme coin.",
  },
  {
    q: "What is the tokenomics of $PIGEON?",
    a: "Live tokenomics data is visible in the Tokenomics section above, updated every 5 seconds from DexScreener. $PIGEON is a fair-launch community token — no VC allocation, no insider deals, pure degen energy.",
  },
  {
    q: "How do I join the community?",
    a: "Join the official Telegram at t.me/tehpegionnest and follow us on X at the community link in the navigation. The flock is always active — degen hours never end.",
  },
  {
    q: "What does CTO mean?",
    a: "CTO stands for Community Take-Over. It means the community seized control of the project from the original developers or abandoned state, revived it, and is now driving its growth organically.",
  },
];

export function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <section
      id="faqs"
      className="py-20 bg-muted/20 border-y"
      style={{ borderColor: "oklch(var(--primary) / 0.15)" }}
      data-ocid="faqs.section"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-mono neon-green text-uppercase-tight tracking-widest mb-3">
            GOT QUESTIONS?
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-uppercase-tight text-foreground">
            FAQs
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-4"
            style={{ background: "oklch(var(--primary))" }}
          />
        </div>

        <div className="flex flex-col gap-2" data-ocid="faqs.list">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.q}
              className="border rounded bg-card overflow-hidden"
              style={{
                borderColor:
                  openIndex === idx
                    ? "oklch(var(--primary) / 0.5)"
                    : "oklch(var(--border))",
              }}
              data-ocid={`faqs.item.${idx + 1}`}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-primary/5 transition-smooth"
                onClick={() => toggle(idx)}
                data-ocid={`faqs.toggle.${idx + 1}`}
                aria-expanded={openIndex === idx}
              >
                <span className="font-display font-bold text-foreground text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform duration-200 ${openIndex === idx ? "rotate-180 neon-green" : "text-foreground/40"}`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 text-sm text-foreground/60 leading-relaxed border-t border-border">
                  <div className="pt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
