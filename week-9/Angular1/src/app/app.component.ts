import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = [{
    name:'dipali',
    age:12,
    emailid:'dipali123@gmail.com'
  },
  {
    name:'krishika',
    age:12,
    emailid:'dipali123@gmail.com'
  },
  {
    name:'janhvi',
    age:12,
    emailid:'dipali123@gmail.com'
  }

];
name="";
parentFunction(data:any){
console.warn(data);
this.name=data.emailid;

}

anamika:any="dipali";
get(){
  console.warn(this.anamika);
}
Company="Tata services";
today=Date.now();
str="hello Angular";
money=100;

}
