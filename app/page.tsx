import { NewsCardGrid } from "@/components/news-card-grid";
import { dummyNews } from "@/lib/dummy-data";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Laatste PSV-nieuws
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          Alles wat jij belangrijk vindt op één plek. In fase 1 tonen we nog
          dummy nieuwsitems; later koppelen we echte bronnen en scraping.
        </p>
      </div>

      <section className="mt-8">
        <NewsCardGrid items={dummyNews} />
      </section>
    </div>
  );
}
