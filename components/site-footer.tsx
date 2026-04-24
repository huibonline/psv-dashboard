import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium">PSV Dashboard</p>
            <p className="text-sm text-muted-foreground">
              Dummy data in fase 1 — echte data volgt later.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Link className="hover:text-foreground" href="/">
              Nieuws
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link className="hover:text-foreground" href="/selectie">
              Selectie
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link className="hover:text-foreground" href="/blessures">
              Blessures
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Niet gelieerd aan PSV. Voor persoonlijk gebruik.
        </p>
      </div>
    </footer>
  );
}

