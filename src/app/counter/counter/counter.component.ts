import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decrement()">-</button>
    <span>{{ count }}</span>
    <button (click)="increment()">+</button>
  `,
  styles: []
})
export class CounterComponent {
  @Input()
  count = 0;

  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.counterChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.counterChange.emit(this.count);
  }
}
