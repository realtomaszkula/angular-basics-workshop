import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonNamePageComponent } from './person-name-page/person-name-page.component';
import { PersonNamePipe } from './person-name.pipe';
import { TablePageComponent } from './table-page/table-page.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [PersonNamePageComponent, PersonNamePipe, TablePageComponent, TableComponent],
  imports: [CommonModule, FormsModule],
  exports: [PersonNamePageComponent, TablePageComponent]
})
export class PersonNameModule {}
