import { ChangeDetectionStrategy, Component } from '@angular/core';
import { POPULAR } from '../../data/mock-data';
import { TickerTagComponent } from '../ticker-tag/ticker-tag.component';

@Component({
  selector: 'ddw-popular',
  standalone: true,
  imports: [TickerTagComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aside class="pop">
      <a class="pop__head" href="#">
        <h2>Popularne</h2>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>

      @for (item of items; track item.id) {
        <article class="pop__item">
          <a href="#"><h3 class="pop__title">{{ item.title }}</h3></a>
          <div class="pop__meta">
            <span class="pop__source">{{ item.source }}</span>
            <span class="dot">•</span>
            <span class="pop__ago">{{ item.ago }}</span>
            @if (item.ticker) {
              <ddw-ticker-tag [value]="item.ticker" />
            }
          </div>
        </article>
      }
    </aside>
  `,
  styleUrl: './popular.component.scss',
})
export class PopularComponent {
  readonly items = POPULAR;
}
