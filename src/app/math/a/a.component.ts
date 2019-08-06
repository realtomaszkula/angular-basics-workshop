import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-a',
  template: `
    <p>
      a works!
    </p>
  `,
  styles: []
})
export class AComponent {
  constructor(private math: MathService) {}
}
