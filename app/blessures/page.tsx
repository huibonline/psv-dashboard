import { InjuryList } from "@/components/injury-list";
import { dummyInjuries } from "@/lib/dummy-data";

export const metadata = {
  title: "Blessures",
};

export default function BlessuresPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Blessures
        </h1>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          Overzicht van blessures (dummy data). Later vervangen we dit door
          actuele updates en historische status.
        </p>
      </div>

      <section className="mt-8">
        <InjuryList items={dummyInjuries} />
      </section>
    </div>
  );
}

