import { CoursesService } from './../courses.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  template: `
            <!-- <h2 [textContent]="title"]></h2> -->
             <h4>Courses</h4> 
             <h5>{{title}}</h5>
             <ul>
                 <li *ngFor="let course of courses">
                  {{ course}}
                 </li>
             </ul>
             <img src="{{imageUrl}}"/>
             <!-- <img  [src] = " imageUrl"/> -->
             <!-- <table>
              <tr>
                <td [attr.colspan]="colSpan"]></td>
              </tr>
             </table> -->
             `
   

 
})
export class CoursesComponent  {
  title = "List of courses";
  courses : any;

  constructor(service :CoursesService){
   
    this.courses = service.getCourses();
  }
  imageUrl = "https://hips.hearstapps.com/hmg-prod/images/small-fuffy-dog-breeds-1623362663.jpg?crop=1.00xw:0.753xh;0,0.0719xh&resize=1200:*";
  colSpan = 2;
}
