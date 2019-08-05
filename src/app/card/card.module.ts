import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardPageComponent } from './card-page/card-page.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardPageComponent, CardComponent],
  imports: [CommonModule],
  exports: [CardPageComponent]
})
export class CardModule {}
