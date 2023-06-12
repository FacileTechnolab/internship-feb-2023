import { Component } from '@angular/core';
import{UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';
  memberData=[
    {name:'Jahanvi',email:'janvi@TestScheduler.com'},
    {name:'peter',email:'peter@test.com'},
    {name:'SAme',email:'same@gmail.com'}
  ]
  users:any;
  constructor(private userdata:UserdataService)
{
  console.warn("userdata",userdata.users())
  this.users=userdata.users();
}
}