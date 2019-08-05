import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsPageComponent } from './comments-page/comments-page.component';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [CommentsPageComponent, CommentsComponent],
  imports: [
    CommonModule
  ],
  exports: [CommentsPageComponent]
})
export class CommentsModule { }
