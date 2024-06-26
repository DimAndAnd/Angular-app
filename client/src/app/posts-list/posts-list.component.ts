import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getPosts(6).subscribe((posts) => {
      this.posts = posts;
    });
  }
}
