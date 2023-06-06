import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
age:any="dipali";
getinfo(){
  console.log(typeof(this.age));
}

 
 

}
