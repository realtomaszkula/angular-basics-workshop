import { Component } from '@angular/core';

@Component({
  selector: 'app-classy-page',
  template: `
    <h1>Classy Box with [ngClass] and [class]</h1>
    <app-classy></app-classy>
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
export class ClassyPageComponent {}
