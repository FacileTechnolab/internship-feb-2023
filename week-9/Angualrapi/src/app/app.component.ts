import { Component } from '@angular/core';
import { UsersService } from './users.service';
import {ApiserviseService} from './apiservise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angualrapi';
  name = "";

  // constructor(private user: UsersService)
  // {
  //   console.warn(this.user.getData())
  //   let data = this.user.getData();
  //   this.name = data.name

  // }
  data:any = []
  constructor(private user: ApiserviseService)
  {
     this.user.getData().subscribe(data => {
      console.warn(data)
      this.data = data
     })
  }
}
