import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-list-page',
  template: `
    <app-filter-list></app-filter-list>
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
export class FilterListPageComponent {}
