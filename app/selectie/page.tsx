import { PlayerCardGrid } from "@/components/player-card-grid";
import { dummyPlayers } from "@/lib/dummy-data";

export const metadata = {
  title: "Selectie",
};

export default function SelectiePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Selectie
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          Dummy selectiekaarten als placeholder. Later vullen we dit met echte
          spelersdata (incl. posities, statistieken, contracten).
        </p>
      </div>

      <section className="mt-8">
        <PlayerCardGrid players={dummyPlayers} />
      </section>
    </div>
  );
}

