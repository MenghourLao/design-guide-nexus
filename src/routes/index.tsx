import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
  },
  {
    to: "/product",
    eyebrow: "02 — Product",
    title: "Product Setup Specification",
    description:
      "Foundational design tokens used across all product surfaces — spacing, grid, border radius, type scale, elevation, icons, and motion.",
    tags: ["Spacing", "Grid", "Type Scale", "Motion"],
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-40">
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
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--brand)] mb-6">
          Design Hub
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
          BookMe+<br />
          <span className="text-muted-foreground font-light">Design Guidelines</span>
        </h1>
        <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
          One place for every visual standard — from brand identity to product tokens.
          Built for the UX/UI team and anyone working with the BookMe+ brand.
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span>{VERSION}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Updated {LAST_UPDATED}</span>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pb-24 grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="rounded-2xl border border-border bg-card p-7 flex flex-col hover:border-foreground/30 transition-colors"
          >
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--brand)] mb-3">
              {card.eyebrow}
            </div>
            <h2 className="text-xl font-bold tracking-tight text-foreground mb-3">
              {card.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
              {card.description}
            </p>

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

            <div className="flex items-center justify-between text-sm font-medium text-foreground border-t border-border pt-5 mt-auto">
              <span>Open guidelines</span>
              <ArrowUpRight size={15} className="text-muted-foreground" />
            </div>
          </Link>
        ))}
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
