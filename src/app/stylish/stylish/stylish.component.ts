import { Component } from '@angular/core';

/*
  In this lesson we will learn about:
  - [ngStyle]
  - [style]
*/
@Component({
  selector: 'app-stylish',
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
      [ngStyle]="boxStyles()"
      [style.borderRadius.px]="boxBorderRadius()"
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
    `
  ]
})
export class StylishComponent {
  options = {
    withBorderRadius: false,
    withBackground: false,
    withColor: false,
    withFont: false
  };

  boxStyles() {
    const { withColor, withBackground, withFont } = this.options;
    return {
      color: withColor ? 'white' : null,
      backgroundColor: withBackground ? 'tomato' : null,
      'fontSize.px': withFont ? 24 : 12
    };
  }

  boxBorderRadius() {
    return this.options.withBorderRadius ? 8 : 0;
  }
}
