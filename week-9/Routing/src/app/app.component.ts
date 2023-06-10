import { Component } from '@angular/core';
import{UsersService} from './users.service'
import{UserServiceService}from './user-service.service'
interface datatype{
  name:string,
    id:number,
    indian:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';

  constructor(private user:UserServiceService){
 this.user.getData().subscribe(data=>{
  debugger
  console.warn(data);
 })
  }
//   name="";
//   age:any="";
//   id:any="";
//   constructor(private user:UsersService){
// console.warn(this.user.getvalue())
// let data=this.user.getvalue()
// this.name=data.name;
// this.age=data.age;
// this.id=data.id;
//   }
getvalue(){
  const data={
    name:'dipali',
    id:10,
    indian:true
  }
  return data;
 console.warn(data.name); 
}

}
