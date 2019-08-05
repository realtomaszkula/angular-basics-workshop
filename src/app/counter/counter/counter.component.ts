import { Component, EventEmitter, Input, Output } from '@angular/core';

/*
  In this lesson we will learn about:
  - @Component(),
  - @Input(),
  - @Output(),
  - interpolation,
  - event listeners
*/

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decrement()">-</button>
    <span>{{ count }}</span>
    <button (click)="increment()">+</button>
  `,
  styles: [`span { margin: 0 4px;}`]
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
