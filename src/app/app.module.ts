
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesServices } from './cousrses.service';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesServices ,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
