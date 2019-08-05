import { Component } from '@angular/core';

@Component({
  selector: 'app-background-color-page',
  template: `
    <input [(ngModel)]="color" placeholder="Color" />

    <div class="grid">
      <div class="card" [appBackgroundColor]="'blue'">
        My background is blue
      </div>
      <div class="card" [appBackgroundColor]="'red'">
        My background is red
      </div>
      <div class="card" [appBackgroundColor]="'yellow'">
        My background is yellow
      </div>

      <div class="card" [appBackgroundColor]="color">
        My background is {{ color }}
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
      }
      
      .grid {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(auto-fit, 200px);
      }

      .card {
        width: 200px;
        height: 200px;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        padding: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class BackgroundColorPageComponent {
  color = 'purple';
}
