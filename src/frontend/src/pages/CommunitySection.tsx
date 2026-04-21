import { SiTelegram, SiX } from "react-icons/si";

const COMMUNITY_CARDS = [
  {
    id: "telegram",
    icon: SiTelegram,
    title: "TELEGRAM",
    description:
      "Join the nest on Telegram. Live alpha, degen talk, and the most based pigeon community in crypto.",
    href: "https://t.me/tehpegionnest",
    cta: "JOIN NEST",
    accent: "green" as const,
  },
  {
    id: "xcom",
    icon: SiX,
    title: "X / TWITTER",
    description:
      "Follow the flock on X. Memes, updates, community posts, and pure pigeon energy 24/7.",
    href: "https://x.com/i/communities/1951776220376400069",
    cta: "FOLLOW US",
    accent: "cyan" as const,
  },
];

export function CommunitySection() {
  return (
    <section
      id="community"
      className="py-20 bg-background"
      data-ocid="community.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-mono neon-cyan text-uppercase-tight tracking-widest mb-3">
            JOIN THE FLOCK
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-uppercase-tight text-foreground">
            COMMUNITY
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-4"
            style={{ background: "oklch(var(--accent))" }}
          />
          <p className="mt-4 text-foreground/50 max-w-md mx-auto">
            The $PIGEON Nest is powered by the most degenerate, based, and
            beautiful community on Solana.
          </p>
        </div>

        {/* Community image banner */}
        <div className="relative mb-12 rounded overflow-hidden border border-primary/20">
          <img
            src="/assets/images/pigeon-community.jpg"
            alt="$PIGEON Nest Community"
            className="w-full object-cover"
            style={{ maxHeight: "300px" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, oklch(var(--background) / 0.8) 0%, oklch(var(--background) / 0.2) 50%, oklch(var(--background) / 0.8) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-display font-black neon-green text-uppercase-tight drop-shadow-lg">
                THE FLOCK
              </div>
              <div className="text-lg font-display font-bold text-foreground/70 text-uppercase-tight mt-1">
                IS ASSEMBLED
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          data-ocid="community.links_list"
        >
          {COMMUNITY_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isCyan = card.accent === "cyan";
            return (
              <a
                key={card.id}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 p-6 border rounded bg-card hover:scale-[1.02] transition-smooth"
                style={{
                  borderColor: isCyan
                    ? "oklch(var(--accent) / 0.3)"
                    : "oklch(var(--primary) / 0.3)",
                }}
                data-ocid={`community.link.${idx + 1}`}
              >
                <Icon
                  size={28}
                  className={isCyan ? "neon-cyan" : "neon-green"}
                />
                <div>
                  <div className="font-display font-black text-uppercase-tight text-foreground mb-1">
                    {card.title}
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-2 text-xs font-display font-bold text-uppercase-tight tracking-widest ${isCyan ? "neon-cyan" : "neon-green"}`}
                >
                  {card.cta} →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
