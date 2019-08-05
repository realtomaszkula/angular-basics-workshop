import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FibonacciPageComponent } from './fibonacci-page/fibonacci-page.component';
import { FibonacciSequenceComponent } from './fibonacci-sequence/fibonacci-sequence.component';

@NgModule({
  declarations: [FibonacciPageComponent, FibonacciSequenceComponent],
  imports: [CommonModule, FormsModule],
  exports: [FibonacciPageComponent]
})
export class FibonacciModule {}
