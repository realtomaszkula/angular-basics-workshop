import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IffyPageComponent } from './iffy-page/iffy-page.component';
import { IffyComponent } from './iffy/iffy.component';



@NgModule({
  declarations: [IffyPageComponent, IffyComponent],
  imports: [
    CommonModule
  ],
  exports: [IffyPageComponent]
})
export class IffyModule { }
