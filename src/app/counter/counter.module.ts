import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [CounterPageComponent, CounterComponent],
  imports: [CommonModule],
  exports: [CounterPageComponent]
})
export class CounterModule {}
