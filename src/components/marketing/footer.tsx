export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} PixelPerfect. All rights reserved.
      </div>
    </footer>
  );
}
