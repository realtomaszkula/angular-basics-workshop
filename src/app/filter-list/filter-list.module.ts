import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterListPageComponent } from './filter-list-page/filter-list-page.component';
import { FilterListComponent } from './filter-list/filter-list.component';

@NgModule({
  declarations: [FilterListPageComponent, FilterListComponent],
  imports: [CommonModule, FormsModule],
  exports: [FilterListPageComponent]
})
export class FilterListModule {}
