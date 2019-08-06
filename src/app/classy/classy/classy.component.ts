import { Component } from '@angular/core';

/*
  In this lesson we will learn about:
  - [ngClass]
  - [class]
*/
@Component({
  selector: 'app-classy',
  template: `
    <input id="with-font" type="checkbox" [(ngModel)]="options.withFont" />
    <label for="with-font">With Font Size</label>
    <input
      id="with-background"
      type="checkbox"
      [(ngModel)]="options.withBackground"
    />
    <label for="with-background">With Background</label>
    <input id="with-color" type="checkbox" [(ngModel)]="options.withColor" />
    <label for="with-color">With Color</label>
    <input
      id="with-border-radius"
      type="checkbox"
      [(ngModel)]="options.withBorderRadius"
    />
    <label for="with-border-radius">With Border Radius</label>

    <div
      class="box"
      [ngClass]="boxClasses()"
      [class.radius]="boxBorderRadius()"
    >
      Box
    </div>
  `,
  styles: [
    `
      .box {
        border: 1px solid black;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .font {
        font-size: 24px;
      }

      .color {
        color: white;
      }

      .background {
        background-color: tomato;
      }

      .radius {
        border-radius: 8px;
      }
    `
  ]
})
export class ClassyComponent {
  options = {
    withBorderRadius: false,
    withBackground: false,
    withColor: false,
    withFont: false
  };

  boxClasses() {
    const { withColor, withBackground, withFont } = this.options;
    return {
      color: withColor ? 'color' : null,
      background: withBackground ? 'background' : null,
      font: withFont ? 'font' : null
    };
  }

  boxBorderRadius() {
    return this.options.withBorderRadius ? 'radius' : null;
  }
}
