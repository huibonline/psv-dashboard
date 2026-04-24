"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DummyInjury } from "@/lib/dummy-data";

type Props = {
  items: DummyInjury[];
};

const statusVariant: Record<DummyInjury["status"], "default" | "secondary"> = {
  Uit: "default",
  Vraagteken: "secondary",
  "Terug in training": "secondary",
};

export function InjuryList({ items }: Props) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((injury) => (
        <Card key={injury.id}>
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <Badge variant={statusVariant[injury.status]}>{injury.status}</Badge>
              <span className="text-xs text-muted-foreground">
                Verwacht: {injury.expectedReturn}
              </span>
            </div>
            <CardTitle className="text-base leading-6">{injury.player}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Klacht: <span className="text-foreground">{injury.issue}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

