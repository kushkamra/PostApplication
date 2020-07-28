import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import {PostService} from './post.service';
import { LastmodifiedPipe } from './lastmodified.pipe';
import { LikedislikeComponent } from './likedislike/likedislike.component';
import { CommentComponent } from './comment/comment.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    NewPostComponent,
    HomeComponent,
    PostDetailsComponent,
    LastmodifiedPipe,
    LikedislikeComponent,
    CommentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path :'' , component:HomeComponent },
      {path:'add',component:NewPostComponent} ,
      {path:'details/:postid', component: PostDetailsComponent}
    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
