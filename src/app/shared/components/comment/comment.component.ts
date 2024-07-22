import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../core/models/comment.model';
import { SharedModule } from '../../shared.module';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    SharedModule
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit {

  @Input() comments! : Comment[];

  constructor() {}

  ngOnInit(): void {
      
  }
}
