export type DummyNewsItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedLabel: string;
  category: "Transfer" | "Voorbeschouwing" | "Interview" | "Blessures";
};

export const dummyNews: DummyNewsItem[] = [
  {
    id: "news-1",
    title: "PSV wint overtuigend en blijft in de race",
    summary:
      "Een solide optreden met veel druk naar voren. In fase 2 vervangen we deze tekst door echte artikelen.",
    source: "PSV Dashboard (dummy)",
    publishedLabel: "vandaag",
    category: "Voorbeschouwing",
  },
  {
    id: "news-2",
    title: "Transfergerucht: PSV volgt jonge vleugelspeler",
    summary:
      "Geruchtenmolen draait. Later vullen we dit met echte bronnen en linkjes.",
    source: "PSV Dashboard (dummy)",
    publishedLabel: "gisteren",
    category: "Transfer",
  },
  {
    id: "news-3",
    title: "Interview: 'We voelen de energie in het Philips Stadion'",
    summary:
      "Een korte quote en context. In fase 2 maken we dit dynamisch en archiveren we items in SQLite.",
    source: "PSV Dashboard (dummy)",
    publishedLabel: "2 dagen geleden",
    category: "Interview",
  },
  {
    id: "news-4",
    title: "Blessure-update: enkele twijfelgevallen richting weekend",
    summary:
      "Dummy blessure-update. Straks komt dit van een scraper en/of API-bronnen.",
    source: "PSV Dashboard (dummy)",
    publishedLabel: "3 dagen geleden",
    category: "Blessures",
  },
];

export type DummyPlayer = {
  id: string;
  name: string;
  position: "Keeper" | "Verdediger" | "Middenvelder" | "Aanvaller";
  number: number;
  status: "Fit" | "Twijfelachtig";
};

export const dummyPlayers: DummyPlayer[] = [
  { id: "p-1", name: "Walter Benítez", position: "Keeper", number: 1, status: "Fit" },
  { id: "p-2", name: "Olivier Boscagli", position: "Verdediger", number: 18, status: "Fit" },
  { id: "p-3", name: "Joey Veerman", position: "Middenvelder", number: 23, status: "Fit" },
  { id: "p-4", name: "Luuk de Jong", position: "Aanvaller", number: 9, status: "Twijfelachtig" },
];

export type DummyInjury = {
  id: string;
  player: string;
  issue: string;
  expectedReturn: string;
  status: "Uit" | "Vraagteken" | "Terug in training";
};

export const dummyInjuries: DummyInjury[] = [
  {
    id: "i-1",
    player: "Speler A",
    issue: "Hamstring",
    expectedReturn: "onbekend",
    status: "Uit",
  },
  {
    id: "i-2",
    player: "Speler B",
    issue: "Enkel",
    expectedReturn: "volgende week",
    status: "Vraagteken",
  },
  {
    id: "i-3",
    player: "Speler C",
    issue: "Herstel na tik",
    expectedReturn: "dit weekend",
    status: "Terug in training",
  },
];

