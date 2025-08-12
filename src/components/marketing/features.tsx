import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Layout, Rocket } from "lucide-react";

const items = [
  {
    icon: Layout,
    title: "Reusable components",
    desc: "Compose responsive layouts quickly with shadcn-style building blocks.",
  },
  {
    icon: Code2,
    title: "Type-safe by default",
    desc: "Modern React + TypeScript setup for fast iteration.",
  },
  {
    icon: Rocket,
    title: "Deploy in minutes",
    desc: "Ship to Vercel with a single command and share with your team.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Features</h2>
          <Badge variant="secondary">Tailwind v4</Badge>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Icon className="h-5 w-5" /> {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
