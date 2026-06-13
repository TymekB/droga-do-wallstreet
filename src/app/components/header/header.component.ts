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
              @if (item.icon === 'youtube') {
                <a class="topnav__link topnav__icon" href="#" [attr.aria-label]="item.label" [title]="item.label">
                  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#FF0000"
                      d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z"
                    />
                    <path fill="#fff" d="M9.6 15.5V8.5l6.2 3.5-6.2 3.5Z" />
                  </svg>
                </a>
              } @else {
                <a class="topnav__link" [class.is-active]="item.active" href="#">{{ item.label }}</a>
              }
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
