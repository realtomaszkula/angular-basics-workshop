import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BackgroundColorPageComponent } from './background-color-page/background-color-page.component';
import { BackgroundColorDirective } from './background-color.directive';

@NgModule({
  declarations: [BackgroundColorPageComponent, BackgroundColorDirective],
  imports: [CommonModule, FormsModule],
  exports: [BackgroundColorPageComponent]
})
export class BackgroundColorModule {}
