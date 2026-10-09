import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { FinalCta, PageHero } from "@/components/site/Sections";
import { SERVICES } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/before-after")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Before & After Cleaning Results — Shine & Co." },
      { name: "description", content: "Explore illustrative before and after comparisons for home, office, party and move cleaning." },
      { property: "og:title", content: "Before & After — Shine & Co." },
      { property: "og:description", content: "See the difference a professional clean makes." },
    ],
  }),
  component: Page,
});

function Page() {
  const [active, setActive] = useState<string>("regular");
  const s = SERVICES.find((x) => x.slug === active);
  if (!s) return null;
  return (
    <>
      <PageHero eyebrow="Before & After" title="A fresh start for every space" sub="AI-created illustrative cleaning comparisons, not customer project photos." />
      <section className="container-x py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {SERVICES.map((x) => (
            <Button key={x.slug} variant={active === x.slug ? "hero" : "outline"} aria-pressed={active === x.slug} onClick={() => setActive(x.slug)} className="rounded-full">{x.name}</Button>
          ))}
        </div>
        <div className="mx-auto max-w-5xl"><BeforeAfter key={s.slug} before={s.before} after={s.after} alt={s.name} /></div>
      </section>
      <FinalCta />
    </>
  );
}
