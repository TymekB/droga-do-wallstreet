import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NEWS_COLUMNS } from './data/mock-data';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MarketBarComponent } from './components/market-bar/market-bar.component';
import { NewsColumnComponent } from './components/news-column/news-column.component';
import { PopularComponent } from './components/popular/popular.component';

@Component({
  selector: 'ddw-root',
  standalone: true,
  imports: [
    HeaderComponent,
    MarketBarComponent,
    HeroComponent,
    NewsColumnComponent,
    PopularComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ddw-header />
    <ddw-market-bar />

    <main class="container layout">
      <div class="layout__main">
        <ddw-hero />
        <hr class="sep" />
        <div class="columns">
          @for (col of newsColumns; track col.heading) {
            <ddw-news-column [column]="col" />
          }
        </div>
      </div>

      <div class="layout__side">
        <ddw-popular />
      </div>
    </main>

    <footer class="foot">
      <div class="container foot__inner">
        <span class="foot__brand">Droga Do Wallstreet</span>
        <span class="foot__note">
          Dane wyłącznie demonstracyjne. © {{ year }} — projekt poglądowy inspirowany Yahoo Finance.
        </span>
      </div>
    </footer>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly newsColumns = NEWS_COLUMNS;
  readonly year = 2026;
}
