import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-post-list-item',
  standalone: true,
  imports: [
    CommonModule,
    TitleCasePipe,
    DatePipe,
    SharedModule
  ],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss'
})
export class PostListItemComponent implements OnInit {

  @Input() post!: Post;

  constructor(){}

  ngOnInit(): void {
      
  }
}
