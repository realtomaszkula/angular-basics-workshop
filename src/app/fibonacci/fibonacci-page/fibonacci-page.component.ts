import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci-page',
  template: `
    <button (click)="toggle()">Change View</button>
    <input type="number" [(ngModel)]="n" />
    <app-fibonacci-sequence [view]="view" [n]="n"></app-fibonacci-sequence>
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
export class FibonacciPageComponent {
  view: 'sequence' | 'sum' = 'sum';
  n = 10;

  toggle() {
    this.view = this.view === 'sequence' ? 'sum' : 'sequence';
  }
}
