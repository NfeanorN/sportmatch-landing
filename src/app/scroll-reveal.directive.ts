import { Directive, ElementRef, inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  /** Stagger delay in ms before transition starts */
  @Input() appScrollRevealDelay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly r = inject(Renderer2);
  private io?: IntersectionObserver;

  ngOnInit(): void {
    this.r.addClass(this.el.nativeElement, 'reveal');
    if (this.appScrollRevealDelay) {
      this.el.nativeElement.style.transitionDelay = `${this.appScrollRevealDelay}ms`;
    }
    this.io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          this.r.addClass(this.el.nativeElement, 'reveal--visible');
          this.io?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    );
    this.io.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
