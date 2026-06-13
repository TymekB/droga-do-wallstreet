import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';

@Component({
  selector: 'ddw-sparkline',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      class="spark"
      [attr.width]="width"
      [attr.height]="height"
      [attr.viewBox]="'0 0 ' + width + ' ' + height"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        [attr.points]="fillPoints()"
        [attr.fill]="color + '22'"
        stroke="none"
      />
      <polyline
        [attr.points]="linePoints()"
        fill="none"
        [attr.stroke]="color"
        stroke-width="1.5"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </svg>
  `,
  styles: [
    `
      .spark {
        display: block;
      }
    `,
  ],
})
export class SparklineComponent {
  @Input() width = 84;
  @Input() height = 34;
  @Input() color = '#2fce8f';

  private readonly _data = signal<number[]>([]);
  @Input({ required: true })
  set data(value: number[]) {
    this._data.set(value ?? []);
  }

  private readonly coords = computed(() => {
    const data = this._data();
    if (data.length < 2) {
      return [] as Array<{ x: number; y: number }>;
    }
    const min = Math.min(...data);
    const max = Math.max(...data);
    const span = max - min || 1;
    const pad = 2;
    const usableH = this.height - pad * 2;
    const step = this.width / (data.length - 1);

    return data.map((v, i) => ({
      x: i * step,
      y: pad + (1 - (v - min) / span) * usableH,
    }));
  });

  readonly linePoints = computed(() =>
    this.coords()
      .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
      .join(' '),
  );

  readonly fillPoints = computed(() => {
    const c = this.coords();
    if (!c.length) {
      return '';
    }
    const line = c.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    return `0,${this.height} ${line} ${this.width},${this.height}`;
  });
}
