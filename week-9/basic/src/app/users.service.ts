import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData(){
    return{
    name:'Zoya',
    age:23,
    id:100
  }
  }
}
