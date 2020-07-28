import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'likedislike',
  templateUrl: './likedislike.component.html',
  styleUrls: ['./likedislike.component.css']
})
export class LikedislikeComponent implements OnInit {

   @Input('likes') likesCount : number ; 

   @Input('dislikes') dislikesCount : number ; 

   @Input('isliked') isliked :  boolean ; 

   @Input('isDisliked') isDisliked : boolean;
  constructor() { }

  ngOnInit(): void {
  }

  incrementLike()  {
     this.likesCount++;  
  }
  incrementDislike() {
     this.dislikesCount++;
  }

}
