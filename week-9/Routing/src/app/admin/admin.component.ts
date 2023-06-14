import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  data:any=[]
  constructor(private user:UsersService){
    this.user.getData().subscribe(data=>{
    console.warn(data);
    this.data=data
    
    });
  }
}
