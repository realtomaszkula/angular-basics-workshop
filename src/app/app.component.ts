import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout class="mat-typography">
      <router-outlet></router-outlet>
    </app-layout>
  `,
  styles: [
    `
      router-outlet + * {
        display: block;
        padding: 16px;
      }
    `
  ]
})
export class AppComponent {}
