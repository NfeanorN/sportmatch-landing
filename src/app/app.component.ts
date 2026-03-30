import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  selector: 'app-root',
  imports: [ScrollRevealDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('heroLine', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(24px)' }),
        animate(
          '0.75s 0.1s cubic-bezier(0.22, 1, 0.36, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
    trigger('heroSub', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        animate(
          '0.7s 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
    trigger('heroCtas', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(14px)' }),
        animate(
          '0.65s 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  readonly year = new Date().getFullYear();
  navScrolled = false;
  navOpen = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.navScrolled = window.scrollY > 48;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (typeof window !== 'undefined' && window.innerWidth >= 900) {
      this.closeNav();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocKeydown(ev: KeyboardEvent): void {
    if (ev.key === 'Escape' && this.navOpen) {
      this.closeNav();
    }
  }

  toggleNav(): void {
    this.navOpen = !this.navOpen;
    this.syncBodyScrollLock();
  }

  closeNav(): void {
    if (!this.navOpen) {
      return;
    }
    this.navOpen = false;
    this.syncBodyScrollLock();
  }

  private syncBodyScrollLock(): void {
    if (typeof document === 'undefined') {
      return;
    }
    document.body.style.overflow = this.navOpen ? 'hidden' : '';
  }
}
