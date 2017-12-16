
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesServices } from './cousrses.service';
import { AuthorsService } from './authors.service';
import { summaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    summaryPipe,
    FavoriteComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesServices ,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
