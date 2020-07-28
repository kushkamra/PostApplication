import { Component, OnInit } from '@angular/core';
import {Post} from '../iPost';
import { PostService } from '../post.service';
@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts :  Post[]; 

  constructor(private postDbService: PostService) {}
  ngOnInit(){
     this.postDbService.getPostList() 
     .subscribe(
         data => {
             this.posts =  data
         }
     );   
  }   
}
