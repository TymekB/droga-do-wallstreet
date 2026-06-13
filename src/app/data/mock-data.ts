import { MarketIndex, NavItem, NewsColumn, NewsItem } from '../models/finance.models';

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Mój Portfel' },
  { label: 'Wiadomości' },
  { label: 'Rynki', active: true },
  { label: 'Analizy' },
  { label: 'Społeczność' },
  { label: 'Finanse Osobiste' },
  { label: 'Wideo' },
  { label: 'Oglądaj Teraz' },
];

export const TOP_NAV: NavItem[] = [
  { label: 'Wiadomości' },
  { label: 'Finanse', active: true },
  { label: 'YouTube', icon: 'youtube' },
  { label: 'X', icon: 'x' },
];

export const MARKETS: MarketIndex[] = [
  {
    symbol: 'MU',
    label: 'Micron',
    value: 118.42,
    change: 2.34,
    changePercent: 2.02,
    spark: [114.8, 115.6, 115.1, 116.4, 116.0, 117.3, 117.9, 118.42],
  },
  {
    symbol: '000660.KS',
    label: 'SK Hynix',
    value: 198500,
    change: 3200,
    changePercent: 1.64,
    spark: [194800, 195600, 195200, 196900, 196400, 197600, 198100, 198500],
  },
  {
    symbol: 'NASDAQ',
    label: 'Nasdaq',
    value: 25888.84,
    change: 79.18,
    changePercent: 0.31,
    spark: [25810, 25840, 25800, 25855, 25830, 25870, 25880, 25889],
  },
  {
    symbol: 'SNDK',
    label: 'Sandisk',
    value: 47.85,
    change: 1.12,
    changePercent: 2.4,
    spark: [46.2, 46.6, 46.4, 47.0, 46.8, 47.4, 47.7, 47.85],
  },
  {
    symbol: 'VIX',
    label: 'VIX',
    value: 17.68,
    change: -1.76,
    changePercent: -9.05,
    spark: [19.4, 19.1, 18.8, 18.9, 18.3, 18.0, 17.8, 17.68],
  },
  {
    symbol: 'GOLD',
    label: 'Złoto',
    value: 4238.8,
    change: 124.8,
    changePercent: 3.03,
    spark: [4114, 4140, 4135, 4180, 4205, 4220, 4232, 4239],
  },
];

export const HERO: NewsItem = {
  id: 1,
  title: 'SpaceX zyskuje blisko 20% po historycznym IPO',
  source: 'Droga Do Wallstreet',
  ago: '10 godz. temu',
  image:
    'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=70',
  ticker: { symbol: 'SPCX', changePercent: 19.22 },
};

export const HERO_LEAD =
  'Rekordowy debiut wyniósł SpaceX do grona 10 najbardziej wartościowych spółek publicznych na świecie i uczynił Elona Muska bilionerem.';

export const NEWS_COLUMNS: NewsColumn[] = [
  {
    heading: 'Najważniejsze',
    items: [
      {
        id: 10,
        title: 'Elon Musk został pierwszym bilionerem na świecie',
        source: 'Droga Do Wallstreet',
        ago: '14 godz. temu',
        image:
          'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=600&q=70',
        ticker: { symbol: 'TSLA', changePercent: 1.82 },
      },
      {
        id: 11,
        title: 'SpaceX wyprzedza Teslę jako najcenniejsza spółka w portfelu Muska',
        source: 'Bloomberg',
        ago: '9 godz. temu',
        ticker: { symbol: 'SPCX', changePercent: 19.22 },
      },
      {
        id: 12,
        title: 'Status bilionera Muska budzi sprzeciw na ulicach Nowego Jorku',
        source: 'Bloomberg',
        ago: '8 godz. temu',
        ticker: { symbol: 'JPM', changePercent: 2.31 },
      },
    ],
  },
  {
    heading: 'Rynki i Gospodarka',
    items: [
      {
        id: 20,
        title: 'Akcje rosną na fali szans na pokój z Iranem i historyczne IPO SpaceX',
        source: 'Droga Do Wallstreet',
        ago: '9 godz. temu',
        image:
          'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=70',
        ticker: { symbol: 'SPCX', changePercent: 19.22 },
      },
      {
        id: 21,
        title: 'USA zapowiadają tymczasowe porozumienie ws. otwarcia cieśniny Ormuz',
        source: 'Bloomberg',
        ago: '3 godz. temu',
      },
      {
        id: 22,
        title: 'Ropa najtaniej od początku marca po sygnałach o otwarciu Ormuz',
        source: 'Bloomberg',
        ago: '9 godz. temu',
        ticker: { symbol: 'CVX', changePercent: 0.75 },
      },
    ],
  },
  {
    heading: 'SpaceX IPO',
    items: [
      {
        id: 30,
        title: 'Dlaczego największe w historii IPO może okazać się pułapką',
        source: 'Droga Do Wallstreet',
        ago: '14 godz. temu',
        image:
          'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=600&q=70',
        ticker: { symbol: 'SPCX', changePercent: 19.22 },
      },
      {
        id: 31,
        title: 'Czy akcje SpaceX pójdą typową ścieżką po gwałtownym debiucie?',
        source: 'Droga Do Wallstreet',
        ago: '17 godz. temu',
      },
      {
        id: 32,
        title: 'Konkurencyjne spółki kosmiczne tracą, gdy SpaceX szybuje w górę',
        source: 'Droga Do Wallstreet',
        ago: '9 godz. temu',
        ticker: { symbol: 'RDW', changePercent: -11.53 },
      },
    ],
  },
];

export const POPULAR: NewsItem[] = [
  {
    id: 40,
    title: 'Byłem na proteście przeciw IPO SpaceX. Celem nie byli tylko bilionerzy — był nim Wall Street.',
    source: 'Business Insider',
    ago: '9 godz. temu',
    ticker: { symbol: 'JPM', changePercent: 2.31 },
  },
  {
    id: 41,
    title: 'Ile dziś warte byłoby 4000 zł zainwestowane w IPO SpaceX',
    source: 'Motley Fool',
    ago: '10 godz. temu',
    ticker: { symbol: 'SPCX', changePercent: 19.22 },
  },
  {
    id: 42,
    title: 'Szum wokół IPO SpaceX jest ogromny — a FOMO może zniszczyć twoją emeryturę',
    source: 'MarketWatch',
    ago: '16 godz. temu',
  },
  {
    id: 43,
    title: '4 powody, by ostrożnie podchodzić do IPO SpaceX',
    source: 'Motley Fool',
    ago: '1 dzień temu',
    ticker: { symbol: 'NVDA', changePercent: 0.16 },
  },
  {
    id: 44,
    title: 'Najbogatsi przenoszą się do małego miasteczka w Newadzie',
    source: 'Moneywise',
    ago: '18 godz. temu',
  },
  {
    id: 45,
    title: 'GM wygasza największą serię pickupów Chevy po spadku sprzedaży',
    source: 'The Auto Wire',
    ago: '16 godz. temu',
    ticker: { symbol: 'GM', changePercent: 0.8 },
  },
  {
    id: 46,
    title: 'Co robić, gdy podwyżki nie nadążają za inflacją',
    source: 'Droga Do Wallstreet',
    ago: '10 godz. temu',
  },
  {
    id: 47,
    title: 'Jim Cramer: kluczowe filary hossy zaczynają się kruszyć',
    source: 'Moneywise',
    ago: '18 godz. temu',
  },
];
