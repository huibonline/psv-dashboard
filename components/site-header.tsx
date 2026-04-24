"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { href: "/", label: "Nieuws" },
  { href: "/selectie", label: "Selectie" },
  { href: "/blessures", label: "Blessures" },
] as const;

function PsvLogo() {
  return (
    <div className="grid h-11 w-11 place-items-center">
      <Image
        src="/psv-logo.svg"
        alt="PSV Eindhoven logo"
        width={44}
        height={44}
        priority
        className="h-11 w-11 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <PsvLogo />
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold tracking-tight">
                PSV Dashboard
              </span>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                fase 1
              </Badge>
            </div>
            <p className="hidden text-sm text-muted-foreground sm:block">
              Persoonlijke hub voor PSV Eindhoven
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "bg-accent text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

