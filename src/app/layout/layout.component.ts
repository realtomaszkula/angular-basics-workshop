import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        fixedInViewport
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="(isHandset$ | async) === false"
      >
        <mat-toolbar>Menu</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item routerLink="/counter">Counter</a>
          <a mat-list-item routerLink="/iffy">Iffy</a>
          <a mat-list-item routerLink="/table">Table</a>
          <a mat-list-item routerLink="/math">Math</a>
          <a mat-list-item routerLink="/filter-list">Filter List</a>
          <a mat-list-item routerLink="/stylish">Stylish</a>
          <a mat-list-item routerLink="/classy">Classy</a>
          <a mat-list-item routerLink="/background-color">Background Color</a>
          <a mat-list-item routerLink="/person-name">Person Name</a>
          <a mat-list-item routerLink="/card">Card</a>
          <a mat-list-item routerLink="/timer">Timer</a>
          <a mat-list-item routerLink="/fibonacci">Fibonacci</a>
          <a mat-list-item routerLink="/comments">Comments</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async"
          >
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span>Angular Basics Workshop</span>
        </mat-toolbar>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .sidenav-container {
        height: 100%;
      }

      .sidenav {
        width: 200px;
      }

      .sidenav .mat-toolbar {
        background: inherit;
      }

      .mat-toolbar.mat-primary {
        position: sticky;
        top: 0;
        z-index: 1;
      }
    `
  ]
})
export class LayoutComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      startWith(this.breakpointObserver.isMatched(Breakpoints.Handset)),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
