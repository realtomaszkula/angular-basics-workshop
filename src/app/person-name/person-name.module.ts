import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonNamePageComponent } from './person-name-page/person-name-page.component';
import { PersonNamePipe } from './person-name.pipe';

@NgModule({
  declarations: [PersonNamePageComponent, PersonNamePipe],
  imports: [CommonModule, FormsModule],
  exports: [PersonNamePageComponent]
})
export class PersonNameModule {}
