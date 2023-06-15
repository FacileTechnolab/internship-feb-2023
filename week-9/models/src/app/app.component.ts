import { Component } from '@angular/core';
import {UserService} from './user.service'
import{LoginService} from './service/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'models';
  name: string="";
  location:string="";
  age:any;
//   data:any=[]
// constructor(private user:UserService){
//   this.user.getData().subscribe(data=>{
//   console.warn(data);
//   this.data=data
  
//   })
// }
constructor(private login:LoginService){
console.warn(this.login.data());
this.name=this.login.data().name;
this.location=this.login.data().location;
this.age=this.login.data().age;
}
}
