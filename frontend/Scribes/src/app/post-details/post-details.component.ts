import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { Posts } from '../models/postList.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  posts = Posts
  id: String =""

  post : Post={
    id: "",
    profileImagePath: "",
    postOwnerUsername: "",
    text: "",
    likes: 0,
    comments: [],

  }


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params.id
    })
    this.getPost(this.id)
  }
  getPost(id: String){
    let index = this.posts.findIndex(post=> post.id === id)
    this.post = this.posts[index]
  }
}
