import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Download, ArrowUpRight, Check, Copy } from "lucide-react";
import bookmeBlack from "@/assets/bookme-logo.png.asset.json";
import bookmeWhite from "@/assets/bookme-logo-dark.png.asset.json";
import bookmeViolet from "@/assets/bookme-logo-violet.png.asset.json";
import bookmeClearspace from "@/assets/bookme-clearspace.png.asset.json";
import bookmeHero from "@/assets/bookme-hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BookMe+ — Brand Guidelines | UX/UI Team" },
      { name: "description", content: "Official BookMe+ brand guidelines. Logo, color, typography and product specifications maintained by the UX/UI team." },
      { property: "og:title", content: "BookMe+ Brand Guidelines" },
      { property: "og:description", content: "Logo, color, typography and product specifications for the BookMe+ brand." },
    ],
  }),
  component: Guidelines,
});

const VERSION = "v1.0.0";
const LAST_UPDATED = "June 2, 2026";

const nav = [
  { id: "overview", label: "Overview" },
  { id: "logo", label: "Brand Logo" },
  { id: "color", label: "Brand Color" },
  { id: "typography", label: "Typography" },
  { id: "product", label: "Product Specification" },
  { id: "changelog", label: "Changelog" },
];

function Swatch({ name, hex, light = false }: { name: string; hex: string; light?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
      className="group text-left"
    >
      <div className="aspect-[5/4] rounded-xl border border-border overflow-hidden relative" style={{ background: hex }}>
        <div className={`absolute inset-x-0 bottom-0 p-3 flex items-center justify-between text-xs ${light ? "text-ink" : "text-white/90"}`}>
          <span className="opacity-0 group-hover:opacity-100 transition">{copied ? <Check size={14} /> : <Copy size={14} />}</span>
        </div>
      </div>
      <div className="mt-2.5">
        <div className="text-sm font-medium text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground tabular-nums uppercase tracking-wider">{hex}</div>
      </div>
    </button>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-16 border-b border-border last:border-0">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--brand)] mb-3">{eyebrow}</div>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8">{title}</h2>
      {children}
    </section>
  );
}

