import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommentComponent,
    MaterialModule
  ],
  exports: [
    CommentComponent,
    MaterialModule
  ]
})
export class SharedModule { }
