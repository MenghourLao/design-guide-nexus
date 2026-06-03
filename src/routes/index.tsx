import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import bookmeWhite from "@/assets/images/bookme-logo-new.png";
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

      {/* Hero image with header overlaid */}
      <div className="relative w-full">
        <motion.img
          src={bookmeHero}
          alt="BookMe+ Design"
          className="w-full h-auto block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute top-0 left-0 right-0 z-40 border-b border-white/10 bg-transparent"
        >
          <div className="px-6 lg:px-10 h-16 flex items-center justify-between">
            <img src={bookmeWhite} alt="BookMe+" className="h-6 w-auto" />
            <div className="flex items-center gap-2 text-xs text-white/70">
              <span className="hidden md:inline">Maintained by</span>
              <Badge variant="outline" className="bg-white/15 text-white border-white/20 hover:bg-white/20">
                UX/UI Team
              </Badge>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Hero text */}
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
          className="mt-4 flex items-center gap-3 text-xs text-muted-foreground"
        >
          <span>{VERSION}</span>
          <Separator orientation="vertical" className="h-3" />
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
            <Link to={card.to} className="block h-full">
              <Card className="flex flex-col h-full hover:border-foreground/30 transition-colors cursor-pointer shadow-none rounded-2xl">
                <CardHeader className="pb-3">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--brand)] mb-1">
                    {card.eyebrow}
                  </p>
                  <CardTitle className="text-xl font-bold tracking-tight">{card.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="font-normal">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-5 flex items-center justify-between" style={{ borderColor: "#f2f2f2" }}>
                  <span className="text-sm font-medium text-foreground">Open guidelines</span>
                  <ArrowUpRight size={15} className="text-muted-foreground" />
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-auto"
      >
        <Separator />
        <div className="px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} BookMe+ · UX/UI Team</span>
          <span>{VERSION} · {LAST_UPDATED}</span>
        </div>
      </motion.div>
    </div>
  );
}
