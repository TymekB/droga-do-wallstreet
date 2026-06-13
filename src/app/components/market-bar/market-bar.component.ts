import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MARKETS } from '../../data/mock-data';
import { SparklineComponent } from '../sparkline/sparkline.component';

@Component({
  selector: 'ddw-market-bar',
  standalone: true,
  imports: [DecimalPipe, SparklineComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="bar">
      <div class="container bar__inner">
        <button class="region" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="var(--brand-ink)" stroke-width="2" />
            <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"
              stroke="var(--brand-ink)" stroke-width="1.4" />
          </svg>
          <span>Rynki GPW</span>
          <svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>

        <div class="quotes">
          @for (m of markets; track m.symbol) {
            <a class="quote" href="#">
              <div class="quote__meta">
                <span class="quote__label">{{ m.label }}</span>
                <span class="quote__value">{{ m.value | number: '1.2-2' }}</span>
                <span class="quote__chg" [class.up]="m.change >= 0" [class.down]="m.change < 0">
                  {{ m.change >= 0 ? '+' : '' }}{{ m.change | number: '1.2-2' }}
                  {{ m.change >= 0 ? '+' : '' }}{{ m.changePercent | number: '1.2-2' }}%
                </span>
              </div>
              <ddw-sparkline
                [data]="m.spark"
                [color]="m.change >= 0 ? upColor : downColor"
              />
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './market-bar.component.scss',
})
export class MarketBarComponent {
  readonly markets = MARKETS;
  readonly upColor = '#0b8f54';
  readonly downColor = '#d23730';
}
