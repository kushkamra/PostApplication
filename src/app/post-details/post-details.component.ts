import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  
  @Input() postDetails : any ; 
    
  constructor() { }

  ngOnInit(): void {
    
  }

 

}
