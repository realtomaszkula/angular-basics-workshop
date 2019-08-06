import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { MathPageComponent } from './math-page/math-page.component';

@NgModule({
  declarations: [MathPageComponent, AComponent, BComponent, CComponent],
  imports: [CommonModule],
  exports: [MathPageComponent]
})
export class MathModule {}
