import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // use a title property
  title = 'Angular app';
  //use a variable name
  name="janvi";
  //print the function value
  get()
  {
 return "Krishika";
  }
  // print the object 
  obj={
    bookname:"c language fundamentals",
    price:120,
    Authorname:"adam smith"
  }
  // print the array  
  //we can define the more functionality 
  arr=['c','c++','java','python','ruby'];

  // we can print the url 
  SiteUrl=window.location.href;
  // event work 

  Myevent(evt:any){
    console.warn(evt);
  }
  // getvalue($event:any){
  //   console.warn($event.target.value);
  // }
  currentval="";
  getvalue(val:any){
    console.warn(val);
    this.currentval=val;
  }
  getval($event:any){
    console.warn($event.target.value);
    this.currentval=$event.target.value;
  }
  bestfraiendname="Nirupa";
  disablebox=true;
  enableBox(){
    this.disablebox=false;
  }
  show=true;
}
