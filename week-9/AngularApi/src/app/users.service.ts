import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData(){
    return{
      name: 'Kanchana',
      age: 35,
      id: 120
    }
  }
}