function Guidelines() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={bookmeBlack.url} alt="BookMe+" className="h-6 w-auto" />
            <span className="hidden sm:inline text-xs text-muted-foreground border-l border-border pl-3 ml-1">
              Brand Guidelines
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="hidden md:inline">Maintained by</span>
            <span className="px-2 py-1 rounded-md bg-[color:var(--brand-lighter)] text-[color:var(--brand-darker)] font-medium">UX/UI Team</span>
          </div>
        </div>
      </header>

      {/* Full-width hero */}
      <div id="overview-hero" className="w-full">
        <img src={bookmeHero.url} alt="BookMe+ Design" className="w-full h-auto block" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-10 gap-10 pt-12">
        {/* Sidebar — 30% */}
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border p-6 bg-card">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Quick Links</div>
              <nav className="flex flex-col">
                {nav.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className={`group flex items-center justify-between py-2.5 px-3 -mx-3 rounded-lg text-sm transition ${
                      active === n.id
                        ? "bg-[color:var(--brand-lighter)] text-[color:var(--brand-darker)] font-semibold"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{n.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-60 transition" />
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-border space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-mono font-medium text-foreground">{VERSION}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Last update</span>
                  <span className="font-medium text-foreground">{LAST_UPDATED}</span>
                </div>
              </div>
            </div>

            <a
              href={bookmeBlack.url}
              download
              className="mt-4 flex items-center justify-between rounded-2xl px-5 py-4 bg-[color:var(--brand)] text-white hover:bg-[color:var(--brand-darker)] transition"
            >
              <div>
                <div className="text-sm font-semibold">Download all assets</div>
                <div className="text-xs text-white/80">Logos · SVG · PNG</div>
              </div>
              <Download size={20} />
            </a>
          </div>
        </aside>

        {/* Content — 70% */}
        <main className="lg:col-span-7">
          {/* Overview */}
          <section id="overview" className="scroll-mt-28 pt-2 pb-12 border-b border-border">
            <div className="rounded-3xl overflow-hidden mb-10 border border-border">
              <img src={bookmeHero.url} alt="BookMe+ Design" className="w-full h-auto block" />
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--brand)] mb-4">BookMe+ Brand</div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              Welcome to the BookMe+ brand identity site.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              This high-level guideline informs how we bring our brand to life — aligning every team
              around our visual standards and core brand principles.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Minimalist", "Confident", "Modern", "Trustworthy"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-border text-foreground/70">{t}</span>
              ))}
            </div>
          </section>

          {/* Logo */}
          <Section id="logo" eyebrow="01 — Brand Element" title="Brand Logo">
            <p className="text-base text-muted-foreground max-w-2xl mb-8">
              The BookMe+ wordmark is our primary identifier. The italic geometry signals motion and
              momentum, while the violet "+" anchors it to our brand color.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-border bg-white aspect-[4/3] flex items-center justify-center p-8">
                <img src={bookmeBlack.url} alt="BookMe+ on white" className="max-h-16 w-auto" />
              </div>
              <div className="rounded-2xl aspect-[4/3] flex items-center justify-center p-8" style={{ background: "#1f1f1f" }}>
                <img src={bookmeWhite.url} alt="BookMe+ on black" className="max-h-16 w-auto" />
              </div>
              <div className="rounded-2xl aspect-[4/3] flex items-center justify-center p-8" style={{ background: "#6444d8" }}>
                <img src={bookmeViolet.url} alt="BookMe+ on violet" className="max-h-16 w-auto" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border p-6 bg-card">
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Clear Space</div>
                <img src={bookmeClearspace.url} alt="Clear space" className="w-full rounded-lg border border-border" />
                <p className="mt-3 text-sm text-muted-foreground">
                  Maintain padding equal to the height of the "B" on all sides.
                </p>
              </div>
              <div className="rounded-2xl border border-border p-6 bg-card">
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Download</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { fmt: "SVG", label: "Vector — scalable" },
                    { fmt: "PNG", label: "Transparent — 4x" },
                  ].map((f) => (
                    <a
                      key={f.fmt}
                      href={bookmeBlack.url}
                      download
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

            <div className="mt-6 rounded-2xl border border-border p-6 bg-card">
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Usage Rules</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {[
                  ["Do", "Use on solid, high-contrast backgrounds", true],
                  ["Do", "Respect the clear-space margin", true],
                  ["Don't", "Stretch, rotate, or recolor the wordmark", false],
                  ["Don't", "Place on busy photography without a scrim", false],
                ].map(([k, v, ok]) => (
                  <div key={v as string} className="flex gap-3">
                    <span className={`mt-0.5 text-xs font-bold px-2 py-0.5 rounded ${ok ? "bg-[color:var(--brand-lighter)] text-[color:var(--brand-darker)]" : "bg-red-50 text-red-600"}`}>
                      {k}
                    </span>
                    <span className="text-foreground/80">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Color */}
          <Section id="color" eyebrow="02 — Brand Element" title="Brand Color">
            <p className="text-base text-muted-foreground max-w-2xl mb-8">
              Violet is our primary brand color, paired with a vibrant sky-blue secondary. Use the
              tint and shade ramps for hierarchy, states, and supporting surfaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="md:col-span-2 rounded-2xl border border-border overflow-hidden">
                <div className="h-44" style={{ background: "#6444d8" }} />
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Primary</div>
                  <div className="mt-1 text-2xl font-bold text-foreground">Brand Violet</div>
                  <div className="mt-3 grid grid-cols-3 gap-4 text-xs text-muted-foreground">
                    <div><div className="font-medium text-foreground">HEX</div>#6444D8</div>
                    <div><div className="font-medium text-foreground">RGB</div>100, 68, 216</div>
                    <div><div className="font-medium text-foreground">CMYK</div>54, 69, 0, 15</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="h-44" style={{ background: "#2ebae2" }} />
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Secondary</div>
                  <div className="mt-1 text-2xl font-bold text-foreground">Sky Blue</div>
                  <div className="mt-3 space-y-0.5 text-xs text-muted-foreground">
                    <div>HEX <span className="text-foreground">#2EBAE2</span></div>
                    <div>RGB <span className="text-foreground">46, 186, 226</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Gradients</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-border">
                  <div className="h-32 gradient-brand" />
                  <div className="p-4 text-xs text-muted-foreground flex justify-between">
                    <span>Gradient 01</span>
                    <span className="font-mono">#6444D8 → #2EBAE2</span>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border">
                  <div className="h-32 gradient-deep" />
                  <div className="p-4 text-xs text-muted-foreground flex justify-between">
                    <span>Gradient 02</span>
                    <span className="font-mono">#6444D8 → #2E3192</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Violet — Tint & Shade</div>
              <div className="grid grid-cols-5 gap-3">
                <Swatch name="Darker" hex="#5036ad" />
                <Swatch name="Dark" hex="#5a3dc2" />
                <Swatch name="Brand" hex="#6444d8" />
                <Swatch name="Light" hex="#d1c7f3" light />
                <Swatch name="Lighter" hex="#f0ecfb" light />
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Sky — Tint & Shade</div>
              <div className="grid grid-cols-5 gap-3">
                <Swatch name="Darker" hex="#20829e" />
                <Swatch name="Dark" hex="#29a7cb" />
                <Swatch name="Sky" hex="#2ebae2" />
                <Swatch name="Light" hex="#c0eaf6" light />
                <Swatch name="Lighter" hex="#eaf8fc" light />
              </div>
            </div>
          </Section>

          {/* Typography */}
          <Section id="typography" eyebrow="03 — Brand Element" title="Typography">
            <p className="text-base text-muted-foreground max-w-2xl mb-8">
              Two typefaces carry our voice across markets — Poppins for English and Kantumruy Pro
              for Khmer. Both are geometric, friendly, and built for screens.
            </p>

            <div className="rounded-2xl border border-border p-8 bg-card mb-4">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">English</div>
                  <div className="text-2xl font-bold text-foreground mt-1">Poppins</div>
                </div>
                <div className="text-xs text-muted-foreground">300 · 400 · 500 · 600 · 700 · 800</div>
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

            <div className="rounded-2xl border border-border p-8 bg-card">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Khmer</div>
                  <div className="text-2xl font-bold text-foreground mt-1 font-khmer">Kantumruy Pro</div>
                </div>
                <div className="text-xs text-muted-foreground">300 · 400 · 500 · 600 · 700</div>
              </div>
              <div className="space-y-4 font-khmer">
                <div className="text-5xl font-bold tracking-tight">កក់ឆ្លាតវៃ</div>
                <div className="text-2xl font-semibold">បទពិសោធន៍កក់ទុកបែបទំនើប</div>
                <div className="text-base text-muted-foreground max-w-xl leading-relaxed">
                  អក្សរ Kantumruy Pro ផ្តល់នូវការអាននិងសម្ភារៈដែលស្អាត ច្បាស់លាស់ និង​​ទំនើបសម្រាប់ BookMe+។
                </div>
              </div>
            </div>
          </Section>

          {/* Product Specification */}
          <Section id="product" eyebrow="04 — Brand Element" title="Product Setup Specification">
            <p className="text-base text-muted-foreground max-w-2xl mb-8">
              Foundational tokens used across all product surfaces. Keep these consistent in Figma
              and code to maintain a unified experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Base spacing unit", value: "4px", note: "Multiply by 1, 2, 3, 4, 6, 8, 12" },
                { label: "Border radius", value: "10px / 16px / 24px", note: "sm · md · lg" },
                { label: "Container", value: "1400px max", note: "Padding 24px (mobile) / 40px" },
                { label: "Grid", value: "12 columns · 24px gutter", note: "30/70 layout for docs" },
                { label: "Body text", value: "16px / 1.6", note: "Poppins 400" },
                { label: "Icon stroke", value: "1.5px", note: "Lucide · 20px default" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border p-5 bg-card">
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.label}</div>
                  <div className="mt-2 text-xl font-bold text-foreground">{s.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.note}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* Changelog */}
          <Section id="changelog" eyebrow="05 — Documentation" title="Changelog">
            <div className="space-y-4">
              {[
                { v: "v1.0.0", d: "June 2, 2026", n: "Initial release of the BookMe+ brand guideline portal — logo, color, typography and product spec." },
                { v: "v0.9.0", d: "May 24, 2026", n: "Color tint & shade ramps finalized. Secondary sky palette introduced." },
                { v: "v0.5.0", d: "May 10, 2026", n: "Wordmark redesigned with italic geometry and violet '+' anchor." },
              ].map((c) => (
                <div key={c.v} className="rounded-2xl border border-border p-5 bg-card flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                  <div className="flex items-center gap-3 md:w-56 shrink-0">
                    <span className="font-mono text-sm font-semibold text-[color:var(--brand-darker)] bg-[color:var(--brand-lighter)] px-2.5 py-1 rounded-md">{c.v}</span>
                    <span className="text-xs text-muted-foreground">{c.d}</span>
                  </div>
                  <p className="text-sm text-foreground/80">{c.n}</p>
                </div>
              ))}
            </div>
          </Section>

          <footer className="py-12 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} BookMe+ · Maintained by the UX/UI Team · {VERSION}
          </footer>
        </main>
      </div>
    </div>
  );
}
