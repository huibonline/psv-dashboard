"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { DummyNewsItem } from "@/lib/dummy-data";

type Props = {
  items: DummyNewsItem[];
};

const categoryVariant: Record<DummyNewsItem["category"], "default" | "secondary"> = {
  Transfer: "default",
  Voorbeschouwing: "secondary",
  Interview: "secondary",
  Blessures: "secondary",
};

export function NewsCardGrid({ items }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <Badge variant={categoryVariant[item.category]}>{item.category}</Badge>
              <span className="text-xs text-muted-foreground">{item.publishedLabel}</span>
            </div>
            <CardTitle className="text-base leading-6">{item.title}</CardTitle>
            <CardDescription>{item.source}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

