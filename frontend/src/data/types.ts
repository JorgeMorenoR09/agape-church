export type Lang = 'es' | 'en';

export interface Ministry {
  slug: string;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  icon: string;
}

export interface Devotional {
  slug: string;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  body: Record<Lang, string>;
  verse: Record<Lang, string>;
  verseRef: string;
  date: string; // ISO date string
}

export interface ChurchEvent {
  id: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  date: string; // ISO date string
  time?: string;
  location: Record<Lang, string>;
}
