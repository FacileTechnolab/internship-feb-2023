import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: '<h4>Courses</h4> <h5>{{title}}</h5>'
   

 
})
export class CoursesComponent  {
  title = "List of courses";
}
