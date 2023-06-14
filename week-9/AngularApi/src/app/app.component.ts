import { Component } from '@angular/core';
import {UsersService} from './users.service';
import {} from './usersapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApi';
  name = "";

  constructor(private user:UsersService){
     console.warn(this.user.getData())
    let data = this.user.getData();
    this.name = data.name
     
  
    }
  }

