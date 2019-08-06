import { Component } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-b',
  template: `
    <p>
      b works!
    </p>
  `,
  styles: []
})
export class BComponent {
  constructor(private math: MathService) {}
}
