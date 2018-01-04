import { BadInput } from './../common/bad-input';
import { PostService } from './../services/post.service';
import { UsernameValidators } from './../signup-form/username.validator';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 
  posts : any[];
  constructor(private service : PostService) {

  }

  ngOnInit() {
   this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }


  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(input)
      .subscribe(newPost => {
        post['id'] = newPost.id;
    
        console.log(newPost);
      }, 
      (error: AppError) => {
        this.posts.splice(0,1);

        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        }else throw error
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(post => {
        console.log(post);
      });
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post.id)
      .subscribe(
        null,
       (error : AppError) => {
        this.posts.splice(index,0,post);
        if(error instanceof NotFoundError)
          alert('This post has aleady been deleted.')
        else throw error
      });
  }
}
