import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import bookmeWhite from "@/assets/images/bookme-logo-new.png";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Setup Specification — BookMe+ Brand Guidelines" },
      { name: "description", content: "Foundational design tokens, spacing, grid, and component specifications for the BookMe+ product." },
    ],
  }),
  component: ProductSpec,
});

const VERSION = "v1.0.0";

const sections = [
  { id: "spacing", label: "Spacing" },
  { id: "radius", label: "Border Radius" },
  { id: "grid", label: "Grid & Layout" },
  { id: "typography-scale", label: "Type Scale" },
  { id: "elevation", label: "Elevation" },
  { id: "icons", label: "Icons" },
  { id: "motion", label: "Motion" },
];

function Token({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-border p-5 bg-card">
      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-xl font-bold text-foreground">{value}</div>
      {sub && <div className="mt-1 text-sm text-muted-foreground">{sub}</div>}
    </div>
  );
}

function SectionHead({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-8">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--brand)] mb-3">{eyebrow}</div>
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-3">{title}</h2>
      <p className="text-base text-muted-foreground max-w-2xl">{description}</p>
    </div>
  );
}

function ProductSpec() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-transparent border-b border-white/10">
        <div className="px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition mr-2">
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <span className="text-white/20">|</span>
            <img src={bookmeWhite} alt="BookMe+" className="h-6 w-auto ml-2" />
            <span className="hidden sm:inline text-xs text-white/60 border-l border-white/20 pl-3 ml-1">
              Product Setup Specification
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/70">
            <span className="hidden md:inline">Maintained by</span>
            <span className="px-2 py-1 rounded-md bg-white/15 text-white font-medium">UX/UI Team</span>
          </div>
        </div>
      </header>

      <div className="px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-10 gap-10 pt-12 pb-20">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border p-6 bg-card">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">On this page</div>
              <nav className="flex flex-col">
                {sections.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className="group flex items-center justify-between py-2.5 px-3 -mx-3 rounded-lg text-sm transition text-foreground/70 hover:text-foreground hover:bg-muted"
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
                  <span className="font-medium text-foreground">June 2, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="lg:col-span-7 space-y-16">

          {/* Page title */}
          <div className="pt-2 pb-10 border-b border-border">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--brand)] mb-4">04 — Brand Element</div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              Setup Specification
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Foundational tokens used across all product surfaces. Keep these consistent in Figma
              and code to maintain a unified, pixel-perfect experience.
            </p>
          </div>

          {/* Spacing */}
          <section id="spacing" className="scroll-mt-28">
            <SectionHead
              eyebrow="01 — Foundation"
              title="Spacing"
              description="All spacing is built on a 4px base unit. Multiply to build consistent layout rhythm."
            />
            <div className="space-y-3">
              {[
                { token: "space-1", px: "4px",  rem: "0.25rem", usage: "Icon gap, tight padding" },
                { token: "space-2", px: "8px",  rem: "0.5rem",  usage: "Inline spacing, badge padding" },
                { token: "space-3", px: "12px", rem: "0.75rem", usage: "Form field padding" },
                { token: "space-4", px: "16px", rem: "1rem",    usage: "Card padding (compact)" },
                { token: "space-6", px: "24px", rem: "1.5rem",  usage: "Card padding, section gap" },
                { token: "space-8", px: "32px", rem: "2rem",    usage: "Section vertical spacing" },
                { token: "space-12", px: "48px", rem: "3rem",   usage: "Large section padding" },
                { token: "space-16", px: "64px", rem: "4rem",   usage: "Page-level vertical spacing" },
              ].map((s) => (
                <div key={s.token} className="flex items-center gap-4 rounded-xl border border-border px-5 py-3.5 bg-card">
                  <div
                    className="shrink-0 rounded bg-[color:var(--brand-light)]"
                    style={{ width: s.px, height: "20px", minWidth: "4px" }}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-sm font-semibold text-foreground">{s.token}</span>
                    <span className="ml-3 text-sm text-muted-foreground">{s.usage}</span>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-sm font-bold text-foreground">{s.px}</div>
                    <div className="text-xs text-muted-foreground">{s.rem}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Border Radius */}
          <section id="radius" className="scroll-mt-28">
            <SectionHead
              eyebrow="02 — Foundation"
              title="Border Radius"
              description="Three radius steps give surfaces their rounded, friendly character."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "sm", value: "6px",  usage: "Badges, tags, chips" },
                { name: "md", value: "10px", usage: "Buttons, inputs, tooltips" },
                { name: "lg", value: "16px", usage: "Cards, modals, panels" },
                { name: "xl", value: "24px", usage: "Feature cards, hero blocks" },
                { name: "full", value: "9999px", usage: "Pills, avatars, progress" },
              ].map((r) => (
                <div key={r.name} className="rounded-2xl border border-border p-5 bg-card flex gap-4 items-start">
                  <div
                    className="shrink-0 w-12 h-12 border-2 border-[color:var(--brand)] bg-[color:var(--brand-lighter)]"
                    style={{ borderRadius: r.value === "9999px" ? "9999px" : r.value }}
                  />
                  <div>
                    <div className="font-mono text-sm font-semibold text-foreground">radius-{r.name}</div>
                    <div className="text-xl font-bold text-foreground">{r.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{r.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Grid & Layout */}
          <section id="grid" className="scroll-mt-28">
            <SectionHead
              eyebrow="03 — Layout"
              title="Grid & Layout"
              description="A 12-column grid with fixed gutters and a responsive container keeps layouts predictable."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Token label="Max container width" value="1400px" sub="px-6 (mobile) · px-10 (desktop)" />
              <Token label="Grid columns" value="12 columns" sub="24px gutter between columns" />
              <Token label="Docs split" value="30 / 70" sub="Sidebar 3 cols · Content 7 cols" />
              <Token label="Breakpoints" value="sm 640 · md 768 · lg 1024" sub="Tailwind default scale" />
            </div>

            {/* Visual grid */}
            <div className="rounded-2xl border border-border p-5 bg-card">
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">12-column grid preview</div>
              <div className="grid grid-cols-12 gap-1.5">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-10 rounded bg-[color:var(--brand-lighter)] border border-[color:var(--brand-light)] flex items-center justify-center">
                    <span className="text-[10px] font-mono text-[color:var(--brand-darker)]">{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-12 gap-1.5">
                <div className="col-span-3 h-8 rounded bg-[color:var(--brand)]/20 border border-[color:var(--brand)]/30 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-[color:var(--brand-darker)]">sidebar · 3</span>
                </div>
                <div className="col-span-9 h-8 rounded bg-[color:var(--brand)]/10 border border-[color:var(--brand)]/20 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-[color:var(--brand-darker)]">content · 9</span>
                </div>
              </div>
            </div>
          </section>

          {/* Type Scale */}
          <section id="typography-scale" className="scroll-mt-28">
            <SectionHead
              eyebrow="04 — Typography"
              title="Type Scale"
              description="A modular scale built for legibility across all viewport sizes."
            />
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              {[
                { role: "Display",    size: "60px", weight: "800", lh: "1.05", usage: "Hero headings" },
                { role: "H1",         size: "48px", weight: "800", lh: "1.1",  usage: "Page titles" },
                { role: "H2",         size: "36px", weight: "700", lh: "1.2",  usage: "Section headings" },
                { role: "H3",         size: "24px", weight: "700", lh: "1.3",  usage: "Card headings" },
                { role: "H4",         size: "20px", weight: "600", lh: "1.4",  usage: "Sub-headings" },
                { role: "Body LG",    size: "18px", weight: "400", lh: "1.6",  usage: "Intro paragraphs" },
                { role: "Body",       size: "16px", weight: "400", lh: "1.6",  usage: "Default body text" },
                { role: "Body SM",    size: "14px", weight: "400", lh: "1.5",  usage: "Secondary text, labels" },
                { role: "Caption",    size: "12px", weight: "500", lh: "1.4",  usage: "Captions, eyebrows, tags" },
              ].map((t, i) => (
                <div
                  key={t.role}
                  className={`flex items-center gap-4 px-5 py-4 ${i !== 0 ? "border-t border-border" : ""}`}
                >
                  <div className="w-24 shrink-0">
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="flex-1 font-sans overflow-hidden" style={{ fontSize: Math.min(parseInt(t.size), 32) + "px", fontWeight: t.weight, lineHeight: t.lh }}>
                    <span className="truncate block">Aa</span>
                  </div>
                  <div className="shrink-0 text-right space-y-0.5">
                    <div className="text-sm font-mono font-semibold text-foreground">{t.size}</div>
                    <div className="text-xs text-muted-foreground">weight {t.weight} · lh {t.lh}</div>
                    <div className="text-xs text-muted-foreground">{t.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Elevation */}
          <section id="elevation" className="scroll-mt-28">
            <SectionHead
              eyebrow="05 — Depth"
              title="Elevation"
              description="Shadow levels communicate depth and hierarchy across layered surfaces."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "0 — Flat",   shadow: "none",                                             usage: "Default surface, backgrounds" },
                { name: "1 — Raised", shadow: "0 1px 3px rgba(0,0,0,.08)",                        usage: "Cards, chips" },
                { name: "2 — Float",  shadow: "0 4px 12px rgba(0,0,0,.1)",                        usage: "Dropdowns, popovers" },
                { name: "3 — Modal",  shadow: "0 8px 32px rgba(0,0,0,.14)",                       usage: "Modals, dialogs" },
                { name: "4 — Overlay",shadow: "0 16px 48px rgba(0,0,0,.18)",                      usage: "Sheets, drawers" },
              ].map((e) => (
                <div key={e.name} className="flex flex-col gap-3">
                  <div
                    className="rounded-2xl border border-border bg-card p-6 flex items-center justify-center h-28"
                    style={{ boxShadow: e.shadow }}
                  >
                    <span className="text-sm font-semibold text-foreground">{e.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">{e.usage}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Icons */}
          <section id="icons" className="scroll-mt-28">
            <SectionHead
              eyebrow="06 — Iconography"
              title="Icons"
              description="Lucide icons keep the visual language consistent — geometric, clean, and always on-stroke."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Token label="Icon library" value="Lucide React" sub="lucide-react · latest" />
              <Token label="Default size" value="20px" sub="Use 16px for dense UI, 24px for touch targets" />
              <Token label="Stroke width" value="1.5px" sub="Never bold or outline variants" />
              <Token label="Minimum tap target" value="40 × 40px" sub="Wrap icons in a button with padding" />
            </div>
            <div className="mt-4 rounded-2xl border border-border p-5 bg-card">
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Usage rules</div>
              <ul className="space-y-2 text-sm text-foreground/80">
                {[
                  "Always use currentColor — never hardcode icon fill or stroke colors",
                  "Pair icons with a visible label whenever space allows",
                  "Keep icon weight consistent with the surrounding text weight",
                  "Use 24px icons only for primary actions in headers or CTAs",
                ].map((r) => (
                  <li key={r} className="flex gap-2.5">
                    <span className="mt-0.5 text-[color:var(--brand)] font-bold shrink-0">·</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Motion */}
          <section id="motion" className="scroll-mt-28">
            <SectionHead
              eyebrow="07 — Animation"
              title="Motion"
              description="Purposeful, restrained transitions that reinforce spatial relationships without distraction."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Token label="Default duration" value="150ms" sub="Micro-interactions, hover states" />
              <Token label="Enter duration" value="200ms" sub="Elements entering the viewport" />
              <Token label="Exit duration" value="150ms" sub="Slightly faster exits feel snappy" />
              <Token label="Easing" value="ease-out" sub="CSS cubic-bezier(0, 0, 0.2, 1)" />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Hover / focus", value: "150ms ease-out", demo: "opacity, background-color, border-color" },
                { label: "Expand / collapse", value: "200ms ease-out", demo: "height, max-height, grid-template-rows" },
                { label: "Slide in", value: "200ms ease-out", demo: "transform (translateY / translateX)" },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl border border-border p-5 bg-card">
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{m.label}</div>
                  <div className="mt-2 text-base font-bold text-foreground">{m.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.demo}</div>
                </div>
              ))}
            </div>
          </section>

          <footer className="pt-8 border-t border-border text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} BookMe+ · Maintained by the UX/UI Team · {VERSION}
          </footer>
        </main>
      </div>
    </div>
  );
}
