import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Download, Check, Copy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PasscodeDialog } from "@/components/passcode-dialog";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import bookmeBlack from "@/assets/images/bookme-logo.png";
import bookmeWhite from "@/assets/images/bookme-logo-new.png";
import bookmeViolet from "@/assets/images/bookme-logo-violet.png";
import bookmeClearspace from "@/assets/images/bookme-clearspace.png";
import misuseDarkOnViolet from "@/assets/images/bookme-misuse-dark-on-violet.png";
import misuseGradient from "@/assets/images/bookme-misuse-gradient.png";
import misuseShadow from "@/assets/images/bookme-misuse-shadow.png";
import misuseOutline from "@/assets/images/bookme-misuse-outline.png";
import misuseSkew from "@/assets/images/bookme-misuse-skew.png";
import misuseWhiteOnViolet from "@/assets/images/bookme-misuse-white-on-violet.png";
import doMonochromeViolet from "@/assets/images/bookme-do-monochrome-violet.png";
import doBlackOnWhite from "@/assets/images/bookme-do-black-on-white.png";
import doWhiteOnBlack from "@/assets/images/bookme-do-white-on-black.png";
import bookmeHero from "@/assets/images/bookme-brand-hero.jpg";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "BookMe+ Brand — Brand Guidelines | UX/UI Team" },
      {
        name: "description",
        content:
          "Official BookMe+ brand guidelines. Logo, color, typography and product specifications maintained by the UX/UI team.",
      },
      { property: "og:title", content: "BookMe+ Brand Guidelines" },
      {
        property: "og:description",
        content: "Logo, color, typography and product specifications for the BookMe+ brand.",
      },
    ],
  }),
  component: Guidelines,
});

const VERSION = "v1.0.0";
const LAST_UPDATED = "June 23, 2024";

const doExamples = [
  {
    src: doMonochromeViolet,
    label: "Use the monochrome version on complex images or multi-color backgrounds",
  },
  { src: doBlackOnWhite, label: "Keep it black on a white or a light background" },
  { src: doWhiteOnBlack, label: "Keep it white on a black or a dark background" },
];

const misuseExamples = [
  { src: misuseSkew, label: "Don't stretch, skew, or rotate the wordmark" },
  { src: misuseGradient, label: "Don't recolor with gradients or non-brand colors" },
  { src: misuseShadow, label: "Don't add drop shadows or 3D effects" },
  { src: misuseOutline, label: "Don't outline, stroke, or redraw the wordmark" },
  { src: misuseDarkOnViolet, label: "Don't place the dark wordmark on brand-colored surfaces" },
  { src: misuseWhiteOnViolet, label: "Don't place the white wordmark on brand-colored surfaces" },
];

const nav = [
  { id: "overview", label: "Overview" },
  { id: "logo", label: "Brand Logo" },
  { id: "usage", label: "Brand Usage" },
  { id: "color", label: "Brand Color" },
  { id: "typography", label: "Typography" },
  { id: "changelog", label: "Changelog" },
];

function Swatch({ name, hex, light = false }: { name: string; hex: string; light?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="group text-left"
    >
      <div
        className="aspect-[5/4] rounded-xl border border-border overflow-hidden relative"
        style={{ background: hex }}
      >
        <div
          className={`absolute inset-x-0 bottom-0 p-3 flex items-center justify-between text-xs ${light ? "text-ink" : "text-white/90"}`}
        >
          <span className="opacity-0 group-hover:opacity-100 transition">
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </span>
        </div>
      </div>
      <div className="mt-2.5">
        <div className="text-sm font-medium text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground tabular-nums uppercase tracking-wider">
          {hex}
        </div>
      </div>
    </button>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-32 border-b border-border last:border-0">
      <Reveal
        as="h2"
        className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8"
      >
        {title}
      </Reveal>
      <Reveal delay={0.1}>{children}</Reveal>
    </section>
  );
}

