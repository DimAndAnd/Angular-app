import { Component, OnInit } from '@angular/core';
import { Post } from '../types/post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  posts: Post[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPosts(4).subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
