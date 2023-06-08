import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1500/500`);
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
  // show="yes";
  show="blue";
  //  color="red";
  // color="green";
  // color="yellow";
  // color="blue";
  // color="gray";

  // for loop print elements with the help of array
  // data=['shivangi','dipali','krishika','jahanvi'];
// for loop print elements with the help of object
  data=[
    {
      name:'shivangi',
      age:22,
      nickname:'nirupa'

    },
    {
      name:'krishika',
      age:22,
      nickname:'nirupa'

    },
    {
      name:'dipali',
      age:22,
      nickname:'nirupa'

    },
    {
      name:'jahnvi',
      age:22,
      nickname:'nirupa'

    }
  ]
  getValues(val:any){
console.warn(val);
  }
  color="green";
  error=false;
  getcolor(){
    this.color="orange";

   
    
  }
  gettoggle(){
    this.error=!this.error;
  }
}
