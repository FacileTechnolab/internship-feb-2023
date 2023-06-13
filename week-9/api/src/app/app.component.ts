import { Component } from '@angular/core';
import { UsersService } from './users.service'
import { UsersDataService } from './services/users-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';

  // constructor(private user:UsersService)
  // {
  //   this.user.getData().subscribe(data=>{
  //     console.warn(data);
  //   })
  //users: any;
  data: any = []
  constructor(private userdata: UsersDataService) {
    this.userdata.users().subscribe((data) => {
      console.warn(data);
      this.data = data;
    })
  }

}
