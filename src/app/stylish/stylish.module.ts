import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StylishPageComponent } from './stylish-page/stylish-page.component';
import { StylishComponent } from './stylish/stylish.component';

@NgModule({
  declarations: [StylishPageComponent, StylishComponent],
  imports: [CommonModule, FormsModule],
  exports: [StylishPageComponent]
})
export class StylishModule {}
