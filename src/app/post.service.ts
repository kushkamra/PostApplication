import { Injectable } from '@angular/core';
import postList from  './data/post.json';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

 @Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:  HttpClient) { 
   //console.log(Observable.create(postList));
  }
   
     postList : any[] ;

  getPostList() : Observable<any[]> {     
       return of(postList as any) ; 
  }

  createNewPost(post) {
       console.log(post);
  }

}
