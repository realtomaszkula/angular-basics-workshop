import { Component } from '@angular/core';

@Component({
  selector: 'app-iffy-page',
  template: `
    <h1>*ngIf</h1>
    <app-iffy></app-iffy>
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
export class IffyPageComponent {}
