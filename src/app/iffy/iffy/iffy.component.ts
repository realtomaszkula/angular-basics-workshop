import { Component } from '@angular/core';

@Component({
  selector: 'app-iffy',
  template: `
    <button (click)="isLooking = !isLooking">Toggle</button>
    <span *ngIf="isLooking">😍</span>
    <span *ngIf="!isLooking">🙈</span>
  `,
  styles: []
})
export class IffyComponent {
  isLooking = true;
}
