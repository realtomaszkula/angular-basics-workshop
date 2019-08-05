import { Directive, HostBinding, HostListener, Input } from '@angular/core';

/* In this lesson we will learn about:
  - @Directive()
  - @HostBinding(),
  - @HostListener()
*/

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {
  @Input('appBackgroundColor') color = '';

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.hasColor ? this.color : null;
  }

  private hasColor = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hasColor = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hasColor = false;
  }
}
