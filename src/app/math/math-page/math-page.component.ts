import { Component } from '@angular/core';

@Component({
  selector: 'app-math-page',
  template: `
    <h1>Page with @Injectable() service</h1>
    <app-a></app-a>
    <app-b></app-b>
    <app-c></app-c>
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
export class MathPageComponent {}
