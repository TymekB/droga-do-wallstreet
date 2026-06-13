# Droga Do Wallstreet

Portal finansowy w stylu Yahoo Finance, zbudowany w **Angular 17** (standalone
components, sygnały, SCSS). Kolor przewodni: `#fcad03`.

## Wymagania

- **Node.js 18+** (projekt testowany na 18.20.x). Domyślny Node 16 w systemie jest
  za stary dla Angular CLI 17 — użyj `nvm use 18`.

## Uruchomienie

```bash
nvm use 18
npm install
npm start
```

Aplikacja wystartuje na <http://localhost:4200>.

## Build produkcyjny

```bash
npm run build
```

Wynik trafia do `dist/droga-do-wallstreet`.

## Struktura

```
src/app/
├─ app.component.ts          # layout: header + market bar + hero + kolumny + sidebar + footer
├─ models/                   # interfejsy domenowe (MarketIndex, NewsItem, ...)
├─ data/mock-data.ts         # dane demonstracyjne (PL)
└─ components/
   ├─ header/                # logo, wyszukiwarka, nawigacja
   ├─ market-bar/            # pasek notowań (WIG20, Nasdaq, VIX, Złoto...)
   ├─ sparkline/             # mini-wykres SVG (reużywalny)
   ├─ ticker-tag/            # pigułka symbol + zmiana %
   ├─ hero/                  # główny news
   ├─ news-column/           # kolumna newsów (Najważniejsze / Rynki / SpaceX IPO)
   └─ popular/               # sidebar "Popularne"
```

## Uwagi

- Wszystkie komponenty są `standalone` z `ChangeDetectionStrategy.OnPush`.
- Dane są statyczne (mock) — łatwo podmienić na serwis HTTP zwracający te same modele.
- Layout jest responsywny (breakpointy 1024 / 720 / 560 px).
