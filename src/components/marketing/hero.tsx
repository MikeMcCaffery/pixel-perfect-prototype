import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-6">
          <Badge className="bg-black text-white dark:bg-white dark:text-black">Early access</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Pixel-perfect prototypes, fast
          </h1>
          <p className="text-balance text-muted-foreground text-lg max-w-2xl">
            Build and share polished UI prototypes using React, Tailwind and shadcn-style components.
          </p>
          <div className="flex items-center gap-3">
            <Button>Get started</Button>
            <Link href="/settings">
              <Button variant="secondary">Live demo</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -z-10 top-1/2 h-[600px] -translate-y-1/2 bg-gradient-to-b from-transparent via-black/5 dark:via-white/5 to-transparent" />
    </section>
  );
}
