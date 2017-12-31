import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed: ", eventArgs.newValue);
  }

  tweet ={
    body:'....',
    likesCount:10,
    isLiked: true
  }

  courses =[];

  viewMode = 'Some';
  changeViewMode(arg){  
    this.viewMode = arg;
  }

  cors; 

  loadCourses() {
   this.cors = [
      {id:1, name:'course1'},
      {id:2, name:'course2'},
      {id:3, name:'course3'},    
    ];
  }

  onAdd() {
    this.cors.push({id: 4, name:'course4'});
  }
  onRemove(course){
    let index =  this.courses.indexOf(course);
    this.cors.splice(index, 1);
  }

  trackCourse(index, course) {
    return course ? course.id : undefined; 
  }

  //Drectives
  //ngIf  
  course = [1 ,2];
}
