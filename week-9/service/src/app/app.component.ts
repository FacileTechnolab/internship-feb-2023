import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
// import { UserComponent } from './user/user.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';


  // memberData = [
  //   { name: 'Jahanvi', email: 'janvi@TestScheduler.com' },
  //   { name: 'peter', email: 'peter@test.com' },
  //   { name: 'SAme', email: 'same@gmail.com' }
  // ]
  //   users:any;
  //   constructor(private userdata:UserdataService)
  // {
  //   console.warn("userdata",userdata.users())
  //   this.users=userdata.users();
  // }
  name = "";
  age
  id
  constructor(private user: AuthenticationService) {
    console.warn(this.user.getdata);
    // this.name = this.user.getdata().name
    let data = this.user.getdata();
    this.name = data.name;
    this.age = data.age;
    this.id = data.id;




  }
  // constructor()

}