import { Component } from '@angular/core';

@Component({
  selector: 'app-stylish-page',
  template: `
    <app-stylish></app-stylish>
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
export class StylishPageComponent {}
