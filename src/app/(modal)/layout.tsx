import { AppFooter } from "@/components/app-footer";
import TopBanner from "@/components/modal/TopBanner";

export default function ModalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-background text-foreground [--background:#F0F0F3] [--foreground:#1C2024]">
      <TopBanner />
      <div className="min-h-[calc(100vh-72px)] w-full overflow-auto">
        {children}
      </div>
      <AppFooter userFullName="Joy Chen" paddingXClassName="px-12" />
    </div>
  );
}

