export interface MarketIndex {
  symbol: string;
  label: string;
  value: number;
  change: number;
  changePercent: number;
  spark: number[];
}

export interface TickerTag {
  symbol: string;
  changePercent: number;
}

export interface NewsItem {
  id: number;
  title: string;
  source: string;
  ago: string;
  image?: string;
  ticker?: TickerTag;
}

export interface NewsColumn {
  heading: string;
  items: NewsItem[];
}

export interface NavItem {
  label: string;
  active?: boolean;
  icon?: 'youtube' | 'x';
}
