import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NewsColumn } from '../../models/finance.models';
import { TickerTagComponent } from '../ticker-tag/ticker-tag.component';

@Component({
  selector: 'ddw-news-column',
  standalone: true,
  imports: [TickerTagComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (column) {
      <section class="col">
        <a class="col__head" href="#">
          <h2>{{ column.heading }}</h2>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>

        @for (item of column.items; track item.id; let first = $first) {
          <article class="item" [class.item--lead]="first">
            @if (item.image) {
              <a class="item__media" href="#">
                <img [src]="item.image" [alt]="item.title" loading="lazy" />
              </a>
            }
            <a href="#"><h3 class="item__title">{{ item.title }}</h3></a>
            <div class="item__meta">
              <span class="item__source">{{ item.source }}</span>
              <span class="dot">•</span>
              <span class="item__ago">{{ item.ago }}</span>
              @if (item.ticker) {
                <ddw-ticker-tag [value]="item.ticker" />
              }
            </div>
          </article>
        }
      </section>
    }
  `,
  styleUrl: './news-column.component.scss',
})
export class NewsColumnComponent {
  @Input({ required: true }) column!: NewsColumn;
}
