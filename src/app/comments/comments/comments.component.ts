import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren
} from '@angular/core';

/* In this lesson we will learn about:
  - ngAfterViewInit()
  - @ViewChildren()
  - ElementRef
*/
@Component({
  selector: 'app-comments',
  template: `
    <button (click)="scrollToLast()">Scroll to last</button>
    <h1>Comments</h1>
    <ul>
      <li *ngFor="let c of comments" #comment>{{ c }}</li>
    </ul>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      ul {
        width: 300px;
        max-height: 300px;
        overflow-y: scroll;
      }
    `
  ]
})
export class CommentsComponent implements AfterViewInit {
  @Input() comments: string[];
  @ViewChildren('comment') commentEls: QueryList<ElementRef<HTMLLIElement>>;

  ngAfterViewInit() {
    this.scrollToLast();
  }

  scrollToLast() {
    if (this.commentEls.last) {
      this.commentEls.last.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
