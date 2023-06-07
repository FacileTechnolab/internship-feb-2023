import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic_app';
  name="Jahanvi"
  getname()
  {
    // return "Virat"
    return this.name
  }
  obj={
    name:"Anushka",
    age:20
  }
  arr=["Dhoni","Virat","Jadeja","Rahul"];
  siteUrl=window.location.href;
  getNAME(name2:any){
    alert(name2)
  }
  myEvent(evt:any)
  {
    console.warn(evt)
  }
  currentval="";
//   getval($event:any){
//     console.warn($event.target.value)
//     this.currentval=$event.target.value
// }
getval(val:any)
{
  console.warn(val)
  this.currentval=val
}
disableBox=true
enableBox(){
  this.disableBox=false
  
}
show="purple"
color="blue"

data=[{
  name:'zoya',
  age:'21',
  email:'abc@gmail.com'
},
{
  name:'sam',
  age:'28',
  email:'abc@gmail.com'
},
{
  name:'tony',
  age:'31',
  email:'abc@gmail.com'
},
{
  name:'kelly',
  age:'61',
  email:'abc@gmail.com'
}
 ]

 getValues(val:any){
   console.warn(val)
 }
}