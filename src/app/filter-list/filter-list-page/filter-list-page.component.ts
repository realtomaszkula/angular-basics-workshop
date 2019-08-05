import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-list-page',
  template: `
    <h1>Filter List with [ngModel]</h1>
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
