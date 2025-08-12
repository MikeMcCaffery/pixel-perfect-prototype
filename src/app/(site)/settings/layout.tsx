import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | PixelPerfect",
};

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="min-h-[calc(100vh-4rem)] w-full bg-background text-foreground [--background:#F0F0F3] [--foreground:#1C2024]"
    >
      {children}
    </div>
  );
}

