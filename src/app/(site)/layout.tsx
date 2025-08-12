import { Navbar } from "@/components/marketing/navbar";
import { AppFooter } from "@/components/app-footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <AppFooter userFullName="Joy Chen" />
    </>
  );
}

