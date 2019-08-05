import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-page',
  template: `
    <h1>Timer</h1>
    <button (click)="show = !show">Toggle</button>
    <app-timer *ngIf="show"></app-timer>
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
export class TimerPageComponent {
  show = true;
}
