import { Component } from '@angular/core';
import {UsersService} from './users.service';
import {UsersapiService} from './usersapi.service';
import{ LoginService } from './services/login.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApi';
  name = "";

  // constructor(private user:UsersService){
  //    console.warn(this.user.getData())
  //   let data = this.user.getData();
  //   this.name = data.name
     
  
  //   }
  age:any="";
  constructor (private data:LoginService){
   console.warn(this.data.getdata())
    let info=this.data.getdata();
    this.name=info.name;
    this.age=info.age;
  } 

  }

