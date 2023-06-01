import { Component } from '@angular/core';
import { CoursesService } from '../Courses.component';

@Component({
  selector: 'app-course',
  
  template:`
  <h1>{{title}}</h1>
  <ul>
    <li *ngFor="let course of courses ">{{course}}</li> 
  </ul>
  `
})
// @Component({
//   selector:'app-course',
//   template:'<h2>{{title}}</h2>'
  
// })
export class CourseComponent {
title="List of courses";
courses:any;

constructor(){
  let service=new CoursesService();
  this.courses=service.getCourses();
}

}
