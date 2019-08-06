import { Component } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-c',
  template: `
    <p>
      c works!
    </p>
  `,
  styles: []
})
export class CComponent {
  constructor(private math: MathService) {}
}
