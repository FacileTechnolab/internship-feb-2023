import { UserdataService } from './../services/userdata.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  
  memberData=[
    {name:'Jahanvi',email:'janvi@TestScheduler.com'},
    {name:'peter',email:'peter@test.com'},
    {name:'SAme',email:'same@gmail.com'}
  ] 
  users(){
    return[
      {name:'Anil',email:'anil@test.com',age:23},
      {name:'Aakruti',email:'sukruti@test.com',age:21},
      {name:'sukruti',email:'sukruti@test.com',age:20},
    ]
  }  
}
