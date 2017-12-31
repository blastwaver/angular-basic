import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {

  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;

  onClick () :void{

    (this.isActive)?this.likesCount--:this.likesCount++; 
    this.isActive = !this.isActive;
  }
}
