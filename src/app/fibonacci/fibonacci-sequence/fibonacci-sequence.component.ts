import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

/*
  In this lesson we will learn about:
  - ngOnChanges()
*/

@Component({
  selector: 'app-fibonacci-sequence',
  template: `
    <div *ngIf="view === 'sum'">Sequence sum: {{ sum }}</div>
    <div *ngIf="view === 'sequence'">Sequence numbers: {{ seq }}</div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class FibonacciSequenceComponent implements OnChanges {
  @Input() n: number;
  @Input() view: 'sequence' | 'sum';

  seq = '';
  sum = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.n) {
      const sequence = fibonacci(changes.n.currentValue);
      this.seq = sequence.join(' ,');
      this.sum = sequence.reduce((acc, curr) => acc + curr);
    }
  }
}

function fibonacci(num: number) {
  let a = 1;
  let b = 0;
  let temp = 0;
  const arr = [];

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
    arr.push(b);
  }

  return arr;
}
