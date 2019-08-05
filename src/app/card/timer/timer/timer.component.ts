import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';

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
    {{ date | date: 'short' }}
  `,
})
export class TimerComponent implements OnInit, OnDestroy {
  date = new Date();
  dateChange = new EventEmitter<Date>();

  private id = 0;

  ngOnInit() {
    setInterval(() => {
      this.date = new Date();
      this.dateChange.emit(this.date);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.id);
  }
}
