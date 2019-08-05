import { Component } from '@angular/core';

/* In this lesson we will learn about:
  - :host
  - <ng-content>
  - <ng-content select="">
*/
@Component({
  selector: 'app-card',
  template: `
    <header>
      <ng-content select=".header"></ng-content>
    </header>
    <section>
      <ng-content></ng-content>
    </section>
    <footer>
      <ng-content select=".footer"></ng-content>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        max-width: 264px;
      }

      header,
      footer {
        padding: 16px;
      }

      section {
        padding: 0 16px;
      }
    `
  ]
})
export class CardComponent {}
