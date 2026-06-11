import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import bookmeWhite from "@/assets/images/bookme-logo-new.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/brand", label: "Brand" },
] as const;

export function SiteHeader({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlay = variant === "overlay";

  return (
    <div className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-10 pt-4">
      <header
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full border pl-4 pr-2 backdrop-blur-xl backdrop-saturate-150 transition-colors",
          overlay
            ? "border-white/15 bg-white/10 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "border-border bg-card/60 text-foreground shadow-sm",
        )}
      >
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={bookmeWhite}
            alt="BookMe+"
            className={cn("h-5 w-auto", !overlay && "invert dark:invert-0")}
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full p-1 sm:flex bg-black/70">
          {navItems.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors",
                  active
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <ThemeToggle className={overlay ? "text-white hover:bg-white/15" : ""} />
        </div>
      </header>
    </div>
  );
}
