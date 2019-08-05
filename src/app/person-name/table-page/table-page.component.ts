import { Component } from '@angular/core';

@Component({
  selector: 'app-table-page',
  template: `
    <h1>Emoji Table with *ngFor</h1>
    <app-table></app-table>
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
export class TablePageComponent {}
