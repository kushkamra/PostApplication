import { Component, OnInit } from '@angular/core';
import { Post } from '../iPost';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private route: Router , private postService : PostService) { }
  
  ngOnInit(): void {
           
  }

  submit(f) { 
       this.postService.createNewPost(f.value);
       this.route.navigate([''])  ; 
  }
}
