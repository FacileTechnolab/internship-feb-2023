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
             <h6>{{getName()}}</h6>
             <h6>{{obj.name}}, {{obj.age}}</h6>
             <h6>{{arr.length}}</h6>
             <h6>{{siteUrl}}</h6>
             <h6>{{10/10}}</h6>

             <div>
                <div><img src="{{imageUrl}}" class="rounded"/></div>
                <div><button class="btn btn-primary mt-4">Save</button></div>
              </div>
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
  getName()
  {
    return "peter"
  }
  obj = {
    name : 'kelly',
    age: 21
  }
  arr = ['tony', 'kakar', 'peter']
  siteUrl = window.location.href
}
