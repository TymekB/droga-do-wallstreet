import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PRIMARY_NAV, TOP_NAV } from '../../data/mock-data';

@Component({
  selector: 'ddw-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="hdr">
      <div class="topbar">
        <div class="container topbar__inner">
          <a class="logo" href="#" aria-label="Droga Do Wallstreet — strona główna">
            <span class="logo__text">
              <span class="logo__a">Droga&nbsp;Do</span><span class="logo__b">Wallstreet</span>
            </span>
          </a>

          <form class="search" role="search" (submit)="$event.preventDefault()">
            <input
              class="search__input"
              type="search"
              placeholder="Szukaj wiadomości, spółek lub tickerów"
              aria-label="Szukaj"
            />
            <button class="search__btn" type="submit" aria-label="Szukaj">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="#0b0e11" stroke-width="2" />
                <path d="M20 20l-3.5-3.5" stroke="#0b0e11" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </form>

          <nav class="topnav" aria-label="Sekcje serwisu">
            @for (item of topNav; track item.label) {
              <a class="topnav__link" [class.is-active]="item.active" href="#">{{ item.label }}</a>
            }
          </nav>
        </div>
      </div>

      <div class="mainnav">
        <div class="container">
          <nav class="mainnav__inner" aria-label="Nawigacja główna">
            @for (item of primaryNav; track item.label) {
              <a class="mainnav__link" [class.is-active]="item.active" href="#">{{ item.label }}</a>
            }
          </nav>
        </div>
      </div>
    </header>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly topNav = TOP_NAV;
  readonly primaryNav = PRIMARY_NAV;
}
