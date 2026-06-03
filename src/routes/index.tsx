import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Palette, Package } from "lucide-react";
import bookmeBlack from "@/assets/images/bookme-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BookMe+ — Design Hub | UX/UI Team" },
      { name: "description", content: "Official BookMe+ brand guidelines and product setup specifications maintained by the UX/UI team." },
      { property: "og:title", content: "BookMe+ Design Hub" },
      { property: "og:description", content: "Brand guidelines and product setup specifications for the BookMe+ team." },
    ],
  }),
  component: Home,
});

const VERSION = "v1.0.0";
const LAST_UPDATED = "June 2, 2026";

const cards = [
  {
    to: "/brand",
    eyebrow: "01 — Brand",
    title: "BookMe+ Brand",
    description:
      "The official brand identity system — logo variations, color palette, typography, and usage rules that keep every surface consistent and on-brand.",
    tags: ["Logo", "Colors", "Typography", "Brand Usage"],
    accent: "#6444d8",
    accentLight: "#f0ecfb",
    accentDark: "#5036ad",
    icon: Palette,
    gradient: "linear-gradient(135deg, #6444d8 0%, #2ebae2 100%)",
  },
  {
    to: "/product",
    eyebrow: "02 — Product",
    title: "Product Setup Specification",
    description:
      "Foundational design tokens used across all product surfaces — spacing, grid, border radius, type scale, elevation, icons, and motion.",
    tags: ["Spacing", "Grid", "Type Scale", "Motion"],
    accent: "#2ebae2",
    accentLight: "#eaf8fc",
    accentDark: "#20829e",
    icon: Package,
    gradient: "linear-gradient(135deg, #2ebae2 0%, #6444d8 100%)",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <img src={bookmeBlack} alt="BookMe+" className="h-6 w-auto" />
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="hidden md:inline">Maintained by</span>
            <span className="px-2 py-1 rounded-md bg-[color:var(--brand-lighter)] text-[color:var(--brand-darker)] font-medium">
              UX/UI Team
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--brand)] mb-6">
          <span className="w-4 h-px bg-[color:var(--brand)]" />
          Design Hub
          <span className="w-4 h-px bg-[color:var(--brand)]" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
          BookMe+<br />
          <span className="text-muted-foreground font-light">Design Guidelines</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          One place for every visual standard — from brand identity to product tokens.
          Built for the UX/UI team and anyone working with the BookMe+ brand.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>{VERSION}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Updated {LAST_UPDATED}</span>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.to}
              to={card.to}
              className="group relative rounded-3xl border border-border bg-card overflow-hidden flex flex-col hover:border-[color:var(--brand)] hover:shadow-lg transition-all duration-300"
            >
              {/* Gradient banner */}
              <div
                className="h-40 w-full relative overflow-hidden"
                style={{ background: card.gradient }}
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-5 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <div className="text-xs font-medium uppercase tracking-[0.2em] mb-2" style={{ color: card.accent }}>
                  {card.eyebrow}
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-foreground mb-3">
                  {card.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white transition"
                  style={{ background: card.accent }}
                >
                  <span>Open guidelines</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} BookMe+ · UX/UI Team</span>
          <span>{VERSION} · {LAST_UPDATED}</span>
        </div>
      </div>
    </div>
  );
}
