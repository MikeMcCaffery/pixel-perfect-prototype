'use client'
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight">PixelPerfect</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#features" className="hover:opacity-80">Features</Link>
          <Link href="#pricing" className="hover:opacity-80">Pricing</Link>
          <Link href="#faq" className="hover:opacity-80">FAQ</Link>
        </nav>
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <div className={cn("h-4 w-4", open ? "rotate-45" : "")}>≡</div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#faq">FAQ</Link>
          </div>
        </div>
      )}
    </header>
  );
}
