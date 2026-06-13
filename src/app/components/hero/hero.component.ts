import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HERO, HERO_LEAD } from '../../data/mock-data';
import { TickerTagComponent } from '../ticker-tag/ticker-tag.component';

@Component({
  selector: 'ddw-hero',
  standalone: true,
  imports: [TickerTagComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="hero">
      <a class="hero__media" href="#">
        <img [src]="hero.image" [alt]="hero.title" loading="eager" />
      </a>

      <div class="hero__body">
        <a href="#"><h1 class="hero__title">{{ hero.title }}</h1></a>
        <p class="hero__lead">{{ lead }}</p>
        <div class="hero__meta">
          <span class="hero__source">{{ hero.source }}</span>
          <span class="dot">•</span>
          <span class="hero__ago">{{ hero.ago }}</span>
          @if (hero.ticker) {
            <ddw-ticker-tag [value]="hero.ticker" />
          }
        </div>
      </div>
    </article>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly hero = HERO;
  readonly lead = HERO_LEAD;
}
