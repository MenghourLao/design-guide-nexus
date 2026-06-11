import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PasscodeDialog } from "@/components/passcode-dialog";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import bookmeHero from "@/assets/images/bookme-hero.jpg";
import bookmeBrandCard from "@/assets/images/bookme-brand-card.jpg";
import bookmeSetupCard from "@/assets/images/bookme-setup-card.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BookMe+ — Design Hub | UX/UI Team" },
      {
        name: "description",
        content:
          "Official BookMe+ brand guidelines and product setup specifications maintained by the UX/UI team.",
      },
      { property: "og:title", content: "BookMe+ Design Hub" },
      {
        property: "og:description",
        content: "Brand guidelines and product setup specifications for the BookMe+ team.",
      },
    ],
  }),
  component: Home,
});

const VERSION = "v1.0.0";
const LAST_UPDATED = "June 23, 2024";

const cards = [
  {
    to: "/brand",
    title: "BookMe+ Brand",
    description:
      "The official brand identity system — logo variations, color palette, typography, and usage rules that keep every surface consistent and on-brand.",
    tags: ["Logo", "Colors", "Typography", "Brand Usage"],
    image: bookmeBrandCard,
  },
  {
    to: "/product",
    title: "Product Setup Specification",
    description:
      "Foundational design tokens used across all product surfaces — spacing, grid, border radius, type scale, elevation, icons, and motion.",
    tags: ["Spacing", "Grid", "Type Scale", "Motion"],
    image: bookmeSetupCard,
  },
];

function Home() {
  const navigate = useNavigate();
  const [passcodeOpen, setPasscodeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PasscodeDialog
        open={passcodeOpen}
        onOpenChange={setPasscodeOpen}
        onSuccess={() => navigate({ to: "/product" })}
      />

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
        <SiteHeader variant="overlay" />
      </div>

      {/* Hero text */}
      <div className="px-6 lg:px-10 pt-20 pb-48 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <Reveal
          as="h1"
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]"
        >
          BookMe+
          <br />
          <span className="text-muted-foreground font-light">Design Guidelines</span>
        </Reveal>
        <div>
          <Reveal
            as="p"
            delay={0.08}
            className="text-base text-muted-foreground max-w-xl leading-relaxed"
          >
            One place for every visual standard — from brand identity to product tokens. Built for
            the UX/UI team and anyone working with the BookMe+ brand.
          </Reveal>
          <Reveal
            as="div"
            delay={0.16}
            className="mt-4 flex items-center gap-3 text-xs text-muted-foreground"
          >
            <span>{VERSION}</span>
            <Separator orientation="vertical" className="h-3" />
            <span>Updated {LAST_UPDATED}</span>
          </Reveal>
        </div>
      </div>

      {/* Cards */}
      <div className="px-6 lg:px-10 pb-48 grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <Reveal
            key={card.to}
            delay={i * 0.1}
            className="transition-transform duration-200 ease-out hover:-translate-y-1"
          >
            {card.to === "/product" ? (
              <button
                type="button"
                onClick={() => setPasscodeOpen(true)}
                className="block h-full w-full text-left"
              >
                <Card className="flex flex-col h-full hover:border-foreground/30 transition-colors cursor-pointer shadow-none overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full aspect-[3/2] object-cover"
                  />
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold tracking-tight">{card.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </button>
            ) : (
              <Link to={card.to} className="block h-full">
                <Card className="flex flex-col h-full hover:border-foreground/30 transition-colors cursor-pointer shadow-none overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full aspect-[3/2] object-cover"
                  />
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold tracking-tight">{card.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}
          </Reveal>
        ))}
      </div>

      {/* Footer */}
      <Reveal as="footer" className="mt-auto bg-[color:var(--brand)] text-white">
        <div className="px-6 lg:px-10 py-20 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between border-b border-white/15">
          <span className="text-sm text-white/70">
            © {new Date().getFullYear()} BookMe+ · UX/UI Team
          </span>

          <div className="text-sm">
            <p className="font-semibold mb-2">Talk to us or ask us anything.</p>
            <nav className="flex flex-col gap-1.5 text-white/75">
              <a
                href="mailto:hello@bookme.plus"
                className="inline-flex items-center gap-1.5 hover:text-white transition w-fit"
              >
                <ArrowRight size={14} /> Contact Us
              </a>
              <Link
                to="/brand"
                className="inline-flex items-center gap-1.5 hover:text-white transition w-fit"
              >
                <ArrowRight size={14} /> Brand Guidelines
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center gap-1.5 hover:text-white transition w-fit"
              >
                <ArrowRight size={14} /> Product Setup
              </Link>
            </nav>
          </div>

          <div className="text-sm text-white/75">
            <p className="font-semibold text-white mb-2 invisible">Links</p>
            <nav className="flex flex-col gap-1.5">
              <span className="inline-flex items-center gap-1.5 w-fit">
                <ArrowRight size={14} /> {VERSION}
              </span>
              <span className="inline-flex items-center gap-1.5 w-fit">
                <ArrowRight size={14} /> Updated {LAST_UPDATED}
              </span>
            </nav>
          </div>
        </div>

        <div className="px-6 lg:px-10 py-16 sm:py-24 overflow-hidden">
          <h2 className="font-extrabold tracking-tight leading-[0.9] text-[clamp(3rem,15vw,11rem)] whitespace-nowrap">
            BookMe+ Design
          </h2>
        </div>
      </Reveal>
    </div>
  );
}
