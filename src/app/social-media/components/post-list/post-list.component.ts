import { Component, OnInit } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { map, Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    PostListItemComponent,
    CommonModule
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  posts$! : Observable<Post[]>;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    );
  }
}
