                 import { CoursesService } from './courses.service';
import { NgFor } from "@angular/common";
import { Component } from "@angular/core";


@Component({
    selector:'courses',
    template: ` 
    
       <h2>{{ title }}</h2>
       <h2 [textContent]="title1"></h2> 
        <img src="{{ imageUrl1 }}"/> 
       <img [src]="title1"/>
      
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
   <!-- <div (click)="onDivclicked()">
   <button (click)="onSave($event)">Save</button>
   </div> -->
   <!-- <input (keyup.enter)="onKeyUp()"> event filter-->
   <!-- <input #email (keyup.enter)="onKeyUp(email.value)"/> -->
   <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/><br>
   {{course.title | lowercase}} <br>
   {{course.students | number}} <br>
   {{course.rating | number:'2.2-2'}} <br>
   {{course.price | currency:'USA':true}}  <br>
   {{course.releaseDate | date}}<br>
   {{ text | summary:10}}
  
   `
 
})




export class CoursesComponent{
  title="List of Courses";
  imageUrl="";
  colSpan=2;
  title1="hello,Good Evening"
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
  email="me@example.com"
  onKeyUp(){
    console.log(this.email);
  }
course={
  title:"My name is Khan",
  rating:4.987,
  students:30128,
  price:850.35,
  releaseDate:new Date(2014,8,8)

}
  text=`
   Loremkgjklnrsdltnjlkmflkglkmdlkmgdffmglkmlkerjtjjrotpjgjfdlkd slkmlkmjgkjjtyoijriojrotirtjljrtljtglkdfjlkm,gmgdrgklkrkdjytjrejtjjyijijrkmbf,.mlkjigjoirjjhiogiljrkgljljfgjfdijiohgioher itohiorsdljglkmlkm ktlmkljeritjijrjtiszopzsdklcvlkdlkgorjtjyiouytortymklmghlmfdljgjrgojflkdjglkgtpeostioprjehlkmbdfkmfbmcvjkcvhcfgtrdtg
  `
  
  //constructor(service:CoursesService){
    // let service =new CoursesService();
   // this.courses = service.getCourses();
  
//   getTitle(){
//     return this.title;
//   }
}