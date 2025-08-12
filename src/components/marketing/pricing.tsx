import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tiers = [
  { name: "Hobby", price: "$0", perks: ["Basic components", "Community support"] },
  { name: "Pro", price: "$19", perks: ["All components", "Email support", "Team sharing"] },
  { name: "Enterprise", price: "Contact", perks: ["Custom components", "SLA", "Onboarding"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-black/[.02] dark:bg-white/[.03]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">Pricing</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Card key={t.name}>
              <CardHeader>
                <CardTitle className="text-xl">{t.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">{t.price}</div>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {t.perks.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  leftIcon={<img src="/images/icon_small_edit_button_x2.png" alt="" className="h-4 w-4" aria-hidden="true" />}
                >
                  Choose {t.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
