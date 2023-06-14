import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  getdata(){
    return {
      name:'jahanvi',
      age:23
    }
  }
}
