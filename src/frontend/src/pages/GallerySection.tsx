const MEMES = [
  {
    id: "meme1",
    src: "/assets/images/pigeon-hero.jpg",
    caption: "THE PIGEON HAS LANDED 🐦",
    tag: "LEGENDARY",
  },
  {
    id: "meme2",
    src: "/assets/images/pigeon-lore.jpg",
    caption: "GET READY TO COO 🟢",
    tag: "CLASSIC",
  },
  {
    id: "meme3",
    src: "/assets/images/pigeon-community.jpg",
    caption: "NEST COMMUNITY VIBES 🔥",
    tag: "COMMUNITY",
  },
  {
    id: "meme4",
    src: "/assets/images/pigeon-hero.jpg",
    caption: "SOLANA PIGEON SEASON 💰",
    tag: "BULLISH",
  },
  {
    id: "meme5",
    src: "/assets/images/pigeon-lore.jpg",
    caption: "BASED BIRD ENERGY 🚀",
    tag: "DEGEN",
  },
  {
    id: "meme6",
    src: "/assets/images/pigeon-community.jpg",
    caption: "THE FLOCK IS GROWING 📈",
    tag: "BULLISH",
  },
];

const TAG_COLORS: Record<string, string> = {
  LEGENDARY: "border-yellow-400/40 text-yellow-400",
  CLASSIC: "border-primary/40 neon-green",
  COMMUNITY: "border-accent/40 neon-cyan",
  BULLISH: "border-green-500/40 text-green-400",
  DEGEN: "border-red-500/40 text-red-400",
};

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 bg-muted/30 border-y"
      style={{ borderColor: "oklch(var(--primary) / 0.15)" }}
      data-ocid="gallery.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-mono neon-green text-uppercase-tight tracking-widest mb-3">
            PIGEON PROPAGANDA
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-uppercase-tight text-foreground">
            MEME <span className="neon-green">GALLERY</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-4"
            style={{ background: "oklch(var(--primary))" }}
          />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          data-ocid="gallery.grid"
        >
          {MEMES.map((meme, idx) => (
            <div
              key={meme.id}
              className="group border border-border rounded overflow-hidden bg-card hover:border-primary/60 transition-smooth"
              data-ocid={`gallery.item.${idx + 1}`}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={meme.src}
                  alt={meme.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-smooth" />
              </div>
              <div className="p-3 flex items-center justify-between gap-2">
                <span className="text-sm font-display font-bold text-foreground/80 truncate">
                  {meme.caption}
                </span>
                <span
                  className={`shrink-0 text-xs font-mono px-2 py-0.5 border rounded ${TAG_COLORS[meme.tag] ?? "border-border text-foreground/50"}`}
                >
                  {meme.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
