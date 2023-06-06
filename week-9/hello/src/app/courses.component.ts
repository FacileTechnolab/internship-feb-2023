import { Component } from '@angular/core';
import { CoursesService } from './courses.services';
@Component({
    selector:'app-courses',
     template:`<h2>{{ title }}</h2>
    
     <h2 [textContent]="title"></h2>
    <img src="{{ imageUrl }}" />
    `


    // <ul> 
    //     <li *ngFor="let course of courses ">
    //         {{ course }}
    //     </li>
    // </ul>

})
export class CoursesComponent{
    title = "List of courses";
    imageUrl = "../assets/image/moon-night-nature-house-wallpaper-preview.jpg"

    courses: any;

    // constructor( service: CoursesService){
       
    //     this.courses = service.getCourses();
    }

// }