import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

/*
  In this lesson we will learn about:
  - OnInit()
  - OnDestroy()
  - DatePipe
  - potential memory leaks
*/

@Component({
  selector: 'app-timer',
  template: `
    {{ date | date: 'mediumTime' }}
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 16px;
      }
    `
  ]
})
export class TimerComponent implements OnInit, OnDestroy {
  date = new Date();

  @Output()
  dateChange = new EventEmitter<Date>();

  private id: any = null;

  ngOnInit() {
    this.id = setInterval(() => {
      this.date = new Date();
      this.dateChange.emit(this.date);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.id);
  }
}
