import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [
    ` 
    .glyphicon {
      color:green;
    }
    .glyphicon-star{
      background: black
    }
    `],
    styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected : boolean =true ;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }
 
}

export interface FavoriteChangedEventArgs{
  newValue: boolean
}
