import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { TickerTag } from '../../models/finance.models';

/** Mała "pigułka" z symbolem tickera i zmianą procentową (zielona/czerwona). */
@Component({
  selector: 'ddw-ticker-tag',
  standalone: true,
  imports: [DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (tag(); as t) {
      <span class="tag" [class.up]="t.changePercent >= 0" [class.down]="t.changePercent < 0">
        <span class="sym">{{ t.symbol }}</span>
        <span class="pct">{{ t.changePercent >= 0 ? '+' : '' }}{{ t.changePercent | number: '1.2-2' }}%</span>
      </span>
    }
  `,
  styles: [
    `
      .tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 2px 8px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        line-height: 1.6;
      }
      .sym {
        color: var(--text);
        font-weight: 700;
      }
      .up {
        background: rgba(47, 206, 143, 0.14);
      }
      .up .pct {
        color: var(--up);
      }
      .down {
        background: rgba(255, 90, 95, 0.14);
      }
      .down .pct {
        color: var(--down);
      }
    `,
  ],
})
export class TickerTagComponent {
  private readonly _tag = signal<TickerTag | null>(null);
  @Input({ required: true })
  set value(v: TickerTag | undefined) {
    this._tag.set(v ?? null);
  }
  readonly tag = computed(() => this._tag());
}
