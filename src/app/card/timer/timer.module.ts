import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPageComponent } from './timer-page/timer-page.component';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [TimerPageComponent, TimerComponent],
  imports: [
    CommonModule
  ],
  exports: [TimerPageComponent]
})
export class TimerModule { }
