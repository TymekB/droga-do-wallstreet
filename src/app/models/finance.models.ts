/** Pojedynczy indeks/rynek pokazywany na pasku notowań. */
export interface MarketIndex {
  symbol: string;
  label: string;
  value: number;
  change: number;
  changePercent: number;
  /** Punkty do mini-wykresu (sparkline). */
  spark: number[];
}

/** Tag z notowaniem tickera dołączany do newsa. */
export interface TickerTag {
  symbol: string;
  changePercent: number;
}

/** Pojedynczy artykuł / news. */
export interface NewsItem {
  id: number;
  title: string;
  source: string;
  ago: string;
  image?: string;
  ticker?: TickerTag;
}

/** Kolumna z newsami (np. "Top Stories"). */
export interface NewsColumn {
  heading: string;
  items: NewsItem[];
}

/** Pozycja w nawigacji głównej. */
export interface NavItem {
  label: string;
  active?: boolean;
  /** Gdy ustawione, zamiast etykiety renderowana jest ikona (np. 'youtube', 'x'). */
  icon?: 'youtube' | 'x';
}
