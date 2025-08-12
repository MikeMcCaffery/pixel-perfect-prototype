import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { Pricing } from "@/components/marketing/pricing";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
}

