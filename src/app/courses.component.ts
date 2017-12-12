import { Component } from '@angular/core';
import { CoursesServices } from './cousrses.service';

@Component({
    selector:'courses',//<courses>
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;
    

    constructor(services: CoursesServices) {
        this.courses = services.getCourses();
    }
    
}
