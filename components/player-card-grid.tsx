"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DummyPlayer } from "@/lib/dummy-data";

type Props = {
  players: DummyPlayer[];
};

const statusVariant: Record<DummyPlayer["status"], "default" | "secondary"> = {
  Fit: "secondary",
  Twijfelachtig: "default",
};

export function PlayerCardGrid({ players }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {players.map((player) => (
        <Card key={player.id} className="overflow-hidden">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <Badge variant="outline">#{player.number}</Badge>
              <Badge variant={statusVariant[player.status]}>{player.status}</Badge>
            </div>
            <CardTitle className="text-base leading-6">{player.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Positie: <span className="text-foreground">{player.position}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

