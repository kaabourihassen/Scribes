import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/postList.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = Posts

  constructor() { }

  ngOnInit(): void {
    this.getPosts()
  }
 
  getPosts():typeof Posts{
    return this.posts
  }
}
