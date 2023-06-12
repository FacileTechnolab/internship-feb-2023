import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {name:'Anil',email:'anil@test.com',age:23},
      {name:'Aakruti',email:'sukruti@test.com',age:21},
      {name:'sukruti',email:'sukruti@test.com',age:20},
    ]
  }  
}
