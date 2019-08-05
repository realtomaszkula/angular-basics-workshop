import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  template: `
    <h1>Counter @Component() with @Input() and @Output()</h1>
    <app-counter [count]="count" (counterChange)="count = $event"></app-counter>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
      }
    `
  ]
})
export class CounterPageComponent {
  count = 5;
}