function Guidelines() {
  const [active, setActive] = useState("overview");
  const [passcodeOpen, setPasscodeOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PasscodeDialog
        open={passcodeOpen}
        onOpenChange={setPasscodeOpen}
        onSuccess={() => navigate({ to: "/product" })}
      />
      {/* Hero image with header overlaid */}
      <div className="relative w-full">
        <img src={bookmeHero} alt="BookMe+ Design" className="w-full h-auto block" />
        <SiteHeader variant="overlay" />
      </div>

      <div className="px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-10 gap-10 pt-12">
        {/* Sidebar — 30% */}
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <Card className="shadow-none">
              <CardContent className="pt-6">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  Quick Links
                </div>
                <nav className="flex flex-col">
                  {nav.map((n) => (
                    <a
                      key={n.id}
                      href={`#${n.id}`}
                      className={`px-3 py-2 text-sm border-l-2 transition ${
                        active === n.id
                          ? "border-[color:var(--brand)] text-[color:var(--brand-darker)] font-semibold bg-[color:var(--brand-lighter)]/50"
                          : "border-transparent text-foreground/70 hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {n.label}
                    </a>
                  ))}
                  <button
                    type="button"
                    onClick={() => setPasscodeOpen(true)}
                    className="px-3 py-2 text-sm text-left border-l-2 border-transparent text-foreground/70 hover:text-foreground hover:bg-muted transition"
                  >
                    Product Setup Specification
                  </button>
                </nav>
                <Separator className="my-4" />
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Version</span>
                    <span className="font-mono font-medium text-foreground">{VERSION}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Last update</span>
                    <span className="font-medium text-foreground">{LAST_UPDATED}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild className="mt-4 w-full h-auto py-4 justify-between">
              <a
                href="https://drive.google.com/drive/folders/1De9QBctnvi3_pW8BJVG9OMulGUzspFte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-left">
                  <div className="text-sm font-semibold">Download all assets</div>
                  <div className="text-xs opacity-80">Logos · SVG · PNG</div>
                </div>
                <Download size={20} />
              </a>
            </Button>
          </div>
        </aside>

        {/* Content — 70% */}
        <main className="lg:col-span-7">
          {/* Overview */}
          <section id="overview" className="scroll-mt-28 pt-2 pb-12 border-b border-border">
            <Reveal
              as="h1"
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]"
            >
              Welcome to the BookMe+ brand identity site.
            </Reveal>
            <Reveal
              as="p"
              delay={0.08}
              className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              This high-level guideline informs how we bring our brand to life — aligning every team
              around our visual standards and core brand principles.
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Minimalist", "Confident", "Modern", "Trustworthy"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 border border-border text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Logo */}
          <Section id="logo" title="Brand Logo">
            <p className="text-base text-muted-foreground max-w-2xl mb-8">
              The BookMe+ wordmark is our primary identifier. The italic geometry signals motion and
              momentum, while the violet "+" anchors it to our brand color.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="overflow-hidden border border-border rounded-md">
                <div
                  className="flex items-center justify-center px-16 py-10"
                  style={{ background: "#111111" }}
                >
                  <img
                    src={bookmeWhite}
                    alt="BookMe+ — Dark"
                    className="h-12 w-auto max-w-full object-contain"
                  />
                </div>
                <div className="px-5 py-3 bg-card border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    Dark — for use on dark surfaces
                  </span>
                </div>
              </div>

              <div className="overflow-hidden border border-border rounded-md">
                <div
                  className="flex items-center justify-center px-16 py-10"
                  style={{ background: "#6444d8" }}
                >
                  <img
                    src={bookmeViolet}
                    alt="BookMe+ — Violet"
                    className="h-12 w-auto max-w-full object-contain"
                  />
                </div>
                <div className="px-5 py-3 bg-card border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    Violet — for use on brand-colored surfaces
                  </span>
                </div>
              </div>

              <div className="overflow-hidden border border-border rounded-md">
                <div className="flex items-center justify-center px-16 py-10 bg-white">
                  <img
                    src={bookmeBlack}
                    alt="BookMe+ — Light"
                    className="h-12 w-auto max-w-full object-contain"
                  />
                </div>
                <div className="px-5 py-3 bg-card border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    Light — for use on white or light surfaces
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border rounded-md p-6 bg-card">
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  Clear Space
                </div>
                <img
                  src={bookmeClearspace}
                  alt="Clear space"
                  className="w-full rounded-md border border-border"
                />
                <p className="mt-3 text-sm text-muted-foreground">
                  Maintain padding equal to the height of the "B" on all sides.
                </p>
              </div>
              <div className="border border-border rounded-md p-6 bg-card">
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  Download
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      fmt: "SVG",
                      label: "Vector — scalable",
                      href: "https://drive.google.com/drive/folders/1YYb-YaOzSRIMYxLU0VT-069652x86GKK",
                    },
                    {
                      fmt: "PNG",
                      label: "Transparent — 4x",
                      href: "https://drive.google.com/drive/folders/1szb3cNuVh9JaMIVJN6b42aKFFEuNBDgN",
                    },
                  ].map((f) => (
                    <a
                      key={f.fmt}
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-border px-4 py-3.5 hover:border-[color:var(--brand)] hover:bg-[color:var(--brand-lighter)]/50 transition"
                    >
                      <div>
                        <div className="text-sm font-semibold text-foreground">{f.fmt}</div>
                        <div className="text-xs text-muted-foreground">{f.label}</div>
                      </div>
                      <Download size={16} className="text-[color:var(--brand)]" />
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Use SVG for digital & print. PNG only when vectors aren't supported.
                </p>
              </div>
            </div>
          </Section>

          {/* Brand Usage */}
          <Section id="usage" title="Brand Usage">
            <p className="text-base text-muted-foreground max-w-2xl mb-8">
              Follow these rules to keep the BookMe+ wordmark consistent, legible, and on-brand
              across every surface — product, marketing, and partner materials.
            </p>

            <div className="border border-border rounded-md p-6 bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-[color:var(--brand-lighter)] text-[color:var(--brand-darker)] hover:bg-[color:var(--brand-lighter)] shadow-none">
                  DO
                </Badge>
                <span className="text-sm font-semibold text-foreground">Recommended</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {doExamples.map((d) => (
                  <div key={d.label} className="overflow-hidden border border-border rounded-md">
                    <div className="flex items-center justify-center aspect-[5/2]">
                      <img src={d.src} alt={d.label} className="h-full w-full object-cover" />
                    </div>
                    <div className="px-4 py-3 bg-card border-t border-border">
                      <span className="text-xs text-muted-foreground">{d.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 border border-border rounded-md p-6 bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="destructive" className="shadow-none">
                  DON'T
                </Badge>
                <span className="text-sm font-semibold text-foreground">Avoid</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {misuseExamples.map((m) => (
                  <div key={m.label} className="overflow-hidden border border-border rounded-md">
                    <div className="flex items-center justify-center aspect-[5/2]">
                      <img
                        src={m.src}
                        alt={m.label}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="px-4 py-3 bg-card border-t border-border">
                      <span className="text-xs text-muted-foreground">{m.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border border-border rounded-md p-6 bg-card">
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Minimum Size
              </div>
              <p className="text-sm text-foreground/80 max-w-2xl">
                To preserve legibility, never display the wordmark smaller than{" "}
                <span className="font-semibold text-foreground">24px</span> in height on digital
                surfaces or <span className="font-semibold text-foreground">12mm</span> in print.
              </p>
            </div>
          </Section>

          {/* Color */}
          <Section id="color" title="Brand Color">
            <p className="text-base text-muted-foreground max-w-2xl mb-8">
              Violet is our primary brand color, paired with a vibrant sky-blue secondary. Use the
              tint and shade ramps for hierarchy, states, and supporting surfaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="border border-border rounded-md overflow-hidden">
                <div className="h-44" style={{ background: "#6444d8" }} />
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Primary
                  </div>
                  <div className="mt-1 text-2xl font-bold text-foreground">Brand Violet</div>
                  <div className="mt-3 grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                    <div>
                      <div className="font-medium text-foreground">HEX</div>#6444D8
                    </div>
                    <div>
                      <div className="font-medium text-foreground">RGB</div>100, 68, 216
                    </div>
                    <div>
                      <div className="font-medium text-foreground">CMYK</div>54, 69, 0, 15
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-md overflow-hidden">
                <div className="h-44" style={{ background: "#2ebae2" }} />
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Secondary
                  </div>
                  <div className="mt-1 text-2xl font-bold text-foreground">Sky Blue</div>
                  <div className="mt-3 space-y-0.5 text-xs text-muted-foreground">
                    <div>
                      HEX <span className="text-foreground">#2EBAE2</span>
                    </div>
                    <div>
                      RGB <span className="text-foreground">46, 186, 226</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                Gradients
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="overflow-hidden border border-border rounded-md">
                  <div className="h-32 gradient-brand" />
                  <div className="p-4 text-xs text-muted-foreground flex justify-between">
                    <span>Gradient 01</span>
                    <span className="font-mono">#6444D8 → #2EBAE2</span>
                  </div>
                </div>
                <div className="overflow-hidden border border-border rounded-md">
                  <div className="h-32 gradient-deep" />
                  <div className="p-4 text-xs text-muted-foreground flex justify-between">
                    <span>Gradient 02</span>
                    <span className="font-mono">#6444D8 → #2E3192</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                  Violet — Tint & Shade
                </div>
                <div className="grid grid-cols-5 gap-3">
                  <Swatch name="Darker" hex="#5036ad" />
                  <Swatch name="Dark" hex="#5a3dc2" />
                  <Swatch name="Brand" hex="#6444d8" />
                  <Swatch name="Light" hex="#d1c7f3" light />
                  <Swatch name="Lighter" hex="#f0ecfb" light />
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                  Sky — Tint & Shade
                </div>
                <div className="grid grid-cols-5 gap-3">
                  <Swatch name="Darker" hex="#20829e" />
                  <Swatch name="Dark" hex="#29a7cb" />
                  <Swatch name="Sky" hex="#2ebae2" />
                  <Swatch name="Light" hex="#c0eaf6" light />
                  <Swatch name="Lighter" hex="#eaf8fc" light />
                </div>
              </div>
            </div>
          </Section>

          {/* Typography */}
          <Section id="typography" title="Typography">
            <p className="text-base text-muted-foreground max-w-2xl mb-8">
              Two typefaces carry our voice across markets — Poppins for English and Kantumruy Pro
              for Khmer. Both are geometric, friendly, and built for screens.
            </p>

            <div className="border border-border rounded-md p-8 bg-card mb-4">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    English
                  </div>
                  <div className="text-2xl font-bold text-foreground mt-1">Poppins</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  300 · 400 · 500 · 600 · 700 · 800
                </div>
              </div>
              <div className="space-y-4 font-sans">
                <div className="text-6xl font-extrabold tracking-tight">Book smarter.</div>
                <div className="text-3xl font-semibold">A modern booking experience</div>
                <div className="text-base text-muted-foreground max-w-xl leading-relaxed">
                  The quick brown fox jumps over the lazy dog. Poppins delivers a confident,
                  geometric voice that scales beautifully from headings down to UI labels.
                </div>
              </div>
            </div>

            <div className="border border-border rounded-md p-8 bg-card">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Khmer
                  </div>
                  <div className="text-2xl font-bold text-foreground mt-1 font-khmer">
                    Kantumruy Pro
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">300 · 400 · 500 · 600 · 700</div>
              </div>
              <div className="space-y-4 font-khmer">
                <div className="text-5xl font-bold tracking-tight">កក់ឆ្លាតវៃ</div>
                <div className="text-2xl font-semibold">បទពិសោធន៍កក់ទុកបែបទំនើប</div>
                <div className="text-base text-muted-foreground max-w-xl leading-relaxed">
                  អក្សរ Kantumruy Pro ផ្តល់នូវការអាននិងសម្ភារៈដែលស្អាត ច្បាស់លាស់ និង​​ទំនើបសម្រាប់
                  BookMe+។
                </div>
              </div>
            </div>
          </Section>

          {/* Changelog */}
          <Section id="changelog" title="Changelog">
            <div className="space-y-4">
              {[
                {
                  v: "v1.0.0",
                  d: "June 23, 2024",
                  n: "Initial release of the BookMe+ brand guideline portal — logo, color, typography and product spec.",
                },
              ].map((c) => (
                <div
                  key={c.v}
                  className="border border-border rounded-md p-5 bg-card flex flex-col md:flex-row md:items-center gap-3 md:gap-6"
                >
                  <div className="flex items-center gap-3 md:w-56 shrink-0">
                    <span className="font-mono text-sm font-semibold text-[color:var(--brand-darker)] bg-[color:var(--brand-lighter)] px-2.5 py-1 rounded-md">
                      {c.v}
                    </span>
                    <span className="text-xs text-muted-foreground">{c.d}</span>
                  </div>
                  <p className="text-sm text-foreground/80">{c.n}</p>
                </div>
              ))}
            </div>
          </Section>

          <Separator />
          <footer className="py-12 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} BookMe+ · Maintained by the UX/UI Team · {VERSION}
          </footer>
        </main>
      </div>
    </div>
  );
}
