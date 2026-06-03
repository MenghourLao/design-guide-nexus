import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import bookmeWhite from "@/assets/images/bookme-logo-dark.png";
import bookmeHero from "@/assets/images/bookme-hero.jpg";

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

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const, delay: i * 0.08 },
  }),
};

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="border-b border-white/10 bg-transparent sticky top-0 z-40"
      >
        <div className="px-6 lg:px-10 h-16 flex items-center justify-between">
          <img src={bookmeWhite} alt="BookMe+" className="h-6 w-auto" />
          <div className="flex items-center gap-2 text-xs text-white/70">
            <span className="hidden md:inline">Maintained by</span>
            <span className="px-2 py-1 rounded-md bg-white/15 text-white font-medium">
              UX/UI Team
            </span>
          </div>
        </div>
      </motion.header>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <img src={bookmeHero} alt="BookMe+ Design" className="w-full h-auto block" />
      </motion.div>

      {/* Hero */}
      <div className="px-6 lg:px-10 pt-14 pb-12">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--brand)] mb-6"
        >
          Design Hub
        </motion.div>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]"
        >
          BookMe+<br />
          <span className="text-muted-foreground font-light">Design Guidelines</span>
        </motion.h1>
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed"
        >
          One place for every visual standard — from brand identity to product tokens.
          Built for the UX/UI team and anyone working with the BookMe+ brand.
        </motion.p>
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 flex items-center gap-4 text-xs text-muted-foreground"
        >
          <span>{VERSION}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Updated {LAST_UPDATED}</span>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="px-6 lg:px-10 pb-24 grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={card.to}
            custom={i + 4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
          >
            <Link
              to={card.to}
              className="rounded-2xl border border-border bg-card p-7 flex flex-col h-full hover:border-foreground/30 transition-colors"
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

              <div
                className="flex items-center justify-between text-sm font-medium text-foreground border-t pt-5 mt-auto"
                style={{ borderColor: "#f2f2f2" }}
              >
                <span>Open guidelines</span>
                <ArrowUpRight size={15} className="text-muted-foreground" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-auto border-t border-border"
      >
        <div className="px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} BookMe+ · UX/UI Team</span>
          <span>{VERSION} · {LAST_UPDATED}</span>
        </div>
      </motion.div>
    </div>
  );
}
