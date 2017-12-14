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
        <img src="{{ imageUrl }}" />
        
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        
        </table>
        
        <button class= "btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'red'">Button</button>
        
        <div (click)="onDivClick($event)">
            <button (click)="onSave($event)">Save</button>
        </div>

        <p>Two way binding</p><br>
        <input (keyup.enter) ="onKeyup($event)" /> <br>
        <input [value]="email" (keyup.enter) ="email = $event.target.value; onKeydown()" /> 첫번째 first two way binding <br>
        <input [(ngModel)]="email" (keyup.enter) = onKeydown() /> 두번쨰 second two way bingding <br>
        
        
        <p>PIPES</p><br>
        {{ course.title | uppercase | lowercase }}<br/>
        {{ course.students | number }}<br/>
        {{ course.rating | number: '2.1-2' }}<br/>
        {{ course.price | currency:'KRW':true:'2.2-2'}}<br/>
        {{ course.releaseDate | date:'shortDate' }} <br/>
        
        <p>Custom PIPE</p><br/>
        {{ text | summary:10 }} 


    `
})
export class CoursesComponent {

    imageUrl = "http://lorempixel.com/400/200"
    title = "List of Courses";
    colSpan = 2;
    courses;
    isActive = false;
    text ="asdf sadf as df dsa f asd f asd fsd af lalwekf qpwef kpqw efpkqwefmoiaisjoa sfgpwea gp ";    

    constructor(services: CoursesServices) {
        this.courses = services.getCourses();
    }
    
    onSave($event) {
        console.log("button was clicked", $event);

    }
    onDivClick($event) {
        $event.stopPropagation();

        console.log("Div was clicked"); //to explain bubbling even; 
    }
    
    onKeyup($event) {
        
            console.log($event.target.value);            
 
    }

    email = "me@example.com";
    onKeydown() {
            
            console.log(this.email);            
 
    }

    course = {
        title: "The complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }


}
