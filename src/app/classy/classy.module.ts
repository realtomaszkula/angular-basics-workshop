import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClassyPageComponent } from './classy-page/classy-page.component';
import { ClassyComponent } from './classy/classy.component';

@NgModule({
  declarations: [ClassyPageComponent, ClassyComponent],
  imports: [CommonModule, FormsModule],
  exports: [ClassyPageComponent]
})
export class ClassyModule {}
