import { Component } from '@angular/core';
import { UsersService } from '../users.service';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  nameof="";
  ageof:any="";
  idof:any="";
  constructor(private user:UsersService){
console.warn(this.user.getvalue())
let data=this.user.getvalue()
this.nameof=data.name;
this.ageof=data.age;
this.idof=data.id;
  }
}
