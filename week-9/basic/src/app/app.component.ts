import { Component } from '@angular/core';

interface Alert {
	type: string;
	message: string;
}
const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},
	{
		type: 'info',
		message: 'This is an info alert',
	},
	{
		type: 'warning',
		message: 'This is a warning alert',
	},
	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'primary',
		message: 'This is a primary alert',
	},
	{
		type: 'secondary',
		message: 'This is a secondary alert',
	},
	{
		type: 'light',
		message: 'This is a light alert',
	},
	{
		type: 'dark',
		message: 'This is a dark alert',
	},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic_app';
  name="Jahanvi"
   surname="";
   subject="java"
   str="Hello Angular"
   money=100;
   today=Date.now();
  parentsFunction(parent)
  {
  console.warn(parent)
  this.surname=parent.surname;
}
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
 err=true;
 UpdateColor(){
  this.err=false;
 }
 alerts: Alert[];

 constructor() {
   this.reset();
 }

 close(alert: Alert) {
   this.alerts.splice(this.alerts.indexOf(alert), 1);
 }

 reset() {
   this.alerts = Array.from(ALERTS);

  }
information=[{
  name:"Parent",
  age:20,
  email:'test@test.com'
},{
  name:"Parent1",
  age:30,
  email:'mest@test.com'
},
{
  name:"Parent2",
  age:20,
  email:'West@test.com'
}


]
}