                 import { CoursesService } from './courses.service';
import { NgFor } from "@angular/common";
import { Component } from "@angular/core";


@Component({
    selector:'courses',
    template: ` 
    
       <h2>{{ title }}</h2>
       <h2> [textContent]="title"</h2> 
        <img src="{{ imageUrl1 }}"/> 
       <img [src]="imageUrl"/>
      
       <table>
        <tr>
          <td>[attr.colspan]="colSpan"</td>
          
</tr>
</table>
<!-- <ul>
     <li *ngFor="let course of courses">
      {{ course }}
     </li>
  </ul> -->
       <!-- <img [src]="title"/> -->
       <!-- <img src="../assets/image/new1.jpg" alt="test"> -->
    <!-- <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fnatural&psig=AOvVaw1ofNyEP_1JCflXD15Dl80l&ust=1685524029535000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPjT3LnYnP8CFQAAAAAdAAAAABAE"/> -->
    <!-- <button class="btn btn-primary" [class.active]="isActive">Save</button> class,attribute,property bonding-->
   <!-- <button [style.backgroundColor]="isActive ? 'purple' : 'white' ">Save </button>style binding -->
   <div (click)="onDivclicked()">
   <button (click)="onSave($event)">Save</button>
   </div>
   <!-- <input (keyup.enter)="onKeyUp()"> event filter-->
   <!-- <input #email (keyup.enter)="onKeyUp(email.value)"/> -->
   <input [value]="email" (keyup.enter)="onKeyUp"/>
  
   `
 
})




export class CoursesComponent{
  title="List of Courses";
  imageUrl="";
  colSpan=2;
  //courses;
  imageUrl1="../assets/image/new1.jpg";
  isActive=true ;
  onDivclicked()
  {
   console.log("div was clicked");
  }
  onSave($event:any)
  {
    $event.stopPropagation();  
   console.log("button was clicked",$event);
  }
  email="me@gmail.com"
  onKeyUp(){
    console.log(this.email);
  }

  
  
  //constructor(service:CoursesService){
    // let service =new CoursesService();
   // this.courses = service.getCourses();
  
//   getTitle(){
//     return this.title;
//   }
}