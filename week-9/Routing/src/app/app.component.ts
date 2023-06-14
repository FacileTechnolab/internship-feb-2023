import { Component } from '@angular/core';
import{UsersService} from './users.service'
import{UserServiceService}from './user-service.service'
import{UserDataService}from './services/user-data.service'
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
 

getvalue(){
  const data: datatype={
    name:'dipali',
    id:10,
    indian:true
  }
  return data;
 console.warn(data.name); 
}
// data:any=[]
// constructor(private user:UsersService){
//   this.user.getData().subscribe(data=>{
//   console.warn(data);
//   this.data=data
  
//   })
// }

}
